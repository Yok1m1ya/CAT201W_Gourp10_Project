package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;

public class SignupServlet extends HttpServlet {
    private static final String CSV_FILE_PATH = "user.csv";

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String password = req.getParameter("password");

        if (name == null || email == null || password == null ||
                name.isEmpty() || email.isEmpty() || password.isEmpty()) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("All fields are required!");
            return;
        }

        if (isEmailExists(email)) {
            resp.setStatus(HttpServletResponse.SC_CONFLICT);
            resp.getWriter().write("Email already exists!");
            return;
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(CSV_FILE_PATH, true))) {
            writer.write(String.format("%s,%s,%s%n", name, email, password));
        }

        resp.setStatus(HttpServletResponse.SC_OK);
        resp.getWriter().write("Registration successful!");
    }

    private boolean isEmailExists(String email) throws IOException {
        File file = new File(CSV_FILE_PATH);
        if (!file.exists()) {
            return false;
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 2 && parts[1].equals(email)) {
                    return true;
                }
            }
        }
        return false;
    }
}
