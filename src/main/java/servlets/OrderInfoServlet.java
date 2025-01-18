package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class OrderInfoServlet extends HttpServlet {
    private static final String CSV_FILE = "C:/Program Files/Apache Software Foundation/Tomcat 11.0/bin/booking.csv";

    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        response.setContentType("application/json;charset=UTF-8");

        List<String[]> bookings = new ArrayList<>();

        // 读取 CSV 文件
        try (BufferedReader reader = Files.newBufferedReader(Paths.get(CSV_FILE))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] fields = line.split(",");
                bookings.add(fields); // 每一行是一个数组
            }
        } catch (IOException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\":\"Unable to read booking data.\"}");
            return;
        }

        // 转换为 JSON 格式
        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < bookings.size(); i++) {
            String[] booking = bookings.get(i);
            json.append("{");
            json.append("\"name\":\"").append(booking[0]).append("\",");
            json.append("\"email\":\"").append(booking[1]).append("\",");
            json.append("\"phone\":\"").append(booking[2]).append("\",");
            json.append("\"ticketType\":\"").append(booking[3]).append("\",");
            json.append("\"quantity\":\"").append(booking[4]).append("\",");
            json.append("\"total\":\"").append(booking[5]).append("\"");
            json.append("}");
            if (i < bookings.size() - 1) json.append(",");
        }
        json.append("]");

        // 返回 JSON 数据
        response.getWriter().write(json.toString());
    }
}
