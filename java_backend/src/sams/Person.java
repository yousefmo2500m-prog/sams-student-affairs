package sams;

/**
 * الكلاس المجرد Person يمثل المفهوم العام للشخص في النظام
 * يوضح مبدأ التجريد (Abstraction) والتغليف (Encapsulation)
 */
public abstract class Person {
    private String nationalId;
    private String fullName;
    private String phone;
    private String email;
    private String address;

    public Person(String nationalId, String fullName, String phone, String email, String address) {
        if (nationalId == null || nationalId.length() != 14) {
            throw new IllegalArgumentException("الرقم القومي يجب أن يتكون من 14 رقمًا بدقة.");
        }
        this.nationalId = nationalId;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }

    public String getNationalId() { return nationalId; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    /**
     * دالة مجردة توضح مبدأ تعدد الأشكال (Polymorphism)
     * يعيد كل كلاس مشتق الدور الخاص به في النظام
     */
    public abstract String getRole();

    @Override
    public String toString() {
        return "[" + getRole() + "] " + fullName + " (الرقم القومي: " + nationalId + ")";
    }
}
