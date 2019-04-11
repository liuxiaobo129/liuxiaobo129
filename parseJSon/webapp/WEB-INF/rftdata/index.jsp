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
    <link rel="stylesheet" href="../static/app.css">
</head>
<body>
<div class="wrapper">
    <div class="content-wrapper">
        <section class="content-header">
            <h2> 规则因子执行记录数据
                <small>查询</small>
            </h2>
            <ol class="breadcrumb">
                <li><a href="../hbase/regionStats"><i class="fa fa-dashboard"></i>监控</a></li>
                <li><a href="../hbase/tables">数据表</a></li>
                <li class="active">规则因子执行记录数据表</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">

                                        <div class="col-sm-1">
                                            <select class="form-control" id="txn_type">
                                                <option value="pay_level" selected>交易</option>
                                                <option value="fq_level" >授信</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-1">
                                            <select class="form-control" id="fq_level1">
                                                <option value="">任务链</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-1">
                                            <select class="form-control" id="fq_level2">
                                                <option value="">交易结论</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-1">
                                            <select class="form-control" id="pay_level1">
                                                <option value="">交易阶段</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-2">
                                            <select class="form-control" id="pay_level2">
                                                <option value="">支付方式</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-1">
                                            <select class="form-control" id="pay_level3">
                                                <option value="">交易结论</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-1">
                                            <select class="form-control" id="pay_level4">
                                                <option value="">交易结果</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-2">
                                            <input id="startDate" placeholder="开始时间" type="text" value="${startDate}" class="form-control"/>
                                            <input id="startKey" type="hidden"/>
                                        </div>

                                        <div class="col-sm-2">
                                            <input id="endDate" placeholder="结束时间" type="text" value="${endDate}" class="form-control"/>
                                        </div>

                                        <div class="col-sm-1">
                                            <button type="button" class="btn btn-info" id="query">查询</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="box-body">
                            <div class="col-sm-6" style="margin-left: -15px">
                                <div class="dataTables_length" id="data_length">
                                    <label>请选择加载
                                        <select id="limit" aria-controls="data" class="form-control input-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> 条
                                    </label>
                                </div>
                            </div>
                            <table id="data" class="table table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>RowKey</th>
                                    <th>时间</th>
                                    <th>类型</th>
                                    <th>交易号</th>
                                    <th>会员ID</th>
                                    <th>规则结论</th>
                                    <th>规则执行动作</th>
                                    <th>评分</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <div align="right" class="col-xs-12">
                                <button id="loadMore" class=" btn btn-success">加载更多</button>
                            </div>
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
<script src="../static/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../static/plugins/datatables/dataTables.bootstrap.min.js"></script>
<script src="../static/plugins/input-mask/jquery.inputmask.js"></script>
<script src="../static/plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
<script src="../static/plugins/input-mask/jquery.inputmask.extensions.js"></script>
<script src="../static/app.js"></script>
<script>
    var dataGrid;
    $(function () {
        var $txnType = $("#txn_type")
        var $startDate = $("#startDate");
        var $endDate = $("#endDate");
        var $limit = $("#limit");
        var $startKey = $("#startKey");
        var $loadMore = $("#loadMore");
        var $overlay = $(".overlay");
        var $queryBtn = $("#query")


        init();

        function getText(text,type){
           if(text){
               return $.map(text.split(','),function(item){ return appDataConfig.getText(item, type);}).join(",")
            }
           return text
        }
        function changeTxnType(){
          var txn_type = $txnType.val();
          $('form').find('select[id*=level]').parent().hide();
          $('form').find('select[id^='+txn_type+']').parent().show();
        }

        function loadingEmpty() {
            $overlay.hide();
            $loadMore.text("已没有数据了");
            $loadMore.attr("disabled", true);
            $startKey.val("")
        }

        function loadingBack() {
            $overlay.hide();
            $loadMore.attr("disabled", false);
            $loadMore.text("加载更多");
        }

        function loading() {
            $loadMore.text("加载中...");
            $loadMore.attr("disabled", true);
            $overlay.show();
        }

        function getParams() {
            var startSlat =  eval($('form').find('select[id*=level]:visible').map(function(){
               return $(this).val() == '' ? 0 : parseInt($(this).val());
            }).get().join('+'));

            if($txnType.val() == 'fq_level' &&  startSlat == 0){
               startSlat = 20000;
            }

            var endSlat =  eval($('form').find('select[id*=level]:visible').map(function(){
               return $(this).val() == '' ?  $(this).find("option:last").attr("value") : parseInt($(this).val());
            }).get().join('+'));

            var startDate = $startDate.val();
            if (startDate !== null) {
                startDate = startDate.replace("hh:mm", "00:00").replace("h:mm", "0:00").replace(":mm", ":00").replace("m$", "0");
            }
            var endDate = $endDate.val();
            if (endDate !== null) {
                endDate = endDate.replace("hh:mm", "00:00").replace("h:mm", "0:00").replace(":mm", ":00").replace("m$", "0");
            }
            return {
                "startDate": startDate,
                "endDate": endDate,
                "startSlat": startSlat,
                "endSlat": endSlat,
                "limit": $limit.val(),
                "startKey": $startKey.val(),
                "timeout":"20000"
            }
       }

       function init() {

          $startDate.inputmask("datetime");
          $endDate.inputmask("datetime");

          for(var i=1;i<5;i++){
             var $e = $("#pay_level" + i);
             for (var key in appDataConfig['pay_level'+i+'EnumMap']) {
                $e.append("<option value='" + appDataConfig['pay_level'+i+'EnumMap'][key] + "'>" + key + "</option>");
             }
          }
          for(var i=1;i<3;i++){
             var $e = $("#fq_level" + i);
             for (var key in appDataConfig['fq_level'+i+'EnumMap']) {
               $e.append("<option value='" + appDataConfig['fq_level'+i+'EnumMap'][key] + "'>" + key + "</option>");
             }
          }
          changeTxnType();
       }

        $txnType.on('change',function(){
           changeTxnType();
        });

        $queryBtn.on('click', function () {
            if (!dataGrid) {
                alert("没有初始化dataTable");
                return;
            }
            $startKey.val("");
            dataGrid.ajax.reload();
        });

        $loadMore.on('click', function (e) {
            if (!dataGrid) {
                alert("没有初始化dataTable");
                return;
            }
            var startKey = $startKey.val();
            if (!startKey) {
                loadingEmpty();
                return;
            }
            $.ajax({
                "url": "queryList",
                "data": getParams(),
                "beforeSend": loading,
                "success": function (data) {
                    if (data === null ||
                        typeof (data.data) !== 'object' ||
                        data.data.length === 0) {
                        loadingEmpty();
                        return;
                    }
                    var len = data.data.length;
                    $.each(data.data, function (i, value) {
                        if (i === len - 1) {
                            dataGrid.row.add(value).draw(false);
                        } else {
                            dataGrid.row.add(value);
                        }
                    });

                    if ( $.trim(data['nextStartKey']) === '' ||
                        len < parseInt($limit.val())) {
                        loadingEmpty();
                    } else {
                        $startKey.val($.trim(data['nextStartKey']));
                        loadingBack();
                    }
                },
                "error": function (e) {
                    alert("加载数据出错 ..");
                    loadingBack();
                }
            });
        });

        dataGrid = $("#data").DataTable({
            "paging": false,
            "scrollY": 350,
            "scrollX": true,
            "ajax": {
                "url": "queryList",
                "data": function () {
                    return getParams();
                }
            },
            "order": [[1, "desc"]],
            "createdRow": function (row, data, index) {
                if (index === 0) {
                    var json = dataGrid.ajax.json() || {};
                    if (!json['nextStartKey'] || typeof (row) !== 'object' || row.length < parseInt($limit.val())) {
                        loadingEmpty();
                        return;
                    }
                    $startKey.val(json['nextStartKey']);
                    loadingBack();
                }
            },
            "initComplete": function () {

            },
            "language": {
                "zeroRecords": "数据为空",
                "info": "共加载 _TOTAL_ 条数据 ",
                "infoEmpty": "共加载 0 条数据"
            },
            "columns": [
                {"data": "rowKey"},
                {"data": "crtTime"},
                {"data": "sourceType"},
                {"data": "refBizId"},
                {"data": "memberId"},
                {"data": "conclusion"},
                {"data": "bizData"},
                {"data": "bizData"}
            ],
            "columnDefs": [
                {
                    "render": function (data,type,row) {

                        return '<a href ="tree?refBizId=' + row['refBizId'] + '&rowKey=' +data + '">' + data + '</a>';
                    },
                    "targets": 0
                },
                {
                    "render": function (data) {
                        if (data === null) {
                            return "";
                        }
                        return new Date(data).Format("yyyy-MM-dd HH:mm:ss");
                    },
                    "targets": 1
                },

                {
                    "render": function (data) {
                        if (data === null) {
                            return "";
                        }
                        return  appDataConfig.getText(data, "sourceTypeEnumMap");
                    },
                    "targets": 2
                },

                {
                    "render": function (data, type, row) {
                        return appDataConfig.getText(data, "conclusionEnumMap");
                    },
                    "targets": 5
                },
                {
                    "render": function (data, type, row) {
                       return data['at']?getText(data['at'], "actionCodeEnumMap"):'';
                    },
                    "targets": 6
                },
                {
                    "render": function (data, type, row) {
                       return data['sc']?data['sc']:'';
                    },
                    "targets": 7
                }
            ]
        });
    });
</script>
</body>
</html>
