<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      width: 400px;
    }
    .container h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    .form-group label {
      display: block;
      margin-bottom: 5px;
    }
    .form-group input,
    .form-group select {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .submit-button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
    }
    .submit-button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
<div class="container">
  <h1>Booking Page</h1>
  <form action="api/booking" method="post">
    <!-- Customer Information Section -->
    <div class="form-group">
      <label for="customer-name">Customer Name</label>
      <input type="text" id="customer-name" name="customerName" placeholder="John Doe" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="example@example.com" required>
    </div>
    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" placeholder="123-456-7890" required>
    </div>

    <!-- Ticket Details Section -->
    <div class="form-group">
      <label for="ticket-type">Ticket Type</label>
      <select id="ticket-type" name="ticketType" required>
        <option value="">Select a Ticket Type</option>
        <option value="adult">Adult</option>
        <option value="child">Child</option>
        <option value="senior">Senior</option>
        <option value="student">Student</option>
      </select>
    </div>
    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" min="1" value="1" required>
    </div>
    <div class="form-group">
      <label for="visit-date">Visit Date</label>
      <input type="date" id="visit-date" name="visitDate" required>
    </div>

    <button type="submit" class="submit-button">Submit Booking</button>
  </form>
</div>
</body>
</html>
