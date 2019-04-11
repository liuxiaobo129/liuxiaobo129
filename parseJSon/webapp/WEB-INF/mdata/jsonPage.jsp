<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>JSON Viewer</title>
    <link rel="stylesheet" type="text/css" href="../static/extjs/css/ext-gray-all.css">
    <script src="../static/plugins/jQuery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../static/extjs/js/jsonviewer-all.js?v7"></script>
    <script type="text/javascript" src="../mdata/mdata.js"></script>

</head>
<body>
<div class="tab">
    <form method="post">
        <input id="refBizId" placeholder="业务编号" type="text" value="${refBizId}" class="form-control"/>
    </form>
</div>
</body>
</html>

