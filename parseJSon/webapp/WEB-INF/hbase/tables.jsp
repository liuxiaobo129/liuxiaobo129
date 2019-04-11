<%--
  Created by IntelliJ IDEA.
  User: evan
  Date: 2017/6/1
  Time: 下午1:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>非交易行为数据查询</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../static/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../static/plugins/datatables/dataTables.bootstrap.css">
    <link rel="stylesheet" href="../static/app.css">
</head>
<body>
<div class="wrapper">
    <div class="content-wrapper">
        <section class="content-header">
            <h2> HBase数据表
                <small>相关表</small>
            </h2>
            <ol class="breadcrumb">
                <li><a href="regionStats"><i class="fa fa-dashboard"></i>监控</a></li>
                <li class="active">数据表</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                        </div>
                        <div class="box-body">
                            <table id="data" class="table table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>表名</th>
                                    <th>监控</th>
                                    <th>数据</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>非交易行为数据表</td>
                                    <td>${tables['actTable']}</td>
                                    <td><a href="../actdata/query"> 数据 </a></td>
                                    <td><a href="regions/${tables['actTable']}/100000"> 状态 </a></td>
                                </tr>
                                <tr>
                                    <td>非交易行为索引表</td>
                                    <td>${tables['actTableIndex']}</td>
                                    <td><a href="../actdata/queryIndex"> 数据 </a></td>
                                    <td><a href="regions/${tables['actTableIndex']}/100000"> 状态 </a></td>
                                </tr>
                                <tr>
                                    <td>非交易行为UID表</td>
                                    <td>${tables['actTableUid']}</td>
                                    <td>数据</td>
                                    <td><a href="regions/${tables['actTableUid']}/100000"> 状态 </a></td>
                                </tr>
                                <tr>
                                    <td>规则因子执行记录数据表</td>
                                    <td>${tables['rftTable']}</td>
                                    <td><a href="../rftdata/query"> 数据</a></td>
                                    <td><a href="regions/${tables['rftTable']}/100000"> 状态 </a></td>
                                </tr>
                                <tr>
                                    <td>规则因子执行记录索引表</td>
                                    <td>${tables['rftTableIndex']}</td>
                                    <td>数据</td>
                                    <td><a href="regions/${tables['rftTableIndex']}/100000"> 状态 </a></td>
                                </tr>
                                <tr>
                                    <td>mdata</td>
                                    <td>${tables['rftTable']}</td>
                                    <td><a href="../mdata/mdataIndex"> 数据</a></td>
                                    <td><a href="regions/${tables['rftTable']}/100000"> 状态 </a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</body>
</html>
