<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>规则因子执行记录数据查询</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../static/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../static/plugins/datatables/dataTables.bootstrap.css">
    <link rel="stylesheet" href="../static/plugins/jquery-treetable-3.2.0/css/jquery.treetable.css"></script>
    <link rel="stylesheet" href="../static/plugins/jquery-treetable-3.2.0/css/jquery.treetable.theme.default.css"></script>
    <link rel="stylesheet" href="../static/app.css">
    <style type="text/css">
      .table tr td:nth-child(1) {
          min-width:800px;
          white-space: inherit;
          word-break:break-all;
       }
       .table tr td:nth-child(2) {
          white-space: inherit;
          word-break:break-all;
          min-width:300px;
        }
        .table tr td:nth-child(3) {
          white-space: inherit;
          word-break:break-all;
          min-width:200px;
        }
    </style>
</head>
<body>
<div class="wrapper">
    <div class="content-wrapper">
        <section class="content-header">
            <h2> 规则因子执行记录数据
                <small>查询</small>
            </h2>
            <ol class="breadcrumb">
                <li><a href="regionStats"><i class="fa fa-dashboard"></i>监控</a></li>
                <li><a href="../hbase/tables">数据表</a></li>
                <li class="active">规则因子执行记录数据表</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <table>
                              <thead>
                              <tr>
                                  <th width="70">规则命中</th>
                                  <th width="60" bgcolor="#5cb85c">&nbsp;</th>
                                  <th width="80"style="text-align:center;">运行报错</th>
                                  <th width="60" bgcolor="#d9534f" >&nbsp;</th>
                                  <th width="80" style="text-align:center; " >试运行</th>
                                  <th width="60" bgcolor="#777">&nbsp;</th>
                                  <th width="60">&nbsp;</th>
                                  <th width="300"> <input class="form-control input-sm" id="search" placeholder="过滤"></th>
                                  <th width="60">&nbsp;</th>
                                  <th width="300"> <input class="form-control input-sm" id="searchCost" placeholder="时间表达式 如：x>1000 && x<=2000"></th>
                              </tr>
                              </thead>
                            </table>
                            <caption>
                                <a href="###" class="pull-right"  onclick="jQuery('#dataTree').treetable('expandAll');  return false;">全部展开</a>
                                <a href="###" class="pull-right" style="margin-right: 5px" onclick="jQuery('#dataTree').treetable('collapseAll'); return false;">全部闭合</a>
                                <a href="###" class="pull-right" style="margin-right: 5px" id="hitsRule" >规则命中</a>
                                <a href="###" class="pull-right" style="margin-right: 5px" id="errorRule">运行报错</a>
                                <a href="###" class="pull-right" style="margin-right: 5px" id="dryRule">试运行</a>
                                <a href="###" class="pull-right" style="margin-right: 5px" id="allRule">全部数据</a>
                            </caption>
                        </div>
                        <div class="box-body" >
                            <table id="dataTree" class="table table-bordered table-striped table-hover">
                                <thead></thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div class="overlay" style="display: none">
                            <i class="fa fa-refresh fa-spin">加载中...</i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

<script src="../static/plugins/jQuery/jquery-3.1.1.min.js"></script>
<script src="../static/bootstrap/js/bootstrap.min.js"></script>
<script src="../static/plugins/jquery-treetable-3.2.0/jquery.treetable.js"></script>
<script src="../static/app.js"></script>
<script>
$(function () {
var $overlay = $(".overlay");
var rowKey = "${rowKey}";

var hit_icon = '<span class="label label-success">&nbsp;</span>'
var error_icon = '<span class="label label-danger">&nbsp;</span>'
var dry_icon ='<span class="label label-default">&nbsp;</span>'
var timeout_icon ='<span class="label label-warning">&nbsp;</span>'

$("#search").keyup(function(){
   var rex = new RegExp($(this).val(), 'i');
   $('#dataTree tbody tr').hide();
   $('#dataTree tbody tr').filter(function () {
      return rex.test($(this).text());
   }).show();
});


$("#errorRule").click(function(){
   $('#dataTree tbody tr').hide();
   $('#dataTree tbody tr').filter(function () {
      return $(this).find('span.label-danger').length > 0
   }).show();
});


$("#hitsRule").click(function(){
   $('#dataTree tbody tr').hide();
   $('#dataTree tbody tr').filter(function () {
      return $(this).find('span.label-success').length > 0
   }).show();
});


$("#allRule").click(function(){
   $('#dataTree tbody tr').hide();
   $('#dataTree tbody tr').filter(function () {
     return true;
   }).show();
});



$("#dryRule").click(function(){
   $('#dataTree tbody tr').hide();
   $('#dataTree tbody tr').filter(function () {
      return $(this).find('span.label-default').length > 0
   }).show();
});



$("#searchCost").keyup(function(e){
    if(e.which == 13) {
       var rex = /\[\s*(\d+)\s*ms\s*\]/;
       var exp = $(this).val();
       $('#dataTree tbody tr').hide();
       $('#dataTree tbody tr').filter(function () {
          if($.trim(exp) != ''){
              var res = rex.exec($(this).text())
              if(res && res['1']){
                return eval(exp.replace(/x/g,res['1']));
              }else{
                return false;
              }
          }
          return true;
       }).show();
    }
});


function loading() {
    $overlay.toggle();
}

function getText(text,type){
   if(text){
       return $.map(text.split(','),function(item){ return appDataConfig.getText(item, type);}).join(",")
    }
   return ''
}

function length(v){
  return v? v.length:0;
}

$.ajax({
    "type": "get",
    "url": "queryTree?refBizId=${refBizId}&timeout=20000",
    "beforeSend": loading,
    "success": function (data) {
      render(data);
      $overlay.toggle();
    },
    "error": function (e) {
      $overlay.toggle();
    }
});



function render(data) {
    function initTreeNode(data){
        var baseTitle = ["业务号：${refBizId}" ,"","",""];

        var title = $.map(baseTitle,function(item){
            return "<th>" + item + "</th>"
        }).join("")

        $("#dataTree thead").append("<tr>" + title + "</tr>")

       var tbody = $.map(data,function(item,i){
            var tds = $.map([item.rowKey + "( description = " + appDataConfig.getText(item.sourceType, "sourceTypeEnumMap")  + (item.crtTime ? ",time="  + new Date(item.crtTime).Format("yyyy-MM-dd HH:mm:ss"): "") + ")"  + (item.bizData['cot']? "[" + item.bizData['cot'] +" ms]" : ""),
                  appDataConfig.getText(item.conclusion, "conclusionEnumMap"),
                  getText(item.bizData['at'], "actionCodeEnumMap") +  " " + getText(item.bizData['vt'], "verifyTypesEnumMap"),
                  item.bizData['sc']? "评分：" +  item.bizData['sc'] :'',
            ],function(item){ return "<td>" + item + "</td>"}).join("");
            return "<tr id="+ item.rowKey +" data-tt-id='"+i+"' data-tt-branch='true'>" + tds + "</tr>"
        }).join("");

       $("#dataTree tbody").append(tbody)
    }

    initTreeNode(data);

    function createChildTreeData(data) {
    var tree = {"nodeID":{}};
    $.each(data,function(i,item){
        var hits =[]
        if(item.bizData && item.bizData['ht']){
          hits = item.bizData['ht'].split(",")
        }
        tree["nodeID"][i] = $.map(item.ruleItems,function(rule,j) {
            rule.rc = rule.rc? rule.rc:''
            rule.rn = rule.rn? rule.rn:rule.rc
            rule.bd = rule.bd? rule.bd:{}
            rule.ht = $.inArray( rule.id + "" , hits) !=-1 || rule.bd['ht'] === 1
            var level2 =  i + "." + j;
            if(length(rule.fs) > 0) {
              tree["nodeID"][level2] = $.map(rule.fs, function(factor_rs,k){
                      var factorId = factor_rs.split("-")[0];
                      var factorResId = factor_rs.split("-")[1]
                      var exitsFactor = $.grep(item.factorItems,function(factorObj,m){
                         return factorObj.id+"" == factorId
                       });
                      if(length(exitsFactor) > 0){
                        var factor = exitsFactor[0]
                        var hasError = false;
                        var exitsFactorResult = $.grep(factor.rs, function(resItem){return resItem.i + "" == factorResId});
                        if(length(exitsFactorResult) > 0){
                          var factor_res = exitsFactorResult[0];
                          factor_res.r = factor_res.r? ((typeof factor_res.r) == 'string'? factor_res.r:JSON.stringify(factor_res.r)):null
                          return {
                              "id":level2 + "." + k,
                               "childNodeType": "leaf",
                               "hasError": factor_res.m !=null,
                               "childData":[
                                 factor.t + "( id = " + factor.id + ", lang="+  (factor.l === '1' ? 'xpath':'闭包') + ") [" + factor_res.c + " ms ]",
                                 factor.n + (factor_res.a?  "("+ (typeof factor_res.a) == 'string' ? factor_res.a : JSON.stringify(factor_res.a) + ")":""),
                                 factor_res.m ? factor_res.m : factor_res.r,
                                 ''
                               ]
                            }
                        }
                      }
                  });
           }
           return {
                    "id": level2,
                    "childNodeType": length(rule.fs) >0 ?"branch":"leaf",
                    "isHit":rule.ht,
                    "hasError": rule.bd['err']?true:false,
                    "dry": rule.bd['dry']?true:false,
                    "childData": [
                         rule.rn + " ( id = " + rule.id  + (rule.bd['rt']?  ", ruleType = " + rule.bd['rt']: '') + " , code = " + rule.rc + ")" +( rule.bd['cot']?  " [" +  rule.bd['cot'] + " ms ] " :" "),
                         appDataConfig.getText( rule.cl, "conclusionEnumMap"),
                         getText(rule.bd['at'], "actionCodeEnumMap") +  "  " + getText(rule.bd['vt'], "verifyTypesEnumMap"),
                         rule.bd['sc']? "评分：" + rule.bd['sc']: ""
                    ]
               }
           });
      });
      return tree;
    }

    var treeData = createChildTreeData(data);

    $("#dataTree").treetable({
        expandable: true,
        onNodeExpand: nodeExpand,
        onNodeCollapse: nodeCollapse
    });

    if(rowKey != ''){
       var tt_id = $("#" + rowKey).attr("data-tt-id");
       $("#dataTree").treetable("reveal", tt_id);
       $("#" + rowKey).toggleClass("selected");
    }

    $("#dataTree tbody").on("mousedown", "tr", function () {
        $(".selected").not(this).removeClass("selected");
        $(this).toggleClass("selected");
    });

    function nodeExpand() {
        getNodeTree(this.id, treeData);
    }

    function nodeCollapse() {
      //Ignore
    }

    function getNodeTree(parentNodeID, treeData) {
        var childNodes = treeData.nodeID[parentNodeID];
        if (childNodes) {
            var parentNode = $("#dataTree").treetable("node", parentNodeID);
            for (var i = 0; i < childNodes.length; i++) {
                var node = childNodes[i];
                var nodeToAdd = $("#dataTree").treetable("node", node['id']);
                // check if node already exists. If not add row to parent node
                if (!nodeToAdd) {
                    // create row to add
                    var icons = ''
                    if(node['isHit']){
                       icons = hit_icon;
                    }
                    if(node['hasError']){
                      icons = icons + "&nbsp;" + error_icon;
                    }

                   if(node['timeout']){
                      icons = icons + "&nbsp;" + timeout_icon;
                    }

                    if(node['dry']){
                       icons = icons + "&nbsp;" + dry_icon;
                    }
                    var row = '<tr data-tt-id="' + node['id'] + '" data-tt-parent-id="' + parentNodeID + '" ';
                    if (node['childNodeType'] == 'branch') {
                        row += ' data-tt-branch="true" ';
                    }
                    row += ' >';
                    // Add columns to row
                    for (var index in node['childData']) {
                        var data = node['childData'][index];
                        if(index == 0){
                           data = data + icons
                        }
                        row += "<td>" + data + "</td>";
                    }
                    // End row
                    row += "</tr>";
                    $("#dataTree").treetable("loadBranch", parentNode, row);
                }
            }
        }
    }
}
});
</script>
</body>
</html>
