package sams;

import java.time.LocalDate;

/**
 * كلاس Enrollment يمثل تسجيل الطالب في المقرر
 */
public class Enrollment {
    private int enrollmentId;
    private int studentId;
    private String courseCode;
    private String academicYear;
    private int semester;
    private String status; // Registered, Dropped, Completed
    private LocalDate enrollDate;

    public Enrollment(int enrollmentId, int studentId, String courseCode, String academicYear,
                      int semester, String status, LocalDate enrollDate) {
        this.enrollmentId = enrollmentId;
        this.studentId = studentId;
        this.courseCode = courseCode;
        this.academicYear = academicYear;
        this.semester = semester;
        this.status = (status != null) ? status : "Registered";
        this.enrollDate = (enrollDate != null) ? enrollDate : LocalDate.now();
    }

    public int getEnrollmentId() { return enrollmentId; }
    public int getStudentId() { return studentId; }
    public String getCourseCode() { return courseCode; }
    public String getAcademicYear() { return academicYear; }
    public int getSemester() { return semester; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public LocalDate getEnrollDate() { return enrollDate; }
}
