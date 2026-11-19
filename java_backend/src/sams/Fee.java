package sams;

import java.time.LocalDate;

/**
 * كلاس Fee يمثل الرسوم والمطالبات المالية للطالب
 */
public class Fee {
    private int feeId;
    private int studentId;
    private String academicYear;
    private int semester;
    private double amountDue;
    private LocalDate dueDate;
    private String status; // Unpaid, Partial, Paid

    public Fee(int feeId, int studentId, String academicYear, int semester, double amountDue, LocalDate dueDate, String status) {
        this.feeId = feeId;
        this.studentId = studentId;
        this.academicYear = academicYear;
        this.semester = semester;
        this.amountDue = amountDue;
        this.dueDate = dueDate;
        this.status = (status != null) ? status : "Unpaid";
    }

    public int getFeeId() { return feeId; }
    public int getStudentId() { return studentId; }
    public String getAcademicYear() { return academicYear; }
    public int getSemester() { return semester; }
    public double getAmountDue() { return amountDue; }
    public LocalDate getDueDate() { return dueDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public boolean isPaid() {
        return "مسدد".equals(status) || "Paid".equalsIgnoreCase(status);
    }

    public boolean isOverdue(LocalDate today) {
        return !isPaid() && today.isAfter(dueDate);
    }
}
