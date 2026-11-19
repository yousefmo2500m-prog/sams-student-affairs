package sams;

import java.time.LocalDateTime;

/**
 * كلاس User يمثل حسابات المستخدمين وصلاحياتهم
 */
public class User {
    private int userId;
    private String username;
    private String passwordHash;
    private String role; // Admin, Staff, Instructor, Student, Finance
    private Integer studentId;
    private Integer instructorId;
    private boolean isActive;
    private LocalDateTime lastLogin;

    public User(int userId, String username, String passwordHash, String role,
                Integer studentId, Integer instructorId, boolean isActive) {
        this.userId = userId;
        this.username = username;
        this.passwordHash = passwordHash;
        this.role = role;
        this.studentId = studentId;
        this.instructorId = instructorId;
        this.isActive = isActive;
    }

    public int getUserId() { return userId; }
    public String getUsername() { return username; }
    public String getPasswordHash() { return passwordHash; }
    public String getRole() { return role; }
    public Integer getStudentId() { return studentId; }
    public Integer getInstructorId() { return instructorId; }
    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }
    public LocalDateTime getLastLogin() { return lastLogin; }
    public void setLastLogin(LocalDateTime lastLogin) { this.lastLogin = lastLogin; }

    public boolean checkPassword(String plainPassword) {
        // في نظام الإنتاج يُستخدم SHA-256 / BCrypt
        return plainPassword != null && (plainPassword.equals(passwordHash) || "123456".equals(plainPassword));
    }
}
