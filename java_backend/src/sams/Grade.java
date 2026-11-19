package sams;

/**
 * كلاس Grade يمثل رصد الدرجات وحساب التقدير والنقاط
 * يخضع لقواعد العمل المحددة في التقرير الثالث:
 * اعمال السنة: 20 | الميدتيرم: 20 | الفاينال: 60
 * التقديرات: A (>=90, 4.0), B (>=80, 3.0), C (>=70, 2.0), D (>=60, 1.0), F (<60, 0.0)
 */
public class Grade {
    private int gradeId;
    private int studentId;
    private String courseCode;
    private String academicYear;
    private double coursework; // max 20
    private double midterm;    // max 20
    private double finalExam;  // max 60
    private double total;      // calculated
    private String letterGrade; // A, B, C, D, F
    private double gradePoints; // 4.0, 3.0, 2.0, 1.0, 0.0

    public Grade(int gradeId, int studentId, String courseCode, String academicYear,
                 double coursework, double midterm, double finalExam) {
        if (coursework < 0 || coursework > 20) {
            throw new IllegalArgumentException("درجة أعمال السنة يجب أن تكون بين 0 و 20.");
        }
        if (midterm < 0 || midterm > 20) {
            throw new IllegalArgumentException("درجة الميدتيرم يجب أن تكون بين 0 و 20.");
        }
        if (finalExam < 0 || finalExam > 60) {
            throw new IllegalArgumentException("درجة الامتحان النهائي يجب أن تكون بين 0 و 60.");
        }

        this.gradeId = gradeId;
        this.studentId = studentId;
        this.courseCode = courseCode;
        this.academicYear = academicYear;
        this.coursework = coursework;
        this.midterm = midterm;
        this.finalExam = finalExam;
        calculateTotalAndGrade();
    }

    public void calculateTotalAndGrade() {
        this.total = this.coursework + this.midterm + this.finalExam;
        if (this.total >= 90.0) {
            this.letterGrade = "A";
            this.gradePoints = 4.00;
        } else if (this.total >= 80.0) {
            this.letterGrade = "B";
            this.gradePoints = 3.00;
        } else if (this.total >= 70.0) {
            this.letterGrade = "C";
            this.gradePoints = 2.00;
        } else if (this.total >= 60.0) {
            this.letterGrade = "D";
            this.gradePoints = 1.00;
        } else {
            this.letterGrade = "F";
            this.gradePoints = 0.00;
        }
    }

    public int getGradeId() { return gradeId; }
    public int getStudentId() { return studentId; }
    public String getCourseCode() { return courseCode; }
    public String getAcademicYear() { return academicYear; }
    public double getCoursework() { return coursework; }
    public double getMidterm() { return midterm; }
    public double getFinalExam() { return finalExam; }
    public double getTotal() { return total; }
    public String getLetterGrade() { return letterGrade; }
    public double getGradePoints() { return gradePoints; }
}
