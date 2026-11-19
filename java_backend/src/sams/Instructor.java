package sams;

/**
 * كلاس Instructor يرث من Person
 */
public class Instructor extends Person {
    private int instructorId;
    private String department;

    public Instructor(int instructorId, String nationalId, String fullName, String phone,
                      String email, String address, String department) {
        super(nationalId, fullName, phone, email, address);
        this.instructorId = instructorId;
        this.department = department;
    }

    public int getInstructorId() { return instructorId; }
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    @Override
    public String getRole() {
        return "Instructor";
    }
}
