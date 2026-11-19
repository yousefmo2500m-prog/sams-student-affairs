package sams;

import java.time.LocalDate;

/**
 * كلاس DocumentRequest يمثل طلبات واستخراج الشهادات والمستندات الرسمية
 */
public class DocumentRequest {
    private int requestId;
    private int studentId;
    private String docType; // شهادة قيد, بيان درجات, بيان حالة
    private LocalDate requestDate;
    private String status;  // Pending, Issued, Rejected
    private LocalDate issueDate;
    private Integer issuedBy;
    private String notes;

    public DocumentRequest(int requestId, int studentId, String docType, LocalDate requestDate,
                           String status, LocalDate issueDate, Integer issuedBy, String notes) {
        this.requestId = requestId;
        this.studentId = studentId;
        this.docType = docType;
        this.requestDate = (requestDate != null) ? requestDate : LocalDate.now();
        this.status = (status != null) ? status : "Pending";
        this.issueDate = issueDate;
        this.issuedBy = issuedBy;
        this.notes = notes;
    }

    public int getRequestId() { return requestId; }
    public int getStudentId() { return studentId; }
    public String getDocType() { return docType; }
    public LocalDate getRequestDate() { return requestDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public LocalDate getIssueDate() { return issueDate; }
    public void setIssueDate(LocalDate issueDate) { this.issueDate = issueDate; }
    public Integer getIssuedBy() { return issuedBy; }
    public void setIssuedBy(Integer issuedBy) { this.issuedBy = issuedBy; }
    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public void approve(int staffUserId) {
        this.status = "تم الإصدار";
        this.issueDate = LocalDate.now();
        this.issuedBy = staffUserId;
    }

    public void reject(int staffUserId, String reason) {
        this.status = "مرفوض";
        this.issuedBy = staffUserId;
        this.notes = reason;
    }
}
