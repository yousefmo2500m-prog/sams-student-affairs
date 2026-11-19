package sams;

import java.time.LocalDate;

/**
 * كلاس Payment يمثل عمليات سداد المصروفات وإصدار الإيصالات
 */
public class Payment {
    private int paymentId;
    private int feeId;
    private double amount;
    private LocalDate paymentDate;
    private String method; // نقدي, فيزا, تحويل
    private String receiptNo;
    private Integer receivedBy;

    public Payment(int paymentId, int feeId, double amount, LocalDate paymentDate,
                   String method, String receiptNo, Integer receivedBy) {
        if (amount <= 0) {
            throw new IllegalArgumentException("المبلغ المسدد يجب أن يكون أكبر من الصفر.");
        }
        this.paymentId = paymentId;
        this.feeId = feeId;
        this.amount = amount;
        this.paymentDate = (paymentDate != null) ? paymentDate : LocalDate.now();
        this.method = method;
        this.receiptNo = receiptNo;
        this.receivedBy = receivedBy;
    }

    public int getPaymentId() { return paymentId; }
    public int getFeeId() { return feeId; }
    public double getAmount() { return amount; }
    public LocalDate getPaymentDate() { return paymentDate; }
    public String getMethod() { return method; }
    public String getReceiptNo() { return receiptNo; }
    public Integer getReceivedBy() { return receivedBy; }
}
