package sams;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

/**
 * المحرك البرمجي لنظام SAMS
 * يطبق الخوارزميات السبعة الواردة في التقرير الثالث
 */
public class SAMSManager {
    private Map<Integer, Student> students = new HashMap<>();
    private Map<Integer, Instructor> instructors = new HashMap<>();
    private Map<String, Course> courses = new HashMap<>();
    private List<Enrollment> enrollments = new ArrayList<>();
    private List<Attendance> attendanceRecords = new ArrayList<>();
    private List<Grade> grades = new ArrayList<>();
    private Map<Integer, Fee> fees = new HashMap<>();
    private List<Payment> payments = new ArrayList<>();
    private List<DocumentRequest> documentRequests = new ArrayList<>();
    private Map<String, User> users = new HashMap<>();

    private int nextEnrollmentId = 1;
    private int nextAttendanceId = 1;
    private int nextGradeId = 1;
    private int nextPaymentId = 1;
    private int nextRequestId = 1;
    private int receiptCounter = 100;

    public SAMSManager() {
        seedInitialData();
    }

    private void seedInitialData() {
        // إضافة أعضاء هيئة التدريس
        Instructor drFarouk = new Instructor(1, "27005120101234", "د/ فاروق عبد العزيز", "01001234567", "farouk@sams.edu", "القاهرة", "نظم المعلومات الإدارية");
        instructors.put(drFarouk.getInstructorId(), drFarouk);

        // إضافة المقررات
        courses.put("CS301", new Course("CS301", "تحليل وتصميم نظم المعلومات", 3, 2, 3, 1));
        courses.put("CS302", new Course("CS302", "البرمجة كائنية التوجه (Java)", 3, 2, 3, 1));
        courses.put("CS303", new Course("CS303", "نظم إدارة قواعد البيانات", 3, 2, 3, 1));
        courses.put("CS304", new Course("CS304", "شبكات الحاسب", 3, 2, 3, 1));
        courses.put("IS305", new Course("IS305", "نظم دعم اتخاذ القرار", 3, 2, 3, 1));
        courses.put("IS306", new Course("IS306", "أمن المعلومات", 3, 2, 3, 1));

        // إضافة طالبات المشروع
        Student caroline = new Student(202411531, "30310150102548", "كارولين عاطف عطاالله", LocalDate.of(2003, 10, 15), 'F', "01289123456", "caroline@sams.edu", "مصر الجديدة", 3, 3, 3.85, "Active", LocalDate.of(2024, 9, 15));
        Student ragda = new Student(202411586, "30304200109876", "رغدة ابراهيم عبد الخالق", LocalDate.of(2003, 4, 20), 'F', "01019876543", "ragda@sams.edu", "التجمع الأول", 3, 3, 3.92, "Active", LocalDate.of(2024, 9, 15));
        Student ahmed = new Student(202411601, "30308110103456", "أحمد محمد الشناوي", LocalDate.of(2003, 8, 11), 'M', "01155667788", "ahmed@sams.edu", "مدينة نصر", 3, 3, 2.50, "Active", LocalDate.of(2024, 9, 15));

        students.put(caroline.getStudentId(), caroline);
        students.put(ragda.getStudentId(), ragda);
        students.put(ahmed.getStudentId(), ahmed);

        // حسابات المستخدمين
        users.put("admin", new User(1, "admin", "123456", "Admin", null, null, true));
        users.put("dr_farouk", new User(2, "dr_farouk", "123456", "Instructor", null, 1, true));
        users.put("staff", new User(3, "staff", "123456", "Staff", null, null, true));
        users.put("finance", new User(4, "finance", "123456", "Finance", null, null, true));
        users.put("202411586", new User(5, "202411586", "123456", "Student", 202411586, null, true));
        users.put("202411531", new User(6, "202411531", "123456", "Student", 202411531, null, true));

        // الرسوم
        fees.put(1, new Fee(1, 202411586, "2026/2027", 2, 8500.0, LocalDate.of(2026, 3, 30), "مسدد"));
        fees.put(2, new Fee(2, 202411531, "2026/2027", 2, 8500.0, LocalDate.of(2026, 3, 30), "مسدد جزئيًا"));
        fees.put(3, new Fee(3, 202411601, "2026/2027", 2, 8500.0, LocalDate.of(2026, 3, 1), "غير مسدد"));
    }

    // 1. خوارزمية تسجيل الدخول (Algorithm 1.1)
    public User login(String username, String password) {
        User user = users.get(username);
        if (user == null || !user.isActive()) {
            throw new SecurityException("الحساب غير موجود أو غير مفعل.");
        }
        if (!user.checkPassword(password)) {
            throw new SecurityException("كلمة المرور غير صحيحة.");
        }
        user.setLastLogin(LocalDateTime.now());
        return user;
    }

    // 2. خوارزمية إضافة طالب جديد (Algorithm 1.2)
    public Student addStudent(int studentId, String nationalId, String fullName, LocalDate birthDate,
                             char gender, String phone, String email, String address, int level, int groupNo) {
        if (nationalId == null || nationalId.length() != 14) {
            throw new IllegalArgumentException("الرقم القومي غير صالح، يجب أن يتكون من 14 رقمًا.");
        }
        for (Student s : students.values()) {
            if (s.getNationalId().equals(nationalId)) {
                throw new IllegalStateException("الطالب مسجل من قبل بنفس الرقم القومي.");
            }
        }
        Student s = new Student(studentId, nationalId, fullName, birthDate, gender, phone, email, address, level, groupNo, 0.0, "Active", LocalDate.now());
        students.put(studentId, s);
        // إنشاء حساب دخول تلقائي
        users.put(String.valueOf(studentId), new User(users.size() + 1, String.valueOf(studentId), "123456", "Student", studentId, null, true));
        return s;
    }

    // 3. خوارزمية تسجيل المقررات (Algorithm 1.3)
    public Enrollment registerCourse(int studentId, String courseCode, String academicYear, int semester) {
        Student s = students.get(studentId);
        if (s == null) throw new IllegalArgumentException("الطالب غير موجود.");
        if (!s.isEligibleForRegistration()) throw new IllegalStateException("حالة الطالب لا تسمح بالتسجيل.");

        // التحقق من المصروفات المتأخرة
        if (hasOverdueFees(studentId)) {
            throw new IllegalStateException("لا يمكن التسجيل؛ توجد مصروفات دراسية متأخرة على الطالب.");
        }

        Course c = courses.get(courseCode);
        if (c == null) throw new IllegalArgumentException("المقرر غير موجود.");

        // التحقق من عدم التسجيل المسبق في نفس الفصل
        for (Enrollment e : enrollments) {
            if (e.getStudentId() == studentId && e.getCourseCode().equals(courseCode) && e.getAcademicYear().equals(academicYear) && e.getSemester() == semester) {
                throw new IllegalStateException("الطالب مسجل في هذا المقرر بالفعل.");
            }
        }

        // التحقق من حد الـ 18 ساعة معتمدة
        int currentHours = calculateRegisteredHours(studentId, academicYear, semester);
        if (currentHours + c.getCreditHours() > 18) {
            throw new IllegalStateException("تجاوز الحد الأقصى للساعات المعتمدة (الحد الأقصى 18 ساعة، الساعات الحالية " + currentHours + " والمقرر " + c.getCreditHours() + " ساعات).");
        }

        Enrollment en = new Enrollment(nextEnrollmentId++, studentId, courseCode, academicYear, semester, "Registered", LocalDate.now());
        enrollments.add(en);
        s.addRegisteredCourse(courseCode);
        return en;
    }

    private int calculateRegisteredHours(int studentId, String academicYear, int semester) {
        int sum = 0;
        for (Enrollment e : enrollments) {
            if (e.getStudentId() == studentId && e.getAcademicYear().equals(academicYear) && e.getSemester() == semester) {
                Course c = courses.get(e.getCourseCode());
                if (c != null) sum += c.getCreditHours();
            }
        }
        return sum;
    }

    public boolean hasOverdueFees(int studentId) {
        LocalDate today = LocalDate.now();
        for (Fee f : fees.values()) {
            if (f.getStudentId() == studentId && f.isOverdue(today)) {
                return true;
            }
        }
        return false;
    }

    // 4. خوارزمية تسجيل الحضور والغياب (Algorithm 1.4)
    public Attendance recordAttendance(int studentId, String courseCode, LocalDate date, String status) {
        Attendance att = new Attendance(nextAttendanceId++, studentId, courseCode, date, status);
        attendanceRecords.add(att);

        // التحقق من تجاوز نسبة الغياب 25%
        double absenceRate = calculateAbsenceRate(studentId, courseCode);
        if (absenceRate > 25.0) {
            System.out.println("⚠️ [تنبيه إنذار غياب]: تجاوز الطالب (كود " + studentId + ") نسبة الغياب المسموحة في المقرر " + courseCode + " بنسبة: " + String.format("%.1f", absenceRate) + "%");
        }
        return att;
    }

    public double calculateAbsenceRate(int studentId, String courseCode) {
        int total = 0;
        int present = 0;
        for (Attendance a : attendanceRecords) {
            if (a.getStudentId() == studentId && a.getCourseCode().equals(courseCode)) {
                total++;
                if (a.isPresent()) present++;
            }
        }
        if (total == 0) return 0.0;
        return (1.0 - ((double) present / total)) * 100.0;
    }

    // 5. خوارزمية رصد الدرجات وحساب المعدل التراكمي (Algorithm 1.5)
    public Grade enterGrade(int studentId, String courseCode, String academicYear, double coursework, double midterm, double finalExam) {
        Grade g = new Grade(nextGradeId++, studentId, courseCode, academicYear, coursework, midterm, finalExam);
        grades.removeIf(existing -> existing.getStudentId() == studentId && existing.getCourseCode().equals(courseCode) && existing.getAcademicYear().equals(academicYear));
        grades.add(g);

        // إعادة حساب المعدل التراكمي للطالب (Cumulative GPA)
        recalculateGPA(studentId);
        return g;
    }

    private void recalculateGPA(int studentId) {
        double totalWeightedPoints = 0.0;
        int totalHours = 0;

        for (Grade g : grades) {
            if (g.getStudentId() == studentId) {
                Course c = courses.get(g.getCourseCode());
                int hours = (c != null) ? c.getCreditHours() : 3;
                totalWeightedPoints += (g.getGradePoints() * hours);
                totalHours += hours;
            }
        }

        Student s = students.get(studentId);
        if (s != null && totalHours > 0) {
            double calculatedGPA = totalWeightedPoints / totalHours;
            s.setGpa(Math.round(calculatedGPA * 100.0) / 100.0);
        }
    }

    // 6. خوارزمية سداد المصروفات (Algorithm 1.6)
    public Payment payFee(int feeId, double amount, String method, int receivedBy) {
        Fee f = fees.get(feeId);
        if (f == null) throw new IllegalArgumentException("المطالبة المالية غير موجودة.");

        double alreadyPaid = 0.0;
        for (Payment p : payments) {
            if (p.getFeeId() == feeId) alreadyPaid += p.getAmount();
        }

        double remaining = f.getAmountDue() - alreadyPaid;
        if (amount <= 0 || amount > remaining) {
            throw new IllegalArgumentException("المبلغ غير صالح، المتبقي هو: " + remaining + " ج.م.");
        }

        String receiptNo = "REC-2026-" + (++receiptCounter);
        Payment payment = new Payment(nextPaymentId++, feeId, amount, LocalDate.now(), method, receiptNo, receivedBy);
        payments.add(payment);

        if (alreadyPaid + amount >= f.getAmountDue()) {
            f.setStatus("مسدد");
        } else {
            f.setStatus("مسدد جزئيًا");
        }

        return payment;
    }

    // 7. خوارزمية طلب وإصدار مستند (Algorithm 1.7)
    public DocumentRequest requestDocument(int studentId, String docType) {
        if (hasOverdueFees(studentId)) {
            throw new IllegalStateException("عفواً، لا يمكن طلب مستندات رسمية نظراً لوجود رسوم متأخرة.");
        }
        DocumentRequest req = new DocumentRequest(nextRequestId++, studentId, docType, LocalDate.now(), "قيد المراجعة", null, null, null);
        documentRequests.add(req);
        return req;
    }

    public void approveDocument(int requestId, int staffUserId) {
        for (DocumentRequest req : documentRequests) {
            if (req.getRequestId() == requestId) {
                req.approve(staffUserId);
                return;
            }
        }
        throw new IllegalArgumentException("طلب المستند غير موجود.");
    }

    // Getters
    public Map<Integer, Student> getStudents() { return students; }
    public Map<String, Course> getCourses() { return courses; }
    public List<Grade> getGrades() { return grades; }
    public List<Attendance> getAttendanceRecords() { return attendanceRecords; }
    public Map<Integer, Fee> getFees() { return fees; }
    public List<Payment> getPayments() { return payments; }
    public List<DocumentRequest> getDocumentRequests() { return documentRequests; }
}
