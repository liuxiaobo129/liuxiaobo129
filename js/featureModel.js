require(["../require-config"],function(){
    require(['jquery', 'bootstrap', 'datatables','moment','common','validate'],
        function($,bootstrap,datatables,moment,common,validate){
            var REAPEAT = "内容重复";
            $(function($){
                //定义dataTable对象
                var table = $('#detail_editable_feature');
                var oTable = table.dataTable({
                    "lengthMenu": [
                        [5, 15, 20, -1],
                        [5, 15, 20] // 改变每页的行数
                    ],

                    // 使用汉化
                    "language": {
                        url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Chinese.json'
                    },

                    //初始化
                    "pageLength": 20,
                    "columnDefs": [{ // 设置默认列设置
                        'orderable': true,
                        'targets': [0]
                    }, {
                        "searchable": true,
                        "targets": [0]
                    }],
                    "order": [
                        [0, "asc"]
                    ] // 将第一列设置为asc的默认排序
                });

                //编辑行
                function editRow(oTable, nRow) {
                    var aData = oTable.fnGetData(nRow);
                    var jqTds = $('>td', nRow);
                    jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '" readonly>';
                    jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
                    jqTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
                    jqTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
                    jqTds[4].innerHTML = '<select class="form-control input-small" style="width: 100%" required><option value="java.lang.String" '
                                         + (aData[4]=="java.lang.String" ? "selected" : "" )+
                                            '>java.lang.String</option><option value="java.lang.Number" '
                                         + (aData[4]=="java.lang.Number" ? "selected" : "" )+
                                            '>java.lang.Number</option><option value= "java.lang.List" '
                                         + (aData[4]=="java.lang.List" ? "selected" : "" )+
                                            '>java.lang.List</option><option value= "java.lang.Boolean" '
                                         + (aData[4]=="java.lang.Boolean" ? "selected" : "" )+
                                            '>java.lang.Boolean</option><option value= "java.util.Date" '
                                         + (aData[4]=="java.util.Date" ? "selected" : "" )+
                                            '>java.util.Date</option></select>';
                    jqTds[5].innerHTML = '<select class="form-control input-small" style="width: 100%" required><option value="Y" ' + (aData[5]=="Y" ? "selected" : "" )+ '>Y</option><option value= "N" '
                                         + (aData[5]=="N" ? "selected" : "" )+ '>N</option></select>';
                    jqTds[6].innerHTML = '<select class="form-control input-small" style="width: 100%" required><option value="Y" ' + (aData[6]=="Y" ? "selected" : "" )+ '>Y</option><option value= "N" '
                        + (aData[6]=="N" ? "selected" : "" )+ '>N</option></select>';
                    jqTds[7].innerHTML = '<a class="edit" href="">保存</a>';
                    jqTds[8].innerHTML = '<a class="cancel" href="">取消</a>';
                }

                var objList = [];
                var nNew = false;
                var nEditing = null;
                //保存行数据，切换到普通模式
                function saveRow(oTable, nRow) {
                    var jqInputs = $('input', nRow);
                    var jqSelects = $('select', nRow);
                    //更新行中每个input的值
                    oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                    oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                    oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                    oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                    oTable.fnUpdate(jqSelects[0].value, nRow, 4, false);
                    oTable.fnUpdate(jqSelects[1].value, nRow, 5, false);
                    oTable.fnUpdate(jqSelects[2].value, nRow, 6, false);
                    oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 7, false);
                    oTable.fnUpdate('<a class="delete" href="">删除</a>', nRow, 8, false);
                    oTable.fnDraw();
                }

                var addRow = table.fnGetNodes().length+1;
                $('#detail_editable_feature_new').click(function (e) {
                    e.preventDefault();
                    if (nNew && nEditing) {
                        if (confirm("前面记录没有保存，您是否需要保存?")) {
                            saveRow(oTable, nEditing);
                            //$(nEditing).find("td:first").html("未保存");
                            nEditing = null;
                            nNew = false;
                        } else {
                            oTable.fnDeleteRow(nEditing); // cancel
                            nEditing = null;
                            nNew = false;
                            return;
                        }
                    }

                    //添加一条新的记录
                    var aiNew = oTable.fnAddData([addRow++, '', '', '', '', '', '','','']);
                    var nRow = oTable.fnGetNodes(aiNew[0]);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                    nNew = true;
                });
                //删除操作
                table.on('click', '.delete', function (e) {
                    e.preventDefault();
                    if (confirm("您确认要删除该行记录吗?") == false) {
                        return;
                    }
                    //获取上一级tr行的数据
                    var nRow = $(this).parents('tr')[0];
                    var aData = oTable.fnGetData(nRow);

                    var found = false;
                    $.each(objList, function (i, item) {
                        if (item["seq"] == aData[0]) {
                            found = true;
                            objList.splice(i, 1);
                        }
                    });
                    oTable.fnDeleteRow(nRow);
                });
                //取消操作
                table.on('click', '.cancel', function (e) {
                    e.preventDefault();
                    if (nNew) {
                        oTable.fnDeleteRow(nEditing);
                        nEditing = null;
                        nNew = false;
                    } else {
                        restoreRow(oTable, nEditing);
                        nEditing = null;
                    }
                });
                //编辑操作
                table.on('click', '.edit', function (e) {
                    e.preventDefault();
                    nNew = false;

                    /*获取所击连接的行对象*/
                    var nRow = $(this).parents('tr')[0];

                    if (nEditing !== null && nEditing != nRow) {
                        /* 当前正在编辑 - 但不是此行 - 在继续编辑模式之前恢复旧版 */
                        restoreRow(oTable, nEditing);
                        editRow(oTable, nRow);
                        nEditing = nRow;
                    } else if (nEditing == nRow && this.innerHTML == "保存") {
                        /* 编辑该行，并准备保存记录 */
                        saveRow(oTable, nEditing);
                        nEditing = null;

                    } else {
                        /* No edit in progress - let's start one */
                        editRow(oTable, nRow);
                        nEditing = nRow;
                    }
                });

                function restoreRow(oTable, nRow){
                    var jqInputs = oTable.fnGetData(nRow);
                    //更新行中每个input的值
                    oTable.fnUpdate(jqInputs[0], nRow, 0, false);
                    oTable.fnUpdate(jqInputs[1], nRow, 1, false);
                    oTable.fnUpdate(jqInputs[2], nRow, 2, false);
                    oTable.fnUpdate(jqInputs[3], nRow, 3, false);
                    oTable.fnUpdate(jqInputs[4], nRow, 4, false);
                    oTable.fnUpdate(jqInputs[5], nRow, 5, false);
                    oTable.fnUpdate(jqInputs[6], nRow, 6, false);
                    oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 7, false);
                    oTable.fnUpdate('<a class="delete" href="">删除</a>', nRow, 8, false);
                    oTable.fnDraw();
                }

                function singleData(){
                    var trs = table.fnGetNodes();
                    var propertyArray = [];
                    var qualifyArray = [];
                    for (var i = 0; i < trs.length; i++) {
                        var data = table.fnGetData(trs[i]);//获取指定行的数据
                        propertyArray.push(data[1]);
                        qualifyArray.push(data[3]);
                    }
                    var property = isRepeat(propertyArray);
                    if(property.indexOf(REAPEAT)!=-1){
                        return "property:"+property;
                    }
                    var qualify = isRepeat(qualifyArray);
                    if(qualify.indexOf(REAPEAT)!=-1){
                        return "qualify:"+qualify;
                    }
                    return "";
                }

                function isRepeat(array) {
                    var orderArray = array.sort();
                    for (var i = 0; i < orderArray.length; i++) {
                        if (orderArray[i] == orderArray[i + 1]) {
                            return REAPEAT+" ：" + orderArray[i];
                        }
                    }
                    return "";
                }

                //获取表格的数据，并返回对象列表
                function getData() {
                    var list = [];
                    var trs = table.fnGetNodes();
                    for (var i = 0; i < trs.length; i++) {
                        var data = table.fnGetData(trs[i]);//获取指定行的数据
                        var obj = {};
                        //obj["seq"] = data[0];//序号
                        obj["property"] = data[1];
                        obj["family"] = data[2];
                        obj["qualify"] = data[3];
                        obj["propertyType"] = data[4];
                        obj["crypto"] = data[5];
                        obj["resultZip"] = data[6];
                        list.push(obj);
                    }
                    return list;
                };

                $('#addForm').validate({
                    rules : {
                        businessKey: {
                            required: true
                        },
                        name:{
                            required: true
                        },
                        tableName:{
                            required: true
                        }
                    },
                    messages : {
                        businessKey: {
                            required: '模型Key不能为空'
                        },
                        name:{
                            required: '模型描述值不能为空'
                        },
                        tableName:{
                            required: '模型名称值不能为空'
                        }
                    },
                    submitHandler : function(form) {
                        var single = singleData();
                        if(single.indexOf(REAPEAT)!=-1){
                            return alert(single);
                        }
                        var list = getData();
                        if(list.length==0){
                            return alert("data数据不能为空");
                        }
                        var dataStruct = JSON.stringify(list)
                        version = moment().format("YYYYMMDDHHmmsss");
                        $.ajax({
                            url: 'feature/add/action',
                            type: 'POST',
                            data: {
                                'businessKey': $('#businessKey').val(),
                                'name': $('#name').val(),
                                'version': version,
                                'dataStruct':dataStruct,
                                'tableName':$('#tableName').val()
                            },
                            dataType: 'json',
                            beforeSend: function() {
                                $("#id_submit_btn").attr("disabled", true);
                            },
                            success: function(response) {
                                if (true == response.success) {
                                    alert("添加成功");
                                } else {
                                    alert(response.message);
                                }
                                $("#id_submit_btn").attr("disabled", false);
                            },
                            error: function() {
                                $("#id_submit_btn").attr("disabled", false);
                                alert("提交数据异常");
                            }
                        });
                    }
                });


                $('#updForm').validate({
                    rules : {
                        businessKey: {
                            required: true
                        },
                        name:{
                            required: true
                        },
                        tableName:{
                            required: true
                        }
                    },
                    messages : {
                        businessKey: {
                            required: '模型Key不能为空'
                        },
                        name:{
                            required: '模型描述值不能为空'
                        },
                        tableName:{
                            required: '模型名称值不能为空'
                        }
                    },
                    submitHandler : function(form) {
                        var single = singleData();
                        if(single.indexOf(REAPEAT)!=-1){
                            return alert(single);
                        }
                        var list = getData();
                        if(list.length==0){
                            return alert("data数据不能为空");
                        }
                        var dataStruct = JSON.stringify(list)
                        version = moment().format("YYYYMMDDHHmmsss");
                        $.ajax({
                            url: 'feature/update/action',
                            type: 'POST',
                            data: {
                                // 'businessKey': $('#businessKey').val(),
                                'idCDODef': $('#idCDODef').val(),
                                'name': $('#name').val(),
                                'version': version,
                                'dataStruct':dataStruct
                                // 'tableName':$('#tableName').val()
                            },
                            dataType: 'json',
                            beforeSend: function() {
                                $("#id_submit_btn").attr("disabled", true);
                            },
                            success: function(response) {
                                if (true == response.success) {
                                    alert("更新成功");
                                } else {
                                    alert(response.message);
                                }
                                $("#id_submit_btn").attr("disabled", false);
                            },
                            error: function() {
                                $("#id_submit_btn").attr("disabled", false);
                                alert("提交数据异常");
                            }
                        });
                    }
                });




            });
        });
});