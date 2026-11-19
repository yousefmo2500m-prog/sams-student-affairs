package sams;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * كلاس Student يرث من Person ويوضح مبدأ الوراثة (Inheritance)
 */
public class Student extends Person {
    private int studentId;
    private LocalDate birthDate;
    private char gender; // 'M' or 'F'
    private int level;    // 1 to 4
    private int groupNo;
    private double gpa;
    private String status; // Active, Suspended, Graduated
    private LocalDate enrollDate;
    private List<String> registeredCourseCodes;

    public Student(int studentId, String nationalId, String fullName, LocalDate birthDate,
                   char gender, String phone, String email, String address, int level,
                   int groupNo, double gpa, String status, LocalDate enrollDate) {
        super(nationalId, fullName, phone, email, address);
        this.studentId = studentId;
        this.birthDate = birthDate;
        this.gender = gender;
        this.level = level;
        this.groupNo = groupNo;
        this.gpa = gpa;
        this.status = (status != null) ? status : "Active";
        this.enrollDate = (enrollDate != null) ? enrollDate : LocalDate.now();
        this.registeredCourseCodes = new ArrayList<>();
    }

    public int getStudentId() { return studentId; }
    public LocalDate getBirthDate() { return birthDate; }
    public char getGender() { return gender; }
    public int getLevel() { return level; }
    public void setLevel(int level) { this.level = level; }
    public int getGroupNo() { return groupNo; }
    public void setGroupNo(int groupNo) { this.groupNo = groupNo; }
    public double getGpa() { return gpa; }
    public void setGpa(double gpa) { this.gpa = gpa; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public LocalDate getEnrollDate() { return enrollDate; }
    public List<String> getRegisteredCourseCodes() { return registeredCourseCodes; }

    @Override
    public String getRole() {
        return "Student";
    }

    public void addRegisteredCourse(String courseCode) {
        if (!registeredCourseCodes.contains(courseCode)) {
            registeredCourseCodes.add(courseCode);
        }
    }

    public boolean isEligibleForRegistration() {
        return "Active".equalsIgnoreCase(this.status);
    }
}
