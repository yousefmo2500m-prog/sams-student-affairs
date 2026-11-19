package sams;

import java.time.LocalDate;

/**
 * كلاس Attendance يمثل سجل الحضور والغياب
 */
public class Attendance {
    private int attendanceId;
    private int studentId;
    private String courseCode;
    private LocalDate lectureDate;
    private String status; // 'حاضر', 'غائب', 'بعذر'

    public Attendance(int attendanceId, int studentId, String courseCode, LocalDate lectureDate, String status) {
        this.attendanceId = attendanceId;
        this.studentId = studentId;
        this.courseCode = courseCode;
        this.lectureDate = lectureDate;
        this.status = status;
    }

    public int getAttendanceId() { return attendanceId; }
    public int getStudentId() { return studentId; }
    public String getCourseCode() { return courseCode; }
    public LocalDate getLectureDate() { return lectureDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public boolean isPresent() {
        return "حاضر".equals(status);
    }

    public boolean isAbsent() {
        return "غائب".equals(status);
    }
}
