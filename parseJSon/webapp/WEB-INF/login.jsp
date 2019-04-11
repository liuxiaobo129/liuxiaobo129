<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html class="no-js">
    <head>
       <title>风控数据查询</title>
       <meta charset="utf-8">
        <meta http-equiv="cleartype" content="on" />
        <meta http-equiv="cache-control" content="no-cache" />
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" type="text/css" href="static/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="static/layout.css" />
    </head>
    <body>
        <div id="wrap" class="container">
            <div class="title">
                <p class="logo"></p>
                <h1>风控数据查询登录</h1>
            </div>
            <form class="well login" role="form" autocomplete="off" action="login" method="post">
                <p class="error-message">${login_error}</p>
                <div class="form-group">
                    <input id="account" name="account" type="text" class="form-control" placeholder="用户名">
                </div>
                <div class="form-group">
                    <input id="password" name="password" type="password" class="form-control" placeholder="密码">
                </div>
                <button type="submit" class="btn btn-success" id="signIn">登录</button>
            </form>
        </div>
        <footer id="footer" class="f">
            <div class="">© Copyright 2015-2019 上海引旅金融信息服务有限公司</div>
        </footer>
    </body>
</html>