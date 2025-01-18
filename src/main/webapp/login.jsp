<%--
  Created by IntelliJ IDEA.
  User: hanyx
  Date: 2025/1/18
  Time: 18:03
  To change this template use File | Settings | File Templates.
--%>
<%-- Login Page --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>
<h1>Login</h1>
<!-- 显示登录结果 -->
<p>
  <%= request.getAttribute("resultMessage") != null ? request.getAttribute("resultMessage") : "" %>
</p>
<!-- 登录表单 -->
<form action="/CAT201_Project_Backend_war_exploded/api/login" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required><br><br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required><br><br>

  <button type="submit">Login</button>
</form>
<p>
  Don't have an account? <a href="index.jsp">Sign Up</a>
</p>
</body>
</html>
