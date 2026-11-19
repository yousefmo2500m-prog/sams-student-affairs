/**
 * ============================================================================
 * SAMS (Student Affairs Management System) - Enterprise Engine
 * Higher Institute for Computers & Management Information Systems
 * Academic Year 2026/2027 | Supervised by: Prof. Dr. Farouk Abdel Aziz
 * ============================================================================
 * Features:
 * 1. Real University SSO Authentication with Username & Password per user
 * 2. Role-Tailored Portals: Student Portal, Doctor Portal, Registrar, Finance, Admin
 * 3. Interactive Diagnostic & Comprehension Quiz ("اختبار فهم واستيعاب المقرر")
 * 4. Smart Lecture Attendance QR / PIN Session Generator for Dr. Farouk
 * 5. What-If GPA Simulator & Graduation Forecaster
 * 6. Public Document Electronic Verification (QR / Code validation)
 * 7. Smart Plastic Student ID Card with Gold Chip & Barcode
 * 8. Full Bilingual Engine (Arabic / English) with RTL / LTR switching
 * ============================================================================
 */

// ============================================================================
// 1. BILINGUAL DICTIONARY (i18n)
// ============================================================================

const I18N = {
  ar: {
    brand_title: "نظام إدارة شئون الطلاب",
    brand_subtitle: "المعهد العالي للحاسبات ونظم المعلومات",
    login_title: "بوابة تسجيل الدخول الأكاديمية",
    login_subtitle: "المعهد العالي للحاسبات ونظم المعلومات الإدارية - التجمع الأول",
    login_user_label: "اسم المستخدم / الكود الجامعي",
    login_pass_label: "كلمة المرور السرية",
    login_btn: "🔐 تسجيل الدخول الآمن",
    demo_accounts_title: "⚡ حسابات اختبار واقعية معتمدة بالمشروع",
    btn_logout: "خروج",
    footer_credits: "مادة تحليل وتصميم نظم المعلومات<br>إشراف: أ.د / فاروق عبد العزيز | 2026/2027",
    search_placeholder: "بحث شامل: كود الطالب، الاسم، المقرر...",

    // Navigation Labels
    nav_dash_student: "لوحة الطالب ومؤشرات الأداء",
    nav_dash_doctor: "لوحة أستاذ المقرر والكنترول",
    nav_dash_staff: "لوحة شئون الطلاب والقيد",
    nav_dash_finance: "لوحة الخزينة والمصروفات",
    nav_dash_admin: "لوحة الإدارة المركزية",
    nav_my_courses: "مقرراتي وسلة التسجيل (P 3.0)",
    nav_my_grades: "سجل الدرجات وبيان التقديرات (P 5.0)",
    nav_my_attendance: "سجل الحضور والإنذارات (P 4.0)",
    nav_quiz: "اختبار الفهم والاستيعاب (Quiz)",
    nav_gpa_calc: "حاسبة المعدل والتخرج الذكية",
    nav_my_fees: "المصروفات والسداد الإلكتروني (P 6.0)",
    nav_my_cert: "طلب شهادة قيد رسمية (P 7.0)",
    nav_my_id: "كارنيه الطالب الذكي (Smart ID)",
    nav_doc_gradebook: "شيت الكنترول ورصد الدرجات (P 5.0)",
    nav_doc_attendance: "تسجيل الغياب وكود الحضور (P 4.0)",
    nav_doc_warnings: "رادار الإنذارات والطلاب المعرضين للحرمان",
    nav_schedule: "الجدول الدراسي الأسبوعي",
    nav_staff_students: "دليل وقيد الطلاب (P 2.0)",
    nav_staff_docs: "اعتماد وطباعة الشهادات (P 7.0)",
    nav_verify_doc: "التحقق الإلكتروني من صحة الوثائق",
    nav_architecture: "مخططات DFD و ERD وقاموس البيانات",
    nav_oop: "كلاسات Java OOP وهيكلية الكود",
    nav_audit: "سجل الحركات والأمان (Audit Log)",

    // Buttons
    btn_cancel: "إلغاء",
    btn_save_student: "حفظ وقيد الطالب",
    btn_save_grade: "اعتماد ورصد الدرجة",
    btn_save_attendance: "حفظ السجل",
    btn_confirm_payment: "تأكيد التوريد وتوليد الإيصال",
    btn_close: "إغلاق",
    btn_print_now: "🖨️ طباعة الشهادة الآن",
    btn_print_receipt: "🖨️ طباعة الإيصال",

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
    login_title: "Academic Single Sign-On Portal",
    login_subtitle: "Higher Institute for Computers & Management Information Systems",
    login_user_label: "Username / Student ID",
    login_pass_label: "Password",
    login_btn: "🔐 Secure Login",
    demo_accounts_title: "⚡ Verified System Test Accounts",
    btn_logout: "Logout",
    footer_credits: "Information Systems Analysis & Design<br>Supervised by: Prof. Dr. Farouk Abdel Aziz | 2026/2027",
    search_placeholder: "Global Search: Student ID, Name, Course code...",

    // Navigation Labels
    nav_dash_student: "Student Dashboard & Status",
    nav_dash_doctor: "Course Professor Portal",
    nav_dash_staff: "Student Affairs & Admissions",
    nav_dash_finance: "Treasury & Finance Portal",
    nav_dash_admin: "System Administration",
    nav_my_courses: "My Enrolled Courses (P 3.0)",
    nav_my_grades: "Grades & Academic Transcript (P 5.0)",
    nav_my_attendance: "Attendance & Warnings (P 4.0)",
    nav_quiz: "Comprehension & Diagnostic Quiz",
    nav_gpa_calc: "Smart GPA & Graduation Forecaster",
    nav_my_fees: "Tuition & Online Payments (P 6.0)",
    nav_my_cert: "Request Official Certificate (P 7.0)",
    nav_my_id: "Smart Student ID Card",
    nav_doc_gradebook: "Control Gradebook & Grading (P 5.0)",
    nav_doc_attendance: "Attendance Roster & PIN (P 4.0)",
    nav_doc_warnings: "Early Warning Radar (At-Risk)",
    nav_schedule: "Weekly Timetable & Schedule",
    nav_staff_students: "Student Information System (P 2.0)",
    nav_staff_docs: "Certificate Approvals & Seal (P 7.0)",
    nav_verify_doc: "Public Document Verification",
    nav_architecture: "DFD, ERD & Data Dictionary",
    nav_oop: "Java OOP Class Hierarchy",
    nav_audit: "Security Audit Log",

    // Buttons
    btn_cancel: "Cancel",
    btn_save_student: "Save & Enroll Student",
    btn_save_grade: "Submit & Recalculate GPA",
    btn_save_attendance: "Save Record",
    btn_confirm_payment: "Confirm & Generate Receipt",
    btn_close: "Close",
    btn_print_now: "🖨️ Print Certificate Now",
    btn_print_receipt: "🖨️ Print Receipt",

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
// 2. CENTRAL STATE & VERIFIED ACCOUNTS (11 Relational Entities)
// ============================================================================

const INITIAL_STATE = {
  currentLang: "ar",
  currentTheme: "light",
  currentView: "dashboard",
  sessionPin: "8492",

  // Verified System Accounts with Passwords (Process 1.0)
  users: [
    { id: 1, username: "farouk", password: "dr123456", nameAr: "أ.د / فاروق عبد العزيز", nameEn: "Prof. Dr. Farouk Abdel Aziz", role: "doctor", titleAr: "أستاذ مقرر تحليل النظم ورئيس القسم", titleEn: "Dept Head & Systems Analysis Professor", avatar: "👨‍🏫" },
    { id: 2, username: "202411586", password: "ragda@2026", nameAr: "رغدة ابراهيم عبد الخالق محمد", nameEn: "Ragda Ibrahim Abdel Khaleq", role: "student", studentId: "202411586", titleAr: "طالبة - الفرقة الثالثة (الأولى على الدفعة)", titleEn: "3rd Year Student (Top Honors GPA 3.92)", avatar: "👩‍🎓" },
    { id: 3, username: "202411531", password: "caroline@2026", nameAr: "كارولين عاطف عطاالله شحاته", nameEn: "Caroline Atef Attallah", role: "student", studentId: "202411531", titleAr: "طالبة - الفرقة الثالثة (امتياز)", titleEn: "3rd Year Student (Honors GPA 3.85)", avatar: "👩‍🎓" },
    { id: 4, username: "202411601", password: "ahmed@2026", nameAr: "أحمد محمد الشناوي", nameEn: "Ahmed Mohamed El-Shennawy", role: "student", studentId: "202411601", titleAr: "طالب متعثر (إنذار أكاديمي وغياب)", titleEn: "Academic Probation Student", avatar: "⚠️" },
    { id: 5, username: "staff_eman", password: "staff123", nameAr: "أ/ إيمان صبري", nameEn: "Ms. Eman Sabry", role: "staff", titleAr: "مسئول شئون الطلاب والامتحانات", titleEn: "Registrar / Student Affairs Officer", avatar: "💼" },
    { id: 6, username: "finance_tarek", password: "fin123", nameAr: "أ/ طارق السيد", nameEn: "Mr. Tarek El-Sayed", role: "finance", titleAr: "مسئول الخزينة والحسابات", titleEn: "Bursar / Treasury Officer", avatar: "💰" },
    { id: 7, username: "admin", password: "admin123", nameAr: "مدير النظام المركزي", nameEn: "System Administrator", role: "admin", titleAr: "إدارة الخوادم والصلاحيات", titleEn: "Full Privileges Administrator", avatar: "⚙️" }
  ],

  // Student Profiles (Entity 2: Student)
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

  // Courses (Entity 3: Course)
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

  // Grades (Entity 5: Grade)
  grades: [
    { student_id: "202411586", course_code: "MIS301", cw: 19.5, mt: 19.0, fn: 59.0, total: 97.5, letter: "A+", points: 4.0 },
    { student_id: "202411586", course_code: "CS302", cw: 19.0, mt: 18.5, fn: 58.0, total: 95.5, letter: "A+", points: 4.0 },
    { student_id: "202411586", course_code: "SWE303", cw: 18.5, mt: 18.0, fn: 56.0, total: 92.5, letter: "A", points: 3.7 },
    { student_id: "202411586", course_code: "NET304", cw: 19.0, mt: 19.0, fn: 57.0, total: 95.0, letter: "A+", points: 4.0 },

    { student_id: "202411531", course_code: "MIS301", cw: 19.0, mt: 18.5, fn: 57.5, total: 95.0, letter: "A+", points: 4.0 },
    { student_id: "202411531", course_code: "CS302", cw: 18.5, mt: 18.0, fn: 55.0, total: 91.5, letter: "A", points: 3.7 },
    { student_id: "202411531", course_code: "SWE303", cw: 18.0, mt: 18.5, fn: 56.0, total: 92.5, letter: "A", points: 3.7 },

    { student_id: "202411585", course_code: "MIS301", cw: 18.5, mt: 18.0, fn: 55.0, total: 91.5, letter: "A", points: 3.7 },
    { student_id: "202411585", course_code: "CS302", cw: 18.0, mt: 17.5, fn: 54.0, total: 89.5, letter: "B+", points: 3.3 },

    { student_id: "202411566", course_code: "MIS301", cw: 18.0, mt: 18.0, fn: 54.0, total: 90.0, letter: "A", points: 3.7 },
    { student_id: "202411587", course_code: "MIS301", cw: 19.0, mt: 18.5, fn: 57.0, total: 94.5, letter: "A", points: 3.7 },

    { student_id: "202411601", course_code: "MIS301", cw: 10.0, mt: 9.0, fn: 32.0, total: 51.0, letter: "D", points: 2.0 },
    { student_id: "202411601", course_code: "CS302", cw: 8.0, mt: 7.0, fn: 25.0, total: 40.0, letter: "F", points: 0.0 }
  ],

  // Attendance (Entity 6: Attendance)
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

  // Fees (Entity 7: Student_Fees)
  fees: [
    { fee_id: 1, student_id: "202411586", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00101", date: "2026-10-01" },
    { fee_id: 2, student_id: "202411531", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00102", date: "2026-10-02" },
    { fee_id: 3, student_id: "202411585", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00103", date: "2026-10-03" },
    { fee_id: 4, student_id: "202411566", total: 8500, paid: 4500, remaining: 4000, statusAr: "مسدد جزئياً", statusEn: "Partially Paid", receipt_no: "REC-2026-00104", date: "2026-10-05" },
    { fee_id: 5, student_id: "202411587", total: 8500, paid: 8500, remaining: 0, statusAr: "مسدد بالكامل", statusEn: "Fully Paid", receipt_no: "REC-2026-00105", date: "2026-10-01" },
    { fee_id: 6, student_id: "202411601", total: 8500, paid: 2000, remaining: 6500, statusAr: "مستحق (عليه متأخرات)", statusEn: "Overdue Balance", receipt_no: "REC-2026-00045", date: "2026-09-20" }
  ],

  // Documents (Entity 8: Document_Request)
  documents: [
    { req_id: 101, student_id: "202411586", typeAr: "شهادة قيد رسمية", typeEn: "Official Enrollment Certificate", purposeAr: "مصلحة الجوازات والهجرة", purposeEn: "Passports & Immigration Authority", date: "2026-11-15", statusAr: "معتمدة ومختومة", statusEn: "Approved & Sealed", code: "SAMS-2026-0889" },
    { req_id: 102, student_id: "202411531", typeAr: "بيان نجاح وتقديرات (Transcript)", typeEn: "Official Academic Transcript", purposeAr: "التأمينات الاجتماعية وجهة العمل", purposeEn: "Social Insurance & Employment", date: "2026-11-18", statusAr: "معتمدة ومختومة", statusEn: "Approved & Sealed", code: "SAMS-2026-0912" },
    { req_id: 103, student_id: "202411601", typeAr: "شهادة قيد رسمية", typeEn: "Official Enrollment Certificate", purposeAr: "اشتراك هيئة النقل والمترو", purposeEn: "Metro Student Transit Pass", date: "2026-11-19", statusAr: "مرفوضة (لوجود متأخرات مالية)", statusEn: "Rejected (Financial Hold)", code: "SAMS-REJ-004" }
  ],

  // Diagnostic Quiz Questions for MIS301
  quizQuestions: [
    {
      id: 1,
      qAr: "في مخطط تدفق البيانات (DFD Level 0)، ماذا يمثل الصندوق الخارجي (Rectangle)؟",
      qEn: "In DFD Level 0 (Context Diagram), what does the outer rectangle represent?",
      optionsAr: ["كيان خارجي (External Entity)", "عملية تحويل بيانات (Process)", "مستودع بيانات (Data Store)", "تدفق بيانات (Data Flow)"],
      optionsEn: ["External Entity", "Process", "Data Store", "Data Flow"],
      correct: 0,
      explanationAr: "يمثل المستطيل الكيان الخارجي الذي يتبادل المدخلات والمخرجات مع النظام دون أن يكون خاضعاً لتحكمه المباشر.",
      explanationEn: "The rectangle represents an External Entity sending or receiving data to/from the system."
    },
    {
      id: 2,
      qAr: "ما هو الحد الأقصى للساعات المعتمدة التي يحق لطالب الفرقة الثالثة تسجيلها في الفصل الدراسي طبقاً للائحة المعهد؟",
      qEn: "What is the maximum credit-hour cap a student can register per semester?",
      optionsAr: ["12 ساعة", "15 ساعة", "18 ساعة معتمدة", "24 ساعة"],
      optionsEn: ["12 Hours", "15 Hours", "18 Credit Hours", "24 Hours"],
      correct: 2,
      explanationAr: "تنص لائحة الجودة (التقرير الثاني - رغدة) على ألا يتجاوز عبء التسجيل الفصلي 18 ساعة معتمدة كحد أقصى.",
      explanationEn: "According to Institute Regulations (Ragda Report), maximum load is strictly 18 credit hours."
    },
    {
      id: 3,
      qAr: "عند تجاوز نسبة غياب الطالب 30% من إجمالي المحاضرات، ما هو الإجراء اللائحي التلقائي (خوارزمية 1.4)؟",
      qEn: "When a student's absence rate exceeds 30%, what is the automatic rule (Algorithm 1.4)?",
      optionsAr: ["إنذار شفوي فقط", "حرمان نهائي من دخول الامتحان النهائي للمقرر", "خصم 5 درجات", "إعادة المحاضرات"],
      optionsEn: ["Verbal warning only", "Strict barring from Final Exam", "Deduct 5 marks", "Retake lectures"],
      correct: 1,
      explanationAr: "تجاوز 30% غياب يولد قرار حرمان رسمي من الامتحان النهائي تلقائياً لعدم استيفاء نسبة الحضور المقررة.",
      explanationEn: "Exceeding 30% absence triggers an official Barring Order from taking the final examination."
    },
    {
      id: 4,
      qAr: "في لغة Java OOP، كيف يرث كلاس `Student` الصفات الأساسية (الاسم والرقم القومي) من كلاس `Person`؟",
      qEn: "In Java OOP, how does class `Student` inherit basic attributes from class `Person`?",
      optionsAr: ["باستخدام الكلمة المحجوزة `implements`", "باستخدام الكلمة المحجوزة `extends`", "من خلال الـ Interface", "بالنسخ اليدوي للكود"],
      optionsEn: ["Using `implements`", "Using `extends`", "Via Interface only", "Manual copy-paste"],
      correct: 1,
      explanationAr: "الوراثة المباشرة للكلاسات في جافا تتم بواسطة الكلمة المفتاحية `extends Person`.",
      explanationEn: "Inheritance from a base class in Java is achieved using `public class Student extends Person`."
    },
    {
      id: 5,
      qAr: "ما هي شروط اعتماد استخراج شهادة القيد الرسمية للطالب في نظام شئون الطلاب (SAMS)؟",
      qEn: "What is the prerequisite for issuing an Official Enrollment Certificate in SAMS?",
      optionsAr: ["موافقة اتحاد الطلاب", "سداد كامل المصروفات الدراسية وعدم وجود متأخرات مالية", "الحصول على امتياز فقط", "اجتياز الكشف الطبي مجدداً"],
      optionsEn: ["Student Union approval", "Full tuition fee clearance with zero overdue balance", "GPA must be 4.0 only", "Medical checkup retest"],
      correct: 1,
      explanationAr: "تطبق خوارزمية (1.7) فحصاً مالياً إجبارياً على جدول `Student_Fees`؛ فإن وُجدت متأخرات يتم حظر استخراج الشهادة.",
      explanationEn: "Algorithm 1.7 strictly checks `Student_Fees` for clearance before approving certificate issuance."
    }
  ],

  // Audit Log
  auditLog: [
    { id: 1001, timestamp: "2026-11-19 14:32:10", user: "farouk", role: "doctor", actionAr: "رصد درجات امتحان الميدتيرم لمقرر MIS301", actionEn: "Graded Midterm Exam for MIS301", ip: "192.168.10.45", status: "SUCCESS" },
    { id: 1002, timestamp: "2026-11-19 14:15:00", user: "staff_eman", role: "staff", actionAr: "اعتماد وطباعة شهادة قيد للطالبة رغدة ابراهيم", actionEn: "Approved & Printed Certificate for Ragda Ibrahim", ip: "192.168.10.12", status: "SUCCESS" }
  ]
};

// Storage helper
function loadAppState() {
  const saved = localStorage.getItem("SAMS_STATE_V3");
  if (saved) {
    try { return JSON.parse(saved); } catch (e) { console.warn("Resetting state"); }
  }
  return INITIAL_STATE;
}

function saveAppState(state) {
  localStorage.setItem("SAMS_STATE_V3", JSON.stringify(state));
}

let SAMS = loadAppState();
let loggedUser = null;

// ============================================================================
// 3. REAL AUTHENTICATION ENGINE (Login / Logout / Session)
// ============================================================================

function checkExistingSession() {
  const sessionUser = localStorage.getItem("SAMS_LOGGED_USER");
  if (sessionUser) {
    try {
      const u = JSON.parse(sessionUser);
      const match = SAMS.users.find(x => x.username === u.username && x.password === u.password);
      if (match) {
        loggedUser = match;
        bootAppInterface();
        return;
      }
    } catch (e) {
      console.warn("Invalid session");
    }
  }
  showLoginScreen();
}

function showLoginScreen() {
  const loginScr = document.getElementById("loginScreen");
  const appLay = document.getElementById("appLayout");
  if (loginScr) loginScr.style.display = "flex";
  if (appLay) appLay.style.display = "none";
}

function quickFillCredentials(username, password) {
  document.getElementById("loginUsername").value = username;
  document.getElementById("loginPassword").value = password;
}

function handleRealLogin(e) {
  e.preventDefault();
  const u = document.getElementById("loginUsername").value.trim();
  const p = document.getElementById("loginPassword").value.trim();
  const isEn = SAMS.currentLang === "en";

  const match = SAMS.users.find(user => (user.username.toLowerCase() === u.toLowerCase() || (user.studentId && user.studentId === u)) && user.password === p);

  if (!match) {
    alert(isEn ? "Invalid Credentials! Check username & password." : "بيانات الدخول غير صحيحة! يرجى التأكد من اسم المستخدم وكلمة المرور.");
    return;
  }

  loggedUser = match;
  localStorage.setItem("SAMS_LOGGED_USER", JSON.stringify({ username: match.username, password: match.password }));

  logAuditEvent(`تسجيل دخول ناجح للمستخدم: ${match.nameAr}`, `Successful login for user: ${match.nameEn}`, "SUCCESS");

  bootAppInterface();
}

function handleLogout() {
  const isEn = SAMS.currentLang === "en";
  if (confirm(isEn ? "Are you sure you want to log out?" : "هل أنت متأكد من رغبتك في تسجيل الخروج؟")) {
    logAuditEvent(`تسجيل خروج للمستخدم: ${loggedUser.nameAr}`, `User logged out: ${loggedUser.nameEn}`, "SUCCESS");
    loggedUser = null;
    localStorage.removeItem("SAMS_LOGGED_USER");
    showLoginScreen();
  }
}

function bootAppInterface() {
  const loginScr = document.getElementById("loginScreen");
  const appLay = document.getElementById("appLayout");
  if (loginScr) loginScr.style.display = "none";
  if (appLay) appLay.style.display = "flex";

  applyTheme();
  applyLocalization();
  buildRoleNavigation();
  switchView("dashboard");
}

function logAuditEvent(actionAr, actionEn, status = "SUCCESS") {
  const newLog = {
    id: 1000 + SAMS.auditLog.length + 1,
    timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
    user: loggedUser ? loggedUser.username : "guest",
    role: loggedUser ? loggedUser.role : "public",
    actionAr,
    actionEn,
    ip: "192.168.10." + Math.floor(10 + Math.random() * 80),
    status
  };
  SAMS.auditLog.unshift(newLog);
  saveAppState(SAMS);
}

// ============================================================================
// 4. ROLE-BASED NAVIGATION BUILDER (Dynamic Menu)
// ============================================================================

function buildRoleNavigation() {
  const menuContainer = document.getElementById("sidebarMenu");
  if (!menuContainer || !loggedUser) return;
  const isEn = SAMS.currentLang === "en";
  const role = loggedUser.role;

  let menuHtml = '';

  if (role === "student") {
    menuHtml = `
      <div class="nav-group-title">${isEn ? "Student Portal" : "بوابة الطالب الأكاديمية"}</div>
      <a class="nav-link active" onclick="switchView('dashboard')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span>${isEn ? "My Dashboard" : "لوحتي الأكاديمية"}</span>
      </a>
      <a class="nav-link" onclick="switchView('my_grades')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        <span>${isEn ? "My Grades & GPA" : "درجاتي والمعدل التراكمي"}</span>
      </a>
      <a class="nav-link" onclick="switchView('my_attendance')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span>${isEn ? "Attendance & Warnings" : "حضوري ونسب الإنذار"}</span>
      </a>
      <a class="nav-link" onclick="switchView('quiz')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
        <span>${isEn ? "Comprehension Quiz" : "اختبار الفهم والاستيعاب"}</span>
        <span class="nav-badge emerald">جديد</span>
      </a>
      <a class="nav-link" onclick="switchView('gpa_calc')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
        <span>${isEn ? "GPA Forecaster" : "حاسبة المعدل والتخرج"}</span>
      </a>
      <a class="nav-link" onclick="switchView('my_courses')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        <span>${isEn ? "My Courses & Basket" : "مقرراتي وسلة الساعات"}</span>
      </a>
      <a class="nav-link" onclick="switchView('schedule')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        <span>${isEn ? "Class Timetable" : "جدولي الدراسي"}</span>
      </a>
      <a class="nav-link" onclick="switchView('my_fees')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
        <span>${isEn ? "Tuition & Pay Online" : "المصروفات والسداد"}</span>
      </a>
      <a class="nav-link" onclick="switchView('my_cert')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <span>${isEn ? "Official Certificate" : "شهادة القيد والتوثيق"}</span>
      </a>
      <a class="nav-link" onclick="switchView('id_card')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/></svg>
        <span>${isEn ? "Smart Student ID" : "كارنيه الطالب الذكي"}</span>
      </a>
    `;
  } else if (role === "doctor") {
    menuHtml = `
      <div class="nav-group-title">${isEn ? "Professor Portal" : "بوابة أستاذ المقرر والكنترول"}</div>
      <a class="nav-link active" onclick="switchView('dashboard')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span>${isEn ? "Doctor Dashboard" : "لوحة أستاذ المقرر"}</span>
      </a>
      <a class="nav-link" onclick="switchView('grades')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        <span>${isEn ? "Control Gradebook & GPA" : "شيت الكنترول ورصد الدرجات"}</span>
      </a>
      <a class="nav-link" onclick="switchView('attendance')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span>${isEn ? "Lecture Attendance & QR" : "الحضور وكود الجلسة (PIN)"}</span>
      </a>
      <a class="nav-link" onclick="switchView('warnings_radar')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        <span>${isEn ? "Early Warning Radar" : "رادار الإنذار والحرمان"}</span>
        <span class="nav-badge amber">تنبيه</span>
      </a>
      <a class="nav-link" onclick="switchView('schedule')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        <span>${isEn ? "Teaching Timetable" : "الجدول والمدرجات"}</span>
      </a>
      <a class="nav-link" onclick="switchView('reports')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
        <span>${isEn ? "Course Analytics" : "إحصائيات المقرر والـ GPA"}</span>
      </a>
    `;
  } else if (role === "staff") {
    menuHtml = `
      <div class="nav-group-title">${isEn ? "Registrar Portal" : "بوابة شئون الطلاب"}</div>
      <a class="nav-link active" onclick="switchView('dashboard')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span>${isEn ? "Registrar Overview" : "لوحة شئون الطلاب"}</span>
      </a>
      <a class="nav-link" onclick="switchView('students')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        <span>${isEn ? "Student Admission (P 2.0)" : "قيد وبيانات الطلاب"}</span>
      </a>
      <a class="nav-link" onclick="switchView('documents')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <span>${isEn ? "Certificates & Approvals" : "اعتماد واستخراج الشهادات"}</span>
      </a>
      <a class="nav-link" onclick="switchView('verify_doc')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        <span>${isEn ? "Verify Official Document" : "التحقق من صحة الوثائق"}</span>
      </a>
      <a class="nav-link" onclick="switchView('id_card')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/></svg>
        <span>${isEn ? "Student ID Cards" : "إصدار كارنيهات الطلاب"}</span>
      </a>
    `;
  } else if (role === "finance") {
    menuHtml = `
      <div class="nav-group-title">${isEn ? "Treasury Portal" : "بوابة الخزينة والمصروفات"}</div>
      <a class="nav-link active" onclick="switchView('dashboard')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span>${isEn ? "Financial Overview" : "الموقف المالي العام"}</span>
      </a>
      <a class="nav-link" onclick="switchView('fees')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
        <span>${isEn ? "Tuition Collection (P 6.0)" : "تحصيل المصروفات والخزينة"}</span>
      </a>
    `;
  } else {
    menuHtml = `
      <div class="nav-group-title">${isEn ? "Administration" : "الإدارة المركزية"}</div>
      <a class="nav-link active" onclick="switchView('dashboard')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span>${isEn ? "System Dashboard" : "لوحة التحكم الشاملة"}</span>
      </a>
      <a class="nav-link" onclick="switchView('students')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        <span>${isEn ? "Students (P 2.0)" : "بيانات الطلاب (P 2.0)"}</span>
      </a>
      <a class="nav-link" onclick="switchView('grades')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        <span>${isEn ? "Grade Control (P 5.0)" : "الكنترول والدرجات (P 5.0)"}</span>
      </a>
      <a class="nav-link" onclick="switchView('attendance')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span>${isEn ? "Attendance (P 4.0)" : "الحضور والغياب (P 4.0)"}</span>
      </a>
      <a class="nav-link" onclick="switchView('fees')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
        <span>${isEn ? "Treasury (P 6.0)" : "الخزينة والمصروفات (P 6.0)"}</span>
      </a>
      <a class="nav-link" onclick="switchView('documents')">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <span>${isEn ? "Official Documents (P 7.0)" : "الشهادات والوثائق (P 7.0)"}</span>
      </a>
    `;
  }

  // Common Engineering Navigation Links
  menuHtml += `
    <div class="nav-group-title">${isEn ? "System Architecture" : "الهندسة المعمارية للنظام"}</div>
    <a class="nav-link" onclick="switchView('architecture')">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
      <span>${isEn ? "DFD, ERD & Dictionary" : "مخططات DFD و ERD"}</span>
    </a>
    <a class="nav-link" onclick="switchView('oop')">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
      <span>${isEn ? "Java OOP Architecture" : "كلاسات Java OOP"}</span>
    </a>
    <a class="nav-link" onclick="switchView('audit')">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
      <span>${isEn ? "Security Audit Log" : "سجل الحركات والأمان"}</span>
    </a>
  `;

  menuContainer.innerHTML = menuHtml;

  // Update Top & Side User Badges
  document.getElementById("sideUserAvatar").textContent = loggedUser.avatar;
  document.getElementById("sideUserName").textContent = isEn ? loggedUser.nameEn : loggedUser.nameAr;
  document.getElementById("sideUserRole").textContent = isEn ? loggedUser.titleEn : loggedUser.titleAr;
  document.getElementById("topUserName").textContent = isEn ? loggedUser.nameEn : loggedUser.nameAr;
  document.getElementById("topUserRole").textContent = isEn ? loggedUser.titleEn : loggedUser.titleAr;
}

// ============================================================================
// 5. LOCALIZATION & THEME ENGINES
// ============================================================================

function toggleLanguage() {
  SAMS.currentLang = (SAMS.currentLang === "ar") ? "en" : "ar";
  saveAppState(SAMS);
  applyLocalization();
  if (loggedUser) {
    buildRoleNavigation();
    renderActiveView();
  }
}

function applyLocalization() {
  const isEn = SAMS.currentLang === "en";
  const htmlRoot = document.getElementById("rootHtml");

  htmlRoot.setAttribute("lang", SAMS.currentLang);
  htmlRoot.setAttribute("dir", isEn ? "ltr" : "rtl");

  document.getElementById("langFlag").textContent = isEn ? "🇪🇬" : "🇬🇧";
  document.getElementById("langLabel").textContent = isEn ? "العربية" : "English";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[SAMS.currentLang][key]) {
      el.innerHTML = I18N[SAMS.currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (I18N[SAMS.currentLang][key]) {
      el.setAttribute("placeholder", I18N[SAMS.currentLang][key]);
    }
  });
}

function toggleTheme() {
  SAMS.currentTheme = (SAMS.currentTheme === "light") ? "dark" : "light";
  saveAppState(SAMS);
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
// 6. ROUTER & DYNAMIC VIEW ENGINE
// ============================================================================

function switchView(viewName) {
  SAMS.currentView = viewName;
  saveAppState(SAMS);

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
  if (!viewEl || !loggedUser) return;

  const role = loggedUser.role;

  switch (SAMS.currentView) {
    case "dashboard":
      if (role === "student") renderStudentDashboard(viewEl);
      else if (role === "doctor") renderDoctorDashboard(viewEl);
      else renderDashboardView(viewEl);
      break;

    // Student Views
    case "my_grades": renderStudentGrades(viewEl); break;
    case "my_attendance": renderStudentAttendance(viewEl); break;
    case "quiz": renderInteractiveQuiz(viewEl); break;
    case "gpa_calc": renderGpaForecaster(viewEl); break;
    case "my_courses": renderStudentCourses(viewEl); break;
    case "my_fees": renderStudentFees(viewEl); break;
    case "my_cert": renderStudentCertificateRequest(viewEl); break;

    // Doctor Views
    case "warnings_radar": renderDoctorWarningRadar(viewEl); break;

    // Shared / Admin Views
    case "students": renderStudentsView(viewEl); break;
    case "grades": renderGradesView(viewEl); break;
    case "attendance": renderAttendanceView(viewEl); break;
    case "fees": renderFeesView(viewEl); break;
    case "documents": renderDocumentsView(viewEl); break;
    case "verify_doc": renderVerifyDocumentView(viewEl); break;
    case "schedule": renderScheduleView(viewEl); break;
    case "id_card": renderIdCardView(viewEl); break;
    case "reports": renderReportsView(viewEl); break;
    case "architecture": renderArchitectureView(viewEl); break;
    case "oop": renderOOPView(viewEl); break;
    case "audit": renderAuditLogView(viewEl); break;
    default:
      if (role === "student") renderStudentDashboard(viewEl);
      else if (role === "doctor") renderDoctorDashboard(viewEl);
      else renderDashboardView(viewEl);
  }
}

// ============================================================================
// 7. SPECIFIC VIEW IMPLEMENTATIONS
// ============================================================================

// 7.1 Student Dedicated Dashboard
function renderStudentDashboard(container) {
  const isEn = SAMS.currentLang === "en";
  const std = SAMS.students.find(s => s.student_id === loggedUser.studentId) || SAMS.students[0];
  const fee = SAMS.fees.find(f => f.student_id === std.student_id);
  const myAtt = SAMS.attendance.filter(a => a.student_id === std.student_id);

  const avgAtt = myAtt.length ? (myAtt.reduce((s, a) => s + a.pct, 0) / myAtt.length).toFixed(1) : 100;
  const isHonors = std.gpa >= 3.7;
  const isProbation = std.gpa < 2.0;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Welcome, " : "أهلاً بك يا، "} ${isEn ? std.full_name_en : std.full_name_ar} 🎓</h1>
        <p>${isEn ? "Academic Level 3 &bull; Department of Management Information Systems (MIS)" : "الفرقة الثالثة &bull; قسم نظم المعلومات الإدارية &bull; مجموعة 3"}</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="switchView('quiz')">
          📝 ${isEn ? "Take MIS301 Quiz" : "اختبار فهم واستيعاب مقرر النظم"}
        </button>
      </div>
    </div>

    ${isProbation ? `
      <div class="card-panel" style="border-inline-start: 4px solid #ef4444; background: rgba(239, 68, 68, 0.05);">
        <div class="card-body-content" style="display: flex; align-items: center; gap: 14px;">
          <div style="font-size: 2rem;">⚠️</div>
          <div>
            <strong style="color: #ef4444; font-size: 1.05rem;">${isEn ? "Academic Probation & Absence Warning Notice" : "تنبيه أكاديمي عاجل: إنذار أكاديمي وتجاوز لنسب الغياب"}</strong>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
              ${isEn 
                ? "Your GPA is below 2.00 or absence in CS302 exceeded 30%. You must consult your academic advisor immediately." 
                : "معدلك التراكمي أقل من 2.00 ونسبة غيابك في مقرر قواعد البيانات تجاوزت 30%. يرجى مراجعة المرشد الأكاديمي وشئون الطلاب فوراً."}
            </p>
          </div>
        </div>
      </div>
    ` : `
      <div class="card-panel" style="border-inline-start: 4px solid #10b981; background: rgba(16, 185, 129, 0.05);">
        <div class="card-body-content" style="display: flex; align-items: center; gap: 14px;">
          <div style="font-size: 2rem;">🏆</div>
          <div>
            <strong style="color: #10b981; font-size: 1.05rem;">${isEn ? "High Academic Standing (First Class Honors)" : "الموقف الأكاديمي: ممتاز مع مرتبة الشرف (الأولى على الدفعة)"}</strong>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
              ${isEn ? "Congratulations! Your Cumulative GPA is 3.92 / 4.00. You are eligible for institute honors and graduate assistantship nomination." : "تهانينا! معدلك التراكمي 3.92 من 4.00 وأنتِ مؤهلة للحصول على شهادات التقدير وجوائز التميز الأكاديمي بالمعهد."}
            </p>
          </div>
        </div>
      </div>
    `}

    <div class="metric-row">
      <div class="stat-box blue">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Cumulative GPA" : "المعدل التراكمي (GPA)"}</span>
          <div class="stat-icon-wrapper">🎯</div>
        </div>
        <div class="stat-value">${std.gpa.toFixed(2)} <small style="font-size: 1rem;">/ 4.00</small></div>
        <div class="stat-subtext">
          <span class="trend-pill ${isHonors ? 'up' : 'down'}">${isHonors ? 'A+ Honors' : (isProbation ? 'Probation' : 'Good')}</span>
          <span>${isEn ? "Scale: 4.00 Points" : "سلم الـ GPA المعتمد"}</span>
        </div>
      </div>

      <div class="stat-box emerald">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Completed Credit Hours" : "الساعات المكتسبة"}</span>
          <div class="stat-icon-wrapper">📚</div>
        </div>
        <div class="stat-value">${std.total_credits} <small style="font-size: 1rem;">${isEn ? "Hrs" : "ساعة"}</small></div>
        <div class="stat-subtext">
          <span>${isEn ? "Degree Progress: 58% of 132 Hrs" : "أنجزت 58% من متطلبات التخرج (132 ساعة)"}</span>
        </div>
      </div>

      <div class="stat-box purple">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Average Attendance" : "متوسط نسبة الحضور"}</span>
          <div class="stat-icon-wrapper">📋</div>
        </div>
        <div class="stat-value">${avgAtt}%</div>
        <div class="stat-subtext">
          <span class="trend-pill ${avgAtt >= 75 ? 'up' : 'down'}">${avgAtt >= 75 ? (isEn ? 'Safe Zone' : 'آمن') : (isEn ? 'Warning' : 'إنذار')}</span>
          <span>${isEn ? "Min required: 75%" : "الحد الأدنى المطلوب: 75%"}</span>
        </div>
      </div>

      <div class="stat-box amber">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Tuition Dues" : "المصروفات والمتبقي"}</span>
          <div class="stat-icon-wrapper">💳</div>
        </div>
        <div class="stat-value">${fee ? fee.remaining.toLocaleString() : 0} <small style="font-size: 0.9rem;">EGP</small></div>
        <div class="stat-subtext">
          <span class="trend-pill ${fee && fee.remaining === 0 ? 'up' : 'down'}">${fee ? fee.statusAr : 'مسدد'}</span>
        </div>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">⚡ ${isEn ? "Student Self-Service Portal" : "خدمات الطالب الذاتية"}</h3>
      </div>
      <div class="card-body-content" style="display: flex; flex-wrap: wrap; gap: 12px;">
        <button class="btn btn-secondary" onclick="switchView('my_grades')">📊 ${isEn ? "Official Transcript" : "بيان الدرجات التراكمي"}</button>
        <button class="btn btn-secondary" onclick="switchView('my_attendance')">📋 ${isEn ? "Attendance Record" : "سجل الحضور والمحاضرات"}</button>
        <button class="btn btn-secondary" onclick="switchView('gpa_calc')">🧮 ${isEn ? "GPA Simulator" : "حاسبة المعدل والتخرج"}</button>
        <button class="btn btn-secondary" onclick="openCertForStudent('${std.student_id}')">📜 ${isEn ? "Print Enrollment Cert" : "استخراج شهادة القيد"}</button>
        <button class="btn btn-secondary" onclick="previewSmartIdCard('${std.student_id}')">🪪 ${isEn ? "Smart ID Card" : "كارنيه الطالب الذكي"}</button>
      </div>
    </div>
  `;
}

// 7.2 Doctor Dedicated Dashboard
function renderDoctorDashboard(container) {
  const isEn = SAMS.currentLang === "en";
  const misGrades = SAMS.grades.filter(g => g.course_code === "MIS301");
  const enrolledCount = misGrades.length;
  const warnedStudents = SAMS.attendance.filter(a => a.course_code === "MIS301" && a.pct < 75);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Course Professor Portal & Control Sheet" : "بوابة أستاذ المقرر والكنترول - أ.د / فاروق عبد العزيز"}</h1>
        <p>${isEn ? "Course: MIS301 (Systems Analysis & Design) &bull; 3rd Year MIS Division" : "مقرر: تحليل وتصميم نظم المعلومات (MIS301) &bull; الفرقة الثالثة نظم معلومات"}</p>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="openDoctorQrModal()">
          📲 ${isEn ? "Generate Lecture Attendance PIN" : "توليد كود الحضور للمحاضرة"}
        </button>
      </div>
    </div>

    <div class="metric-row">
      <div class="stat-box blue">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Enrolled in Course" : "الطلاب المسجلين بالمقرر"}</span>
          <div class="stat-icon-wrapper">👨‍🎓</div>
        </div>
        <div class="stat-value">${enrolledCount}</div>
        <div class="stat-subtext">
          <span>${isEn ? "Group 3 - Lecture Hall 4B" : "الفرقة الثالثة - مجموعة 3"}</span>
        </div>
      </div>

      <div class="stat-box emerald">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Course Pass Rate" : "نسبة النجاح المتوقعة"}</span>
          <div class="stat-icon-wrapper">📈</div>
        </div>
        <div class="stat-value">83.3%</div>
        <div class="stat-subtext">
          <span class="trend-pill up">High</span>
          <span>${isEn ? "5 Students with Honors" : "5 طلاب بدرجة امتياز"}</span>
        </div>
      </div>

      <div class="stat-box rose">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Absence Warnings" : "حالات تجاوز الغياب"}</span>
          <div class="stat-icon-wrapper">⚠️</div>
        </div>
        <div class="stat-value">${warnedStudents.length}</div>
        <div class="stat-subtext">
          <span class="trend-pill down">${isEn ? "Intervention Needed" : "يتطلب إنذاراً"}</span>
        </div>
      </div>

      <div class="stat-box amber">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Current Lecture PIN" : "رمز المحاضرة النشط"}</span>
          <div class="stat-icon-wrapper">🔑</div>
        </div>
        <div class="stat-value" style="font-family: monospace;">${SAMS.sessionPin}</div>
        <div class="stat-subtext">
          <span>${isEn ? "Valid for today's session" : "صالح لمحاضرة اليوم"}</span>
        </div>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">⚡ ${isEn ? "Course Control Quick Actions" : "إجراءات الكنترول السريعة لمقرر MIS301"}</h3>
      </div>
      <div class="card-body-content" style="display: flex; flex-wrap: wrap; gap: 12px;">
        <button class="btn btn-primary" onclick="switchView('grades')">🎯 ${isEn ? "Open Control Grade Sheet" : "شيت الكنترول ورصد الدرجات"}</button>
        <button class="btn btn-secondary" onclick="openDoctorQrModal()">📲 ${isEn ? "Live QR Code for Attendance" : "شاشة الـ QR الذكية للحضور"}</button>
        <button class="btn btn-secondary" onclick="applyBonusCurve()">✨ ${isEn ? "Apply Control Curve (+2 Marks)" : "تطبيق بونص الكنترول (+2 درجات)"}</button>
        <button class="btn btn-secondary" onclick="switchView('warnings_radar')">⚠️ ${isEn ? "Early Warning Radar" : "رادار الطلاب المعرضين للحرمان"}</button>
        <button class="btn btn-secondary" onclick="window.print()">🖨️ ${isEn ? "Export Official Grade Sheet" : "تصدير وطباعة شيت الكنترول"}</button>
      </div>
    </div>
  `;
}

// 7.3 Diagnostic Quiz
function renderInteractiveQuiz(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>📝 ${isEn ? "MIS301 Systems Analysis Comprehension Quiz" : "اختبار الفهم والاستيعاب التفاعلي - تحليل وتصميم النظم (MIS301)"}</h1>
        <p>${isEn ? "Interactive assessment supervised by Prof. Dr. Farouk Abdel Aziz. High score adds +5 marks to Classwork!" : "اختبار تفاعلي لقياس استيعاب مفاهيم DFD و ERD ودورة حياة النظم. الدرجة المرتفعة تضاف تلقائياً لأعمال السنة!"}</p>
      </div>
      <div class="view-actions">
        <span class="status-pill info">5 ${isEn ? "Questions" : "أسئلة"}</span>
      </div>
    </div>

    <form onsubmit="handleQuizSubmit(event)" id="quizForm">
      ${SAMS.quizQuestions.map((q, qIndex) => `
        <div class="quiz-card" id="quizCard_${q.id}">
          <div class="quiz-question-num">${isEn ? "Question " + (qIndex + 1) + " of 5" : "السؤال " + (qIndex + 1) + " من 5"}</div>
          <div class="quiz-question-text">${isEn ? q.qEn : q.qAr}</div>
          <div class="quiz-options-list">
            ${(isEn ? q.optionsEn : q.optionsAr).map((opt, oIndex) => `
              <label class="quiz-option" id="optLabel_${q.id}_${oIndex}">
                <input type="radio" name="q_${q.id}" value="${oIndex}" required style="accent-color: var(--primary-600);">
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
          <div class="quiz-explanation" id="quizExp_${q.id}" style="display: none;"></div>
        </div>
      `).join('')}

      <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px;">
        <button type="submit" class="btn btn-primary" id="btnSubmitQuiz" style="padding: 12px 28px; font-size: 1rem;">
          🚀 ${isEn ? "Submit & Check Answers" : "تسليم الاختبار وتصحيح الإجابات فـوراً"}
        </button>
      </div>
    </form>
  `;
}

function handleQuizSubmit(e) {
  e.preventDefault();
  const isEn = SAMS.currentLang === "en";
  let score = 0;

  SAMS.quizQuestions.forEach(q => {
    const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
    const expBox = document.getElementById(`quizExp_${q.id}`);

    if (selected) {
      const chosenVal = parseInt(selected.value);
      const chosenLabel = document.getElementById(`optLabel_${q.id}_${chosenVal}`);
      const correctLabel = document.getElementById(`optLabel_${q.id}_${q.correct}`);

      if (chosenVal === q.correct) {
        score += 2;
        if (chosenLabel) chosenLabel.classList.add("correct");
      } else {
        if (chosenLabel) chosenLabel.classList.add("wrong");
        if (correctLabel) correctLabel.classList.add("correct");
      }

      if (expBox) {
        expBox.style.display = "block";
        expBox.innerHTML = `<strong>${isEn ? "Explanation: " : "الشرح والتوضيح العلمي: "}</strong> ${isEn ? q.explanationEn : q.explanationAr}`;
      }
    }
  });

  const btn = document.getElementById("btnSubmitQuiz");
  if (btn) {
    btn.disabled = true;
    btn.textContent = isEn ? `Score: ${score} / 10 Points` : `النتيجة النهائية: ${score} من 10 درجات`;
  }

  logAuditEvent(`تسليم اختبار فهم مقرر MIS301 والحصول على ${score}/10`, `Submitted MIS301 Quiz score: ${score}/10`, "SUCCESS");

  alert(isEn 
    ? `Quiz Completed!
Your Score: ${score} / 10
Excellent work! Your grade has been registered into classwork.` 
    : `تم تصحيح الاختبار بنجاح!
درجتك: ${score} من 10 درجات.
تم تسجيل النتيجة وتثبيتها بنجاح.`);
}

// 7.4 GPA Simulator
function renderGpaForecaster(container) {
  const isEn = SAMS.currentLang === "en";
  const std = (loggedUser && loggedUser.role === "student") 
    ? (SAMS.students.find(s => s.student_id === loggedUser.studentId) || SAMS.students[0]) 
    : SAMS.students[0];

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>🧮 ${isEn ? "Smart GPA Simulator & Graduation Forecaster" : "حاسبة المعدل والتخرج الذكية (What-If GPA Simulator)"}</h1>
        <p>${isEn ? "Simulate your grades in the remaining semester courses to forecast your graduation GPA" : "توقع درجاتك في مقررات الفصل الدراسي لمعرفة المعدل التراكمي المستهدف عند التخرج"}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">🎯 ${isEn ? "Interactive Course Grade Simulator" : "محاكي التقديرات للمقررات الخمسة الحالية"}</h3>
        <span class="status-pill success">${isEn ? "Current GPA: " : "المعدل الحالي: "} ${std.gpa.toFixed(2)}</span>
      </div>
      <div class="card-body-content">
        <div style="display: flex; flex-direction: column; gap: 18px;">
          ${SAMS.courses.slice(0, 5).map((c, i) => `
            <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
              <div>
                <strong>${c.code} - ${isEn ? c.nameEn : c.nameAr}</strong>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${c.credits} ${isEn ? "Credit Hours" : "ساعات معتمدة"}</div>
              </div>
              <div style="display: flex; align-items: center; gap: 12px;">
                <label style="font-size: 0.85rem; font-weight: bold;">${isEn ? "Target Grade:" : "التقدير المتوقع:"}</label>
                <select class="form-control sim-grade-select" onchange="recalculateSimulatedGpa(${std.gpa})" style="min-width: 140px;">
                  <option value="4.0" ${i < 3 ? 'selected' : ''}>A+ (امتياز مرتفع 4.0)</option>
                  <option value="3.7" ${i === 3 ? 'selected' : ''}>A (امتياز 3.7)</option>
                  <option value="3.3">B+ (جيد جداً مرتفع 3.3)</option>
                  <option value="3.0">B (جيد جداً 3.0)</option>
                  <option value="2.7">C+ (جيد مرتفع 2.7)</option>
                  <option value="2.4">C (جيد 2.4)</option>
                  <option value="2.0">D (مقبول 2.0)</option>
                </select>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(16, 185, 129, 0.1)); border: 2px dashed var(--primary-500); border-radius: var(--radius-lg); padding: 24px; margin-top: 24px; text-align: center;">
          <small style="color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase; font-weight: bold;">${isEn ? "Forecasted Cumulative GPA" : "المعدل التراكمي المتوقع بعد هذا الفصل"}</small>
          <div id="simulatedGpaDisplay" style="font-size: 3rem; font-weight: 900; color: var(--primary-700); margin: 6px 0;">3.89</div>
          <span class="status-pill success" id="simulatedStandingPill" style="font-size: 0.9rem; padding: 6px 16px;">
            ${isEn ? "First Class Honors (A+)" : "امتياز مع مرتبة الشرف الأولى"}
          </span>
        </div>
      </div>
    </div>
  `;
}

function recalculateSimulatedGpa(baseGpa) {
  const isEn = SAMS.currentLang === "en";
  const selects = document.querySelectorAll(".sim-grade-select");
  let totalPts = 0;
  selects.forEach(s => {
    totalPts += parseFloat(s.value);
  });
  const avg = totalPts / (selects.length || 1);
  const forecasted = ((baseGpa * 0.7) + (avg * 0.3)).toFixed(2);

  const disp = document.getElementById("simulatedGpaDisplay");
  const pill = document.getElementById("simulatedStandingPill");

  if (disp) disp.textContent = forecasted;
  if (pill) {
    if (forecasted >= 3.7) {
      pill.textContent = isEn ? "First Class Honors (A+)" : "امتياز مع مرتبة الشرف الأولى";
      pill.className = "status-pill success";
    } else if (forecasted >= 3.0) {
      pill.textContent = isEn ? "Very Good Standing (B+)" : "تقدير جيد جداً مرتفع";
      pill.className = "status-pill info";
    } else {
      pill.textContent = isEn ? "Good Standing" : "تقدير جيد";
      pill.className = "status-pill warning";
    }
  }
}

// 7.5 Doctor Early Warning Radar
function renderDoctorWarningRadar(container) {
  const isEn = SAMS.currentLang === "en";
  const barred = SAMS.attendance.filter(a => a.pct < 70);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>⚠️ ${isEn ? "Academic Early Warning Radar (Intervention)" : "رادار الإنذار الأكاديمي المبكر والطلاب المعرضين للحرمان"}</h1>
        <p>${isEn ? "Identifies students who breached absence thresholds (25% or 30%) or are failing course requirements" : "حصر إلكتروني مباشر للطلاب المتجاوزين لنسب الغياب المقررة (25% و 30%) لاتخاذ الإجراءات اللائحية"}</p>
      </div>
    </div>

    <div class="card-panel" style="border-inline-start: 4px solid #ef4444;">
      <div class="card-header-bar">
        <h3 class="card-header-title" style="color: #ef4444;">🚨 ${isEn ? "Barred Students (Deprived from Final Exam)" : "كشف الطلاب المحرومين رسمياً من الامتحان النهائي (غياب > 30%)"}</h3>
        <span class="status-pill danger">${barred.length} ${isEn ? "Students" : "طلاب"}</span>
      </div>
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Student ID" : "كود الطالب"}</th>
              <th>${isEn ? "Student Name" : "اسم الطالب"}</th>
              <th>${isEn ? "Course" : "المقرر"}</th>
              <th>${isEn ? "Absences" : "مرات الغياب"}</th>
              <th>${isEn ? "Absence Rate" : "نسبة الغياب"}</th>
              <th>${isEn ? "Official Decision" : "القرار اللائحي"}</th>
              <th>${isEn ? "Actions" : "إجراء"}</th>
            </tr>
          </thead>
          <tbody>
            ${barred.map(b => {
              const std = SAMS.students.find(s => s.student_id === b.student_id);
              return `
                <tr>
                  <td><strong>${b.student_id}</strong></td>
                  <td>${std ? (isEn ? std.full_name_en : std.full_name_ar) : '--'}</td>
                  <td><code>${b.course_code}</code></td>
                  <td><strong>${b.absent} / ${b.total}</strong></td>
                  <td><strong style="color: #ef4444;">${(100 - b.pct).toFixed(1)}%</strong></td>
                  <td><span class="status-pill danger">${isEn ? "Barred from Exam" : "حرمان نهائي من الامتحان"}</span></td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="alert(isEn ? 'Official Barring Notice printed & sent to Dean office.' : 'تم تصدير إخطار الحرمان الرسمي وإرساله لمكتب عميد المعهد.')">
                      🖨️ ${isEn ? "Print Barring Notice" : "طباعة قرار الحرمان"}
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

// 7.6 Public Document Electronic Verification
function renderVerifyDocumentView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>🛡️ ${isEn ? "Electronic Document Authenticity Verification" : "بوابة التحقق الإلكتروني من صحة الوثائق والشهادات الرسمية"}</h1>
        <p>${isEn ? "Public verification engine for embassies, employers & government entities to validate QR/Codes" : "منظومة إلكترونية عامة للجهات الحكومية والسفارات للتحقق الفوري من صحة شهادات القيد والبيانات الرسمية"}</p>
      </div>
    </div>

    <div class="card-panel" style="max-width: 650px; margin: 0 auto;">
      <div class="card-body-content">
        <label style="font-weight: bold; display: block; margin-bottom: 8px;">${isEn ? "Enter Document Tracking Code (e.g. SAMS-2026-0889):" : "أدخل كود التوثيق المشفر المطبوع على الشهادة (مثال: SAMS-2026-0889):"}</label>
        <div style="display: flex; gap: 8px;">
          <input type="text" id="verifyCodeInput" class="form-control" placeholder="SAMS-2026-0889" value="SAMS-2026-0889">
          <button type="button" class="btn btn-primary" onclick="verifyDocumentCode()">${isEn ? "Verify Now" : "تحقق الآن 🔍"}</button>
        </div>
        <div id="verifyResultBox" style="margin-top: 20px;"></div>
      </div>
    </div>
  `;
}

function verifyDocumentCode() {
  const isEn = SAMS.currentLang === "en";
  const code = document.getElementById("verifyCodeInput").value.trim();
  const box = document.getElementById("verifyResultBox");
  const doc = SAMS.documents.find(d => d.code.toLowerCase() === code.toLowerCase());

  if (doc) {
    const std = SAMS.students.find(s => s.student_id === doc.student_id);
    box.innerHTML = `
      <div style="background: #ecfdf5; border: 2px solid #10b981; border-radius: var(--radius-md); padding: 20px; color: #065f46;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
          <span style="font-size: 1.8rem;">✅</span>
          <strong style="font-size: 1.15rem;">${isEn ? "OFFICIAL AUTHENTIC DOCUMENT VERIFIED" : "وثيقة رسمية معتمدة وصحيحة ومسجلة بسجلات المعهد"}</strong>
        </div>
        <p><strong>${isEn ? "Document Type:" : "نوع الوثيقة:"}</strong> ${isEn ? doc.typeEn : doc.typeAr}</p>
        <p><strong>${isEn ? "Student Name:" : "اسم الطالب/ة:"}</strong> ${std ? (isEn ? std.full_name_en : std.full_name_ar) : '--'} (كود: ${doc.student_id})</p>
        <p><strong>${isEn ? "Issuance Date:" : "تاريخ الصدور:"}</strong> ${doc.date}</p>
        <p><strong>${isEn ? "Addressed To:" : "الجهة الموجه إليها:"}</strong> ${isEn ? doc.purposeEn : doc.purposeAr}</p>
        <p><strong>${isEn ? "Verification Status:" : "حالة الاعتماد:"}</strong> <span class="status-pill success">${isEn ? "Active & Authenticated" : "معتمدة ومختومة رسمياً"}</span></p>
      </div>
    `;
  } else {
    box.innerHTML = `
      <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: var(--radius-md); padding: 20px; color: #991b1b;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.8rem;">❌</span>
          <strong style="font-size: 1.1rem;">${isEn ? "INVALID OR UNREGISTERED DOCUMENT CODE" : "كود غير صالح أو غير مسجل بقاعدة بيانات المعهد!"}</strong>
        </div>
        <p style="font-size: 0.85rem; margin-top: 6px;">${isEn ? "Please ensure the code is typed correctly without spaces." : "يرجى التأكد من كتابة الكود بدقة كما هو مدون أسفل الشهادة."}</p>
      </div>
    `;
  }
}

// 7.7 Student Dedicated Views
function renderStudentGrades(container) {
  const isEn = SAMS.currentLang === "en";
  const std = (loggedUser && loggedUser.role === "student") 
    ? (SAMS.students.find(s => s.student_id === loggedUser.studentId) || SAMS.students[0]) 
    : SAMS.students[0];
  const myGrades = SAMS.grades.filter(g => g.student_id === std.student_id);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>📊 ${isEn ? "Official Academic Transcript & Control Sheet" : "سجل الدرجات وبيان التقديرات المعتمد (Transcript)"}</h1>
        <p>${isEn ? "Student: " : "الطالب/ة: "} <strong>${isEn ? std.full_name_en : std.full_name_ar}</strong> &bull; GPA: <strong>${std.gpa.toFixed(2)}</strong></p>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary" onclick="window.print()">🖨️ ${isEn ? "Print Transcript" : "طباعة بيان الدرجات"}</button>
      </div>
    </div>

    <div class="card-panel">
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Course Code" : "كود المقرر"}</th>
              <th>${isEn ? "Course Title" : "اسم المقرر الدراسي"}</th>
              <th>${isEn ? "Classwork (20)" : "أعمال السنة (20)"}</th>
              <th>${isEn ? "Midterm (20)" : "الميدتيرم (20)"}</th>
              <th>${isEn ? "Final (60)" : "النهائي (60)"}</th>
              <th>${isEn ? "Total (100)" : "المجموع (100)"}</th>
              <th>${isEn ? "Letter Grade" : "التقدير الحرفي"}</th>
              <th>${isEn ? "Points" : "النقاط"}</th>
            </tr>
          </thead>
          <tbody>
            ${myGrades.map(g => {
              const c = SAMS.courses.find(crs => crs.code === g.course_code);
              return `
                <tr>
                  <td><strong>${g.course_code}</strong></td>
                  <td><strong>${c ? (isEn ? c.nameEn : c.nameAr) : g.course_code}</strong></td>
                  <td>${g.cw.toFixed(1)}</td>
                  <td>${g.mt.toFixed(1)}</td>
                  <td>${g.fn.toFixed(1)}</td>
                  <td><strong style="font-size: 1.1rem; color: var(--primary-700);">${g.total.toFixed(1)}</strong></td>
                  <td><span class="grade-badge ${g.letter === 'A+' ? 'a-plus' : (g.letter === 'A' ? 'a' : 'b')}">${g.letter}</span></td>
                  <td><strong>${g.points.toFixed(2)}</strong></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentAttendance(container) {
  const isEn = SAMS.currentLang === "en";
  const std = (loggedUser && loggedUser.role === "student") 
    ? (SAMS.students.find(s => s.student_id === loggedUser.studentId) || SAMS.students[0]) 
    : SAMS.students[0];
  const myAtt = SAMS.attendance.filter(a => a.student_id === std.student_id);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>📋 ${isEn ? "My Lecture Attendance & Warning Indicators" : "سجل الحضور والغياب ونسب الإنذار"}</h1>
        <p>${isEn ? "Institute Policy: Absence > 25% triggers Warning 1. Absence > 30% results in Barring from Final Exam." : "لائحة المعهد: غياب أكثر من 25% يولد إنذار أول، وأكثر من 30% يوجب الحرمان من الامتحان النهائي."}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="table-container">
        <table class="data-grid-table">
          <thead>
            <tr>
              <th>${isEn ? "Course Code" : "كود المقرر"}</th>
              <th>${isEn ? "Course Title" : "اسم المقرر"}</th>
              <th>${isEn ? "Total Lectures" : "إجمالي المحاضرات"}</th>
              <th>${isEn ? "Attended" : "حضور"}</th>
              <th>${isEn ? "Absences" : "غياب"}</th>
              <th>${isEn ? "Attendance %" : "نسبة الحضور"}</th>
              <th>${isEn ? "Academic Standing" : "الموقف الأكاديمي"}</th>
            </tr>
          </thead>
          <tbody>
            ${myAtt.map(a => {
              const c = SAMS.courses.find(crs => crs.code === a.course_code);
              let pill = "success";
              if (a.pct < 70) pill = "danger";
              else if (a.pct < 75) pill = "warning";

              return `
                <tr>
                  <td><strong>${a.course_code}</strong></td>
                  <td>${c ? (isEn ? c.nameEn : c.nameAr) : a.course_code}</td>
                  <td>${a.total}</td>
                  <td><strong style="color: #10b981;">${a.attended}</strong></td>
                  <td><strong style="color: #ef4444;">${a.absent}</strong></td>
                  <td>
                    <strong>${a.pct.toFixed(1)}%</strong>
                    <div style="background: var(--bg-subtle); border-radius: var(--radius-full); height: 8px; width: 120px; margin-top: 4px; overflow: hidden;">
                      <div style="width: ${a.pct}%; background: ${a.pct < 70 ? '#ef4444' : (a.pct < 75 ? '#f59e0b' : '#10b981')}; height: 100%;"></div>
                    </div>
                  </td>
                  <td><span class="status-pill ${pill}">${isEn ? a.statusEn : a.statusAr}</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentCourses(container) {
  renderCoursesView(container);
}

function renderStudentFees(container) {
  const isEn = SAMS.currentLang === "en";
  const std = (loggedUser && loggedUser.role === "student") 
    ? (SAMS.students.find(s => s.student_id === loggedUser.studentId) || SAMS.students[0]) 
    : SAMS.students[0];
  const fee = SAMS.fees.find(f => f.student_id === std.student_id);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>💳 ${isEn ? "Tuition Invoices & Online Payment" : "الموقف المالي للمصروفات والسداد الإلكتروني"}</h1>
        <p>${isEn ? "Academic Year 2026/2027 &bull; Second Semester" : "العام الجامعي 2026/2027 &bull; الفصل الدراسي الثاني"}</p>
      </div>
    </div>

    <div class="card-panel">
      <div class="card-header-bar">
        <h3 class="card-header-title">💰 ${isEn ? "Tuition Statement" : "مطالبة المصروفات الدراسية"}</h3>
        <span class="status-pill ${fee && fee.remaining === 0 ? 'success' : 'danger'}">
          ${fee ? (isEn ? fee.statusEn : fee.statusAr) : 'مسدد'}
        </span>
      </div>
      <div class="card-body-content">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <div><small style="color: var(--text-muted);">${isEn ? "Total Tuition:" : "إجمالي المصروفات:"}</small><div style="font-size: 1.4rem; font-weight: 800;">${fee ? fee.total.toLocaleString() : 8500} EGP</div></div>
          <div><small style="color: var(--text-muted);">${isEn ? "Amount Settled:" : "المبلغ المسدد:"}</small><div style="font-size: 1.4rem; font-weight: 800; color: #10b981;">${fee ? fee.paid.toLocaleString() : 8500} EGP</div></div>
          <div><small style="color: var(--text-muted);">${isEn ? "Outstanding Balance:" : "المتبقي المستحق:"}</small><div style="font-size: 1.4rem; font-weight: 800; color: #ef4444;">${fee ? fee.remaining.toLocaleString() : 0} EGP</div></div>
        </div>

        ${fee && fee.remaining > 0 ? `
          <div style="background: var(--bg-subtle); padding: 18px; border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
            <h4>${isEn ? "Instant Electronic Payment Simulation" : "بوابة السداد الإلكتروني الفوري"}</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 6px 0 14px;">${isEn ? "Pay securely using Debit/Credit Card or Fawry" : "سدد الآن عبر الفيزا أو بطاقات ميزة أو فوري لتفعيل خدمات استخراج الشهادات"}</p>
            <button class="btn btn-primary" onclick="openPaymentModal(${fee.fee_id})">💳 ${isEn ? "Pay Remaining " + fee.remaining + " EGP Now" : "سداد المتبقي (" + fee.remaining + " ج.م.) فـوراً"}</button>
          </div>
        ` : `
          <div style="background: #ecfdf5; border: 1px solid #10b981; border-radius: var(--radius-md); padding: 16px; color: #065f46; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <strong>✓ ${isEn ? "Financial Clearance Granted" : "براءة ذمة مالية معتمدة"}</strong>
              <p style="font-size: 0.85rem; margin-top: 2px;">${isEn ? "Receipt No: " : "رقم آخر إيصال: "} <code>${fee ? fee.receipt_no : 'REC-2026-00101'}</code></p>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="showReceiptModal(${fee ? fee.fee_id : 1})">🧾 ${isEn ? "View Receipt" : "عرض الإيصال"}</button>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderStudentCertificateRequest(container) {
  const std = (loggedUser && loggedUser.role === "student") 
    ? (SAMS.students.find(s => s.student_id === loggedUser.studentId) || SAMS.students[0]) 
    : SAMS.students[0];
  openCertForStudent(std.student_id);
}

// 7.8 Doctor Attendance PIN Generator
function openDoctorQrModal() {
  openModal("doctorQrModal");
}

function refreshSessionPin() {
  SAMS.sessionPin = String(Math.floor(1000 + Math.random() * 9000));
  saveAppState(SAMS);
  document.getElementById("sessionPinCode").textContent = SAMS.sessionPin;
}

// 7.9 Shared Admin / Faculty View Renderers
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
    </div>

    <div class="metric-row">
      <div class="stat-box blue">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Enrolled Students" : "الطلاب المقيدين"}</span>
          <div class="stat-icon-wrapper">👨‍🎓</div>
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
          <div class="stat-icon-wrapper">📚</div>
        </div>
        <div class="stat-value">${totalCourses}</div>
        <div class="stat-subtext">
          <span>${isEn ? "17 Total Credit Hours" : "17 ساعة معتمدة إجمالية"}</span>
        </div>
      </div>

      <div class="stat-box emerald">
        <div class="stat-head">
          <span class="stat-label">${isEn ? "Treasury Collections" : "المصروفات المحصلة"}</span>
          <div class="stat-icon-wrapper">💰</div>
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
          <div class="stat-icon-wrapper">⚠️</div>
        </div>
        <div class="stat-value">${totalWarnings}</div>
        <div class="stat-subtext">
          <span class="trend-pill down">Action req.</span>
          <span>${isEn ? "Absence > 25% threshold" : "تجاوز نسبة 25% غياب"}</span>
        </div>
      </div>
    </div>

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

// 7.10 Students Information System (Process 2.0)
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

// 7.11 Course Catalog & Registration (Process 3.0)
function renderCoursesView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Course Catalog & Registration (Process 3.0)" : "دليل وتسجيل المقررات الدراسية (Process 3.0: Course Registration)"}</h1>
        <p>${isEn ? "Entity: Course | 18-credit hour maximum cap & prerequisite validation" : "جدول الكيان: Course | تطبيق سقف الـ 18 ساعة معتمدة وفحص المتطلبات السابقة (Prerequisites)"}</p>
      </div>
    </div>

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

// 7.12 Weekly Timetable Schedule
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

// 7.13 Attendance & Warnings (Process 4.0)
function renderAttendanceView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Attendance Tracking & Automated Warning System (Process 4.0)" : "متابعة الحضور والغياب واحتساب نسب الحرمان (Process 4.0: Attendance)"}</h1>
        <p>${isEn ? "Algorithm 1.4: Warning 1 issued when absence exceeds 25%. Barred from Final Exam when absence exceeds 30%." : "خوارزمية (1.4): إنذار أول عند تجاوز 25% غياب، وحرمان نهائي من دخول الامتحان عند تجاوز 30% غياب."}</p>
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

// 7.14 Grades Control Sheet (Process 5.0)
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

// 7.15 Fees & Treasury (Process 6.0)
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

// 7.16 Official Document Issuance (Process 7.0)
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

// 7.17 Smart Student ID Card
function renderIdCardView(container) {
  const isEn = SAMS.currentLang === "en";
  const defaultStudent = SAMS.students[0];

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

// 7.18 Reports View (Process 8.0)
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

// 7.19 Architecture View
function renderArchitectureView(container) {
  const isEn = SAMS.currentLang === "en";

  container.innerHTML = `
    <div class="view-header">
      <div class="view-headline">
        <h1>${isEn ? "Engineering Diagrams: DFD Level 0, Level 1 & ERD" : "المخططات الهندسية وقاموس البيانات (Architecture & DFD/ERD)"}</h1>
        <p>${isEn ? "System design specification matching Dr. Farouk & SAMS project documentation" : "التصميم الهندسي المتكامل المعتمد في التقارير الثلاثة (د. فاروق، رغدة، SAMS)"}</p>
      </div>
    </div>

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

// 7.20 OOP View
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
// Person.java (Base Abstract Class)
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

// Student.java (Inheritance + Encapsulation)
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

// 7.21 Audit Log View
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
// 8. ACTION HANDLERS & MODAL UTILITIES
// ============================================================================

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("active");
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("active");
}

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

    document.getElementById("regBirthDate").value = `${year}-${month}-${day}`;
    document.getElementById("regGender").value = gender;

    help.innerHTML = `<span style="color: #10b981; font-weight: bold;">✓ ${isEn ? "Valid ID. Birth:" : "رقم قومي صحيح. الميلاد:"} ${year}-${month}-${day} | ${gender === 'F' ? (isEn ? 'Female' : 'أنثى') : (isEn ? 'Male' : 'ذكر')}</span>`;
  } else {
    help.innerHTML = `<span style="color: #ef4444;">${isEn ? "Must be exactly 14 numeric digits" : "يجب أن يتكون من 14 رقماً بالضبط"}</span>`;
  }
}

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
  saveAppState(SAMS);
  closeModal("addStudentModal");

  alert(isEn ? `Student enrolled successfully!
Assigned ID: ${newId}` : `تم قيد الطالب بنجاح!
الكود الجامعي الممنوح: ${newId}`);
  renderActiveView();
}

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
  saveAppState(SAMS);
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
  saveAppState(SAMS);
  alert(isEn ? "Control Bonus Curve of +2 marks applied to all students in MIS301!" : "تم بنجاح تطبيق بونص الكنترول (+2 درجات) لكافة الطلاب في مقرر MIS301!");
  renderActiveView();
}

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
  saveAppState(SAMS);
  closeModal("attModal");

  alert(isEn ? `Attendance recorded: ${status}
New attendance rate: ${att.pct.toFixed(1)}%` : `تم تسجيل حالة المحاضرة: ${status}
النسبة المئوية الجديدة: ${att.pct.toFixed(1)}%`);
  renderActiveView();
}

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
  saveAppState(SAMS);
  closeModal("paymentModal");

  alert(isEn ? `Payment completed! Receipt No: ${fee.receipt_no}` : `تم توريد المبلغ بالخزينة بنجاح!
رقم الإيصال الرسمي: ${fee.receipt_no}`);
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

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    renderActiveView();
    return;
  }

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
// 9. APP INITIALIZATION (DOM Ready)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  checkExistingSession();
});
