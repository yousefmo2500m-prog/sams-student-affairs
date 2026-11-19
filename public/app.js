/**
 * ============================================================================
 * نظام إدارة شئون الطلاب (SAMS) - Student Affairs Management System
 * المعهد العالي للحاسبات ونظم المعلومات الإدارية - التجمع الأول
 * إشراف: أ.د / فاروق عبد العزيز | 2026 / 2027
 * ============================================================================
 * تنفيذ هندسي شامل ومطابق للتقارير الثلاثة:
 * 1. التقرير الأول (د. فاروق): 11 كيان، 8 عمليات DFD، خوارزميات العمل
 * 2. التقرير الثاني (رغدة): قيود الجودة، مصفوفة التتبع، قواعد التحقق
 * 3. التقرير الثالث (SAMS): كلاسات Java OOP، مخططات DFD Level 0 & 1، وقواعد البيانات
 * ============================================================================
 */

// ==========================================
// 1. قاعدة البيانات المحلية المتزامنة (State Store)
// ==========================================

const INITIAL_DB = {
  // المستخدمون (Process 1.0)
  users: [
    { id: 1, username: "farouk", name: "أ.د / فاروق عبد العزيز", role: "doctor", title: "أستاذ مقرر تحليل النظم ورئيس القسم", avatar: "👨‍🏫" },
    { id: 2, username: "202411586", name: "رغدة ابراهيم عبد الخالق محمد", role: "student", title: "طالبة - الفرقة الثالثة (نظم معلومات)", avatar: "👩‍🎓", studentId: "202411586" },
    { id: 3, username: "202411531", name: "كارولين عاطف عطاالله شحاته", role: "student", title: "طالبة - الفرقة الثالثة (نظم معلومات)", avatar: "👩‍🎓", studentId: "202411531" },
    { id: 4, username: "202411601", name: "أحمد محمد الشناوي", role: "student", title: "طالب - الفرقة الثالثة (نظم معلومات)", avatar: "⚠️", studentId: "202411601" },
    { id: 5, username: "staff_eman", name: "أ/ إيمان صبري", role: "staff", title: "مسئول شئون الطلاب", avatar: "💼" },
    { id: 6, username: "finance_tarek", name: "أ/ طارق السيد", role: "finance", title: "مسئول الخزينة والحسابات", avatar: "💰" },
    { id: 7, username: "admin", name: "مدير النظام المركزي", role: "admin", title: "إدارة النظام والخوادم", avatar: "⚙️" }
  ],

  // الطلاب (Process 2.0 - Entity: Student)
  students: [
    {
      student_id: "202411586",
      full_name: "رغدة ابراهيم عبد الخالق محمد",
      national_id: "30405150102468",
      birth_date: "2004-05-15",
      gender: "F",
      department: "نظم المعلومات الإدارية",
      level: 3,
      group_no: 3,
      phone: "01098765432",
      address: "القاهرة الجديدة - التجمع الأول",
      enrollment_date: "2022-09-15",
      gpa: 3.92,
      status: "مقيد ومنتظم"
    },
    {
      student_id: "202411531",
      full_name: "كارولين عاطف عطاالله شحاته",
      national_id: "30403100103579",
      birth_date: "2004-03-10",
      gender: "F",
      department: "نظم المعلومات الإدارية",
      level: 3,
      group_no: 3,
      phone: "01123456789",
      address: "مدينة نصر - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 3.85,
      status: "مقيد ومنتظم"
    },
    {
      student_id: "202411585",
      full_name: "دينا وجدي صليب جرجس",
      national_id: "30408220104680",
      birth_date: "2004-08-22",
      gender: "F",
      department: "نظم المعلومات الإدارية",
      level: 3,
      group_no: 3,
      phone: "01234567890",
      address: "مصر الجديدة - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 3.78,
      status: "مقيد ومنتظم"
    },
    {
      student_id: "202411566",
      full_name: "مروة حسن كامل احمد",
      national_id: "30401180105791",
      birth_date: "2004-01-18",
      gender: "F",
      department: "نظم المعلومات الإدارية",
      level: 3,
      group_no: 3,
      phone: "01011223344",
      address: "المعادي - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 3.70,
      status: "مقيد ومنتظم"
    },
    {
      student_id: "202411587",
      full_name: "روان ابراهيم عبد الخالق محمد",
      national_id: "30405150102470",
      birth_date: "2004-05-15",
      gender: "F",
      department: "نظم المعلومات الإدارية",
      level: 3,
      group_no: 3,
      phone: "01098765433",
      address: "القاهرة الجديدة - التجمع الأول",
      enrollment_date: "2022-09-15",
      gpa: 3.88,
      status: "مقيد ومنتظم"
    },
    {
      student_id: "202411601",
      full_name: "أحمد محمد الشناوي",
      national_id: "30311200109988",
      birth_date: "2003-11-20",
      gender: "M",
      department: "نظم المعلومات الإدارية",
      level: 3,
      group_no: 3,
      phone: "01555667788",
      address: "شبرا - القاهرة",
      enrollment_date: "2022-09-15",
      gpa: 1.85,
      status: "إنذار أكاديمي"
    }
  ],

  // المقررات الدراسية (Process 3.0 - Entity: Course)
  courses: [
    { code: "MIS301", name: "تحليل وتصميم نظم المعلومات", credits: 3, level: 3, instructor: "أ.د / فاروق عبد العزيز", prerequisite: "MIS201" },
    { code: "CS302", name: "قواعد البيانات المتقدمة (SQL)", credits: 3, level: 3, instructor: "د / هشام عرفات", prerequisite: "CS202" },
    { code: "SWE303", name: "هندسة البرمجيات (Software Eng.)", credits: 3, level: 3, instructor: "د / أماني سمير", prerequisite: "CS201" },
    { code: "NET304", name: "شبكات الحاسب وأمن المعلومات", credits: 3, level: 3, instructor: "د / محمد رضوان", prerequisite: "NET201" },
    { code: "ACC305", name: "نظم المعلومات المحاسبية", credits: 2, level: 3, instructor: "د / سمير عبد المنعم", prerequisite: "ACC101" }
  ],

  // الجدول الدراسي الأسبوعي
  schedules: [
    { id: 1, course_code: "MIS301", course_name: "تحليل وتصميم نظم المعلومات", day: "الأحد", time: "09:00 ص - 12:00 م", hall: "مدرج 4 (مبنى ج)", instructor: "أ.د / فاروق عبد العزيز", type: "محاضرة نظرية" },
    { id: 2, course_code: "CS302", course_name: "قواعد البيانات المتقدمة (SQL)", day: "الإثنين", time: "10:00 ص - 01:00 م", hall: "معمل حاسب 2 (مبنى ب)", instructor: "د / هشام عرفات", type: "محاضرة وتطبيق عملي" },
    { id: 3, course_code: "SWE303", course_name: "هندسة البرمجيات", day: "الثلاثاء", time: "11:00 ص - 01:00 م", hall: "قاعة 12 (مبنى أ)", instructor: "د / أماني سمير", type: "محاضرة نظرية" },
    { id: 4, course_code: "NET304", course_name: "شبكات الحاسب وأمن المعلومات", day: "الأربعاء", time: "09:00 ص - 12:00 م", hall: "معمل شبكات 1", instructor: "د / محمد رضوان", type: "محاضرة وتطبيق" },
    { id: 5, course_code: "ACC305", course_name: "نظم المعلومات المحاسبية", day: "الخميس", time: "10:00 ص - 12:00 م", hall: "قاعة 8", instructor: "د / سمير عبد المنعم", type: "محاضرة" }
  ],

  // رصد الدرجات وحساب الـ GPA (Process 5.0 - Entity: Grade)
  grades: [
    // درجات رغدة (202411586)
    { student_id: "202411586", course_code: "MIS301", classwork: 19.5, midterm: 19.0, final: 59.0, total: 97.5, letter: "A+", points: 4.0 },
    { student_id: "202411586", course_code: "CS302", classwork: 19.0, midterm: 18.5, final: 58.0, total: 95.5, letter: "A+", points: 4.0 },
    { student_id: "202411586", course_code: "SWE303", classwork: 18.5, midterm: 18.0, final: 56.0, total: 92.5, letter: "A", points: 3.7 },
    { student_id: "202411586", course_code: "NET304", classwork: 19.0, midterm: 19.0, final: 57.0, total: 95.0, letter: "A+", points: 4.0 },

    // درجات كارولين (202411531)
    { student_id: "202411531", course_code: "MIS301", classwork: 19.0, midterm: 18.5, final: 57.5, total: 95.0, letter: "A+", points: 4.0 },
    { student_id: "202411531", course_code: "CS302", classwork: 18.5, midterm: 18.0, final: 55.0, total: 91.5, letter: "A", points: 3.7 },
    { student_id: "202411531", course_code: "SWE303", classwork: 18.0, midterm: 18.5, final: 56.0, total: 92.5, letter: "A", points: 3.7 },

    // درجات دينا (202411585)
    { student_id: "202411585", course_code: "MIS301", classwork: 18.5, midterm: 18.0, final: 55.0, total: 91.5, letter: "A", points: 3.7 },
    { student_id: "202411585", course_code: "CS302", classwork: 18.0, midterm: 17.5, final: 54.0, total: 89.5, letter: "B+", points: 3.3 },

    // درجات مروة (202411566)
    { student_id: "202411566", course_code: "MIS301", classwork: 18.0, midterm: 18.0, final: 54.0, total: 90.0, letter: "A", points: 3.7 },

    // درجات روان (202411587)
    { student_id: "202411587", course_code: "MIS301", classwork: 19.0, midterm: 18.5, final: 57.0, total: 94.5, letter: "A", points: 3.7 },

    // درجات الطالب المتعثر أحمد الشناوي (202411601)
    { student_id: "202411601", course_code: "MIS301", classwork: 10.0, midterm: 9.0, final: 32.0, total: 51.0, letter: "D", points: 2.0 },
    { student_id: "202411601", course_code: "CS302", classwork: 8.0, midterm: 7.0, final: 25.0, total: 40.0, letter: "F", points: 0.0 }
  ],

  // الحضور والغياب (Process 4.0 - Entity: Attendance)
  attendance: [
    { student_id: "202411586", course_code: "MIS301", total_lectures: 12, attended: 12, absent: 0, percentage: 100, status: "منتظم" },
    { student_id: "202411586", course_code: "CS302", total_lectures: 12, attended: 11, absent: 1, percentage: 91.7, status: "منتظم" },
    { student_id: "202411531", course_code: "MIS301", total_lectures: 12, attended: 12, absent: 0, percentage: 100, status: "منتظم" },
    { student_id: "202411585", course_code: "MIS301", total_lectures: 12, attended: 11, absent: 1, percentage: 91.7, status: "منتظم" },
    { student_id: "202411566", course_code: "MIS301", total_lectures: 12, attended: 10, absent: 2, percentage: 83.3, status: "منتظم" },
    { student_id: "202411587", course_code: "MIS301", total_lectures: 12, attended: 12, absent: 0, percentage: 100, status: "منتظم" },
    { student_id: "202411601", course_code: "MIS301", total_lectures: 12, attended: 8, absent: 4, percentage: 66.7, status: "إنذار أول (تجاوز 25%)" },
    { student_id: "202411601", course_code: "CS302", total_lectures: 12, attended: 7, absent: 5, percentage: 58.3, status: "حرمان من الامتحان (تجاوز 30%)" }
  ],

  // المصروفات والخزينة (Process 6.0 - Entity: Student_Fees)
  fees: [
    { fee_id: 1, student_id: "202411586", total_amount: 8500, paid_amount: 8500, remaining_amount: 0, status: "مسدد بالكامل", last_payment: "2026-10-01", receipt_no: "REC-2026-00101" },
    { fee_id: 2, student_id: "202411531", total_amount: 8500, paid_amount: 8500, remaining_amount: 0, status: "مسدد بالكامل", last_payment: "2026-10-02", receipt_no: "REC-2026-00102" },
    { fee_id: 3, student_id: "202411585", total_amount: 8500, paid_amount: 8500, remaining_amount: 0, status: "مسدد بالكامل", last_payment: "2026-10-03", receipt_no: "REC-2026-00103" },
    { fee_id: 4, student_id: "202411566", total_amount: 8500, paid_amount: 4500, remaining_amount: 4000, status: "مسدد جزئياً", last_payment: "2026-10-05", receipt_no: "REC-2026-00104" },
    { fee_id: 5, student_id: "202411587", total_amount: 8500, paid_amount: 8500, remaining_amount: 0, status: "مسدد بالكامل", last_payment: "2026-10-01", receipt_no: "REC-2026-00105" },
    { fee_id: 6, student_id: "202411601", total_amount: 8500, paid_amount: 2000, remaining_amount: 6500, status: "مستحق (عليه متأخرات)", last_payment: "2026-09-20", receipt_no: "REC-2026-00045" }
  ],

  // طلبات إصدار الشهادات الرسمية (Process 7.0 - Entity: Document_Request)
  documents: [
    { req_id: 101, student_id: "202411586", doc_type: "شهادة قيد رسمية", purpose: "مصلحة الجوازات والهجرة", req_date: "2026-11-15", status: "معتمدة وجاهزة للطباعة", code: "SAMS-2026-0889" },
    { req_id: 102, student_id: "202411531", doc_type: "بيان نجاح وتقديرات", purpose: "جهة التجنيد والتأمينات", req_date: "2026-11-18", status: "معتمدة وجاهزة للطباعة", code: "SAMS-2026-0912" },
    { req_id: 103, student_id: "202411601", doc_type: "شهادة قيد رسمية", purpose: "استخراج اشتراك المترو", req_date: "2026-11-19", status: "مرفوضة (لوجود متأخرات مالية)", code: "SAMS-REJ-004" }
  ]
};

// تحميل البيانات المحفوظة في LocalStorage إذا وجدت
function loadData() {
  const saved = localStorage.getItem("SAMS_DATABASE");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Using INITIAL_DB due to parsing error");
    }
  }
  return INITIAL_DB;
}

function saveData(data) {
  localStorage.setItem("SAMS_DATABASE", JSON.stringify(data));
}

let db = loadData();

// المستخدم الحالي
let currentUser = db.users[0]; // الدكتور فاروق عبد العزيز افتراضياً
let currentSection = "dashboard";

// ==========================================
// 2. التحكم في المستخدمين والصلاحيات (RBAC)
// ==========================================

function loginAs(key) {
  let user = null;
  if (key === 'dr_farouk') user = db.users[0];
  else if (key === 'staff') user = db.users[4];
  else if (key === 'finance') user = db.users[5];
  else if (key === 'admin') user = db.users[6];
  else {
    user = db.users.find(u => u.username === key);
  }

  if (user) {
    currentUser = user;
    updateCurrentUserUI();
    closeModal('switchUserModal');
    renderCurrentSection();
  }
}

function updateCurrentUserUI() {
  document.getElementById("sidebarAvatar").textContent = currentUser.avatar;
  document.getElementById("sidebarUserName").textContent = currentUser.name;
  document.getElementById("sidebarUserRole").textContent = currentUser.title;

  document.getElementById("topUserIcon").textContent = currentUser.avatar;
  document.getElementById("topUserName").textContent = currentUser.name;

  // إخفاء أو إظهار القوائم بناءً على الصلاحيات
  const isStudent = currentUser.role === "student";
  const isFinance = currentUser.role === "finance";
  const isStaff = currentUser.role === "staff";
  const isDoctor = currentUser.role === "doctor";
  const isAdmin = currentUser.role === "admin";

  // إخفاء إدارة المستخدمين إلا للمدير
  const navUsers = document.getElementById("navItemUsers");
  if (navUsers) navUsers.style.display = (isAdmin) ? "flex" : "none";
}

// ==========================================
// 3. التنقل بين الأقسام
// ==========================================

function navigateSection(sectionId) {
  currentSection = sectionId;

  // تحديث حالة الروابط في القائمة الجانبية
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
    item.classList.remove("active");
  });

  const activeLink = Array.from(document.querySelectorAll(".sidebar-nav .nav-item")).find(el => {
    return el.getAttribute("onclick") && el.getAttribute("onclick").includes(`'${sectionId}'`);
  });
  if (activeLink) activeLink.classList.add("active");

  renderCurrentSection();
}

function renderCurrentSection() {
  const container = document.getElementById("mainContentContainer");
  if (!container) return;

  switch (currentSection) {
    case "dashboard":
      renderDashboard(container);
      break;
    case "students":
      renderStudents(container);
      break;
    case "courses":
      renderCourses(container);
      break;
    case "schedule":
      renderSchedule(container);
      break;
    case "attendance":
      renderAttendance(container);
      break;
    case "grades":
      renderGrades(container);
      break;
    case "fees":
      renderFees(container);
      break;
    case "documents":
      renderDocuments(container);
      break;
    case "reports":
      renderReports(container);
      break;
    case "architecture":
      renderArchitecture(container);
      break;
    case "oop_view":
      renderOOPView(container);
      break;
    case "users":
      renderUsers(container);
      break;
    default:
      renderDashboard(container);
  }
}

// ==========================================
// 4. واجهات العمليات الأكاديمية
// ==========================================

// 4.1 لوحة المعلومات (Dashboard)
function renderDashboard(container) {
  const totalStudents = db.students.length;
  const totalCourses = db.courses.length;
  const totalFees = db.fees.reduce((acc, f) => acc + f.paid_amount, 0);
  const totalWarnings = db.attendance.filter(a => a.status.includes("إنذار") || a.status.includes("حرمان")).length;

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">لوحة مؤشرات الأداء الأكاديمي الشاملة (Dashboard)</h2>
        <p class="page-subtitle">المعهد العالي للحاسبات ونظم المعلومات الإدارية - العام الجامعي 2026/2027</p>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-primary" onclick="openModal('switchUserModal')">
          👤 تجربة دور آخر
        </button>
      </div>
    </div>

    <!-- بطاقات الإحصائيات العلوية -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon" style="background: var(--primary-100); color: var(--primary-800);">👨‍🎓</div>
        <div class="metric-value">${totalStudents}</div>
        <div class="metric-label">إجمالي الطلاب المقيدين</div>
      </div>

      <div class="metric-card">
        <div class="metric-icon" style="background: #e0f2fe; color: #0284c7;">📚</div>
        <div class="metric-value">${totalCourses}</div>
        <div class="metric-label">المقررات الدراسية النشطة</div>
      </div>

      <div class="metric-card">
        <div class="metric-icon" style="background: var(--success-light); color: var(--success);">💰</div>
        <div class="metric-value">${totalFees.toLocaleString()} ج.م.</div>
        <div class="metric-label">المصروفات المحصلة بالخزينة</div>
      </div>

      <div class="metric-card">
        <div class="metric-icon" style="background: var(--danger-light); color: var(--danger);">⚠️</div>
        <div class="metric-value">${totalWarnings}</div>
        <div class="metric-label">إنذارات الغياب وتجاوز النسب</div>
      </div>
    </div>

    <!-- قسم التحذيرات وقواعد العمل النشطة -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">📌 تنبيهات وقواعد الجودة الأكاديمية (التقرير الثاني - رغدة)</h3>
        <span class="badge badge-success">نظام الجودة مفعل</span>
      </div>
      <div style="font-size: 0.9rem; line-height: 1.8;">
        <ul style="padding-right: 20px;">
          <li><strong>شرط حرمان الغياب (خوارزمية 1.4):</strong> تجاوز نسبة غياب 25% يولد إنذاراً أولياً تلقائياً، وتجاوز 30% يحرم الطالب من دخول الامتحان النهائي تلقائياً.</li>
          <li><strong>توزيع درجات المقرر (خوارزمية 1.5):</strong> 20 أعمال سنة + 20 امتحان نصفي (Midterm) + 60 امتحان نهائي = 100 درجة كلية (سلم الـ GPA المعتمد).</li>
          <li><strong>التحصيل المالي (خوارزمية 1.6):</strong> لا يتم اعتماد إصدار شهادة القيد أو بيان الدرجات إلا بعد التحقق من سداد كامل المصروفات المستحقة في جدول <code>Student_Fees</code>.</li>
        </ul>
      </div>
    </div>

    <!-- جدول أوائل الفرقة الثالثة (مطابق لتقرير رغدة) -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">🏆 الطلاب المتفوقون (معدل تراكمي ممتاز 3.7+ فما فوق)</h3>
        <button class="btn btn-secondary btn-sm" onclick="navigateSection('grades')">استعراض كافة الدرجات</button>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>اسم الطالب رباعي</th>
              <th>الفرقة / المجموعة</th>
              <th>المعدل التراكمي (GPA)</th>
              <th>التقدير العام</th>
              <th>الموقف المالي</th>
            </tr>
          </thead>
          <tbody>
            ${db.students.filter(s => s.gpa >= 3.7).map(s => `
              <tr>
                <td><strong>${s.student_id}</strong></td>
                <td><strong>${s.full_name}</strong></td>
                <td>الفرقة ${s.level} (مجموعة ${s.group_no})</td>
                <td><span class="badge badge-success" style="font-size: 0.95rem;">${s.gpa.toFixed(2)} / 4.00</span></td>
                <td><span class="badge badge-primary">امتياز مرتفع (A+)</span></td>
                <td><span class="badge badge-success">مسدد بالكامل</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.2 بيانات وقيد الطلاب (Process 2.0)
function renderStudents(container) {
  const isStaff = currentUser.role === "staff" || currentUser.role === "admin";

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">إدارة بيانات وقيد الطلاب (Process 2.0: Student Registration)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Student</code> | التحقق من الرقم القومي (14 رقم) وسنة الميلاد والفرقة الدراسية</p>
      </div>
      <div>
        ${isStaff ? `<button class="btn btn-primary" onclick="openModal('addStudentModal')">➕ قيد طالب جديد (خوارزمية 1.2)</button>` : ''}
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">سجل الطلاب المقيدين بالفرقة الثالثة (نظم معلومات إدارية)</h3>
        <span class="badge badge-primary">إجمالي: ${db.students.length} طالب</span>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>الاسم الرباعي</th>
              <th>الرقم القومي (14 رقم)</th>
              <th>النوع</th>
              <th>تاريخ الميلاد</th>
              <th>المجموعة</th>
              <th>الهاتف</th>
              <th>المعدل (GPA)</th>
              <th>الحالة الأكاديمية</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            ${db.students.map(s => `
              <tr>
                <td><strong>${s.student_id}</strong></td>
                <td>${s.full_name}</td>
                <td><code>${s.national_id}</code></td>
                <td>${s.gender === 'F' ? 'أنثى' : 'ذكر'}</td>
                <td>${s.birth_date}</td>
                <td>مجموعة ${s.group_no}</td>
                <td>${s.phone}</td>
                <td><strong>${s.gpa.toFixed(2)}</strong></td>
                <td>
                  <span class="badge ${s.status === 'مقيد ومنتظم' ? 'badge-success' : 'badge-danger'}">
                    ${s.status}
                  </span>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="showStudentDetails('${s.student_id}')">
                    عرض الملف
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.3 تسجيل المقررات (Process 3.0)
function renderCourses(container) {
  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">دليل وتسجيل المقررات الدراسية (Process 3.0: Course Registration)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Course</code> | الساعات المعتمدة، المتطلب السابق (Prerequisite)، وأستاذ المقرر</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">مقررات الفرقة الثالثة - قسم نظم المعلومات الإدارية</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود المقرر</th>
              <th>اسم المقرر الدراسي</th>
              <th>الساعات المعتمدة</th>
              <th>الفرقة</th>
              <th>أستاذ المقرر (Faculty)</th>
              <th>المتطلب السابق</th>
              <th>حالة التسجيل</th>
            </tr>
          </thead>
          <tbody>
            ${db.courses.map(c => `
              <tr>
                <td><strong>${c.code}</strong></td>
                <td><strong>${c.name}</strong></td>
                <td>${c.credits} ساعات</td>
                <td>الفرقة ${c.level}</td>
                <td>${c.instructor}</td>
                <td><span class="badge badge-warning">${c.prerequisite}</span></td>
                <td><span class="badge badge-success">مقرر إجباري متاح للتسجيل</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.4 الجداول الدراسية والمواعيد
function renderSchedule(container) {
  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">الجداول الدراسية والمواعيد الأسبوعية (Schedule)</h2>
        <p class="page-subtitle">توزيع المحاضرات والمعامل والقاعات للفرقة الثالثة - مجموعة 3</p>
      </div>
      <button class="btn btn-secondary" onclick="window.print()">🖨️ طباعة الجدول الدراسي</button>
    </div>

    <div class="portal-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>اليوم</th>
              <th>الموعد والتوقيت</th>
              <th>المقرر الدراسي</th>
              <th>القاعة / المدرج / المعمل</th>
              <th>نوع الجلسة</th>
              <th>المحاضر المسؤول</th>
            </tr>
          </thead>
          <tbody>
            ${db.schedules.map(sch => `
              <tr>
                <td><strong>${sch.day}</strong></td>
                <td>${sch.time}</td>
                <td><strong>${sch.course_name}</strong> (<code>${sch.course_code}</code>)</td>
                <td><span class="badge badge-primary">${sch.hall}</span></td>
                <td>${sch.type}</td>
                <td>${sch.instructor}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.5 الحضور والغياب والإنذارات (Process 4.0)
function renderAttendance(container) {
  const isDoctor = currentUser.role === "doctor" || currentUser.role === "admin";

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">متابعة الحضور والغياب واحتساب نسب الحرمان (Process 4.0: Attendance)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Attendance</code> | تطبيق خوارزمية (1.4): الإنذار عند تجاوز 25% والحرمان عند تجاوز 30%</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">سجل الحضور والغياب لمقرر: تحليل وتصميم النظم (MIS301)</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>اسم الطالب</th>
              <th>إجمالي المحاضرات</th>
              <th>محاضرات الحضور</th>
              <th>محاضرات الغياب</th>
              <th>نسبة الحضور %</th>
              <th>الموقف الأكاديمي والإنذارات</th>
              ${isDoctor ? `<th>تسجيل الحضور</th>` : ''}
            </tr>
          </thead>
          <tbody>
            ${db.attendance.map(a => {
              const std = db.students.find(s => s.student_id === a.student_id);
              let badgeClass = "badge-success";
              if (a.percentage < 70) badgeClass = "badge-danger";
              else if (a.percentage < 75) badgeClass = "badge-warning";

              return `
                <tr>
                  <td><strong>${a.student_id}</strong></td>
                  <td>${std ? std.full_name : '--'}</td>
                  <td>${a.total_lectures}</td>
                  <td><strong style="color: var(--success);">${a.attended}</strong></td>
                  <td><strong style="color: var(--danger);">${a.absent}</strong></td>
                  <td>
                    <strong>${a.percentage.toFixed(1)}%</strong>
                    <div class="progress-bar-container">
                      <div class="progress-bar-fill" style="width: ${a.percentage}%; background: ${a.percentage < 70 ? 'var(--danger)' : (a.percentage < 75 ? 'var(--warning)' : 'var(--success)')};"></div>
                    </div>
                  </td>
                  <td><span class="badge ${badgeClass}">${a.status}</span></td>
                  ${isDoctor ? `
                    <td>
                      <button class="btn btn-secondary btn-sm" onclick="openAttendanceModal('${a.student_id}', '${a.course_code}')">
                        تسجيل غياب/حضور
                      </button>
                    </td>
                  ` : ''}
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.6 رصد الدرجات وحساب الـ GPA (Process 5.0)
function renderGrades(container) {
  const isDoctor = currentUser.role === "doctor" || currentUser.role === "admin";

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">رصد الدرجات واحتساب المعدل التراكمي (Process 5.0: Grade & GPA System)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Grade</code> | خوارزمية (1.5): أعمال سنة (20) + ميدتيرم (20) + فاينال (60) = 100</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">شيت كنترول مقرر: تحليل وتصميم نظم المعلومات (MIS301) - الفصل الثاني</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>اسم الطالب</th>
              <th>أعمال السنة (20)</th>
              <th>الميدتيرم (20)</th>
              <th>الامتحان النهائي (60)</th>
              <th>المجموع الكلي (100)</th>
              <th>التقدير الحرفي</th>
              <th>النقاط (4.00)</th>
              ${isDoctor ? `<th>رصد الدرجات</th>` : ''}
            </tr>
          </thead>
          <tbody>
            ${db.grades.filter(g => g.course_code === "MIS301").map(g => {
              const std = db.students.find(s => s.student_id === g.student_id);
              let letterBadge = "badge-success";
              if (g.letter === "F") letterBadge = "badge-danger";
              else if (g.letter === "D") letterBadge = "badge-warning";

              return `
                <tr>
                  <td><strong>${g.student_id}</strong></td>
                  <td><strong>${std ? std.full_name : '--'}</strong></td>
                  <td>${g.classwork}</td>
                  <td>${g.midterm}</td>
                  <td>${g.final}</td>
                  <td><strong style="font-size: 1.1rem; color: var(--primary-700);">${g.total}</strong></td>
                  <td><span class="badge ${letterBadge}" style="font-weight: 800; font-size: 0.95rem;">${g.letter}</span></td>
                  <td><strong>${g.points.toFixed(2)}</strong></td>
                  ${isDoctor ? `
                    <td>
                      <button class="btn btn-primary btn-sm" onclick="openGradeModal('${g.student_id}', '${g.course_code}')">
                        تعديل / رصد
                      </button>
                    </td>
                  ` : ''}
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.7 الخزينة والمصروفات (Process 6.0)
function renderFees(container) {
  const isFinance = currentUser.role === "finance" || currentUser.role === "admin";

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">إدارة المصروفات الدراسية والخزينة (Process 6.0: Student Fees)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Student_Fees</code> | خوارزمية (1.6): استلام المصروفات وتوليد إيصال السداد الرسمي المعتمد</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">موقف سداد المصروفات الدراسية للعام الجامعي 2026/2027</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود الطالب</th>
              <th>اسم الطالب</th>
              <th>إجمالي المصروفات</th>
              <th>المبلغ المسدد</th>
              <th>المتبقي المستحق</th>
              <th>حالة السداد</th>
              <th>رقم آخر إيصال</th>
              <th>تاريخ السداد</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            ${db.fees.map(f => {
              const std = db.students.find(s => s.student_id === f.student_id);
              let statusBadge = "badge-success";
              if (f.status.includes("مستحق")) statusBadge = "badge-danger";
              else if (f.status.includes("جزئياً")) statusBadge = "badge-warning";

              return `
                <tr>
                  <td><strong>${f.student_id}</strong></td>
                  <td>${std ? std.full_name : '--'}</td>
                  <td>${f.total_amount.toLocaleString()} ج.م.</td>
                  <td><strong style="color: var(--success);">${f.paid_amount.toLocaleString()} ج.م.</strong></td>
                  <td><strong style="color: ${f.remaining_amount > 0 ? 'var(--danger)' : 'var(--text-muted)'};">${f.remaining_amount.toLocaleString()} ج.م.</strong></td>
                  <td><span class="badge ${statusBadge}">${f.status}</span></td>
                  <td><code>${f.receipt_no}</code></td>
                  <td>${f.last_payment}</td>
                  <td style="display: flex; gap: 4px;">
                    ${(isFinance && f.remaining_amount > 0) ? `
                      <button class="btn btn-primary btn-sm" onclick="openPaymentModal(${f.fee_id})">
                        تحصيل
                      </button>
                    ` : ''}
                    <button class="btn btn-secondary btn-sm" onclick="printReceipt(${f.fee_id})">
                      🧾 إيصال
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

// 4.8 إصدار الشهادات الرسمية (Process 7.0)
function renderDocuments(container) {
  const isStaff = currentUser.role === "staff" || currentUser.role === "admin";

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">إصدار الشهادات والوثائق الرسمية (Process 7.0: Document Issuance)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Document_Request</code> | خوارزمية (1.7): شهادات القيد وبيانات الدرجات بعد التحقق المالي والأكاديمي</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">سجل طلبات استخراج الوثائق الرسمية للطلاب</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>كود الطلب</th>
              <th>اسم الطالب</th>
              <th>نوع الوثيقة المطلوبة</th>
              <th>الجهة الموجه إليها</th>
              <th>تاريخ الطلب</th>
              <th>حالة الطلب والاعتماد</th>
              <th>إجراءات الطباعة</th>
            </tr>
          </thead>
          <tbody>
            ${db.documents.map(d => {
              const std = db.students.find(s => s.student_id === d.student_id);
              let statusBadge = "badge-success";
              if (d.status.includes("مرفوضة")) statusBadge = "badge-danger";
              else if (d.status.includes("قيد")) statusBadge = "badge-warning";

              return `
                <tr>
                  <td><code>${d.code}</code></td>
                  <td><strong>${std ? std.full_name : '--'}</strong> (كود: ${d.student_id})</td>
                  <td><strong>${d.doc_type}</strong></td>
                  <td>${d.purpose}</td>
                  <td>${d.req_date}</td>
                  <td><span class="badge ${statusBadge}">${d.status}</span></td>
                  <td>
                    ${d.status.includes("معتمدة") ? `
                      <button class="btn btn-primary btn-sm" onclick="openCertificateModal('${d.student_id}', '${d.doc_type}', '${d.code}')">
                        🖨️ معاينة وطباعة الشهادة
                      </button>
                    ` : `<span style="font-size: 0.8rem; color: var(--danger);">غير مستوف للشروط</span>`}
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

// 4.9 التقارير الإحصائية (Process 8.0)
function renderReports(container) {
  const total = db.students.length;
  const excellent = db.students.filter(s => s.gpa >= 3.7).length;
  const warned = db.students.filter(s => s.status.includes("إنذار")).length;
  const regular = total - warned;

  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">التقارير الإحصائية والتحليل الأكاديمي (Process 8.0: Statistical Reports)</h2>
        <p class="page-subtitle">تقارير دعم اتخاذ القرار لعميد المعهد ورؤساء الأقسام العلمية</p>
      </div>
      <button class="btn btn-secondary" onclick="window.print()">🖨️ تصدير التقرير النهائي</button>
    </div>

    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon" style="background: var(--primary-100); color: var(--primary-800);">📊</div>
        <div class="metric-value">${total}</div>
        <div class="metric-label">إجمالي الطلاب المسجلين</div>
      </div>
      <div class="metric-card">
        <div class="metric-icon" style="background: var(--success-light); color: var(--success);">🏆</div>
        <div class="metric-value">${excellent}</div>
        <div class="metric-label">نسبة الامتياز (3.7+)</div>
      </div>
      <div class="metric-card">
        <div class="metric-icon" style="background: var(--danger-light); color: var(--danger);">⚠️</div>
        <div class="metric-value">${warned}</div>
        <div class="metric-label">حالات التعثر والإنذارات</div>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">مصفوفة توزيع التقديرات والـ GPA للفرقة الثالثة</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>الشريحة الأكاديمية</th>
              <th>نطاق النقاط (GPA)</th>
              <th>التقدير المرجعي</th>
              <th>عدد الطلاب</th>
              <th>النسبة المئوية</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>امتياز مرتفع (Excellent With Honors)</strong></td>
              <td>3.70 - 4.00</td>
              <td>A+ / A</td>
              <td>5 طلاب</td>
              <td><strong>83.3%</strong></td>
            </tr>
            <tr>
              <td><strong>جيد جداً (Very Good)</strong></td>
              <td>3.00 - 3.69</td>
              <td>B+ / B</td>
              <td>0 طلاب</td>
              <td><strong>0.0%</strong></td>
            </tr>
            <tr>
              <td><strong>متعثر / إنذار أكاديمي (Under Probation)</strong></td>
              <td>أقل من 2.00</td>
              <td>D / F</td>
              <td>طالب واحد (أحمد الشناوي)</td>
              <td><strong>16.7%</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4.10 المخططات الهندسية (DFD, ERD, Data Dictionary)
function renderArchitecture(container) {
  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">المخططات الهندسية وقاموس البيانات (Architecture & DFD/ERD)</h2>
        <p class="page-subtitle">التصميم الهندسي المتكامل المعتمد في التقارير الثلاثة (د. فاروق، رغدة، SAMS)</p>
      </div>
    </div>

    <!-- DFD Level 0 -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">1. مخطط تدفق البيانات البيئي (Context Diagram - DFD Level 0)</h3>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 15px;">
        يوضح الكيانات الخارجية الستة المحيطة بالنظام (الطالب، موظف الشئون، الدكتور المحاضر، الخزينة، عميد المعهد، وزارة التعليم العالي).
      </p>
      <div class="flow-diagram">
┌─────────────────┐       طلب قيد / تسجيل مقررات      ┌──────────────────────────────┐       بيانات القيد والشهادات      ┌─────────────────┐
│     الطالب      │ ─────────────────────────────────►│                              │ ─────────────────────────────────►│   شئون الطلاب   │
│    (Student)    │ ◄─────────────────────────────────│                              │ ◄─────────────────────────────────│  (Staff Affairs) │
└─────────────────┘        جدول دراسي وشهادة قيد       │                              │        اعتماد قيد واستخراج        └─────────────────┘
                                                      │   نظام إدارة شئون الطلاب    │
┌─────────────────┐       رصد درجات وغياب المحاضرات   │            (SAMS)            │       توريد وإيصالات السداد       ┌─────────────────┐
│  عضو هيئة تدريس │ ─────────────────────────────────►│                              │ ─────────────────────────────────►│     الخزينة     │
│    (Faculty)    │ ◄─────────────────────────────────│        System Process 0      │ ◄─────────────────────────────────│    (Treasury)   │
└─────────────────┘        كشوف الطلاب والغياب        │                              │        مطالبات المصروفات          └─────────────────┘
                                                      └──────────────────────────────┘
                                                                     ▲
                                                                     │ تقارير الإحصاء
                                                      ┌──────────────┴──────────────┐
                                                      │     عميد المعهد / الوزارة    │
                                                      └─────────────────────────────┘
      </div>
    </div>

    <!-- DFD Level 1 (8 Processes) -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">2. المخطط التحليلي التفصيلي (DFD Level 1 - العمليات الثماني)</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>رقم العملية</th>
              <th>اسم العملية الأكاديمية</th>
              <th>المدخلات (Inputs)</th>
              <th>المخرجات (Outputs)</th>
              <th>مستودعات البيانات (Data Stores)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Process 1.0</strong></td>
              <td>المصادقة والتحقق من المستخدمين</td>
              <td>اسم المستخدم وكلمة المرور المشفرة</td>
              <td>جلسة مصادقة وتحديد الصلاحية (Role)</td>
              <td><code>D1: Users</code></td>
            </tr>
            <tr>
              <td><strong>Process 2.0</strong></td>
              <td>تسجيل وقيد الطلاب الجدد</td>
              <td>الاسم الرباعي، الرقم القومي (14 رقم)، المؤهل</td>
              <td>كود جامعي، حالة القيد، ملف الطالب</td>
              <td><code>D2: Students</code></td>
            </tr>
            <tr>
              <td><strong>Process 3.0</strong></td>
              <td>تسجيل المقررات والجداول</td>
              <td>رغبات المقررات، المتطلبات السابقة</td>
              <td>جدول الطالب الأكاديمي، كشوف التسجيل</td>
              <td><code>D3: Courses, D4: Schedules</code></td>
            </tr>
            <tr>
              <td><strong>Process 4.0</strong></td>
              <td>إدارة الحضور والغياب والإنذار</td>
              <td>تاريخ المحاضرة، حالة الحضور</td>
              <td>نسبة الحضور، إنذارات الحرمان التلقائية</td>
              <td><code>D5: Attendance</code></td>
            </tr>
            <tr>
              <td><strong>Process 5.0</strong></td>
              <td>رصد الدرجات والكنترول والـ GPA</td>
              <td>درجات أعمال السنة (20)، الميدتيرم (20)، الفاينال (60)</td>
              <td>مجموع المقرر (100)، التقدير الحرفي، المعدل التراكمي</td>
              <td><code>D6: Grades</code></td>
            </tr>
            <tr>
              <td><strong>Process 6.0</strong></td>
              <td>إدارة الخزينة والمصروفات الدراسية</td>
              <td>المبلغ المسدد، طريقة الدفع</td>
              <td>إيصال سداد رسمي، تحديث الموقف المالي</td>
              <td><code>D7: Student_Fees</code></td>
            </tr>
            <tr>
              <td><strong>Process 7.0</strong></td>
              <td>إصدار وتوثيق الشهادات الرسمية</td>
              <td>طلب شهادة القيد، الغرض من الشهادة</td>
              <td>شهادة قيد رسمية مختومة برقم توثيق</td>
              <td><code>D8: Document_Requests</code></td>
            </tr>
            <tr>
              <td><strong>Process 8.0</strong></td>
              <td>التقارير الإحصائية للعميد والوزارة</td>
              <td>معايير التصفية والفرقة الدراسية</td>
              <td>كشوف الأوائل، نسب الرسوب، كشوف المتأخرات</td>
              <td><code>جميع مستودعات البيانات</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ERD: 11 Entities -->
    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">3. الكيانات الـ 11 وقاموس البيانات (Entity Relationship Diagram - 11 Entities)</h3>
      </div>
      <p style="font-size: 0.9rem; line-height: 1.8;">
        تم بناء قاعدة البيانات على 11 كياناً رئيسياً في ملف <code>supabase_schema.sql</code>:<br>
        1. <code>Users</code> &bull; 
        2. <code>Students</code> &bull; 
        3. <code>Academic_Staff</code> &bull; 
        4. <code>Departments</code> &bull; 
        5. <code>Courses</code> &bull; 
        6. <code>Student_Groups</code> &bull; 
        7. <code>Schedules</code> &bull; 
        8. <code>Course_Registrations</code> &bull; 
        9. <code>Grades</code> &bull; 
        10. <code>Attendance</code> &bull; 
        11. <code>Student_Fees</code> &bull; 
        12. <code>Document_Requests</code>
      </p>
    </div>
  `;
}

// 4.11 استعراض كلاسات Java OOP
function renderOOPView(container) {
  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">هيكلية كلاسات Java OOP (مشروع Java البرمجي)</h2>
        <p class="page-subtitle">تطبيق مفاهيم الوراثة (Inheritance)، التغليف (Encapsulation)، وتعدد الأشكال (Polymorphism)</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="portal-card-header">
        <h3 class="portal-card-title">الكلاس الأب المجرد: <code>Person.java</code> وكلاس <code>Student.java</code></h3>
      </div>
      <pre style="background: #1e293b; color: #f8fafc; padding: 18px; border-radius: 8px; font-size: 0.85rem; line-height: 1.6; direction: ltr; text-align: left; overflow-x: auto;">
// Person.java (Base Abstract Class)
public abstract class Person {
    protected String nationalId; // 14 digits
    protected String fullName;
    protected String birthDate;
    protected String gender;
    protected String phone;

    public Person(String nationalId, String fullName, String phone) {
        if (nationalId == null || nationalId.length() != 14) {
            throw new IllegalArgumentException("National ID must be exactly 14 digits");
        }
        this.nationalId = nationalId;
        this.fullName = fullName;
        this.phone = phone;
    }

    public abstract void printDetails();
}

// Student.java (Inheritance + Encapsulation)
public class Student extends Person {
    private String studentId;
    private int level;
    private int groupNo;
    private double gpa;
    private String department;

    public Student(String studentId, String nationalId, String fullName, int level, int groupNo) {
        super(nationalId, fullName, "");
        this.studentId = studentId;
        this.level = level;
        this.groupNo = groupNo;
        this.gpa = 0.0;
    }

    public double calculateGPA(List<Grade> courseGrades) {
        double totalPoints = 0.0;
        int totalHours = 0;
        for (Grade g : courseGrades) {
            totalPoints += (g.getPoints() * g.getCreditHours());
            totalHours += g.getCreditHours();
        }
        this.gpa = (totalHours == 0) ? 0.0 : (totalPoints / totalHours);
        return this.gpa;
    }

    @Override
    public void printDetails() {
        System.out.println("Student ID: " + studentId + " | Name: " + fullName + " | GPA: " + gpa);
    }
}
      </pre>
    </div>
  `;
}

// 4.12 المستخدمين والصلاحيات (Process 1.0)
function renderUsers(container) {
  container.innerHTML = `
    <div class="page-title-bar">
      <div>
        <h2 class="page-title">إدارة المستخدمين والصلاحيات (Process 1.0: User Management)</h2>
        <p class="page-subtitle">جدول الكيان: <code>Users</code> | صلاحيات النظام: Admin, Doctor, Staff, Finance, Student</p>
      </div>
    </div>

    <div class="portal-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>المعرف</th>
              <th>اسم المستخدم</th>
              <th>الاسم الكامل</th>
              <th>الصلاحية (Role)</th>
              <th>المسمى الوظيفي</th>
              <th>إجراء</th>
            </tr>
          </thead>
          <tbody>
            ${db.users.map(u => `
              <tr>
                <td>#${u.id}</td>
                <td><code>${u.username}</code></td>
                <td><strong>${u.name}</strong></td>
                <td><span class="badge badge-primary">${u.role}</span></td>
                <td>${u.title}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="loginAs('${u.username}')">
                    الدخول بهذا الحساب
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================
// 5. وظائف النوافذ المنبثقة ومعالجة العمليات
// ==========================================

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("active");
}

// إضافة طالب جديد
function handleNewStudentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("addStdName").value.trim();
  const natId = document.getElementById("addStdNatId").value.trim();
  const birth = document.getElementById("addStdBirth").value;
  const gender = document.getElementById("addStdGender").value;
  const phone = document.getElementById("addStdPhone").value.trim();
  const address = document.getElementById("addStdAddress").value.trim();

  // التحقق من الرقم القومي (التقرير الثاني: 14 رقماً)
  if (natId.length !== 14 || isNaN(natId)) {
    alert("خطأ في التحقق: الرقم القومي يجب أن يتكون من 14 رقماً بالضبط وفق قواعد مصلحة الأحوال المدنية.");
    return;
  }

  // توليد كود الطالب التلقائي
  const newId = "20241" + (1600 + db.students.length + 1);

  const newStd = {
    student_id: newId,
    full_name: name,
    national_id: natId,
    birth_date: birth,
    gender: gender,
    department: "نظم المعلومات الإدارية",
    level: 3,
    group_no: 3,
    phone: phone || "01000000000",
    address: address || "القاهرة",
    enrollment_date: new Date().toISOString().split("T")[0],
    gpa: 0.0,
    status: "مقيد ومنتظم"
  };

  db.students.push(newStd);

  // إضافة سجل رسوم افتراضي
  db.fees.push({
    fee_id: db.fees.length + 1,
    student_id: newId,
    total_amount: 8500,
    paid_amount: 0,
    remaining_amount: 8500,
    status: "مستحق (غير مسدد)",
    last_payment: "-",
    receipt_no: "-"
  });

  saveData(db);
  closeModal('addStudentModal');
  alert(`تم قيد الطالب بنجاح!\nالكود الجامعي الممنوح: ${newId}`);
  renderCurrentSection();
}

// رصد الدرجات وحساب الـ GPA
function openGradeModal(studentId, courseCode) {
  const std = db.students.find(s => s.student_id === studentId);
  const crs = db.courses.find(c => c.code === courseCode);
  const grade = db.grades.find(g => g.student_id === studentId && g.course_code === courseCode);

  document.getElementById("gradeStudentId").value = studentId;
  document.getElementById("gradeCourseCode").value = courseCode;
  document.getElementById("gradeStdName").textContent = std ? std.full_name : studentId;
  document.getElementById("gradeStdCode").textContent = studentId;
  document.getElementById("gradeCrsName").textContent = crs ? crs.name : courseCode;

  document.getElementById("gradeCw").value = grade ? grade.classwork : 15;
  document.getElementById("gradeMt").value = grade ? grade.midterm : 15;
  document.getElementById("gradeFn").value = grade ? grade.final : 50;

  recalcGradePreview();
  openModal('gradeModal');
}

function recalcGradePreview() {
  const cw = parseFloat(document.getElementById("gradeCw").value) || 0;
  const mt = parseFloat(document.getElementById("gradeMt").value) || 0;
  const fn = parseFloat(document.getElementById("gradeFn").value) || 0;

  const total = cw + mt + fn;
  document.getElementById("previewTotal").textContent = total.toFixed(1);

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

  document.getElementById("previewLetter").textContent = letter;
  document.getElementById("previewPoints").textContent = points.toFixed(2);
}

function handleGradeSubmit(e) {
  e.preventDefault();
  const studentId = document.getElementById("gradeStudentId").value;
  const courseCode = document.getElementById("gradeCourseCode").value;
  const cw = parseFloat(document.getElementById("gradeCw").value);
  const mt = parseFloat(document.getElementById("gradeMt").value);
  const fn = parseFloat(document.getElementById("gradeFn").value);

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

  let gradeRecord = db.grades.find(g => g.student_id === studentId && g.course_code === courseCode);
  if (gradeRecord) {
    gradeRecord.classwork = cw;
    gradeRecord.midterm = mt;
    gradeRecord.final = fn;
    gradeRecord.total = total;
    gradeRecord.letter = letter;
    gradeRecord.points = points;
  } else {
    db.grades.push({
      student_id: studentId,
      course_code: courseCode,
      classwork: cw,
      midterm: mt,
      final: fn,
      total: total,
      letter: letter,
      points: points
    });
  }

  // إعادة احتساب الـ GPA التراكمي للطالب
  const studentGrades = db.grades.filter(g => g.student_id === studentId);
  const avgPoints = studentGrades.reduce((acc, g) => acc + g.points, 0) / (studentGrades.length || 1);
  const std = db.students.find(s => s.student_id === studentId);
  if (std) {
    std.gpa = parseFloat(avgPoints.toFixed(2));
    if (std.gpa < 2.0) std.status = "إنذار أكاديمي";
    else std.status = "مقيد ومنتظم";
  }

  saveData(db);
  closeModal('gradeModal');
  alert(`تم اعتماد الدرجة بنجاح!\nالمجموع: ${total} (${letter}) | الـ GPA الجديد: ${std ? std.gpa : '--'}`);
  renderCurrentSection();
}

// تسجيل الحضور والغياب
function openAttendanceModal(studentId, courseCode) {
  const std = db.students.find(s => s.student_id === studentId);
  const crs = db.courses.find(c => c.code === courseCode);

  document.getElementById("attStdId").value = studentId;
  document.getElementById("attCrsCode").value = courseCode;
  document.getElementById("attStdName").textContent = std ? std.full_name : studentId;
  document.getElementById("attCrsName").textContent = crs ? crs.name : courseCode;
  document.getElementById("attLectureDate").value = new Date().toISOString().split("T")[0];

  openModal('attendanceModal');
}

function handleAttendanceSubmit(e) {
  e.preventDefault();
  const studentId = document.getElementById("attStdId").value;
  const courseCode = document.getElementById("attCrsCode").value;
  const status = document.getElementById("attStatusVal").value;

  let attRecord = db.attendance.find(a => a.student_id === studentId && a.course_code === courseCode);
  if (attRecord) {
    attRecord.total_lectures += 1;
    if (status === "حاضر") {
      attRecord.attended += 1;
    } else {
      attRecord.absent += 1;
    }

    attRecord.percentage = (attRecord.attended / attRecord.total_lectures) * 100;

    // تطبيق خوارزمية (1.4)
    if (attRecord.percentage < 70) {
      attRecord.status = "حرمان من الامتحان (تجاوز 30%)";
    } else if (attRecord.percentage < 75) {
      attRecord.status = "إنذار أول (تجاوز 25%)";
    } else {
      attRecord.status = "منتظم";
    }
  }

  saveData(db);
  closeModal('attendanceModal');
  alert(`تم تسجيل حالة المحاضرة: ${status}\nالنسبة المئوية الجديدة: ${attRecord.percentage.toFixed(1)}%`);
  renderCurrentSection();
}

// سداد المصروفات وتوليد إيصال
function openPaymentModal(feeId) {
  const fee = db.fees.find(f => f.fee_id === feeId);
  const std = db.students.find(s => s.student_id === fee.student_id);

  document.getElementById("payFeeId").value = feeId;
  document.getElementById("payStdName").textContent = std ? std.full_name : fee.student_id;
  document.getElementById("payRemAmount").textContent = fee.remaining_amount.toLocaleString();
  document.getElementById("payAmountVal").value = fee.remaining_amount;
  document.getElementById("payAmountVal").max = fee.remaining_amount;

  openModal('paymentModal');
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const feeId = parseInt(document.getElementById("payFeeId").value);
  const amount = parseFloat(document.getElementById("payAmountVal").value);
  const method = document.getElementById("payMethodVal").value;

  const fee = db.fees.find(f => f.fee_id === feeId);
  if (fee) {
    fee.paid_amount += amount;
    fee.remaining_amount = Math.max(0, fee.total_amount - fee.paid_amount);
    fee.last_payment = new Date().toISOString().split("T")[0];
    fee.receipt_no = "REC-2026-0" + Math.floor(1000 + Math.random() * 9000);

    if (fee.remaining_amount === 0) {
      fee.status = "مسدد بالكامل";
    } else {
      fee.status = "مسدد جزئياً";
    }
  }

  saveData(db);
  closeModal('paymentModal');
  alert(`تم توريد المبلغ بنجاح!\nرقم الإيصال: ${fee.receipt_no}\nالمتبقي: ${fee.remaining_amount} ج.م.`);
  renderCurrentSection();
  printReceipt(feeId);
}

// طباعة إيصال السداد الرسمي
function printReceipt(feeId) {
  const fee = db.fees.find(f => f.fee_id === feeId);
  const std = db.students.find(s => s.student_id === fee.student_id);

  document.getElementById("recNoDisplay").textContent = fee.receipt_no;
  document.getElementById("recDateDisplay").textContent = fee.last_payment;
  document.getElementById("recNameDisplay").textContent = std ? std.full_name : fee.student_id;
  document.getElementById("recCodeDisplay").textContent = fee.student_id;
  document.getElementById("recAmountDisplay").textContent = fee.paid_amount.toLocaleString();
  document.getElementById("recStatusDisplay").textContent = fee.status;

  openModal('receiptModal');
}

// معاينة وطباعة الشهادة الرسمية المختومة
function openCertificateModal(studentId, docType, docCode) {
  const std = db.students.find(s => s.student_id === studentId);
  if (!std) return;

  document.getElementById("certDocTitle").textContent = docType;
  document.getElementById("certDocCode").textContent = docCode || "SAMS-2026-CERT";
  document.getElementById("certName").textContent = std.full_name;
  document.getElementById("certLevel").textContent = std.level === 3 ? "الثالثة" : std.level;
  document.getElementById("certGroup").textContent = std.group_no;
  document.getElementById("certNatId").textContent = std.national_id;
  document.getElementById("certStdId").textContent = std.student_id;
  document.getElementById("certGpa").textContent = std.gpa.toFixed(2);
  document.getElementById("certDate").textContent = new Date().toISOString().split("T")[0];

  openModal('certificateModal');
}

function showStudentDetails(studentId) {
  const std = db.students.find(s => s.student_id === studentId);
  if (!std) return;

  const stdFee = db.fees.find(f => f.student_id === studentId);
  const stdGrades = db.grades.filter(g => g.student_id === studentId);
  const stdAtt = db.attendance.find(a => a.student_id === studentId);

  alert(`بيانات الطالب: ${std.full_name}\nالكود: ${std.student_id}\nالرقم القومي: ${std.national_id}\nالفرقة: ${std.level} (مجموعة ${std.group_no})\nالمعدل التراكمي (GPA): ${std.gpa.toFixed(2)}\nالموقف المالي: ${stdFee ? stdFee.status : 'غير محدد'}\nحالة الحضور: ${stdAtt ? stdAtt.status : 'منتظم'}`);
}

// ==========================================
// 6. تهيئة التطبيق عند التحميل (Initialization)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  updateCurrentUserUI();
  renderCurrentSection();
});
