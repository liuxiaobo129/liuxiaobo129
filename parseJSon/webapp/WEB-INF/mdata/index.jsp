<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>mdata数据查询</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="../static/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../static/plugins/datatables/dataTables.bootstrap.css">
    <link rel="stylesheet" href="../static/app.css">
</head>
<body>
<div class="wrapper">
    <div class="content-wrapper">
        <section class="content-header">
            <h2> mdata数据查询
                <small>查询</small>
            </h2>
            <ol class="breadcrumb">
                <li><a href="../hbase/regionStats"><i class="fa fa-dashboard"></i>监控</a></li>
                <li><a href="../hbase/tables">数据表</a></li>
                <li class="active">mdata数据查询</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <form class="form-horizontal" action="toJsonPage">
                                <div class="box-body">
                                    <div class="form-group">
                                        <div class="col-sm-2">
                                            <input id="refBizId" name="refBizId" placeholder="业务编号" type="text"/>
                                        </div>
                                        <div class="col-sm-1">
                                            <button type="submit" class="btn btn-info" id="query">查询</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</body>
</html>
