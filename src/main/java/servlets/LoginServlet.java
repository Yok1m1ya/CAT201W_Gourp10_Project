package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

public class LoginServlet extends HttpServlet {
    private static final String CSV_FILE = "C:/Program Files/Apache Software Foundation/Tomcat 11.0/bin/user.csv";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 设置CORS响应头
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // 允许前端地址
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE"); // 允许的方法
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 允许的请求头
        response.setHeader("Access-Control-Allow-Credentials", "true"); // 是否允许发送Cookie
        
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // 调试日志：打印收到的用户名和密码
        System.out.println("Received username: " + username);
        System.out.println("Received password: " + password);

        if (username == null || password == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Invalid input!");
            return;
        }

        boolean loginSuccess = validateUser(username, password);

        if (loginSuccess) {
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write("Login successful!");
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Invalid username or password!");
        }
    }

    private boolean validateUser(String username, String password) {
        try (BufferedReader reader = Files.newBufferedReader(Paths.get(CSV_FILE))) {
            String line;
            System.out.println("Reading CSV file: " + CSV_FILE);

            while ((line = reader.readLine()) != null) {
                System.out.println("Read line: " + line);
                String[] fields = line.split(",");

                if (fields.length >= 3) {
                    System.out.println("Checking username: " + fields[0] + ", password: " + fields[2]);

                    if (fields[0].equals(username) && fields[2].equals(password)) {
                        System.out.println("Login successful for user: " + username);
                        return true;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Login failed for user: " + username);
        return false;
    }
}
