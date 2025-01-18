<%@ page import="java.io.*" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  // 定义CSV文件路径
  String csvFilePath = "C:/Program Files/Apache Software Foundation/Tomcat 11.0/bin/booking.csv";

  // 用于存储订单数据的类
  class Order {
    String name, email, phone, quantity, total;

    Order(String name, String email, String phone, String quantity, String total) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.quantity = quantity;
      this.total = total;
    }
  }

  // 存储读取到的订单数据
  List<Order> orders = new ArrayList<>();

  // 从CSV文件读取订单数据
  try (BufferedReader reader = new BufferedReader(new FileReader(csvFilePath))) {
    String line;
    while ((line = reader.readLine()) != null) {
      String[] fields = line.split(",");
      if (fields.length >= 5) {
        // 假设前四列是 name, email, phone, quantity，第五列是 total
        orders.add(new Order(fields[0], fields[1], fields[2], fields[3], fields[4]));
      }
    }
  } catch (IOException e) {
%>
<p>Error reading CSV file: <%= e.getMessage() %></p>
<%
  }
%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Order Information</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f7f7f7;
    }
    .container {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 400px;
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
      color: #333;
    }
    h2 {
      color: #007bff;
      margin-bottom: 20px;
    }
    p {
      margin: 8px 0;
    }
    a {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    a:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
<div class="container">
  <h1>Customer Order Information</h1>
  <div>
    <h2>Order Details</h2>
    <% if (!orders.isEmpty()) { %>
    <% Order lastOrder = orders.get(orders.size() - 1); %>
    <p><strong>Name:</strong> <%= lastOrder.name %></p>
    <p><strong>Email:</strong> <%= lastOrder.email %></p>
    <p><strong>Phone:</strong> <%= lastOrder.phone %></p>
    <p><strong>Quantity:</strong> <%= lastOrder.quantity %></p>
    <p><strong>Total:</strong> <%= lastOrder.total %></p>
    <% } else { %>
    <p>No orders found.</p>
    <% } %>
    <a href="/home">Explore More Tours</a>
  </div>
</div>
</body>
</html>
