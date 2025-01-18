package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class BookingServlet extends HttpServlet {
    private static final String CSV_FILE = "C:/Program Files/Apache Software Foundation/Tomcat 11.0/bin/booking.csv"; // 存储在用户主目录

    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/plain;charset=UTF-8");

        System.out.println("Received POST request for booking.");
        System.out.println("Request Content-Type: " + request.getContentType());
        System.out.println("Request Headers:");
        request.getHeaderNames().asIterator().forEachRemaining(header ->
                System.out.println(header + ": " + request.getHeader(header)));

        String customerName = request.getParameter("customerName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String ticketType = request.getParameter("ticketType");
        String quantity = request.getParameter("quantity");
        String visitDate = request.getParameter("visitDate");

        if (customerName == null || email == null || phone == null || ticketType == null || quantity == null || visitDate == null) {
            System.err.println("Error: Missing required fields!");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Error: Missing required fields!");
            return;
        }

        String absoluteFilePath = Paths.get(CSV_FILE).toAbsolutePath().toString();
        System.out.println("CSV File Path: " + absoluteFilePath);

        try {
            if (!Files.exists(Paths.get(CSV_FILE))) {
                Files.createFile(Paths.get(CSV_FILE));
                System.out.println("CSV file created at: " + absoluteFilePath);
            }

            try (BufferedWriter writer = Files.newBufferedWriter(Paths.get(CSV_FILE), StandardOpenOption.CREATE, StandardOpenOption.APPEND)) {
                String csvLine = String.format("%s,%s,%s,%s,%s,%s\n", customerName, email, phone, ticketType, quantity, visitDate);
                writer.write(csvLine);
                System.out.println("Data saved to CSV: " + csvLine);
            }

            System.out.println("Current CSV File Contents:");
            Files.lines(Paths.get(CSV_FILE)).forEach(System.out::println);

        } catch (IOException e) {
            System.err.println("Error: Unable to write data to file.");
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Error: Unable to write data to file.");
            return;
        }

        response.getWriter().write("Booking information saved successfully! File saved at: " + absoluteFilePath);
    }
}
