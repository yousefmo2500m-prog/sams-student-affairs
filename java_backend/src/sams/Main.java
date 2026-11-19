package sams;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        System.out.println("===============================================================================");
        System.out.println("           نظام إدارة شئون الطلاب (SAMS) - العرض العملي لكود Java OOP          ");
        System.out.println("       المعهد العالي للحاسبات ونظم المعلومات الإدارية - التجمع الأول       ");
        System.out.println("       إشراف: د/ فاروق | إعداد: كارولين عاطف عطاالله & رغدة ابراهيم        ");
        System.out.println("===============================================================================\n");

        SAMSManager manager = new SAMSManager();

        // 1. اختبار تسجيل الدخول (Algorithm 1.1)
        System.out.println("--- [1] اختبار خوارزمية تسجيل الدخول (Login) ---");
        try {
            User admin = manager.login("admin", "123456");
            System.out.println("✅ تم تسجيل دخول المدير بنجاح: " + admin.getUsername() + " | الدور: " + admin.getRole());

            User studentUser = manager.login("202411586", "123456");
            System.out.println("✅ تم تسجيل دخول الطالبة (رغدة ابراهيم): " + studentUser.getUsername() + " | الدور: " + studentUser.getRole());
        } catch (Exception e) {
            System.out.println("❌ خطأ تسجيل الدخول: " + e.getMessage());
        }

        // 2. اختبار إضافة طالب جديد (Algorithm 1.2)
        System.out.println("\n--- [2] اختبار خوارزمية إضافة طالب جديد (Add Student) ---");
        try {
            Student sNew = manager.addStudent(202411605, "30309190108888", "يوسف عادل خليل",
                    LocalDate.of(2003, 9, 19), 'M', "01099887766", "youssef@sams.edu",
                    "القاهرة الجديدة", 3, 3);
            System.out.println("✅ تم تسجيل الطالب الجديد بنجاح: " + sNew.getFullName() + " | كود: " + sNew.getStudentId() + " | الحالة: " + sNew.getStatus());
        } catch (Exception e) {
            System.out.println("❌ خطأ: " + e.getMessage());
        }

        // 3. اختبار تسجيل المقررات وفحص سقف الـ 18 ساعة معتمدة (Algorithm 1.3)
        System.out.println("\n--- [3] اختبار خوارزمية تسجيل المقررات وحد الـ 18 ساعة ---");
        try {
            int studentId = 202411586; // رغدة
            System.out.println("تسجيل المقررات للطالبة رغدة (مصروفاتها مسددة):");
            manager.registerCourse(studentId, "CS301", "2026/2027", 2);
            manager.registerCourse(studentId, "CS302", "2026/2027", 2);
            manager.registerCourse(studentId, "CS303", "2026/2027", 2);
            manager.registerCourse(studentId, "CS304", "2026/2027", 2);
            manager.registerCourse(studentId, "IS305", "2026/2027", 2);
            manager.registerCourse(studentId, "IS306", "2026/2027", 2); // 6 مواد * 3 ساعات = 18 ساعة
            System.out.println("✅ تم تسجيل 6 مقررات بنجاح بإجمالي 18 ساعة معتمدة.");

            // محاولة إضافة مقرر إضافي لاختبار رفض تجاوز 18 ساعة
            System.out.println("محاولة تسجيل مقرر إضافي (ساعات زائدة):");
            manager.getCourses().put("EXTRA", new Course("EXTRA", "مشروع متقدم", 3, 2, 3, 1));
            manager.registerCourse(studentId, "EXTRA", "2026/2027", 2);
        } catch (Exception e) {
            System.out.println("🛡️ تم منع التسجيل بنجاح طبقاً لقاعدة العمل: " + e.getMessage());
        }

        // اختبار منع التسجيل لطالب عليه مصروفات متأخرة
        try {
            System.out.println("محاولة تسجيل مقررات لطالب عليه مصروفات متأخرة (أحمد الشناوي):");
            manager.registerCourse(202411601, "CS301", "2026/2027", 2);
        } catch (Exception e) {
            System.out.println("🛡️ تم حجب التسجيل بنجاح بسبب التعثر المالي: " + e.getMessage());
        }

        // 4. اختبار تسجيل الحضور والغياب وإنذار الـ 25% (Algorithm 1.4)
        System.out.println("\n--- [4] اختبار خوارزمية الحضور والغياب وإنذار الـ 25% ---");
        int testStudent = 202411605;
        manager.recordAttendance(testStudent, "CS301", LocalDate.of(2026, 2, 1), "غائب");
        manager.recordAttendance(testStudent, "CS301", LocalDate.of(2026, 2, 8), "غائب");
        manager.recordAttendance(testStudent, "CS301", LocalDate.of(2026, 2, 15), "حاضر");
        manager.recordAttendance(testStudent, "CS301", LocalDate.of(2026, 2, 22), "غائب");
        double absRate = manager.calculateAbsenceRate(testStudent, "CS301");
        System.out.println("نسبة غياب الطالب " + testStudent + " هي: " + absRate + "% (تجاوزت 25% -> تم إصدار الإنذار)");

        // 5. اختبار رصد الدرجات وحساب المعدل التراكمي GPA (Algorithm 1.5)
        System.out.println("\n--- [5] اختبار خوارزمية رصد الدرجات وحساب المعدل التراكمي (GPA) ---");
        Grade g1 = manager.enterGrade(202411586, "CS301", "2026/2027", 19.5, 19.0, 56.5); // total 95 -> A (4.0)
        Grade g2 = manager.enterGrade(202411586, "CS302", "2026/2027", 18.5, 19.0, 54.0); // total 91.5 -> A (4.0)
        Grade g3 = manager.enterGrade(202411586, "CS303", "2026/2027", 17.0, 16.0, 51.0); // total 84.0 -> B (3.0)
        System.out.println("درجة مادة CS301: " + g1.getTotal() + "/100 -> التقدير: " + g1.getLetterGrade() + " | النقاط: " + g1.getGradePoints());
        System.out.println("درجة مادة CS302: " + g2.getTotal() + "/100 -> التقدير: " + g2.getLetterGrade() + " | النقاط: " + g2.getGradePoints());
        System.out.println("درجة مادة CS303: " + g3.getTotal() + "/100 -> التقدير: " + g3.getLetterGrade() + " | النقاط: " + g3.getGradePoints());
        System.out.println("المعدل التراكمي المحسوب آلياً لرغدة: " + manager.getStudents().get(202411586).getGpa() + " من 4.00");

        // 6. اختبار سداد المصروفات وتوليد رقم الإيصال الفريد (Algorithm 1.6)
        System.out.println("\n--- [6] اختبار خوارزمية سداد المصروفات وإصدار الإيصال ---");
        try {
            // سداد باقي مصروفات كارولين
            Payment p = manager.payFee(2, 3500.0, "فيزا / بطاقة", 4);
            System.out.println("✅ تم السداد بنجاح! رقم الإيصال الرسمي: " + p.getReceiptNo() + " | المبلغ: " + p.getAmount() + " ج.م.");
            System.out.println("حالة مطالبة المصروفات الآن: " + manager.getFees().get(2).getStatus());
        } catch (Exception e) {
            System.out.println("❌ خطأ السداد: " + e.getMessage());
        }

        // 7. اختبار طلب وإصدار مستند رسمي (Algorithm 1.7)
        System.out.println("\n--- [7] اختبار خوارزمية طلب وإصدار المستندات الرسمية ---");
        try {
            DocumentRequest req = manager.requestDocument(202411586, "شهادة قيد رسمية");
            System.out.println("✅ تم تقديم طلب المستند رقم: " + req.getRequestId() + " بنجاح | الحالة: " + req.getStatus());

            // اعتماد الموظف للطلب
            manager.approveDocument(req.getRequestId(), 3);
            System.out.println("✅ تم اعتماد وإصدار المستند من الموظف | الحالة الحالية: " + req.getStatus() + " | تاريخ الإصدار: " + req.getIssueDate());
        } catch (Exception e) {
            System.out.println("❌ خطأ المستند: " + e.getMessage());
        }

        System.out.println("\n===============================================================================");
        System.out.println("              ✅ تم تنفيذ كافة الخوارزميات وقواعد العمل بنجاح تام!            ");
        System.out.println("===============================================================================");
    }
}
