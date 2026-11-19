package sams;

/**
 * كلاس Course يمثل المقرر الدراسي
 */
public class Course {
    private String courseCode;
    private String courseName;
    private int creditHours;
    private int semester; // 1 or 2
    private int level;    // 1 to 4
    private Integer instructorId;

    public Course(String courseCode, String courseName, int creditHours, int semester, int level, Integer instructorId) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.creditHours = creditHours;
        this.semester = semester;
        this.level = level;
        this.instructorId = instructorId;
    }

    public String getCourseCode() { return courseCode; }
    public String getCourseName() { return courseName; }
    public int getCreditHours() { return creditHours; }
    public int getSemester() { return semester; }
    public int getLevel() { return level; }
    public Integer getInstructorId() { return instructorId; }
    public void setInstructorId(Integer instructorId) { this.instructorId = instructorId; }

    @Override
    public String toString() {
        return courseCode + " - " + courseName + " (" + creditHours + " ساعات معتمدة)";
    }
}
