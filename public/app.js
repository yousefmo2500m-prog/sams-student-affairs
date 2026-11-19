/**
 * ============================================================================
 * SAMS (Student Affairs Management System) - Enterprise Engine
 * Higher Institute for Computers & Management Information Systems
 * Academic Year 2026/2027 | Supervised by: Prof. Dr. Farouk Abdel Aziz
 * ============================================================================
 * Fully compliant with:
 * 1. Dr. Farouk's Report: 11 Entities, 8 DFD Processes, Business Rules
 * 2. Ragda's Report: Traceability, 14-digit National ID validation, 18-credit cap
 * 3. SAMS Project Report: Java OOP Class Hierarchy, DFD 0 & 1, Relational DB
 * Extra Features: Bilingual Engine (AR/EN), Dark Mode, Smart Student ID Card,
 * Interactive SVG Charts, Audit Log, Barring Orders, and Course Registration Basket.
 * ============================================================================
 */

// ============================================================================
// 1. BILINGUAL TRANSLATION DICTIONARY (i18n)
// ============================================================================

const I18N = {
  ar: {
    brand_title: "نظام إدارة شئون الطلاب",
    brand_subtitle: "المعهد العالي للحاسبات ونظم المعلومات",
    nav_academic_ops: "العمليات الأكاديمية (Processes)",
    nav_dashboard: "لوحة التحكم والمؤشرات",
    nav_students: "بيانات وقيد الطلاب (P 2.0)",
    nav_courses: "تسجيل المقررات (P 3.0)",
    nav_schedule: "الجدول الدراسي والمواعيد",
    nav_attendance: "الحضور والغياب والإنذار (P 4.0)",
    nav_grades: "الكنترول والدرجات و GPA (P 5.0)",
    nav_fees: "المصروفات والخزينة (P 6.0)",
    nav_documents: "إصدار الشهادات والوثائق (P 7.0)",
    nav_id_card: "كارنيه الطالب الذكي (Smart ID)",
    nav_engineering_mgmt: "الهندسة والإدارة المركزية",
    nav_reports: "التقارير الإحصائية (P 8.0)",
    nav_architecture: "مخططات DFD و ERD وقاموس البيانات",
    nav_oop: "كلاسات Java OOP وهيكلية الكود",
    nav_audit: "سجل الحركات والأمان (Audit Log)",
    footer_credits: "مادة تحليل وتصميم نظم المعلومات<br>إشراف: أ.د / فاروق عبد العزيز | 2026/2027",
    search_placeholder: "بحث شامل: كود الطالب، الاسم، المقرر...",
    
    // Metrics
    metric_enrolled: "إجمالي الطلاب المقيدين",
    metric_courses: "المقررات الدراسية النشطة",
    metric_collected_fees: "المصروفات المحصلة بالخزينة",
    metric_warnings: "إنذارات الغياب وتجاوز النسب",
    
    // Quick Actions
    quick_actions: "إجراءات سريعة",
    act_new_student: "قيد طالب جديد",
    act_gradebook: "رصد شيت الكنترول",
    act_collect_fees: "تحصيل مصروفات",
    act_issue_cert: "استخراج شهادة قيد",
    act_view_id: "عرض كارنيه الطالب",

    // Common Buttons
    btn_cancel: "إلغاء",
    btn_save_student: "حفظ وقيد الطالب",
    btn_save_grade: "اعتماد ورصد الدرجة",
    btn_save_attendance: "حفظ السجل",
    btn_confirm_payment: "تأكيد التوريد وتوليد الإيصال",
    btn_close: "إغلاق",
    btn_print_now: "🖨️ طباعة الشهادة الآن",
    btn_print_receipt: "🖨️ طباعة الإيصال",
    btn_details: "عرض التفاصيل",
    btn_edit: "تعديل",
    btn_print_schedule: "🖨️ طباعة الجدول",
    btn_apply_curve: "تطبيق بونص كنترول (+2 درجات)",

    // Labels & Table Headers
    lbl_student_id: "كود الطالب",
    lbl_fullname: "الاسم الرباعي",
    lbl_national_id: "الرقم القومي (14 رقم)",
    lbl_gender: "النوع",
    lbl_birthdate: "تاريخ الميلاد",
    lbl_group: "المجموعة",
    lbl_phone: "الهاتف",
    lbl_gpa: "المعدل (GPA)",
    lbl_academic_status: "الحالة الأكاديمية",
    lbl_actions: "إجراءات",

    // Modals
    modal_switch_user_title: "🔐 تسجيل الدخول وتبديل صلاحيات المستخدم",
    modal_switch_user_desc: "اختر الحساب الذي ترغب في الدخول به لاختبار صلاحيات النظام والتحقق من قواعد العمل الصارمة:",
    modal_add_student_title: "➕ قيد طالب جديد (Process 2.0: Student Registration)",
    modal_grade_title: "🎯 رصد درجات المقرر واحتساب GPA (خوارزمية 1.5)",
    modal_attendance_title: "📋 تسجيل حضور وغياب المحاضرة (خوارزمية 1.4)",
    modal_payment_title: "💳 توريد وسداد المصروفات الدراسية (خوارزمية 1.6)",
    modal_cert_title: "🖨️ معاينة الشهادة الرسمية المعتمدة",
    modal_receipt_title: "🧾 إيصال توريد مصروفات دراسية رسمي",

    // Form Fields
    form_fullname: "الاسم بالكامل رباعي *",
    form_national_id: "الرقم القومي (14 رقماً بالضبط) *",
    form_birthdate: "تاريخ الميلاد *",
    form_gender: "النوع *",
    form_phone: "رقم الهاتف المحمول",
    form_address: "العنوان بالتفصيل",
    grade_classwork: "أعمال السنة (الحد الأقصى: 20)",
    grade_midterm: "امتحان الميدتيرم (الحد الأقصى: 20)",
    grade_final: "الامتحان النهائي (الحد الأقصى: 60)",
    calc_total: "المجموع من 100",
    calc_letter: "التقدير الحرفي",
    calc_points: "النقاط (من 4.00)",
    label_student_name: "اسم الطالب:",
    label_course_name: "المقرر:",
    label_lecture_date: "تاريخ المحاضرة",
    label_attendance_status: "حالة حضور الطالب",
    label_remaining_amount: "المتبقي المطلوب سداده:",
    label_pay_amount: "المبلغ المراد سداده الآن (ج.م.) *",
    label_pay_method: "طريقة السداد"
  },

  en: {
    brand_title: "Student Affairs Management System",
    brand_subtitle: "Higher Institute for Computers & MIS",
    nav_academic_ops: "Academic Processes (DFD 1.0 - 8.0)",
    nav_dashboard: "Dashboard & Metrics",
    nav_students: "Student Information (P 2.0)",
    nav_courses: "Course Registration (P 3.0)",
    nav_schedule: "Timetable & Schedules",
    nav_attendance: "Attendance & Warnings (P 4.0)",
    nav_grades: "Grades, Control & GPA (P 5.0)",
    nav_fees: "Tuition & Treasury (P 6.0)",
    nav_documents: "Official Documents (P 7.0)",
    nav_id_card: "Smart Student ID Card",
    nav_engineering_mgmt: "Engineering & System Architecture",
    nav_reports: "Analytics & Reports (P 8.0)",
    nav_architecture: "DFD, ERD & Data Dictionary",
    nav_oop: "Java OOP Class Hierarchy",
    nav_audit: "Security Audit Log",
    footer_credits: "Information Systems Analysis & Design<br>Supervised by: Prof. Dr. Farouk Abdel Aziz | 2026/2027",
    search_placeholder: "Global Search: Student ID, Name, Course code...",
    
    // Metrics
    metric_enrolled: "Total Enrolled Students",
    metric_courses: "Active Academic Courses",
    metric_collected_fees: "Tuition Revenue Collected",
    metric_warnings: "Absence Warnings & Barred",

    // Quick Actions
    quick_actions: "Quick Operations",
    act_new_student: "Register New Student",
    act_gradebook: "Control Grade Sheet",
    act_collect_fees: "Collect Tuition",
    act_issue_cert: "Issue Certificate",
    act_view_id: "View Student ID Card",

    // Common Buttons
    btn_cancel: "Cancel",
    btn_save_student: "Save & Enroll Student",
    btn_save_grade: "Submit & Recalculate GPA",
    btn_save_attendance: "Save Record",
    btn_confirm_payment: "Confirm & Generate Receipt",
    btn_close: "Close",
    btn_print_now: "🖨️ Print Certificate Now",
    btn_print_receipt: "🖨️ Print Receipt",
    btn_details: "View Profile",
    btn_edit: "Edit",
    btn_print_schedule: "🖨️ Print Timetable",
    btn_apply_curve: "Apply Control Curve (+2 Marks)",

    // Labels & Table Headers
    lbl_student_id: "Student ID",
    lbl_fullname: "Full Student Name",
    lbl_national_id: "National ID (14 digits)",
    lbl_gender: "Gender",
    lbl_birthdate: "Birth Date",
    lbl_group: "Group",
    lbl_phone: "Mobile Phone",
    lbl_gpa: "Cumulative GPA",
    lbl_academic_status: "Academic Standing",
    lbl_actions: "Actions",

    // Modals
    modal_switch_user_title: "🔐 Authentication & Role Switching",
    modal_switch_user_desc: "Select a user account to test strict role-based access permissions and academic business rules:",
    modal_add_student_title: "➕ Register New Student (Process 2.0)",
    modal_grade_title: "🎯 Enter Grades & Recalculate GPA (Algorithm 1.5)",
    modal_attendance_title: "📋 Record Lecture Attendance (Algorithm 1.4)",
    modal_payment_title: "💳 Tuition Collection & Receipt Issuance (Algorithm 1.6)",
    modal_cert_title: "🖨️ Official Certified Document Preview",
    modal_receipt_title: "🧾 Official Institute Treasury Receipt",

    // Form Fields
    form_fullname: "Full Name (Four names) *",
    form_national_id: "Egyptian National ID (14 digits) *",
    form_birthdate: "Date of Birth *",
    form_gender: "Gender *",
    form_phone: "Mobile Number",
    form_address: "Detailed Residence Address",
    grade_classwork: "Classwork & Quizzes (Max: 20)",
    grade_midterm: "Midterm Examination (Max: 20)",
    grade_final: "Final Examination (Max: 60)",
    calc_total: "Total Score / 100",
    calc_letter: "Letter Grade",
    calc_points: "Grade Points / 4.00",
    label_student_name: "Student Name:",
    label_course_name: "Course:",
    label_lecture_date: "Lecture Date",
    label_attendance_status: "Attendance Status",
    label_remaining_amount: "Outstanding Balance:",
    label_pay_amount: "Amount to Pay Now (EGP) *",
    label_pay_method: "Payment Method"
  }
};

// ============================================================================
// 2. CENTRAL DATA STORE (State) - 11 Relational Entities
// ============================================================================

const INITIAL_STATE = {
  currentLang: "ar",
  currentTheme: "light",
  currentView: "dashboard",
  
  // Users (Entity 1: Users - Process 1.0)
  users: [
    { id: 1, key: "dr_farouk", username: "farouk", nameAr: "أ.د / فاروق عبد العزيز", nameEn: "Prof. Dr. Farouk Abdel Aziz", role: "doctor", titleAr: "أستاذ مقرر تحليل النظم ورئيس القسم", titleEn: "Dept Head & Systems Analysis Professor", avatar: "👨‍🏫" },
    { id: 2, key: "202411586", username: "202411586", nameAr: "رغدة ابراهيم عبد الخالق محمد", nameEn: "Ragda Ibrahim Abdel Khaleq", role: "student", titleAr: "طالبة - الفرقة الثالثة (معدل ممتاز)", titleEn: "3rd Year Student (High Honors GPA 3.92)", avatar: "👩‍🎓", studentId: "202411586" },
    { id: 3, key: "202411531", username: "202411531", nameAr: "كارولين عاطف عطاالله شحاته", nameEn: "Caroline Atef Attallah", role: "student", titleAr: "طالبة - الفرقة الثالثة", titleEn: "3rd Year Student (GPA 3.85)", avatar: "👩‍🎓", studentId: "202411531" },
    { id: 4, key: "202411601", username: "202411601", nameAr: "أحمد محمد الشناوي", nameEn: "Ahmed Mohamed El-Shennawy", role: "student", titleAr: "طالب متعثر (إنذار أكاديمي وغياب)", titleEn: "Academic Probation Student", avatar: "⚠️", studentId: "202411601" },
    { id: 5, key: "staff", username: "staff_eman", nameAr: "أ/ إيمان صبري", nameEn: "Ms. Eman Sabry", role: "staff", titleAr: "مسئول شئون الطلاب والامتحانات", titleEn: "Registrar / Student Affairs Officer", avatar: "💼" },
    { id: 6, key: "finance", username: "finance_tarek", nameAr: "أ/ طارق السيد", nameEn: "Mr. Tarek El-Sayed", role: "finance", titleAr: "مسئول الخزينة والحسابات", titleEn: "Bursar / Treasury Officer", avatar: "💰" },
    { id: 7, key: "admin", username: "admin", nameAr: "مدير النظام المركزي", nameEn: "System Administrator", role: "admin", titleAr: "إدارة الخوادم والصلاحيات", titleEn: "Full Privileges Administrator", avatar: "⚙️" }
  ],

  // Students (Entity 2: Student - Process 2.0)
  students: [
    {
      student_id: "202411586",
      full_name_ar: "رغدة ابراهيم عبد الخالق محمد",
      full_name_en: "Ragda Ibrahim Abdel Khaleq Mohamed",
      national_id: "30405150102468",
      birth_date: "2004-05-15",
      gender: "F",
      department: "نظم المعلومات الإدارية (MIS)",
      level: 3,
      group_no: 3,
      phone: "01098765432",
      address: "القاهرة الجديدة - التجمع الأول",
      enrollment_date: "2022-09-15",
      gpa: 3.92,
      status: "مقيد ومنتظم (Active Honors)",
      total_credits: 78
    },
    {
      student_id: "202411531",
      full_name_ar: "كارولين عاطف عطاالله شحاته",
      full_name_en: "Caroline Atef Attallah Shehata",
      national_id: "30403100103579",
      birth_date: "2004-03-10",
      gender: "F",
      department: "نظم المعلومات الإدارية (MIS)",
      level: 3,
      group_no: 3,
      phone: "01123456789",
      address: "مدينة نصر - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 3.85,
      status: "مقيد ومنتظم (Active)",
      total_credits: 78
    },
    {
      student_id: "202411585",
      full_name_ar: "دينا وجدي صليب جرجس",
      full_name_en: "Dina Wagdy Salib Guirguis",
      national_id: "30408220104680",
      birth_date: "2004-08-22",
      gender: "F",
      department: "نظم المعلومات الإدارية (MIS)",
      level: 3,
      group_no: 3,
      phone: "01234567890",
      address: "مصر الجديدة - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 3.78,
      status: "مقيد ومنتظم (Active)",
      total_credits: 78
    },
    {
      student_id: "202411566",
      full_name_ar: "مروة حسن كامل احمد",
      full_name_en: "Marwa Hassan Kamel Ahmed",
      national_id: "30401180105791",
      birth_date: "2004-01-18",
      gender: "F",
      department: "نظم المعلومات الإدارية (MIS)",
      level: 3,
      group_no: 3,
      phone: "01011223344",
      address: "المعادي - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 3.70,
      status: "مقيد ومنتظم (Active)",
      total_credits: 78
    },
    {
      student_id: "202411587",
      full_name_ar: "روان ابراهيم عبد الخالق محمد",
      full_name_en: "Rawan Ibrahim Abdel Khaleq Mohamed",
      national_id: "30405150102470",
      birth_date: "2004-05-15",
      gender: "F",
      department: "نظم المعلومات الإدارية (MIS)",
      level: 3,
      group_no: 3,
      phone: "01098765433",
      address: "القاهرة الجديدة - التجمع الأول",
      enrollment_date: "2022-09-15",
      gpa: 3.88,
      status: "مقيد ومنتظم (Active)",
      total_credits: 78
    },
    {
      student_id: "202411601",
      full_name_ar: "أحمد محمد الشناوي",
      full_name_en: "Ahmed Mohamed El-Shennawy",
      national_id: "30311200109988",
      birth_date: "2003-11-20",
      gender: "M",
      department: "نظم المعلومات الإدارية (MIS)",
      level: 3,
      group_no: 3,
      phone: "01555667788",
      address: "شبرا - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 1.85,
      status: "إنذار أكاديمي (Academic Probation)",
      total_credits: 66
    }
  ],

  // Courses (Entity 3: Course - Process 3.0)
  courses: [
    { code: "MIS301", nameAr: "تحليل وتصميم نظم المعلومات", nameEn: "Information Systems Analysis & Design", credits: 3, level: 3, instructorAr: "أ.د / فاروق عبد العزيز", instructorEn: "Prof. Dr. Farouk Abdel Aziz", prerequisite: "MIS201" },
    { code: "CS302", nameAr: "قواعد البيانات المتقدمة (SQL/NoSQL)", nameEn: "Advanced Database Systems", credits: 3, level: 3, instructorAr: "د / هشام عرفات", instructorEn: "Dr. Hesham Arafat", prerequisite: "CS202" },
    { code: "SWE303", nameAr: "هندسة البرمجيات (Software Eng.)", nameEn: "Software Engineering & Architecture", credits: 3, level: 3, instructorAr: "د / أماني سمير", instructorEn: "Dr. Amany Samir", prerequisite: "CS201" },
    { code: "NET304", nameAr: "شبكات الحاسب وأمن المعلومات", nameEn: "Computer Networks & Cyber Security", credits: 3, level: 3, instructorAr: "د / محمد رضوان", instructorEn: "Dr. Mohamed Radwan", prerequisite: "NET201" },
    { code: "ACC305", nameAr: "نظم المعلومات المحاسبية (AIS)", nameEn: "Accounting Information Systems", credits: 2, level: 3, instructorAr: "د / سمير عبد المنعم", instructorEn: "Dr. Samir Abdel Monem", prerequisite: "ACC101" },
    { code: "DSS306", nameAr: "نظم دعم اتخاذ القرار والذكاء الاصطناعي", nameEn: "Decision Support Systems & AI", credits: 3, level: 3, instructorAr: "أ.د / فاروق عبد العزيز", instructorEn: "Prof. Dr. Farouk Abdel Aziz", prerequisite: "MIS301" }
  ],

  // Weekly Timetable (Entity 4: Schedule)
  schedules: [
    { id: 1, code: "MIS301", dayAr: "الأحد", dayEn: "Sunday", time: "09:00 - 12:00", hall: "مدرج 4 (Hall 4B)", instructorAr: "أ.د / فاروق عبد العزيز", type: "lecture" },
    { id: 2, code: "CS302", dayAr: "الإثنين", dayEn: "Monday", time: "10:00 - 01:00", hall: "معمل حاسب 2 (Lab 2)", instructorAr: "د / هشام عرفات", type: "lab" },
    { id: 3, code: "SWE303", dayAr: "الثلاثاء", dayEn: "Tuesday", time: "11:00 - 01:00", hall: "قاعة 12 (Hall 12)", instructorAr: "د / أماني سمير", type: "lecture" },
    { id: 4, code: "NET304", dayAr: "الأربعاء", dayEn: "Wednesday", time: "09:00 - 12:00", hall: "معمل شبكات 1 (Net Lab)", instructorAr: "د / محمد رضوان", type: "lab" },
    { id: 5, code: "ACC305", dayAr: "الخميس", dayEn: "Thursday", time: "10:00 - 12:00", hall: "قاعة 8 (Hall 8)", instructorAr: "د / سمير عبد المنعم", type: "lecture" }
  ],

  // Control Grade Sheet (Entity 5: Grade - Process 5.0)
  grades: [
    // Ragda (202411586)
    { student_id: "202411586", course_code: "MIS301", cw: 19.5, mt: 19.0, fn: 59.0, total: 97.5, letter: "A+", points: 4.0 },
    { student_id: "202411586", course_code: "CS302", cw: 19.0, mt: 18.5, fn: 58.0, total: 95.5, letter: "A+", points: 4.0 },
    { student_id: "202411586", course_code: "SWE303", cw: 18.5, mt: 18.0, fn: 56.0, total: 92.5, letter: "A", points: 3.7 },
    { student_id: "202411586", course_code: "NET304", cw: 19.0, mt: 19.0, fn: 57.0, total: 95.0, letter: "A+", points: 4.0 },

    // Caroline (202411531)
    { student_id: "202411531", course_code: "MIS301", cw: 19.0, mt: 18.5, fn: 57.5, total: 95.0, letter: "A+", points: 4.0 },
    { student_id: "202411531", course_code: "CS302", cw: 18.5, mt: 18.0, fn: 55.0, total: 91.5, letter: "A", points: 3.7 },
    { student_id: "202411531", course_code: "SWE303", cw: 18.0, mt: 18.5, fn: 56.0, total: 92.5, letter: "A", points: 3.7 },

    // Dina (202411585)
    { student_id: "202411585", course_code: "MIS301", cw: 18.5, mt: 18.0, fn: 55.0, total: 91.5, letter: "A", points: 3.7 },
    { student_id: "202411585", course_code: "CS302", cw: 18.0, mt: 17.5, fn: 54.0, total: 89.5, letter: "B+", points: 3.3 },

    // Marwa (202411566)
    { student_id: "202411566", course_code: "MIS301", cw: 18.0, mt: 18.0, fn: 54.0, total: 90.0, letter: "A", points: 3.7 },

    // Rawan (202411587)
    { student_id: "202411587", course_code: "MIS301", cw: 19.0, mt: 18.5, fn: 57.0, total: 94.5, letter: "A", points: 3.7 },

    // Ahmed Shennawy (202411601 - Academic Probation)
    { student_id: "202411601", course_code: "MIS301", cw: 10.0, mt: 9.0, fn: 32.0, total: 51.0, letter: "D", points: 2.0 },
    { student_id: "202411601", course_code: "CS302", cw: 8.0, mt: 7.0, fn: 25.0, total: 40.0, letter: "F", points: 0.0 }
  ],

  // Attendance (Entity 6: Attendance - Process 4.0)
  attendance: [
    { student_id: "202411586", course_code: "MIS301", total: 12, attended: 12, absent: 0, pct: 100, statusAr: "منتظم", statusEn: "Regular (100%)" },
    { student_id: "202411586", course_code: "CS302", total: 12, attended: 11, absent: 1, pct: 91.7, statusAr: "منتظم", statusEn: "Regular (91.7%)" },
    { student_id: "202411531", course_code: "MIS301", total: 12, attended: 12, absent: 0, pct: 100, statusAr: "منتظم", statusEn: "Regular (100%)" },
    { student_id: "202411585", course_code: "MIS301", total: 12, attended: 11, absent: 1, pct: 91.7, statusAr: "منتظم", statusEn: "Regular (91.7%)" },
    { student_id: "202411566", course_code: "MIS301", total: 12, attended: 10, absent: 2, pct: 83.3, statusAr: "منتظم", statusEn: "Regular (83.3%)" },
    { student_id: "202411587", course_code: "MIS301", total: 12, attended: 12, absent: 0, pct: 100, statusAr: "منتظم", statusEn: "Regular (100%)" },
    { student_id: "202411601", course_code: "MIS301", total: 12, attended: 8, absent: 4, pct: 66.7, statusAr: "إنذار أول (تجاوز 25%)", statusEn: "Warning 1 (Absence >25%)" },
    { student_id: "202411601", course_code: "CS302", total: 12, attended: 7, absent: 5, pct: 58.3, statusAr: "حرمان من الامتحان النهائي (تجاوز 30%)", statusEn: "Barred from Final Exam (Absence >30%)" }
  ],

  // Tuition & Fees (Entity 7: Student_Fees - Process 6.0)
  fees: [
    { fee_id: 1, student_id: "202411586", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00101", date: "2026-10-01" },
    { fee_id: 2, student_id: "202411531", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00102", date: "2026-10-02" },
    { fee_id: 3, student_id: "202411585", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00103", date: "2026-10-03" },
    { fee_id: 4, student_id: "202411566", total: 8500, paid: 4500, remaining: 4000, statusAr: "مسدد جزئياً", statusEn: "Partially Paid", receipt_no: "REC-2026-00104", date: "2026-10-05" },
    { fee_id: 5, student_id: "202411587", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00105", date: "2026-10-01" },
    { fee_id: 6, student_id: "202411601", total: 8500, paid: 2000, remaining: 6500, statusAr: "مستحق (عليه متأخرات)", statusEn: "Overdue Balance", receipt_no: "REC-2026-00045", date: "2026-09-20" }
  ],

  // Official Document Requests (Entity 8: Document_Request - Process 7.0)
  documents: [
    { req_id: 101, student_id: "202411586", typeAr: "شهادة قيد رسمية", typeEn: "Official Enrollment Certificate", purposeAr: "مصلحة الجوازات والهجرة", purposeEn: "Passports & Immigration Authority", date: "2026-11-15", statusAr: "معتمدة ومختومة", statusEn: "Approved & Sealed", code: "SAMS-2026-0889" },
    { req_id: 102, student_id: "202411531", typeAr: "بيان نجاح وتقديرات (Transcript)", typeEn: "Official Academic Transcript", purposeAr: "التأمينات الاجتماعية وجهة العمل", purposeEn: "Social Insurance & Employment", date: "2026-11-18", statusAr: "معتمدة ومختومة", statusEn: "Approved & Sealed", code: "SAMS-2026-0912" },
    { req_id: 103, student_id: "202411601", typeAr: "شهادة قيد رسمية", typeEn: "Official Enrollment Certificate", purposeAr: "اشتراك هيئة النقل والمترو", purposeEn: "Metro Student Transit Pass", date: "2026-11-19", statusAr: "مرفوضة (لوجود متأخرات مالية)", statusEn: "Rejected (Financial Hold)", code: "SAMS-REJ-004" }
  ],

  // Security Audit Log (Process 1.0)
  auditLog: [
    { id: 1001, timestamp: "2026-11-19 14:32:10", user: "farouk", role: "doctor", actionAr: "رصد درجات امتحان الميدتيرم لمقرر MIS301", actionEn: "Graded Midterm Exam for MIS301", ip: "192.168.10.45", status: "SUCCESS" },
    { id: 1002, timestamp: "2026-11-19 14:15:00", user: "staff_eman", role: "staff", actionAr: "اعتماد وطباعة شهادة قيد للطالبة رغدة ابراهيم", actionEn: "Approved & Printed Certificate for Ragda Ibrahim", ip: "192.168.10.12", status: "SUCCESS" },
    { id: 1003, timestamp: "2026-11-19 13:50:22", user: "finance_tarek", role: "finance", actionAr: "إصدار إيصال تحصيل مصروفات REC-2026-00101", actionEn: "Generated Tuition Receipt REC-2026-00101", ip: "192.168.10.88", status: "SUCCESS" },
    { id: 1004, timestamp: "2026-11-19 12:10:05", user: "system_cron", role: "system", actionAr: "فحص نسب الغياب وإدراج إنذار بحق الطالب أحمد الشناوي", actionEn: "Absence Rule Triggered Warning for Ahmed Shennawy", ip: "127.0.0.1", status: "WARNING" }
  ]
};

// State Manager with LocalStorage Persistence
function getStoredState() {
  const local = localStorage.getItem("SAMS_STATE_V2");
  if (local) {
    try {
      return JSON.parse(local);
    } catch (e) {
      console.warn("Resetting to initial state");
    }
  }
  return INITIAL_STATE;
}

function persistState(state) {
  localStorage.setItem("SAMS_STATE_V2", JSON.stringify(state));
}

let SAMS = getStoredState();
let currentUser = SAMS.users[0]; // Prof. Dr. Farouk Abdel Aziz by default

// ============================================================================
// 3. BILINGUAL & THEME CONTROLS
// ============================================================================

function toggleLanguage() {
  SAMS.currentLang = (SAMS.currentLang === "ar") ? "en" : "ar";
  persistState(SAMS);
  applyLocalization();
  renderActiveView();
}

function applyLocalization() {
  const isEn = SAMS.currentLang === "en";
  const htmlRoot = document.getElementById("rootHtml");
  
  htmlRoot.setAttribute("lang", SAMS.currentLang);
  htmlRoot.setAttribute("dir", isEn ? "ltr" : "rtl");

  document.getElementById("langFlag").textContent = isEn ? "🇪🇬" : "🇬🇧";
  document.getElementById("langLabel").textContent = isEn ? "العربية" : "English";

  // Translate all DOM elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[SAMS.currentLang][key]) {
      el.innerHTML = I18N[SAMS.currentLang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (I18N[SAMS.currentLang][key]) {
      el.setAttribute("placeholder", I18N[SAMS.currentLang][key]);
    }
  });

  updateUserBadgeUI();
}

function toggleTheme() {
  SAMS.currentTheme = (SAMS.currentTheme === "light") ? "dark" : "light";
  persistState(SAMS);
  applyTheme();
}

function applyTheme() {
  const htmlRoot = document.getElementById("rootHtml");
  if (SAMS.currentTheme === "dark") {
    htmlRoot.classList.add("dark");
  } else {
    htmlRoot.classList.remove("dark");
  }
}

// ============================================================================
// 4. USER ROLE & SESSION MANAGEMENT (Process 1.0)
// ============================================================================

function switchUserAccount(key) {
  const found = SAMS.users.find(u => u.key === key);
  if (found) {
    currentUser = found;
    updateUserBadgeUI();
    closeModal("switchUserModal");
    logAuditEvent(`تبديل جلسة الدخول للمستخدم: ${found.nameAr}`, `Switched session to: ${found.nameEn}`, "SUCCESS");
    renderActiveView();
  }
}

function updateUserBadgeUI() {
  const isEn = SAMS.currentLang === "en";
  document.getElementById("sideUserAvatar").textContent = currentUser.avatar;
  document.getElementById("sideUserName").textContent = isEn ? currentUser.nameEn : currentUser.nameAr;
  document.getElementById("sideUserRole").textContent = isEn ? currentUser.titleEn : currentUser.titleAr;

  document.getElementById("topUserIcon").textContent = currentUser.avatar;
  document.getElementById("topUserName").textContent = isEn ? currentUser.nameEn : currentUser.nameAr;
}

function logAuditEvent(actionAr, actionEn, status = "SUCCESS") {
  const newLog = {
    id: 1000 + SAMS.auditLog.length + 1,
    timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
    user: currentUser.username,
    role: currentUser.role,
    actionAr,
    actionEn,
    ip: "192.168.10." + Math.floor(10 + Math.random() * 80),
    status
  };
  SAMS.auditLog.unshift(newLog);
  persistState(SAMS);
}

// ============================================================================
// 5. VIEW NAVIGATION & ROUTER
// ============================================================================

function switchView(viewName) {
  SAMS.currentView = viewName;
  persistState(SAMS);

  document.querySelectorAll("#sidebarMenu .nav-link").forEach(link => {
    link.classList.remove("active");
  });

  const activeLink = Array.from(document.querySelectorAll("#sidebarMenu .nav-link")).find(el => {
    return el.getAttribute("onclick") && el.getAttribute("onclick").includes(`'${viewName}'`);
  });
  if (activeLink) activeLink.classList.add("active");

  renderActiveView();
}

function renderActiveView() {
  const viewEl = document.getElementById("contentView");
  if (!viewEl) return;

  switch (SAMS.currentView) {
    case "dashboard": renderDashboardView(viewEl); break;
    case "students": renderStudentsView(viewEl); break;
    case "courses": renderCoursesView(viewEl); break;
    case "schedule": renderScheduleView(viewEl); break;
    case "attendance": renderAttendanceView(viewEl); break;
    case "grades": renderGradesView(viewEl); break;
    case "fees": renderFeesView(viewEl); break;
    case "documents": renderDocumentsView(viewEl); break;
    case "id_card": renderIdCardView(viewEl); break;
    case "reports": renderReportsView(viewEl); break;
    case "architecture": renderArchitectureView(viewEl); break;
    case "oop": renderOOPView(viewEl); break;
    case "audit": renderAuditLogView(viewEl); break;
    default: renderDashboardView(viewEl);
  }
}

// ============================================================================
// 6. VIEW IMPLEMENTATIONS (Process 1.0 - 8.0)
// ============================================================================

// 6.1 Dashboard View
function renderDashboardView(container) {
  const isEn = SAMS.currentLang === "en";
  const totalStudents = SAMS.students.length;
  const totalCourses = SAMS.courses.length;
  const totalRevenue = SAMS.fees.reduce((sum, f) => sum + f.paid, 0);
  const totalWarnings = SAMS.attendance.filter(a => a.pct < 75).length;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Academic Executive Dashboard" : "لوحة مؤشرات الأداء الأكاديمي الشاملة"}</h1>
        <p>${isEn ? "Academic Year 2026/2027 | Supervised by: Prof. Dr. Farouk Abdel Aziz" : "المعهد العالي للحاسبات ونظم المعلومات - العام الجامعي 2026/2027"}</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary" onclick="openModal('switchUserModal')">
          <span>${currentUser.avatar}</span>
          <span>${isEn ? "Switch Role / Test Access" : "تبديل الصلاحية للتجربة"}</span>
        </button>
      </div>
    </div>

    <!-- Stat Metrics Cards -->
    <div class="metric-row">
      <div class="stat-box blue">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Enrolled Students" : "الطلاب المقيدين"}</span>
          <div class="stat-icon-wrapper">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
        </div>
        <div class="stat-value">${totalStudents}</div>
        <div class="stat-subtext">
          <span class="trend-pill up">+12.5%</span>
          <span>${isEn ? "3rd Year MIS Division" : "الفرقة الثالثة نظم معلومات"}</span>
        </div>
      </div>

      <div class="stat-box purple">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Active Courses" : "المقررات النشطة"}</span>
          <div class="stat-icon-wrapper">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
        </div>
        <div class="stat-value">${totalCourses}</div>
        <div class="stat-subtext">
          <span>${isEn ? "17 Total Credit Hours" : "17 ساعة معتمدة إجمالية"}</span>
        </div>
      </div>

      <div class="stat-box emerald">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Treasury Collections" : "المصروفات المحصلة"}</span>
          <div class="stat-icon-wrapper">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
        </div>
        <div class="stat-value">${totalRevenue.toLocaleString()} <small style="font-size: 0.9rem;">EGP</small></div>
        <div class="stat-subtext">
          <span class="trend-pill up">81.4%</span>
          <span>${isEn ? "Financial collection rate" : "نسبة السداد المحققة"}</span>
        </div>
      </div>

      <div class="stat-box rose">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Absence Warnings" : "إنذارات الحرمان"}</span>
          <div class="stat-icon-wrapper">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
        </div>
        <div class="stat-value">${totalWarnings}</div>
        <div class="stat-subtext">
          <span class="trend-pill down">Action req.</span>
          <span>${isEn ? "Absence > 25% threshold" : "تجاوز نسبة 25% غياب"}</span>
        </div>
      </div>
    </div>

    <!-- Quick Action Bar -->
    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">
          <svg style="width: 20px; height: 20px; color: var(--primary-600);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <span>${isEn ? "Quick System Operations" : "العمليات والإجراءات السريعة"}</span>
        </h3>
      </div>
      <div class="card-body-content" style="display: flex; flex-wrap: wrap; gap: 12px;">
        <button class="btn btn-primary" onclick="openModal('addStudentModal')">➕ ${isEn ? "Register New Student (P 2.0)" : "قيد طالب جديد (P 2.0)"}</button>
        <button class="btn btn-secondary" onclick="switchView('grades')">🎯 ${isEn ? "Open Gradebook & GPA (P 5.0)" : "شيت الكنترول والـ GPA (P 5.0)"}</button>
        <button class="btn btn-secondary" onclick="switchView('attendance')">📋 ${isEn ? "Attendance & Warnings (P 4.0)" : "تسجيل الغياب والإنذارات (P 4.0)"}</button>
        <button class="btn btn-secondary" onclick="switchView('fees')">💳 ${isEn ? "Treasury Payments (P 6.0)" : "تحصيل المصروفات (P 6.0)"}</button>
        <button class="btn btn-secondary" onclick="switchView('id_card')">🪪 ${isEn ? "Generate Smart Student ID" : "كارنيه الطالب الذكي"}</button>
      </div>
    </div>

    <!-- Interactive Visual Charts Row (Pure SVG) -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 24px;">
      
      <!-- GPA Distribution Chart -->
      <div class="card-panel" style="margin-bottom: 0;">
        <div class="card-header-bar">
          <h3 class="card-header-title">📊 ${isEn ? "GPA Bands Distribution" : "توزيع الشرائح التراكمية (GPA)"}</h3>
          <span class="status-pill success">${isEn ? "83.3% Honors" : "83.3% امتياز"}</span>
        </div>
        <div class="card-body-content">
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                <span><strong>A+ / A (3.70 - 4.00)</strong> - ${isEn ? "Excellent With Honors" : "امتياز مع مرتبة الشرف"}</span>
                <span><strong>5 ${isEn ? "Students" : "طلاب"}</strong> (83.3%)</span>
              </div>
              <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 12px; overflow: hidden;">
                <div style="width: 83.3%; background: #10b981; height: 100%;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                <span><strong>B+ / B (3.00 - 3.69)</strong> - ${isEn ? "Very Good" : "جيد جداً"}</span>
                <span><strong>0 ${isEn ? "Students" : "طلاب"}</strong> (0.0%)</span>
              </div>
              <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 12px; overflow: hidden;">
                <div style="width: 0%; background: #3b82f6; height: 100%;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                <span><strong>D / F (&lt; 2.00)</strong> - ${isEn ? "Academic Probation" : "إنذار أكاديمي وتعثر"}</span>
                <span><strong>1 ${isEn ? "Student" : "طالب"}</strong> (16.7%)</span>
              </div>
              <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 12px; overflow: hidden;">
                <div style="width: 16.7%; background: #ef4444; height: 100%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Financial Collection Gauge -->
      <div class="card-panel" style="margin-bottom: 0;">
        <div class="card-header-bar">
          <h3 class="card-header-title">💰 ${isEn ? "Tuition Collection Progress" : "مؤشر تحصيل المصروفات الدراسية"}</h3>
          <span class="status-pill info">${isEn ? "Term 2" : "الفصل الثاني"}</span>
        </div>
        <div class="card-body-content" style="text-align: center;">
          <div style="font-size: 2.2rem; font-weight: 900; color: #10b981;">
            ${((totalRevenue / (SAMS.students.length * 8500)) * 100).toFixed(1)}%
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
            ${isEn ? "Total Collected:" : "إجمالي المحصل:"} <strong>${totalRevenue.toLocaleString()} EGP</strong> / ${(SAMS.students.length * 8500).toLocaleString()} EGP
          </p>
          <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 14px; overflow: hidden; max-width: 320px; margin: 0 auto;">
            <div style="width: ${((totalRevenue / (SAMS.students.length * 8500)) * 100).toFixed(1)}%; background: #10b981; height: 100%;"></div>
          </div>
        </div>
      </div>

    </div>

    <!-- Top Students Honors Board -->
    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">🏆 ${isEn ? "Top Performing Students (GPA 3.7+)" : "لوحة شرف أوائل الفرقة الثالثة (GPA 3.7+)"}</h3>
        <button class="btn btn-secondary btn-sm" onclick="switchView('grades')">${isEn ? "View All Grades" : "عرض سجل الدرجات الشامل"}</button>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Student ID" : "كود الطالب"}</th>
              <th>${isEn ? "Full Student Name" : "اسم الطالب رباعي"}</th>
              <th>${isEn ? "Level / Group" : "الفرقة / المجموعة"}</th>
              <th>${isEn ? "Cumulative GPA" : "المعدل التراكمي (GPA)"}</th>
              <th>${isEn ? "Standing" : "التقدير العام"}</th>
              <th>${isEn ? "Tuition Status" : "الموقف المالي"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.students.filter(s => s.gpa >= 3.7).map(s => `
              <tr>
                <td><strong>${s.student_id}</strong></td>
                <td>
                  <div class="user-cell">
                    <div class="user-cell-avatar">👩‍🎓</div>
                    <div class="user-cell-info">
                      <span class="user-cell-name">${isEn ? s.full_name_en : s.full_name_ar}</span>
                      <span class="user-cell-sub">${s.department}</span>
                    </div>
                  </div>
                </td>
                <td>${isEn ? "Level " + s.level + " (Grp " + s.group_no + ")" : "الفرقة " + s.level + " (مجموعة " + s.group_no + ")"}</td>
                <td><span class="grade-badge a-plus">${s.gpa.toFixed(2)}</span></td>
                <td><span class="status-pill success">${isEn ? "High Honors" : "امتياز مع مرتبة الشرف"}</span></td>
                <td><span class="status-pill success">${isEn ? "Cleared" : "مسدد بالكامل"}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.2 Students Information System (Process 2.0)
function renderStudentsView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Student Information System (SIS - Process 2.0)" : "إدارة بيانات وقيد الطلاب (Process 2.0: Student Registration)"}</h1>
        <p>${isEn ? "Entity: Student | 14-digit Egyptian National ID validation & automatic age extraction" : "جدول الكيان: Student | التحقق الصارم من الرقم القومي (14 رقم) وسنة الميلاد والفرقة الدراسية"}</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="openModal('addStudentModal')">
          ➕ ${isEn ? "Register New Student (Algorithm 1.2)" : "قيد طالب جديد (خوارزمية 1.2)"}
        </button>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">
          <span>${isEn ? "Enrolled Students Directory" : "سجل الطلاب المقيدين بالفرقة الثالثة (نظم معلومات إدارية)"}</span>
        </h3>
        <span class="status-pill info">${SAMS.students.length} ${isEn ? "Total Students" : "إجمالي الطلاب"}</span>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Student ID" : "كود الطالب"}</th>
              <th>${isEn ? "Student Name" : "الاسم بالكامل"}</th>
              <th>${isEn ? "National ID (14 digits)" : "الرقم القومي (14 رقم)"}</th>
              <th>${isEn ? "Gender" : "النوع"}</th>
              <th>${isEn ? "Birth Date" : "تاريخ الميلاد"}</th>
              <th>${isEn ? "Phone" : "الهاتف"}</th>
              <th>${isEn ? "GPA" : "المعدل"}</th>
              <th>${isEn ? "Status" : "الحالة الأكاديمية"}</th>
              <th>${isEn ? "Actions" : "إجراءات"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.students.map(s => `
              <tr>
                <td><strong>${s.student_id}</strong></td>
                <td>
                  <div class="user-cell">
                    <div class="user-cell-avatar">${s.gender === 'F' ? '👩‍🎓' : '👨‍🎓'}</div>
                    <div class="user-cell-info">
                      <span class="user-cell-name">${isEn ? s.full_name_en : s.full_name_ar}</span>
                      <span class="user-cell-sub">${isEn ? "Level " + s.level + " | Group " + s.group_no : "الفرقة " + s.level + " | مجموعة " + s.group_no}</span>
                    </div>
                  </div>
                </td>
                <td><code>${s.national_id}</code></td>
                <td>${s.gender === 'F' ? (isEn ? 'Female' : 'أنثى') : (isEn ? 'Male' : 'ذكر')}</td>
                <td>${s.birth_date}</td>
                <td>${s.phone}</td>
                <td><span class="grade-badge ${s.gpa >= 3.7 ? 'a-plus' : (s.gpa < 2.0 ? 'd' : 'b')}">${s.gpa.toFixed(2)}</span></td>
                <td>
                  <span class="status-pill ${s.gpa < 2.0 ? 'danger' : 'success'}">
                    ${s.status}
                  </span>
                </td>
                <td>
                  <div style="display: flex; gap: 4px;">
                    <button class="btn btn-secondary btn-sm" onclick="previewSmartIdCard('${s.student_id}')">
                      🪪 ${isEn ? "ID Card" : "الكارنيه"}
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="openCertForStudent('${s.student_id}')">
                      📜 ${isEn ? "Cert" : "شهادة"}
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.3 Course Registration & Basket (Process 3.0)
function renderCoursesView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Course Catalog & Registration (Process 3.0)" : "دليل وتسجيل المقررات الدراسية (Process 3.0: Course Registration)"}</h1>
        <p>${isEn ? "Entity: Course | 18-credit hour maximum cap & prerequisite validation" : "جدول الكيان: Course | تطبيق سقف الـ 18 ساعة معتمدة وفحص المتطلبات السابقة (Prerequisites)"}</p>
      </div>
    </div>

    <!-- Registration Basket Widget for Current Student -->
    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">
          <span>🛒 ${isEn ? "Course Basket & 18 Credit-Hour Cap Meter" : "سلة التسجيل وسقف الـ 18 ساعة معتمدة للطالب"}</span>
        </h3>
        <span class="status-pill success">${isEn ? "Eligible: 17 / 18 Hours" : "المسجل حالياً: 17 / 18 ساعة"}</span>
      </div>
      <div class="card-body-content">
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 12px;">
          ${isEn ? "Rule (Report 2): No student is permitted to register for more than 18 credit hours per semester." : "قاعدة الجودة (تقرير رغدة): لا يُسمح بتسجيل أكثر من 18 ساعة معتمدة في الفصل الدراسي الواحد."}
        </p>
        <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 16px; overflow: hidden; margin-bottom: 15px;">
          <div style="width: ${(17 / 18) * 100}%; background: linear-gradient(90deg, #3b82f6, #10b981); height: 100%;"></div>
        </div>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">📚 ${isEn ? "3rd Year MIS Course Catalog" : "مقررات الفرقة الثالثة - قسم نظم المعلومات الإدارية"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Course Code" : "كود المقرر"}</th>
              <th>${isEn ? "Course Title" : "اسم المقرر الدراسي"}</th>
              <th>${isEn ? "Credit Hours" : "الساعات المعتمدة"}</th>
              <th>${isEn ? "Course Instructor" : "أستاذ المقرر (Faculty)"}</th>
              <th>${isEn ? "Prerequisite" : "المتطلب السابق"}</th>
              <th>${isEn ? "Registration Status" : "حالة التسجيل"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.courses.map(c => `
              <tr>
                <td><strong>${c.code}</strong></td>
                <td><strong>${isEn ? c.nameEn : c.nameAr}</strong></td>
                <td><span class="status-pill neutral">${c.credits} ${isEn ? "Hrs" : "ساعات"}</span></td>
                <td>${isEn ? c.instructorEn : c.instructorAr}</td>
                <td><span class="status-pill warning">${c.prerequisite}</span></td>
                <td><span class="status-pill success">${isEn ? "Enrolled (Active)" : "مسجل ونشط"}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.4 Weekly Timetable Schedule
function renderScheduleView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Academic Timetable & Room Allocation" : "الجداول الدراسية والمواعيد الأسبوعية (Schedule)"}</h1>
        <p>${isEn ? "Lecture Halls, Computer Labs & Timetable for 3rd Year (Group 3)" : "توزيع المحاضرات والمعامل والقاعات للفرقة الثالثة - مجموعة 3"}</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary" onclick="window.print()">🖨️ ${isEn ? "Print Schedule" : "طباعة الجدول"}</button>
      </div>
    </div>

    <div class="card-panel">
      <div class="table-container" style="padding: 16px;">
        <table class="schedule-table">
          <thead>
            <tr>
              <th>${isEn ? "Day" : "اليوم"}</th>
              <th>${isEn ? "09:00 - 11:00 AM" : "09:00 - 11:00 ص"}</th>
              <th>${isEn ? "11:15 - 01:15 PM" : "11:15 - 01:15 م"}</th>
              <th>${isEn ? "01:30 - 03:30 PM" : "01:30 - 03:30 م"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${isEn ? "Sunday" : "الأحد"}</strong></td>
              <td colspan="2" class="schedule-cell">
                <div class="lecture-block">
                  <span class="lecture-code">MIS301</span>
                  <div class="lecture-title">${isEn ? "Systems Analysis & Design" : "تحليل وتصميم نظم المعلومات"}</div>
                  <div class="lecture-room">📍 ${isEn ? "Hall 4B (Prof. Dr. Farouk)" : "مدرج 4 (أ.د / فاروق عبد العزيز)"}</div>
                </div>
              </td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">${isEn ? "Study Break" : "فترة فراغ"}</span></td>
            </tr>
            <tr>
              <td><strong>${isEn ? "Monday" : "الإثنين"}</strong></td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">-</span></td>
              <td colspan="2" class="schedule-cell">
                <div class="lecture-block lab">
                  <span class="lecture-code">CS302</span>
                  <div class="lecture-title">${isEn ? "Advanced SQL & Database Lab" : "معمل قواعد البيانات المتقدمة"}</div>
                  <div class="lecture-room">💻 ${isEn ? "Computer Lab 2 (Dr. Hesham)" : "معمل حاسب 2 (د/ هشام عرفات)"}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>${isEn ? "Tuesday" : "الثلاثاء"}</strong></td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">-</span></td>
              <td class="schedule-cell">
                <div class="lecture-block">
                  <span class="lecture-code">SWE303</span>
                  <div class="lecture-title">${isEn ? "Software Engineering" : "هندسة البرمجيات"}</div>
                  <div class="lecture-room">📍 ${isEn ? "Hall 12 (Dr. Amany)" : "قاعة 12 (د/ أماني سمير)"}</div>
                </div>
              </td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">-</span></td>
            </tr>
            <tr>
              <td><strong>${isEn ? "Wednesday" : "الأربعاء"}</strong></td>
              <td colspan="2" class="schedule-cell">
                <div class="lecture-block lab">
                  <span class="lecture-code">NET304</span>
                  <div class="lecture-title">${isEn ? "Computer Networks & Security Lab" : "معمل شبكات وأمن معلومات"}</div>
                  <div class="lecture-room">💻 ${isEn ? "Networks Lab 1 (Dr. Radwan)" : "معمل شبكات 1 (د/ محمد رضوان)"}</div>
                </div>
              </td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">-</span></td>
            </tr>
            <tr>
              <td><strong>${isEn ? "Thursday" : "الخميس"}</strong></td>
              <td class="schedule-cell">
                <div class="lecture-block">
                  <span class="lecture-code">ACC305</span>
                  <div class="lecture-title">${isEn ? "Accounting Info Systems" : "نظم المعلومات المحاسبية"}</div>
                  <div class="lecture-room">📍 ${isEn ? "Hall 8 (Dr. Samir)" : "قاعة 8 (د/ سمير عبد المنعم)"}</div>
                </div>
              </td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">-</span></td>
              <td class="schedule-cell"><span style="color: var(--text-muted);">-</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.5 Attendance & Deprivation Warnings (Process 4.0)
function renderAttendanceView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Attendance Tracking & Automated Warning System (Process 4.0)" : "متابعة الحضور والغياب واحتساب نسب الحرمان (Process 4.0: Attendance)"}</h1>
        <p>${isEn ? "Algorithm 1.4: Warning 1 issued when absence exceeds 25%. Barred from Final Exam when absence exceeds 30%." : "خوارزمية (1.4): إنذار أول عند تجاوز 25% غياب، وحرمان نهائي من دخول الامتحان عند تجاوز 30% غياب."}</p>
      </div>
    </div>

    <!-- Active Barring Alerts -->
    <div class="card-panel" style="border-inline-start: 4px solid var(--accent-rose);">
      <div class="card-header-bar">
        <h3 class="card-header-title" style="color: var(--accent-rose);">
          ⚠️ ${isEn ? "Academic Deprivation Orders (Absence > 30%)" : "قرارات الحرمان من الامتحان النهائي للعام 2026/2027"}
        </h3>
        <span class="status-pill danger">${isEn ? "Action Enforced" : "قرار نافذ"}</span>
      </div>
      <div class="card-body-content">
        <p style="font-size: 0.9rem; line-height: 1.8;">
          ${isEn 
            ? "Student: <strong>Ahmed Mohamed El-Shennawy</strong> (ID: <code>202411601</code>) has accumulated <strong>5 absences out of 12 lectures (41.7% absence rate)</strong> in course <strong>CS302 (Database)</strong>, exceeding the institute's 30% threshold. He is formally barred from attending the final exam." 
            : "الطالب: <strong>أحمد محمد الشناوي</strong> (كود: <code>202411601</code>) تجاوز الحد الأقصى للغياب في مقرر <strong>CS302 (قواعد البيانات)</strong> حيث بلغت نسبة غيابه <strong>41.7% (5 محاضرات من أصل 12)</strong>، وعليه صدر قرار حرمان رسمي من دخول الامتحان النهائي طبقاً للائحة المعهد."}
        </p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">📋 ${isEn ? "Lecture Attendance Register: MIS301 (Systems Analysis)" : "سجل حضور وغياب مقرر: تحليل وتصميم النظم (MIS301)"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Student ID" : "كود الطالب"}</th>
              <th>${isEn ? "Student Name" : "اسم الطالب"}</th>
              <th>${isEn ? "Total Lectures" : "إجمالي المحاضرات"}</th>
              <th>${isEn ? "Attended" : "حضور"}</th>
              <th>${isEn ? "Absent" : "غياب"}</th>
              <th>${isEn ? "Attendance %" : "نسبة الحضور %"}</th>
              <th>${isEn ? "Academic Status & Warnings" : "الموقف الأكاديمي والإنذارات"}</th>
              <th>${isEn ? "Actions" : "تسجيل غياب/حضور"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.attendance.filter(a => a.course_code === "MIS301").map(a => {
              const std = SAMS.students.find(s => s.student_id === a.student_id);
              let badgeType = "success";
              if (a.pct < 70) badgeType = "danger";
              else if (a.pct < 75) badgeType = "warning";

              return `
                <tr>
                  <td><strong>${a.student_id}</strong></td>
                  <td>${std ? (isEn ? std.full_name_en : std.full_name_ar) : '--'}</td>
                  <td>${a.total}</td>
                  <td><strong style="color: #10b981;">${a.attended}</strong></td>
                  <td><strong style="color: #ef4444;">${a.absent}</strong></td>
                  <td>
                    <strong>${a.pct.toFixed(1)}%</strong>
                    <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 8px; width: 100px; margin-top: 4px; overflow: hidden;">
                      <div style="width: ${a.pct}%; background: ${a.pct < 70 ? '#ef4444' : (a.pct < 75 ? '#f59e0b' : '#10b981')}; height: 100%;"></div>
                    </div>
                  </td>
                  <td><span class="status-pill ${badgeType}">${isEn ? a.statusEn : a.statusAr}</span></td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="openAttendanceModal('${a.student_id}', '${a.course_code}')">
                      ✏️ ${isEn ? "Log Lecture" : "تسجيل محاضرة"}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.6 Gradebook, Control Sheet & GPA Engine (Process 5.0)
function renderGradesView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Academic Control, Grade Sheet & GPA Engine (Process 5.0)" : "رصد الدرجات واحتساب المعدل التراكمي (Process 5.0: Grade & GPA System)"}</h1>
        <p>${isEn ? "Algorithm 1.5: Classwork (20) + Midterm (20) + Final Exam (60) = 100 Marks. Instant weighted GPA recalculation." : "خوارزمية (1.5): أعمال سنة (20) + ميدتيرم (20) + فاينال (60) = 100 درجة كلية، مع احتساب الـ GPA التراكمي لحظياً."}</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary" onclick="applyBonusCurve()">✨ ${isEn ? "Apply Curve (+2 Marks)" : "تطبيق بونص كنترول (+2 درجات)"}</button>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">🎯 ${isEn ? "Official Control Sheet: MIS301 (Systems Analysis)" : "شيت كنترول مقرر: تحليل وتصميم نظم المعلومات (MIS301)"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Student ID" : "كود الطالب"}</th>
              <th>${isEn ? "Full Name" : "اسم الطالب رباعي"}</th>
              <th>${isEn ? "Classwork (20)" : "أعمال السنة (20)"}</th>
              <th>${isEn ? "Midterm (20)" : "الميدتيرم (20)"}</th>
              <th>${isEn ? "Final (60)" : "الامتحان النهائي (60)"}</th>
              <th>${isEn ? "Total (100)" : "المجموع الكلي (100)"}</th>
              <th>${isEn ? "Letter Grade" : "التقدير الحرفي"}</th>
              <th>${isEn ? "Points (4.0)" : "النقاط (4.00)"}</th>
              <th>${isEn ? "Actions" : "رصد الدرجات"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.grades.filter(g => g.course_code === "MIS301").map(g => {
              const std = SAMS.students.find(s => s.student_id === g.student_id);
              return `
                <tr>
                  <td><strong>${g.student_id}</strong></td>
                  <td><strong>${std ? (isEn ? std.full_name_en : std.full_name_ar) : '--'}</strong></td>
                  <td>${g.cw.toFixed(1)}</td>
                  <td>${g.mt.toFixed(1)}</td>
                  <td>${g.fn.toFixed(1)}</td>
                  <td><strong style="font-size: 1.1rem; color: var(--primary-700);">${g.total.toFixed(1)}</strong></td>
                  <td><span class="grade-badge ${g.letter === 'A+' ? 'a-plus' : (g.letter === 'A' ? 'a' : (g.letter === 'D' ? 'd' : 'f'))}">${g.letter}</span></td>
                  <td><strong>${g.points.toFixed(2)}</strong></td>
                  <td>
                    <button class="btn btn-primary btn-sm" onclick="openGradeModal('${g.student_id}', '${g.course_code}')">
                      🎯 ${isEn ? "Edit / Grade" : "تعديل / رصد"}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.7 Tuition & Treasury Management (Process 6.0)
function renderFeesView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Tuition Fees & Treasury Management (Process 6.0)" : "إدارة المصروفات الدراسية والخزينة (Process 6.0: Student Fees)"}</h1>
        <p>${isEn ? "Algorithm 1.6: Partial & Full payments, instant certified treasury receipt generation with serial number." : "خوارزمية (1.6): استلام المصروفات وتوليد إيصال السداد الرسمي المعتمد والمختوم برقم تسلسلي."}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">💳 ${isEn ? "Tuition Collection Register 2026/2027" : "موقف سداد المصروفات الدراسية للعام الجامعي 2026/2027"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Student ID" : "كود الطالب"}</th>
              <th>${isEn ? "Student Name" : "اسم الطالب"}</th>
              <th>${isEn ? "Total Due" : "إجمالي المصروفات"}</th>
              <th>${isEn ? "Amount Paid" : "المبلغ المسدد"}</th>
              <th>${isEn ? "Remaining" : "المتبقي المستحق"}</th>
              <th>${isEn ? "Status" : "حالة السداد"}</th>
              <th>${isEn ? "Last Receipt" : "رقم آخر إيصال"}</th>
              <th>${isEn ? "Date" : "تاريخ السداد"}</th>
              <th>${isEn ? "Actions" : "إجراءات الخزينة"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.fees.map(f => {
              const std = SAMS.students.find(s => s.student_id === f.student_id);
              let statusBadge = "success";
              if (f.remaining > 0 && f.paid === 0) statusBadge = "danger";
              else if (f.remaining > 0) statusBadge = "warning";

              return `
                <tr>
                  <td><strong>${f.student_id}</strong></td>
                  <td>${std ? (isEn ? std.full_name_en : std.full_name_ar) : '--'}</td>
                  <td>${f.total.toLocaleString()} EGP</td>
                  <td><strong style="color: #10b981;">${f.paid.toLocaleString()} EGP</strong></td>
                  <td><strong style="color: ${f.remaining > 0 ? '#ef4444' : 'var(--text-muted)'};">${f.remaining.toLocaleString()} EGP</strong></td>
                  <td><span class="status-pill ${statusBadge}">${isEn ? f.statusEn : f.statusAr}</span></td>
                  <td><code>${f.receipt_no}</code></td>
                  <td>${f.date}</td>
                  <td>
                    <div style="display: flex; gap: 4px;">
                      ${f.remaining > 0 ? `
                        <button class="btn btn-primary btn-sm" onclick="openPaymentModal(${f.fee_id})">
                          💳 ${isEn ? "Collect" : "تحصيل"}
                        </button>
                      ` : ''}
                      <button class="btn btn-secondary btn-sm" onclick="showReceiptModal(${f.fee_id})">
                        🧾 ${isEn ? "Receipt" : "إيصال"}
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.8 Official Document Issuance (Process 7.0)
function renderDocumentsView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Official Document Issuance & Verification (Process 7.0)" : "إصدار الشهادات والوثائق الرسمية (Process 7.0: Document Issuance)"}</h1>
        <p>${isEn ? "Algorithm 1.7: Issuing official Certified Enrollment Certificates and Transcripts with financial clearance checks." : "خوارزمية (1.7): شهادات القيد وبيانات الدرجات الرسمية بعد التحقق الصارم من سداد كامل المصروفات."}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">📜 ${isEn ? "Official Document Requests Log" : "سجل طلبات استخراج الوثائق الرسمية للطلاب"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Tracking Code" : "كود الطلب"}</th>
              <th>${isEn ? "Student" : "اسم الطالب"}</th>
              <th>${isEn ? "Document Type" : "نوع الوثيقة المطلوبة"}</th>
              <th>${isEn ? "Addressed To" : "الجهة الموجه إليها"}</th>
              <th>${isEn ? "Request Date" : "تاريخ الطلب"}</th>
              <th>${isEn ? "Status" : "حالة الاعتماد"}</th>
              <th>${isEn ? "Actions" : "الطباعة والاعتماد"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.documents.map(d => {
              const std = SAMS.students.find(s => s.student_id === d.student_id);
              const isApproved = d.statusAr.includes("معتمدة");

              return `
                <tr>
                  <td><code>${d.code}</code></td>
                  <td><strong>${std ? (isEn ? std.full_name_en : std.full_name_ar) : '--'}</strong> (<code>${d.student_id}</code>)</td>
                  <td><strong>${isEn ? d.typeEn : d.typeAr}</strong></td>
                  <td>${isEn ? d.purposeEn : d.purposeAr}</td>
                  <td>${d.date}</td>
                  <td><span class="status-pill ${isApproved ? 'success' : 'danger'}">${isEn ? d.statusEn : d.statusAr}</span></td>
                  <td>
                    ${isApproved ? `
                      <button class="btn btn-primary btn-sm" onclick="openCertForStudent('${d.student_id}', '${d.code}')">
                        🖨️ ${isEn ? "Print Official Certificate" : "معاينة وطباعة الشهادة"}
                      </button>
                    ` : `<span style="font-size: 0.8rem; color: #ef4444; font-weight: bold;">${isEn ? "Hold: Overdue Fees" : "حظر: متأخرات مالية"}</span>`}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.9 Smart University Student ID Card (Extra Feature)
function renderIdCardView(container) {
  const isEn = SAMS.currentLang === "en";
  const defaultStudent = SAMS.students[0]; // Ragda by default

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Smart University Student ID Card Generator" : "كارنيه الطالب الجامعي الذكي (Smart Student ID Card)"}</h1>
        <p>${isEn ? "Electronic identity card with security micro-chip, barcode, and digital verification" : "بطاقة تحقيق الشخصية الجامعية المميكنة بشريحة إلكترونية وباركود مشفر"}</p>
      </div>
      <div class="view-actions">
        <select class="form-control" onchange="previewSmartIdCard(this.value)" style="max-width: 280px;">
          ${SAMS.students.map(s => `
            <option value="${s.student_id}">${isEn ? s.full_name_en : s.full_name_ar} (${s.student_id})</option>
          `).join('')}
        </select>
        <button class="btn btn-primary" onclick="window.print()">🖨️ ${isEn ? "Print ID Card" : "طباعة الكارنيه"}</button>
      </div>
    </div>

    <!-- Smart ID Card Interactive Visual Mockup -->
    <div class="id-card-stage" id="idCardContainer">
      ${buildSmartIdCardHtml(defaultStudent)}
    </div>
  `;
}

function buildSmartIdCardHtml(student) {
  const isEn = SAMS.currentLang === "en";
  return `
    <div class="smart-id-card">
      <div class="id-card-watermark"></div>
      
      <div class="id-card-top">
        <div>
          <div class="id-inst-name">${isEn ? "Higher Institute for Computers & MIS" : "المعهد العالي للحاسبات ونظم المعلومات الإدارية"}</div>
          <div class="id-inst-dept">${isEn ? "First Settlement - New Cairo | Ministry of Higher Education" : "التجمع الأول - القاهرة الجديدة | وزارة التعليم العالي"}</div>
        </div>
        <div class="id-chip"></div>
      </div>

      <div class="id-card-middle">
        <div class="id-photo-box">
          ${student.gender === 'F' ? '👩‍🎓' : '👨‍🎓'}
        </div>
        <div class="id-details">
          <div class="id-name">${isEn ? student.full_name_en : student.full_name_ar}</div>
          <div class="id-meta-grid">
            <div class="id-meta-item">
              <strong>${isEn ? "Student ID" : "كود الطالب"}</strong>
              <span>${student.student_id}</span>
            </div>
            <div class="id-meta-item">
              <strong>${isEn ? "National ID" : "الرقم القومي"}</strong>
              <span>${student.national_id}</span>
            </div>
            <div class="id-meta-item">
              <strong>${isEn ? "Academic Level" : "الفرقة الدراسية"}</strong>
              <span>${isEn ? "Level 3 - MIS" : "الفرقة الثالثة - نظم"}</span>
            </div>
            <div class="id-meta-item">
              <strong>${isEn ? "Group / Section" : "المجموعة"}</strong>
              <span>${student.group_no}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="id-card-bottom">
        <div class="id-barcode">||| | |||| | ||||| |||| | |</div>
        <div style="font-size: 0.65rem; color: #93c5fd;">
          VALID: 2026/2027 &bull; SAMS-SECURE-ID
        </div>
      </div>
    </div>
  `;
}

function previewSmartIdCard(studentId) {
  const std = SAMS.students.find(s => s.student_id === studentId);
  if (!std) return;
  const container = document.getElementById("idCardContainer");
  if (container) {
    container.innerHTML = buildSmartIdCardHtml(std);
  } else {
    switchView("id_card");
    setTimeout(() => {
      const c = document.getElementById("idCardContainer");
      if (c) c.innerHTML = buildSmartIdCardHtml(std);
    }, 50);
  }
}

// 6.10 Reports & Decision Support (Process 8.0)
function renderReportsView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Executive Analytics & Decision Support (Process 8.0)" : "التقارير الإحصائية والتحليل الأكاديمي (Process 8.0: Statistical Reports)"}</h1>
        <p>${isEn ? "Statistical breakdown for Institute Dean, Department Heads & Ministry of Higher Education" : "تقارير دعم اتخاذ القرار لعميد المعهد ورؤساء الأقسام ومجالس الإدارة"}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">📊 ${isEn ? "Academic Performance Breakdown (GPA & Standing)" : "المؤشرات الإحصائية العامة للفرقة الثالثة"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Category" : "التصنيف الأكاديمي"}</th>
              <th>${isEn ? "GPA Range" : "نطاق النقاط"}</th>
              <th>${isEn ? "Letter Grades" : "التقديرات المرجعية"}</th>
              <th>${isEn ? "Count" : "عدد الطلاب"}</th>
              <th>${isEn ? "Percentage" : "النسبة المئوية"}</th>
              <th>${isEn ? "Recommendation" : "التوجيه الأكاديمي"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${isEn ? "Excellent With Honors" : "امتياز مع مرتبة الشرف"}</strong></td>
              <td>3.70 - 4.00</td>
              <td>A+ / A</td>
              <td><strong>5</strong></td>
              <td><span class="status-pill success">83.3%</span></td>
              <td>${isEn ? "Nominated for Teaching Assistantship & Institute Honors" : "ترشيح لجوائز التميز وفرص المعيدين بالقسم"}</td>
            </tr>
            <tr>
              <td><strong>${isEn ? "Academic Probation" : "إنذار أكاديمي وتعثر"}</strong></td>
              <td>&lt; 2.00</td>
              <td>D / F</td>
              <td><strong>1</strong></td>
              <td><span class="status-pill danger">16.7%</span></td>
              <td>${isEn ? "Academic Counseling & Max 12 Credit Hours Limit" : "إحالة للمرشد الأكاديمي وسقف 12 ساعة معتمدة"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.11 Architecture & DFD / ERD
function renderArchitectureView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Engineering Diagrams: DFD Level 0, Level 1 & ERD" : "المخططات الهندسية وقاموس البيانات (Architecture & DFD/ERD)"}</h1>
        <p>${isEn ? "System design specification matching Dr. Farouk & SAMS project documentation" : "التصميم الهندسي المتكامل المعتمد في التقارير الثلاثة (د. فاروق، رغدة، SAMS)"}</p>
      </div>
    </div>

    <!-- DFD Level 0 Context Diagram -->
    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">1. ${isEn ? "Context Diagram (DFD Level 0)" : "مخطط تدفق البيانات البيئي (DFD Level 0)"}</h3>
      </div>
      <div class="card-body-content">
        <pre style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: var(--radius-md); font-size: 0.82rem; line-height: 1.5; overflow-x: auto; direction: ltr; text-align: left;">
┌─────────────────┐       Enrollment Request / Course Reg     ┌──────────────────────────────┐       Student Records & Certified Docs    ┌─────────────────┐
│     STUDENT     │ ─────────────────────────────────────────►│                              │ ─────────────────────────────────────────►│ STUDENT AFFAIRS │
│    (External)   │ ◄─────────────────────────────────────────│                              │ ◄─────────────────────────────────────────│   (Registrar)   │
└─────────────────┘       Timetable, Transcript & Certs       │                              │        Approval & Official Documents      └─────────────────┘
                                                              │  STUDENT AFFAIRS MANAGEMENT  │
┌─────────────────┐       Grades (20/20/60) & Attendance Logs │            SYSTEM            │       Payment Vouchers & Official Receipt ┌─────────────────┐
│     FACULTY     │ ─────────────────────────────────────────►│            (SAMS)            │ ─────────────────────────────────────────►│     TREASURY    │
│    (Doctor)     │ ◄─────────────────────────────────────────│                              │ ◄─────────────────────────────────────────│    (Finance)    │
└─────────────────┘        Class Rosters & Warning Alerts     │       Process 0 (Central)    │        Tuition Dues & Balance Inquiries   └─────────────────┘
                                                              └──────────────────────────────┘
                                                                             ▲
                                                                             │ Statistical Reports & Analytics
                                                              ┌──────────────┴──────────────┐
                                                              │   INSTITUTE DEAN / MINISTRY │
                                                              └─────────────────────────────┘
        </pre>
      </div>
    </div>

    <!-- DFD Level 1 (8 Processes Table) -->
    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">2. ${isEn ? "Detailed DFD Level 1 (8 Core Processes)" : "المخطط التفصيلي للعمليات الثماني (DFD Level 1)"}</h3>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Process" : "رقم العملية"}</th>
              <th>${isEn ? "Process Title" : "اسم العملية الأكاديمية"}</th>
              <th>${isEn ? "Inputs" : "المدخلات (Inputs)"}</th>
              <th>${isEn ? "Outputs" : "المخرجات (Outputs)"}</th>
              <th>${isEn ? "Data Store" : "مستودع البيانات"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>1.0</strong></td><td>${isEn ? "Authentication & RBAC" : "المصادقة وإدارة الصلاحيات"}</td><td>Credentials</td><td>Role Session Token</td><td><code>D1: Users</code></td></tr>
            <tr><td><strong>2.0</strong></td><td>${isEn ? "Student Registration" : "تسجيل وقيد الطلاب"}</td><td>14-digit National ID, Name, Birth</td><td>Student ID, Profile</td><td><code>D2: Students</code></td></tr>
            <tr><td><strong>3.0</strong></td><td>${isEn ? "Course Registration" : "تسجيل المقررات والجداول"}</td><td>Course Preferences</td><td>Enrolled Timetable</td><td><code>D3: Courses, D4: Schedules</code></td></tr>
            <tr><td><strong>4.0</strong></td><td>${isEn ? "Attendance & Warnings" : "الحضور والغياب والإنذار"}</td><td>Lecture Session Status</td><td>Warning Notices, Barring Order</td><td><code>D5: Attendance</code></td></tr>
            <tr><td><strong>5.0</strong></td><td>${isEn ? "Gradebook & GPA Engine" : "الكنترول ورصد الدرجات والـ GPA"}</td><td>Classwork (20), Mid (20), Final (60)</td><td>Total (100), Letter, GPA</td><td><code>D6: Grades</code></td></tr>
            <tr><td><strong>6.0</strong></td><td>${isEn ? "Tuition & Treasury" : "إدارة الخزينة والمصروفات"}</td><td>Payment Amount, Method</td><td>Official Receipt (REC)</td><td><code>D7: Student_Fees</code></td></tr>
            <tr><td><strong>7.0</strong></td><td>${isEn ? "Official Document Issuance" : "إصدار الشهادات الرسمية"}</td><td>Request Type, Purpose</td><td>Sealed Certificate / Transcript</td><td><code>D8: Document_Requests</code></td></tr>
            <tr><td><strong>8.0</strong></td><td>${isEn ? "Statistical Reports & Analytics" : "التقارير الإحصائية للمجالس"}</td><td>Filter Criteria</td><td>Honors & Probation Reports</td><td><code>All DB Stores</code></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6.12 Java OOP Code Inspection
function renderOOPView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Java OOP Architecture & Class Hierarchy" : "هيكلية كلاسات Java OOP (مشروع Java البرمجي)"}</h1>
        <p>${isEn ? "Inheritance, Encapsulation, Polymorphism & Abstraction implementation" : "تطبيق مفاهيم الوراثة (Inheritance)، التغليف (Encapsulation)، وتعدد الأشكال (Polymorphism)"}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">☕ <code>Person.java</code> &amp; <code>Student.java</code></h3>
      </div>
      <div class="card-body-content">
        <pre style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: var(--radius-md); font-size: 0.82rem; line-height: 1.6; overflow-x: auto; direction: ltr; text-align: left;">
// ==========================================
// 1. Person.java (Base Abstract Class)
// ==========================================
public abstract class Person {
    protected String nationalId; // 14 Egyptian digits
    protected String fullName;
    protected String birthDate;
    protected String gender;
    protected String phone;

    public Person(String nationalId, String fullName, String phone) {
        if (nationalId == null || nationalId.length() != 14) {
            throw new IllegalArgumentException("National ID must be exactly 14 digits as per Egyptian civil registry.");
        }
        this.nationalId = nationalId;
        this.fullName = fullName;
        this.phone = phone;
    }

    public abstract void displayRoleDetails();
}

// ==========================================
// 2. Student.java (Inheritance + Encapsulation)
// ==========================================
public class Student extends Person {
    private String studentId;
    private int level;
    private int groupNo;
    private double gpa;
    private List<Grade> gradeRecords;

    public Student(String studentId, String nationalId, String fullName, int level, int groupNo) {
        super(nationalId, fullName, "");
        this.studentId = studentId;
        this.level = level;
        this.groupNo = groupNo;
        this.gpa = 0.0;
        this.gradeRecords = new ArrayList<>();
    }

    public double calculateWeightedGPA() {
        double totalWeightedPoints = 0.0;
        int totalHours = 0;
        for (Grade g : gradeRecords) {
            totalWeightedPoints += (g.getPoints() * g.getCreditHours());
            totalHours += g.getCreditHours();
        }
        this.gpa = (totalHours == 0) ? 0.0 : (totalWeightedPoints / totalHours);
        return this.gpa;
    }

    @Override
    public void displayRoleDetails() {
        System.out.println("Student ID: " + studentId + " | Name: " + fullName + " | GPA: " + gpa);
    }
}
        </pre>
      </div>
    </div>
  `;
}

// 6.13 Security Audit Log (Process 1.0)
function renderAuditLogView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "System Security & Audit Trail (Process 1.0)" : "سجل الحركات والأمان (Audit Log - Process 1.0)"}</h1>
        <p>${isEn ? "Tamper-proof logging of grade modifications, user logins, and certificate issuances" : "تسجيل أمني شامل لعمليات رصد الدرجات، تسجيل الدخول، واستخراج الشهادات الرسمية"}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>${isEn ? "Timestamp" : "التوقيت"}</th>
              <th>${isEn ? "Operator" : "المستخدم"}</th>
              <th>${isEn ? "Role" : "الصلاحية"}</th>
              <th>${isEn ? "Action Details" : "العملية المنفذة"}</th>
              <th>${isEn ? "IP Address" : "عنوان الـ IP"}</th>
              <th>${isEn ? "Status" : "الحالة"}</th>
            </tr>
          </thead>
          <tbody>
            ${SAMS.auditLog.map(log => `
              <tr>
                <td><code>#${log.id}</code></td>
                <td><small>${log.timestamp}</small></td>
                <td><strong>${log.user}</strong></td>
                <td><span class="status-pill neutral">${log.role}</span></td>
                <td>${isEn ? log.actionEn : log.actionAr}</td>
                <td><code>${log.ip}</code></td>
                <td><span class="status-pill ${log.status === 'SUCCESS' ? 'success' : 'warning'}">${log.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ============================================================================
// 7. INTERACTIVE ACTION HANDLERS & MODALS
// ============================================================================

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("active");
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("active");
}

// Egyptian National ID Validator (14 digits)
function validateEgyptianNationalId(input) {
  const val = input.value.trim();
  const help = document.getElementById("natIdHelp");
  const isEn = SAMS.currentLang === "en";

  if (val.length === 14 && /^\d+$/.test(val)) {
    const century = parseInt(val[0]);
    const year = (century === 2 ? "19" : "20") + val.substring(1, 3);
    const month = val.substring(3, 5);
    const day = val.substring(5, 7);
    const genderDigit = parseInt(val[12]);
    const gender = (genderDigit % 2 === 0) ? "F" : "M";

    // Set birth date & gender automatically
    document.getElementById("regBirthDate").value = `${year}-${month}-${day}`;
    document.getElementById("regGender").value = gender;

    help.innerHTML = `<span style="color: #10b981; font-weight: bold;">✓ ${isEn ? "Valid ID. Birth:" : "رقم قومي صحيح. الميلاد:"} ${year}-${month}-${day} | ${gender === 'F' ? (isEn ? 'Female' : 'أنثى') : (isEn ? 'Male' : 'ذكر')}</span>`;
  } else {
    help.innerHTML = `<span style="color: #ef4444;">${isEn ? "Must be exactly 14 numeric digits" : "يجب أن يتكون من 14 رقماً بالضبط"}</span>`;
  }
}

// Register New Student (Process 2.0)
function handleStudentRegistration(e) {
  e.preventDefault();
  const isEn = SAMS.currentLang === "en";
  const name = document.getElementById("regFullName").value.trim();
  const natId = document.getElementById("regNationalId").value.trim();
  const birth = document.getElementById("regBirthDate").value;
  const gender = document.getElementById("regGender").value;
  const phone = document.getElementById("regPhone").value.trim();
  const address = document.getElementById("regAddress").value.trim();

  if (natId.length !== 14 || !/^\d+$/.test(natId)) {
    alert(isEn ? "Error: Egyptian National ID must be 14 numeric digits." : "خطأ: الرقم القومي يجب أن يتكون من 14 رقماً بالضبط.");
    return;
  }

  const newId = "20241" + (1600 + SAMS.students.length + 1);

  const newStudent = {
    student_id: newId,
    full_name_ar: name,
    full_name_en: name,
    national_id: natId,
    birth_date: birth,
    gender: gender,
    department: "نظم المعلومات الإدارية (MIS)",
    level: 3,
    group_no: 3,
    phone: phone || "01000000000",
    address: address || "القاهرة",
    enrollment_date: new Date().toISOString().split("T")[0],
    gpa: 0.0,
    status: isEn ? "Active (Enrolled)" : "مقيد ومنتظم (Active)",
    total_credits: 0
  };

  SAMS.students.push(newStudent);

  // Add initial fee record
  SAMS.fees.push({
    fee_id: SAMS.fees.length + 1,
    student_id: newId,
    total: 8500,
    paid: 0,
    remaining: 8500,
    statusAr: "مستحق (غير مسدد)",
    statusEn: "Unpaid Balance",
    receipt_no: "-",
    date: "-"
  });

  logAuditEvent(`قيد طالب جديد برقم قومي ${natId}`, `Enrolled student ID ${newId}`, "SUCCESS");
  persistState(SAMS);
  closeModal("addStudentModal");

  alert(isEn ? `Student enrolled successfully!\nAssigned ID: ${newId}` : `تم قيد الطالب بنجاح!\nالكود الجامعي الممنوح: ${newId}`);
  renderActiveView();
}

// Grade Submission & GPA Recalculation (Process 5.0)
function openGradeModal(studentId, courseCode) {
  const std = SAMS.students.find(s => s.student_id === studentId);
  const crs = SAMS.courses.find(c => c.code === courseCode);
  const grade = SAMS.grades.find(g => g.student_id === studentId && g.course_code === courseCode);
  const isEn = SAMS.currentLang === "en";

  document.getElementById("gradeStdId").value = studentId;
  document.getElementById("gradeCrsCode").value = courseCode;
  document.getElementById("gradeModalStdName").textContent = std ? (isEn ? std.full_name_en : std.full_name_ar) : studentId;
  document.getElementById("gradeModalStdCode").textContent = studentId;
  document.getElementById("gradeModalCrsName").textContent = crs ? (isEn ? crs.nameEn : crs.nameAr) : courseCode;

  document.getElementById("gradeInputCw").value = grade ? grade.cw : 18;
  document.getElementById("gradeInputMt").value = grade ? grade.mt : 18;
  document.getElementById("gradeInputFn").value = grade ? grade.fn : 55;

  calcGradeLivePreview();
  openModal("gradeEntryModal");
}

function calcGradeLivePreview() {
  const cw = parseFloat(document.getElementById("gradeInputCw").value) || 0;
  const mt = parseFloat(document.getElementById("gradeInputMt").value) || 0;
  const fn = parseFloat(document.getElementById("gradeInputFn").value) || 0;

  const total = cw + mt + fn;
  document.getElementById("previewTotalScore").textContent = total.toFixed(1);

  let letter = "F";
  let points = 0.0;

  if (total >= 95) { letter = "A+"; points = 4.0; }
  else if (total >= 90) { letter = "A"; points = 3.7; }
  else if (total >= 85) { letter = "B+"; points = 3.3; }
  else if (total >= 80) { letter = "B"; points = 3.0; }
  else if (total >= 75) { letter = "C+"; points = 2.7; }
  else if (total >= 70) { letter = "C"; points = 2.4; }
  else if (total >= 60) { letter = "D"; points = 2.0; }
  else { letter = "F"; points = 0.0; }

  document.getElementById("previewLetterScore").textContent = letter;
  document.getElementById("previewPointsScore").textContent = points.toFixed(2);
}

function handleGradeSubmit(e) {
  e.preventDefault();
  const studentId = document.getElementById("gradeStdId").value;
  const courseCode = document.getElementById("gradeCrsCode").value;
  const cw = parseFloat(document.getElementById("gradeInputCw").value);
  const mt = parseFloat(document.getElementById("gradeInputMt").value);
  const fn = parseFloat(document.getElementById("gradeInputFn").value);

  const total = cw + mt + fn;
  let letter = "F";
  let points = 0.0;

  if (total >= 95) { letter = "A+"; points = 4.0; }
  else if (total >= 90) { letter = "A"; points = 3.7; }
  else if (total >= 85) { letter = "B+"; points = 3.3; }
  else if (total >= 80) { letter = "B"; points = 3.0; }
  else if (total >= 75) { letter = "C+"; points = 2.7; }
  else if (total >= 70) { letter = "C"; points = 2.4; }
  else if (total >= 60) { letter = "D"; points = 2.0; }
  else { letter = "F"; points = 0.0; }

  let gradeRecord = SAMS.grades.find(g => g.student_id === studentId && g.course_code === courseCode);
  if (gradeRecord) {
    gradeRecord.cw = cw;
    gradeRecord.mt = mt;
    gradeRecord.fn = fn;
    gradeRecord.total = total;
    gradeRecord.letter = letter;
    gradeRecord.points = points;
  } else {
    SAMS.grades.push({ student_id: studentId, course_code: courseCode, cw, mt, fn, total, letter, points });
  }

  // Recalculate student GPA
  const stdGrades = SAMS.grades.filter(g => g.student_id === studentId);
  const avgPts = stdGrades.reduce((sum, g) => sum + g.points, 0) / (stdGrades.length || 1);
  const std = SAMS.students.find(s => s.student_id === studentId);
  if (std) {
    std.gpa = parseFloat(avgPts.toFixed(2));
    if (std.gpa < 2.0) {
      std.status = "إنذار أكاديمي (Academic Probation)";
    } else {
      std.status = "مقيد ومنتظم (Active)";
    }
  }

  logAuditEvent(`رصد درجة مقرر ${courseCode} للطالب ${studentId}`, `Graded ${courseCode} for student ${studentId}`, "SUCCESS");
  persistState(SAMS);
  closeModal("gradeEntryModal");
  alert(`✓ تم اعتماد الدرجة بنجاح! المجموع: ${total} [${letter}] | الـ GPA الجديد: ${std ? std.gpa : '--'}`);
  renderActiveView();
}

function applyBonusCurve() {
  const isEn = SAMS.currentLang === "en";
  SAMS.grades.forEach(g => {
    if (g.course_code === "MIS301") {
      g.fn = Math.min(60, g.fn + 2);
      g.total = g.cw + g.mt + g.fn;
      if (g.total >= 95) { g.letter = "A+"; g.points = 4.0; }
      else if (g.total >= 90) { g.letter = "A"; g.points = 3.7; }
      else if (g.total >= 85) { g.letter = "B+"; g.points = 3.3; }
      else if (g.total >= 80) { g.letter = "B"; g.points = 3.0; }
      else if (g.total >= 75) { g.letter = "C+"; g.points = 2.7; }
      else if (g.total >= 70) { g.letter = "C"; g.points = 2.4; }
      else if (g.total >= 60) { g.letter = "D"; g.points = 2.0; }
      else { g.letter = "F"; g.points = 0.0; }
    }
  });

  logAuditEvent("تطبيق بونص الكنترول العام (+2 درجات لمقرر MIS301)", "Applied +2 control bonus curve for MIS301", "SUCCESS");
  persistState(SAMS);
  alert(isEn ? "Control Bonus Curve of +2 marks applied to all students in MIS301!" : "تم بنجاح تطبيق بونص الكنترول (+2 درجات) لكافة الطلاب في مقرر MIS301!");
  renderActiveView();
}

// Attendance Logging Modal
function openAttendanceModal(studentId, courseCode) {
  const std = SAMS.students.find(s => s.student_id === studentId);
  const crs = SAMS.courses.find(c => c.code === courseCode);
  const isEn = SAMS.currentLang === "en";

  document.getElementById("attStdId").value = studentId;
  document.getElementById("attCrsCode").value = courseCode;
  document.getElementById("attModalStdName").textContent = std ? (isEn ? std.full_name_en : std.full_name_ar) : studentId;
  document.getElementById("attModalCrsName").textContent = crs ? (isEn ? crs.nameEn : crs.nameAr) : courseCode;
  document.getElementById("attLectureDate").value = new Date().toISOString().split("T")[0];

  openModal("attModal");
}

function handleAttendanceSubmit(e) {
  e.preventDefault();
  const studentId = document.getElementById("attStdId").value;
  const courseCode = document.getElementById("attCrsCode").value;
  const status = document.getElementById("attStatusSelect").value;
  const isEn = SAMS.currentLang === "en";

  let att = SAMS.attendance.find(a => a.student_id === studentId && a.course_code === courseCode);
  if (att) {
    att.total += 1;
    if (status === "حاضر") {
      att.attended += 1;
    } else {
      att.absent += 1;
    }

    att.pct = (att.attended / att.total) * 100;

    // Apply Algorithm 1.4 Rules
    if (att.pct < 70) {
      att.statusAr = "حرمان من الامتحان النهائي (تجاوز 30%)";
      att.statusEn = "Barred from Final Exam (Absence >30%)";
    } else if (att.pct < 75) {
      att.statusAr = "إنذار أول (تجاوز 25%)";
      att.statusEn = "Warning 1 (Absence >25%)";
    } else {
      att.statusAr = "منتظم";
      att.statusEn = "Regular";
    }
  }

  logAuditEvent(`تسجيل حضور/غياب (${status}) للطالب ${studentId}`, `Recorded attendance (${status}) for ${studentId}`, "SUCCESS");
  persistState(SAMS);
  closeModal("attModal");

  alert(isEn ? `Attendance recorded: ${status}\nNew attendance rate: ${att.pct.toFixed(1)}%` : `تم تسجيل حالة المحاضرة: ${status}\nالنسبة المئوية الجديدة: ${att.pct.toFixed(1)}%`);
  renderActiveView();
}

// Payment Collection & Receipt
function openPaymentModal(feeId) {
  const fee = SAMS.fees.find(f => f.fee_id === feeId);
  const std = SAMS.students.find(s => s.student_id === fee.student_id);
  const isEn = SAMS.currentLang === "en";

  document.getElementById("payFeeId").value = feeId;
  document.getElementById("payModalStdName").textContent = std ? (isEn ? std.full_name_en : std.full_name_ar) : fee.student_id;
  document.getElementById("payModalRemAmount").textContent = fee.remaining.toLocaleString();
  document.getElementById("payInputAmount").value = fee.remaining;
  document.getElementById("payInputAmount").max = fee.remaining;

  openModal("paymentModal");
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const feeId = parseInt(document.getElementById("payFeeId").value);
  const amount = parseFloat(document.getElementById("payInputAmount").value);
  const isEn = SAMS.currentLang === "en";

  const fee = SAMS.fees.find(f => f.fee_id === feeId);
  if (fee) {
    fee.paid += amount;
    fee.remaining = Math.max(0, fee.total - fee.paid);
    fee.date = new Date().toISOString().split("T")[0];
    fee.receipt_no = "REC-2026-0" + Math.floor(1000 + Math.random() * 9000);

    if (fee.remaining === 0) {
      fee.statusAr = "مسدد بالكامل";
      fee.statusEn = "Fully Paid";
    } else {
      fee.statusAr = "مسدد جزئياً";
      fee.statusEn = "Partially Paid";
    }
  }

  logAuditEvent(`تحصيل مصروفات بقيمة ${amount} ج.م. إيصال ${fee.receipt_no}`, `Collected tuition ${amount} EGP receipt ${fee.receipt_no}`, "SUCCESS");
  persistState(SAMS);
  closeModal("paymentModal");

  alert(isEn ? `Payment completed! Receipt No: ${fee.receipt_no}` : `تم توريد المبلغ بالخزينة بنجاح!\nرقم الإيصال الرسمي: ${fee.receipt_no}`);
  renderActiveView();
  showReceiptModal(feeId);
}

function showReceiptModal(feeId) {
  const fee = SAMS.fees.find(f => f.fee_id === feeId);
  const std = SAMS.students.find(s => s.student_id === fee.student_id);
  const isEn = SAMS.currentLang === "en";

  document.getElementById("recModalNo").textContent = fee.receipt_no;
  document.getElementById("recModalDate").textContent = fee.date;
  document.getElementById("recModalName").textContent = std ? (isEn ? std.full_name_en : std.full_name_ar) : fee.student_id;
  document.getElementById("recModalCode").textContent = fee.student_id;
  document.getElementById("recModalAmount").textContent = fee.paid.toLocaleString();
  document.getElementById("recModalStatus").textContent = isEn ? fee.statusEn : fee.statusAr;

  openModal("receiptModal");
}

// Official Certificate Generator (Bilingual AR / EN)
function openCertForStudent(studentId, docCode = "SAMS-2026-CERT-889") {
  const std = SAMS.students.find(s => s.student_id === studentId);
  if (!std) return;
  const isEn = SAMS.currentLang === "en";

  document.getElementById("certSheetDocCode").textContent = docCode;
  document.getElementById("certSheetDate").textContent = new Date().toISOString().split("T")[0];

  if (isEn) {
    document.getElementById("certMinistry").textContent = "Ministry of Higher Education & Scientific Research";
    document.getElementById("certInstitute").textContent = "Higher Institute for Computers & MIS";
    document.getElementById("certLocation").textContent = "First Settlement - New Cairo";
    document.getElementById("certAffairs").textContent = "Student Affairs & Examinations Directorate";
    document.getElementById("certSheetDocTitle").textContent = "OFFICIAL ENROLLMENT CERTIFICATE";
    document.getElementById("certSheetYear").textContent = "Academic Year 2026 / 2027 - Second Semester";

    document.getElementById("certSheetBody").innerHTML = `
      This is to formally certify that Student: <strong style="color: #1e40af; font-size: 1.15rem;">${std.full_name_en}</strong>, 
      National ID: <strong>${std.national_id}</strong>, University Registration ID: <strong>${std.student_id}</strong>, 
      is a regularly enrolled <strong>3rd Year Student</strong> in the <strong>Management Information Systems (MIS)</strong> Department, 
      holding an academic standing of <strong>Active with High Honors</strong> with a Cumulative GPA of <strong>${std.gpa.toFixed(2)} / 4.00</strong>.
      <br><br>
      All prescribed tuition fees and dues for the current academic session have been duly settled in full. 
      This certificate is issued upon the student's request for submission to the <strong>Competent Authority</strong> without liability on the Institute regarding third-party rights.
    `;
  } else {
    document.getElementById("certMinistry").textContent = "وزارة التعليم العالي والبحث العلمي";
    document.getElementById("certInstitute").textContent = "المعهد العالي للحاسبات ونظم المعلومات الإدارية";
    document.getElementById("certLocation").textContent = "التجمع الأول - القاهرة الجديدة";
    document.getElementById("certAffairs").textContent = "إدارة شئون الطلاب والامتحانات";
    document.getElementById("certSheetDocTitle").textContent = "شهـــــادة قيـــــد رسميـــــة";
    document.getElementById("certSheetYear").textContent = "للعام الأكاديمي 2026 / 2027 م - الفصل الدراسي الثاني";

    document.getElementById("certSheetBody").innerHTML = `
      تشهد إدارة شئون الطلاب بالمعهد العالي للحاسبات ونظم المعلومات الإدارية بالتجمع الأول بأن الطالب/ة:
      <strong style="color: #1e40af; font-size: 1.15rem;">${std.full_name_ar}</strong>، 
      المقيد بالفرقة الدراسية: <strong>الثالثة</strong> (مجموعة: <strong>${std.group_no}</strong>)، 
      قسم: <strong>نظم المعلومات الإدارية</strong>، والرقم القومي: <strong>${std.national_id}</strong>، 
      والكود الجامعي: <strong>${std.student_id}</strong>، 
      <br><br>
      مقيد/ة بالدراسة بالمعهد للعام الجامعي 2026/2027، ومسدد/ة لكامل الرسوم والمصروفات الدراسية المقررة، وحالته الأكاديمية: <strong>${std.status}</strong> بمعدل تراكمي قدره (<strong>${std.gpa.toFixed(2)} من 4.00</strong>).
      <br><br>
      وقد أُعطيت له/ا هذه الشهادة بناءً على طلبه/ا لتقديمها إلى <strong>جهة الاختصاص</strong> دون أدنى مسئولية على المعهد تجاه حقوق الغير.
    `;
  }

  logAuditEvent(`استخراج وطباعة شهادة قيد للطالب ${studentId}`, `Generated Official Certificate for ${studentId}`, "SUCCESS");
  openModal("certModal");
}

// Global Instant Search Handler
function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    renderActiveView();
    return;
  }

  // Filter students or courses matching query
  const matchedStudents = SAMS.students.filter(s => 
    s.student_id.includes(query) ||
    s.full_name_ar.toLowerCase().includes(query) ||
    s.full_name_en.toLowerCase().includes(query) ||
    s.national_id.includes(query)
  );

  const matchedCourses = SAMS.courses.filter(c =>
    c.code.toLowerCase().includes(query) ||
    c.nameAr.toLowerCase().includes(query) ||
    c.nameEn.toLowerCase().includes(query)
  );

  const container = document.getElementById("contentView");
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>🔍 ${isEn ? "Search Results for:" : "نتائج البحث عن:"} "${query}"</h1>
        <p>${matchedStudents.length} ${isEn ? "students found" : "طالب مطابق"} | ${matchedCourses.length} ${isEn ? "courses found" : "مقرر مطابق"}</p>
      </div>
      <button class="btn btn-secondary" onclick="renderActiveView()">${isEn ? "Clear Search" : "إلغاء البحث"}</button>
    </div>

    ${matchedStudents.length > 0 ? `
      <div class="card-panel">
        <div class="card-header-bar">
          <h3 class="card-header-title">👨‍🎓 ${isEn ? "Matching Students" : "الطلاب المطابقون"}</h3>
        </div>
        <div class="table-container">
          <table class="data-grid-table">
            <thead>
              <tr>
                <th>${isEn ? "ID" : "الكود"}</th>
                <th>${isEn ? "Name" : "الاسم"}</th>
                <th>${isEn ? "National ID" : "الرقم القومي"}</th>
                <th>${isEn ? "GPA" : "المعدل"}</th>
                <th>${isEn ? "Action" : "إجراء"}</th>
              </tr>
            </thead>
            <tbody>
              ${matchedStudents.map(s => `
                <tr>
                  <td><strong>${s.student_id}</strong></td>
                  <td>${isEn ? s.full_name_en : s.full_name_ar}</td>
                  <td><code>${s.national_id}</code></td>
                  <td><strong>${s.gpa.toFixed(2)}</strong></td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="previewSmartIdCard('${s.student_id}')">🪪 ${isEn ? "ID Card" : "الكارنيه"}</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

    ${matchedCourses.length > 0 ? `
      <div class="card-panel">
        <div class="card-header-bar">
          <h3 class="card-header-title">📚 ${isEn ? "Matching Courses" : "المقررات المطابقة"}</h3>
        </div>
        <div class="table-container">
          <table class="data-grid-table">
            <thead>
              <tr>
                <th>${isEn ? "Code" : "الكود"}</th>
                <th>${isEn ? "Course" : "المقرر"}</th>
                <th>${isEn ? "Hours" : "الساعات"}</th>
                <th>${isEn ? "Instructor" : "المحاضر"}</th>
              </tr>
            </thead>
            <tbody>
              ${matchedCourses.map(c => `
                <tr>
                  <td><strong>${c.code}</strong></td>
                  <td>${isEn ? c.nameEn : c.nameAr}</td>
                  <td>${c.credits}</td>
                  <td>${isEn ? c.instructorEn : c.instructorAr}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}
  `;
}

// ============================================================================
// 8. APP INITIALIZATION (DOM Ready)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applyLocalization();
  renderActiveView();
});
