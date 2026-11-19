// SAMS Client-Side Application Engine
let appState = {
  currentUser: {
    username: 'dr_farouk',
    role: 'Instructor',
    name: 'د/ فاروق عبد العزيز',
    student_id: null,
    instructor_id: 1
  },
  activeTab: 'courses',
  data: {}
};

// تهيئة التطبيق عند التحميل
document.addEventListener('DOMContentLoaded', () => {
  fetchSystemState();
});

// جلب حالة النظام من الخادم
async function fetchSystemState() {
  try {
    const res = await fetch('/api/state');
    const data = await res.json();
    appState.data = data;
    renderApp();
  } catch (err) {
    console.error('خطأ في الاتصال بالخادم:', err);
  }
}

// تبديل المستخدم والدور بنقرة واحدة للتجربة السريعة
function switchUserRole(role, username) {
  // تحديث الزر النشط في شريط العرض
  document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(username)) {
      btn.classList.add('active');
    }
  });

  const user = appState.data.users ? appState.data.users.find(u => u.username === username) : null;
  if (user) {
    appState.currentUser = user;
  } else {
    appState.currentUser = { role, username, name: username };
  }

  // تعيين التبويب الافتراضي حسب الدور
  if (role === 'Instructor') appState.activeTab = 'my_courses';
  else if (role === 'Student') appState.activeTab = 'student_courses';
  else if (role === 'Staff') appState.activeTab = 'manage_students';
  else if (role === 'Finance') appState.activeTab = 'manage_fees';
  else if (role === 'Admin') appState.activeTab = 'overview';

  renderApp();
}

// الدالة الرئيسية لرسم الواجهة بالكامل
function renderApp() {
  const { currentUser, data } = appState;
  if (!data.students) return;

  // 1. تحديث الترويسة وبطاقة المستخدم
  updateUserProfileBanner(currentUser, data);

  // 2. فحص إنذار الغياب لطالب
  checkAbsenceWarning(currentUser, data);

  // 3. تحديث الإحصائيات السريعة (Stats Grid)
  renderStatsGrid(currentUser, data);

  // 4. تحديث أشرطة التبويب حسب الدور
  renderTabsNav(currentUser);

  // 5. رسم محتوى التبويب النشط
  renderTabContent(currentUser, data);
}

// تحديث بيانات الترويسة
function updateUserProfileBanner(user, data) {
  const avatar = document.getElementById('userAvatar');
  const nameDisplay = document.getElementById('userNameDisplay');
  const roleDetail = document.getElementById('userRoleDetail');
  const academicId = document.getElementById('userAcademicId');
  const badge = document.getElementById('currentUserBadge');

  if (user.role === 'Instructor') {
    avatar.textContent = '👨‍🏫';
    nameDisplay.textContent = user.name || 'د/ فاروق عبد العزيز';
    roleDetail.textContent = 'رئيس قسم نظم المعلومات وأستاذ المقرر';
    academicId.textContent = 'كود هيئة التدريس: INST-01';
    badge.textContent = 'الدور: عضو هيئة تدريس';
  } else if (user.role === 'Student') {
    const student = data.students.find(s => s.student_id === user.student_id);
    avatar.textContent = student && student.gender === 'F' ? '👩‍🎓' : '👨‍🎓';
    nameDisplay.textContent = student ? student.full_name : user.name;
    roleDetail.textContent = `طالب بالفرقة الثالثة - شعبة نظم المعلومات (مجموعة ${student ? student.group_no : 3})`;
    academicId.textContent = `الرقم الجامعي (الكود): ${user.student_id}`;
    badge.textContent = 'الدور: طالب مقيد';
  } else if (user.role === 'Staff') {
    avatar.textContent = '💼';
    nameDisplay.textContent = user.name || 'أ/ إيمان صبري';
    roleDetail.textContent = 'مسئول إدارة شئون الطلاب والتسجيل الأكاديمي';
    academicId.textContent = 'كود الموظف: STF-201';
    badge.textContent = 'الدور: موظف شئون طلاب';
  } else if (user.role === 'Finance') {
    avatar.textContent = '💰';
    nameDisplay.textContent = user.name || 'أ/ طارق السيد';
    roleDetail.textContent = 'أمين خزينة ومسئول الشئون المالية والمصروفات';
    academicId.textContent = 'كود الموظف: FIN-105';
    badge.textContent = 'الدور: الشئون المالية';
  } else {
    avatar.textContent = '⚙️';
    nameDisplay.textContent = 'مدير النظام (System Administrator)';
    roleDetail.textContent = 'إدارة الصلاحيات وقواعد البيانات والدعم الفني';
    academicId.textContent = 'كود: SYS-ADMIN';
    badge.textContent = 'الدور: مدير النظام';
  }
}

// فحص إنذار الغياب (> 25%)
function checkAbsenceWarning(user, data) {
  const banner = document.getElementById('absenceWarningBanner');
  if (user.role === 'Student') {
    const student = data.students.find(s => s.student_id === user.student_id);
    if (student && student.hasAbsenceWarning) {
      banner.style.display = 'flex';
      banner.querySelector('p').innerHTML = `نسبة غيابك الحالية بلغت <strong>${student.absenceRate}%</strong> وهي أعلى من الحد المسموح به قانوناً (25%). صدر بحقك إنذار أكاديمي رسمي مهدد بالحرمان من الامتحان.`;
      return;
    }
  }
  banner.style.display = 'none';
}

// رسم بطاقات الإحصائيات (KPIs)
function renderStatsGrid(user, data) {
  const container = document.getElementById('statsGridContainer');
  let html = '';

  if (user.role === 'Instructor') {
    const instructorCourses = data.courses.filter(c => c.instructor_id === user.instructor_id);
    const totalEnrolled = data.enrollments.filter(e => instructorCourses.some(c => c.course_code === e.course_code)).length;
    html = `
      <div class="stat-card">
        <div class="stat-icon icon-blue">📚</div>
        <div class="stat-details">
          <h3>${instructorCourses.length}</h3>
          <p>المقررات المكلف بتدريسها</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-green">👥</div>
        <div class="stat-details">
          <h3>${totalEnrolled}</h3>
          <p>إجمالي طلاب مقرراتك</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-amber">📝</div>
        <div class="stat-details">
          <h3>${data.grades.filter(g => instructorCourses.some(c => c.course_code === g.course_code)).length}</h3>
          <p>الدرجات المرصودة</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-purple">📅</div>
        <div class="stat-details">
          <h3>2</h3>
          <p>محاضرات أسبوعية</p>
        </div>
      </div>
    `;
  } else if (user.role === 'Student') {
    const student = data.students.find(s => s.student_id === user.student_id);
    const regCourses = data.enrollments.filter(e => e.student_id === user.student_id);
    const totalCreditHours = regCourses.reduce((sum, e) => {
      const c = data.courses.find(cr => cr.course_code === e.course_code);
      return sum + (c ? c.credit_hours : 3);
    }, 0);

    const gpaVal = student ? student.gpa.toFixed(2) : '0.00';
    const absRate = student ? student.absenceRate : 0;
    const feeStatus = student ? (student.remainingFee === 0 ? 'خالص السداد' : `${student.remainingFee} ج.م. متبقي`) : '--';

    html = `
      <div class="stat-card">
        <div class="stat-icon icon-purple">🎓</div>
        <div class="stat-details">
          <h3>${gpaVal} / 4.00</h3>
          <p>المعدل التراكمي (GPA)</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-blue">⏱️</div>
        <div class="stat-details">
          <h3>${totalCreditHours} / 18</h3>
          <p>الساعات المسجلة (الحد 18)</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon ${absRate > 25 ? 'icon-red' : 'icon-green'}">📊</div>
        <div class="stat-details">
          <h3 style="${absRate > 25 ? 'color:#dc2626;' : ''}">${absRate}%</h3>
          <p>${absRate > 25 ? '⚠️ تجاوز نسبة الغياب!' : 'نسبة الغياب (ضمن المسموح)'}</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon ${student && student.remainingFee === 0 ? 'icon-green' : 'icon-amber'}">💵</div>
        <div class="stat-details">
          <h3 style="font-size: 1.25rem;">${feeStatus}</h3>
          <p>الموقف المالي للمصروفات</p>
        </div>
      </div>
    `;
  } else {
    // Staff, Finance, Admin
    const totalStudents = data.students.length;
    const totalCourses = data.courses.length;
    const pendingDocs = data.document_requests.filter(d => d.status === 'قيد المراجعة').length;
    const totalPaymentsSum = data.payments.reduce((acc, p) => acc + p.amount, 0);

    html = `
      <div class="stat-card">
        <div class="stat-icon icon-blue">👨‍🎓</div>
        <div class="stat-details">
          <h3>${totalStudents}</h3>
          <p>إجمالي الطلاب المقيدين</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-amber">📑</div>
        <div class="stat-details">
          <h3>${pendingDocs}</h3>
          <p>طلبات شهادات قيد المراجعة</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-green">💰</div>
        <div class="stat-details">
          <h3>${totalPaymentsSum.toLocaleString()} ج.م.</h3>
          <p>إجمالي المصروفات المحصلة</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon icon-purple">📖</div>
        <div class="stat-details">
          <h3>${totalCourses}</h3>
          <p>المقررات المعتمدة</p>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// إنشاء أزرار التبويبات حسب الدور
function renderTabsNav(user) {
  const container = document.getElementById('roleTabsNav');
  let tabs = [];

  if (user.role === 'Instructor') {
    tabs = [
      { id: 'my_courses', label: '📖 طلاب مقرراتي ورصد الدرجات' },
      { id: 'attendance_sheet', label: '📋 كشف الحضور والغياب اليومي' },
      { id: 'course_schedule', label: '🗓️ مواعيد وقاعات المحاضرات' }
    ];
  } else if (user.role === 'Student') {
    tabs = [
      { id: 'student_courses', label: '📚 المقررات والجدول الدراسي' },
      { id: 'course_registration', label: '✍️ تسجيل المقررات (حد 18 ساعة)' },
      { id: 'student_grades', label: '🎯 كشف النتائج والمعدل (GPA)' },
      { id: 'student_documents', label: '📜 طلب الشهادات والمستندات' }
    ];
  } else if (user.role === 'Staff') {
    tabs = [
      { id: 'manage_students', label: '👥 دليل الطلاب وإضافة طالب جديد' },
      { id: 'manage_documents', label: '🖨️ طلبات واعتماد الشهادات والطباعة' },
      { id: 'academic_records', label: '📊 السجلات الأكاديمية' }
    ];
  } else if (user.role === 'Finance') {
    tabs = [
      { id: 'manage_fees', label: '💳 المصروفات والموقف المالي للطلاب' },
      { id: 'payment_receipts', label: '🧾 سجل الإيصالات والطباعة' }
    ];
  } else {
    // Admin
    tabs = [
      { id: 'overview', label: '📈 لوحة القيادة والتقارير العامة' },
      { id: 'users_list', label: '🔐 المستخدمين والصلاحيات' },
      { id: 'system_tools', label: '⚙️ إعدادات النظام وقاعدة البيانات' }
    ];
  }

  let html = '';
  tabs.forEach(t => {
    const isActive = appState.activeTab === t.id ? 'active' : '';
    html += `<button type="button" class="tab-btn ${isActive}" onclick="setActiveTab('${t.id}')">${t.label}</button>`;
  });
  container.innerHTML = html;
}

function setActiveTab(tabId) {
  appState.activeTab = tabId;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(tabId));
  });
  renderTabContent(appState.currentUser, appState.data);
}

// رسم محتوى التبويب
function renderTabContent(user, data) {
  const container = document.getElementById('tabContentArea');

  // ---------- 1. واجهات عضو هيئة التدريس (د/ فاروق) ----------
  if (user.role === 'Instructor') {
    if (appState.activeTab === 'my_courses') {
      container.innerHTML = renderInstructorCoursesView(user, data);
    } else if (appState.activeTab === 'attendance_sheet') {
      container.innerHTML = renderInstructorAttendanceView(user, data);
    } else {
      container.innerHTML = renderInstructorScheduleView(user, data);
    }
    return;
  }

  // ---------- 2. واجهات الطالب (رغدة / كارولين / أحمد) ----------
  if (user.role === 'Student') {
    if (appState.activeTab === 'student_courses') {
      container.innerHTML = renderStudentScheduleView(user, data);
    } else if (appState.activeTab === 'course_registration') {
      container.innerHTML = renderCourseRegistrationView(user, data);
    } else if (appState.activeTab === 'student_grades') {
      container.innerHTML = renderStudentGradesView(user, data);
    } else {
      container.innerHTML = renderStudentDocumentsView(user, data);
    }
    return;
  }

  // ---------- 3. واجهات شئون الطلاب (Staff) ----------
  if (user.role === 'Staff') {
    if (appState.activeTab === 'manage_students') {
      container.innerHTML = renderStaffStudentsView(data);
    } else if (appState.activeTab === 'manage_documents') {
      container.innerHTML = renderStaffDocumentsView(data);
    } else {
      container.innerHTML = renderStaffAcademicView(data);
    }
    return;
  }

  // ---------- 4. واجهات الشئون المالية (Finance) ----------
  if (user.role === 'Finance') {
    if (appState.activeTab === 'manage_fees') {
      container.innerHTML = renderFinanceFeesView(data);
    } else {
      container.innerHTML = renderFinanceReceiptsView(data);
    }
    return;
  }

  // ---------- 5. لوحة تحكم مدير النظام (Admin) ----------
  container.innerHTML = renderAdminOverviewView(data);
}

// =========================================================================
// شاشات الدكتور (د/ فاروق)
// =========================================================================
function renderInstructorCoursesView(user, data) {
  const courses = data.courses.filter(c => c.instructor_id === user.instructor_id);
  const targetCourseCode = courses.length > 0 ? courses[0].course_code : 'CS301';
  const targetCourse = courses.find(c => c.course_code === targetCourseCode);

  const enrollments = data.enrollments.filter(e => e.course_code === targetCourseCode);
  const enrolledStudentIds = enrollments.map(e => e.student_id);
  const enrolledStudents = data.students.filter(s => enrolledStudentIds.includes(s.student_id));

  let rowsHtml = '';
  enrolledStudents.forEach(s => {
    const grade = data.grades.find(g => g.student_id === s.student_id && g.course_code === targetCourseCode);
    const cw = grade ? grade.coursework : '--';
    const mt = grade ? grade.midterm : '--';
    const fn = grade ? grade.final_exam : '--';
    const tot = grade ? grade.total : '--';
    const ltr = grade ? `<span class="badge badge-primary">${grade.letter_grade} (${grade.grade_points})</span>` : '<span class="badge badge-warning">لم يُرصد</span>';

    rowsHtml += `
      <tr>
        <td><strong>${s.full_name}</strong></td>
        <td><code>${s.student_id}</code></td>
        <td>مجموعة ${s.group_no}</td>
        <td>${cw} / 20</td>
        <td>${mt} / 20</td>
        <td>${fn} / 60</td>
        <td><strong>${tot} / 100</strong></td>
        <td>${ltr}</td>
        <td>
          <button type="button" class="btn btn-primary btn-sm" onclick="openGradeModal(${s.student_id}, '${s.full_name}', '${targetCourseCode}', '${targetCourse ? targetCourse.course_name : ''}')">
            📝 رصد / تعديل الدرجة
          </button>
          <button type="button" class="btn btn-success btn-sm" onclick="openAttendanceModal(${s.student_id}, '${s.full_name}', '${targetCourseCode}', '${targetCourse ? targetCourse.course_name : ''}')">
            ✔️ تسجيل حضور
          </button>
        </td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">📖 طلاب مقرر: ${targetCourse ? targetCourse.course_name : ''} (${targetCourseCode})</h3>
          <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px;">الفرقة الثالثة - الفصل الدراسي الثاني 2026/2027 | إشراف: د/ فاروق عبد العزيز</p>
        </div>
        <span class="badge badge-gold">عدد الطلاب المسجلين بالمقرر: ${enrolledStudents.length} طلاب</span>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>اسم الطالب</th>
              <th>الرقم الجامعي</th>
              <th>المجموعة</th>
              <th>أعمال السنة (20)</th>
              <th>الميدتيرم (20)</th>
              <th>النهائي (60)</th>
              <th>المجموع (100)</th>
              <th>التقدير والنقاط</th>
              <th>الإجراء الأكاديمي</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderInstructorAttendanceView(user, data) {
  const courseCode = 'CS301';
  const attRecords = data.attendances.filter(a => a.course_code === courseCode);

  let rows = '';
  attRecords.forEach(a => {
    const student = data.students.find(s => s.student_id === a.student_id);
    let badgeClass = 'badge-success';
    if (a.status === 'غائب') badgeClass = 'badge-danger';
    else if (a.status === 'بعذر') badgeClass = 'badge-warning';

    rows += `
      <tr>
        <td>${student ? student.full_name : a.student_id}</td>
        <td><code>${a.student_id}</code></td>
        <td>${a.lecture_date}</td>
        <td><span class="badge ${badgeClass}">${a.status}</span></td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">📋 سجل الحضور والغياب لمقرر تحليل وتصميم النظم (CS301)</h3>
      </div>
      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>الطالب</th>
              <th>الكود</th>
              <th>تاريخ المحاضرة</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderInstructorScheduleView(user, data) {
  const schedules = data.schedules.filter(s => s.course_code === 'CS301');
  let rows = '';
  schedules.forEach(s => {
    rows += `
      <tr>
        <td><strong>الأحد</strong></td>
        <td>${s.start_time} - ${s.end_time}</td>
        <td>تحليل وتصميم نظم المعلومات (${s.course_code})</td>
        <td>مجموعة ${s.group_no}</td>
        <td><span class="badge badge-primary">${s.room}</span></td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">🗓️ مواعيد وقاعات محاضرات الدكتور</h3>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>اليوم</th>
            <th>التوقيت</th>
            <th>المقرر</th>
            <th>المجموعة</th>
            <th>القاعة الدراسية</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

// =========================================================================
// شاشات الطالب (رغدة / كارولين / أحمد)
// =========================================================================
function renderStudentScheduleView(user, data) {
  const student = data.students.find(s => s.student_id === user.student_id);
  const enrollments = data.enrollments.filter(e => e.student_id === user.student_id);
  const enrolledCodes = enrollments.map(e => e.course_code);

  const mySchedules = data.schedules.filter(s => enrolledCodes.includes(s.course_code));

  let rows = '';
  mySchedules.forEach(s => {
    const course = data.courses.find(c => c.course_code === s.course_code);
    rows += `
      <tr>
        <td><strong>${s.day_of_week}</strong></td>
        <td>${s.start_time} - ${s.end_time}</td>
        <td><strong>${course ? course.course_name : s.course_code}</strong> (<code>${s.course_code}</code>)</td>
        <td>${course ? course.credit_hours : 3} ساعات</td>
        <td><span class="badge badge-primary">${s.room}</span></td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">📅 الجدول الدراسي الأسبوعي للطالب</h3>
          <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px;">
            الطالب: <strong>${student ? student.full_name : ''}</strong> | الفرقة الثالثة (مجموعة ${student ? student.group_no : 3})
          </p>
        </div>
        <span class="badge badge-gold">إجمالي المقررات المسجلة: ${enrollments.length} مقررات</span>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>اليوم</th>
              <th>الموعد</th>
              <th>اسم المقرر والكود</th>
              <th>الساعات المعتمدة</th>
              <th>القاعة أو المعمل</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length > 0 ? rows : '<tr><td colspan="5" style="text-align:center;">لا توجد محاضرات مجدولة حالياً</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// تسجيل المقررات وفحص حد الـ 18 ساعة والمصروفات المتأخرة
function renderCourseRegistrationView(user, data) {
  const student = data.students.find(s => s.student_id === user.student_id);
  const enrollments = data.enrollments.filter(e => e.student_id === user.student_id);
  const registeredCodes = enrollments.map(e => e.course_code);

  const registeredHours = registeredCodes.reduce((sum, code) => {
    const c = data.courses.find(cr => cr.course_code === code);
    return sum + (c ? c.credit_hours : 3);
  }, 0);

  const isOverdue = student && student.isOverdue;

  let coursesHtml = '';
  data.courses.forEach(c => {
    const isEnrolled = registeredCodes.includes(c.course_code);
    const instructor = data.instructors.find(i => i.instructor_id === c.instructor_id);

    let btnState = '';
    let btnText = 'تسجيل المقرر';
    let btnClass = 'btn-primary';

    if (isEnrolled) {
      btnState = 'disabled';
      btnText = '✅ مسجل بالفعل';
      btnClass = 'btn-success';
    } else if (isOverdue) {
      btnState = 'disabled';
      btnText = '⛔ محجوب مالياً';
      btnClass = 'btn-danger';
    } else if (registeredHours + c.credit_hours > 18) {
      btnState = 'disabled';
      btnText = '⛔ تجاوز 18 ساعة';
      btnClass = 'btn-danger';
    }

    coursesHtml += `
      <tr>
        <td><code>${c.course_code}</code></td>
        <td><strong>${c.course_name}</strong></td>
        <td>${c.credit_hours} ساعات</td>
        <td>${instructor ? instructor.full_name : 'هيئة التدريس'}</td>
        <td>${isEnrolled ? '<span class="badge badge-success">مسجل</span>' : '<span class="badge badge-primary">متاح للتسجيل</span>'}</td>
        <td>
          <button type="button" class="btn ${btnClass} btn-sm" ${btnState} onclick="registerStudentCourse(${user.student_id}, '${c.course_code}')">
            ${btnText}
          </button>
        </td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">✍️ تسجيل المقررات الدراسية (الفصل الدراسي الثاني)</h3>
          <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px;">
            وفقاً لقواعد اللائحة (التقرير الثالث): الحد الأقصى للتسجيل هو <strong>18 ساعة معتمدة</strong>، ويُمنع التسجيل للمتعثرين مالياً.
          </p>
        </div>
        <div>
          <span class="badge ${registeredHours >= 18 ? 'badge-gold' : 'badge-primary'}" style="font-size: 0.95rem;">
            الساعات المسجلة حتى الآن: ${registeredHours} من أصل 18 ساعة
          </span>
        </div>
      </div>

      ${isOverdue ? `
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px; margin-bottom: 18px; color: #991b1b;">
          <strong>⚠️ تنبيه مالي:</strong> تم إيقاف خدمة تسجيل المقررات مؤقتاً نظراً لوجود متأخرات مصروفات دراسية مستحقة. يرجى التوجه للخزينة لسداد المصروفات ليتم فتح التسجيل تلقائياً.
        </div>
      ` : ''}

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>كود المقرر</th>
              <th>اسم المقرر</th>
              <th>الساعات</th>
              <th>أستاذ المقرر</th>
              <th>الحالة</th>
              <th>إجراء التسجيل</th>
            </tr>
          </thead>
          <tbody>
            ${coursesHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentGradesView(user, data) {
  const student = data.students.find(s => s.student_id === user.student_id);
  const studentGrades = data.grades.filter(g => g.student_id === user.student_id);

  let rows = '';
  studentGrades.forEach(g => {
    const c = data.courses.find(cr => cr.course_code === g.course_code);
    rows += `
      <tr>
        <td><strong>${c ? c.course_name : g.course_code}</strong> (<code>${g.course_code}</code>)</td>
        <td>${c ? c.credit_hours : 3} ساعات</td>
        <td>${g.coursework} / 20</td>
        <td>${g.midterm} / 20</td>
        <td>${g.final_exam} / 60</td>
        <td><strong>${g.total} / 100</strong></td>
        <td><span class="badge badge-primary" style="font-size: 0.9rem;">${g.letter_grade}</span></td>
        <td><strong>${g.grade_points.toFixed(2)}</strong></td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">🎯 كشف الدرجات الأكاديمية والمعدل التراكمي (GPA)</h3>
          <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px;">
            حساب المعدل آلياً بالمعادلة: مجموع (نقاط كل مقرر × ساعاته) ÷ مجموع الساعات
          </p>
        </div>
        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px 18px; text-align: center;">
          <small style="color: #065f46; font-weight: bold;">المعدل التراكمي العام (GPA)</small>
          <div style="font-size: 1.6rem; font-weight: 900; color: #047857;">${student ? student.gpa.toFixed(2) : '0.00'} / 4.00</div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>المقرر الدراسي</th>
              <th>الساعات</th>
              <th>أعمال السنة (20)</th>
              <th>الميدتيرم (20)</th>
              <th>الفاينال (60)</th>
              <th>المجموع الكلي</th>
              <th>التقدير الحرفي</th>
              <th>النقاط</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length > 0 ? rows : '<tr><td colspan="8" style="text-align:center;">لم يتم رصد أي درجات للطالب حتى الآن</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentDocumentsView(user, data) {
  const student = data.students.find(s => s.student_id === user.student_id);
  const requests = data.document_requests.filter(r => r.student_id === user.student_id);
  const isOverdue = student && student.isOverdue;

  let rows = '';
  requests.forEach(r => {
    let statusBadge = '<span class="badge badge-warning">قيد المراجعة</span>';
    let actionBtn = '<span style="color:#64748b; font-size:0.8rem;">بانتظار اعتماد الموظف</span>';

    if (r.status === 'تم الإصدار') {
      statusBadge = '<span class="badge badge-success">تم الإصدار والاعتماد</span>';
      actionBtn = `<button type="button" class="btn btn-primary btn-sm" onclick="openCertificateModal(${r.student_id}, '${r.doc_type}', '${r.issue_date || '2026-11-19'}')">🖨️ معاينة وطباعة الشهادة</button>`;
    } else if (r.status === 'مرفوض') {
      statusBadge = '<span class="badge badge-danger">مرفوض</span>';
      actionBtn = `<span style="color:#dc2626; font-size:0.8rem;">${r.notes || 'مرفوض'}</span>`;
    }

    rows += `
      <tr>
        <td><code>#REQ-${r.request_id}</code></td>
        <td><strong>${r.doc_type}</strong></td>
        <td>${r.request_date}</td>
        <td>${statusBadge}</td>
        <td>${r.issue_date || '--'}</td>
        <td>${actionBtn}</td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <div>
          <h3 class="card-title">📜 استخراج الشهادات والمستندات الرسمية</h3>
          <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px;">
            يمكنك طلب شهادة قيد أو بيان درجات أو بيان حالة معتمد ومختوم إلكترونياً.
          </p>
        </div>
      </div>

      ${isOverdue ? `
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px; margin-bottom: 18px; color: #991b1b;">
          <strong>⛔ عذراً:</strong> لا يمكنك طلب أي مستندات رسمية نظراً لوجود متأخرات مالية مستحقة على الطالب طبقاً للائحة.
        </div>
      ` : `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; margin-bottom: 10px;">طلب مستند جديد:</h4>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button type="button" class="btn btn-primary" onclick="requestDocumentByStudent(${user.student_id}, 'شهادة قيد رسمية')">
              + طلب شهادة قيد رسمية
            </button>
            <button type="button" class="btn btn-accent" onclick="requestDocumentByStudent(${user.student_id}, 'بيان درجات معتمد')">
              + طلب بيان درجات معتمد
            </button>
            <button type="button" class="btn btn-success" onclick="requestDocumentByStudent(${user.student_id}, 'بيان حالة دراسية')">
              + طلب بيان حالة دراسية
            </button>
          </div>
        </div>
      `}

      <h4 style="font-size: 1rem; margin-bottom: 12px;">سجل طلبات المستندات السابقة:</h4>
      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>نوع المستند</th>
              <th>تاريخ التقديم</th>
              <th>حالة الطلب</th>
              <th>تاريخ الإصدار</th>
              <th>إجراء المستند</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length > 0 ? rows : '<tr><td colspan="6" style="text-align:center;">لم تقم بتقديم أي طلبات مستندات حتى الآن</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// =========================================================================
// شاشات موظف شئون الطلاب (Staff)
// =========================================================================
function renderStaffStudentsView(data) {
  let rows = '';
  data.students.forEach(s => {
    rows += `
      <tr>
        <td><strong>${s.full_name}</strong></td>
        <td><code>${s.student_id}</code></td>
        <td><code>${s.national_id}</code></td>
        <td>الفرقة ${s.level} (مجموعة ${s.group_no})</td>
        <td><strong>${s.gpa.toFixed(2)}</strong></td>
        <td>${s.registeredCoursesCount} مواد</td>
        <td><span class="badge ${s.hasAbsenceWarning ? 'badge-danger' : 'badge-success'}">${s.absenceRate}%</span></td>
        <td><span class="badge ${s.remainingFee === 0 ? 'badge-success' : 'badge-warning'}">${s.remainingFee === 0 ? 'مسدد' : 'متأخرات'}</span></td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">➕ تسجيل وقيد طالب جديد بالمعهد (خوارزمية 1.2)</h3>
      </div>
      
      <form onsubmit="submitNewStudentForm(event)" style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #e2e8f0;">
        <div class="form-grid">
          <div class="form-group">
            <label>الاسم بالكامل رباعي</label>
            <input type="text" id="newStdName" class="form-control" placeholder="مثال: يوسف عادل خليل" required>
          </div>
          <div class="form-group">
            <label>الرقم القومي (14 رقم بالضبط)</label>
            <input type="text" id="newStdNationalId" class="form-control" placeholder="30301010101234" maxlength="14" minlength="14" required>
          </div>
          <div class="form-group">
            <label>تاريخ الميلاد</label>
            <input type="date" id="newStdBirthDate" class="form-control" required value="2003-05-15">
          </div>
          <div class="form-group">
            <label>النوع</label>
            <select id="newStdGender" class="form-control">
              <option value="M">ذكر</option>
              <option value="F">أنثى</option>
            </select>
          </div>
          <div class="form-group">
            <label>رقم الهاتف</label>
            <input type="text" id="newStdPhone" class="form-control" placeholder="01012345678">
          </div>
          <div class="form-group">
            <label>العنوان بالتفصيل</label>
            <input type="text" id="newStdAddress" class="form-control" placeholder="القاهرة - التجمع الأول">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">+ تسجيل وقيد الطالب وحفظ بالداتابيز</button>
      </form>

      <div class="card-header">
        <h3 class="card-title">👥 سجل الطلاب المقيدين في النظام</h3>
        <span class="badge badge-primary">إجمالي الطلاب: ${data.students.length}</span>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>اسم الطالب</th>
              <th>الرقم الجامعي</th>
              <th>الرقم القومي</th>
              <th>الفرقة والمجموعة</th>
              <th>GPA</th>
              <th>المقررات</th>
              <th>الغياب</th>
              <th>المصروفات</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStaffDocumentsView(data) {
  let rows = '';
  data.document_requests.forEach(r => {
    const student = data.students.find(s => s.student_id === r.student_id);
    let actions = '';

    if (r.status === 'قيد المراجعة') {
      actions = `
        <button type="button" class="btn btn-success btn-sm" onclick="actionOnDocument(${r.request_id}, 'approve')">
          ✔️ اعتماد وإصدار
        </button>
        <button type="button" class="btn btn-danger btn-sm" onclick="actionOnDocument(${r.request_id}, 'reject')">
          ✖️ رفض
        </button>
      `;
    } else if (r.status === 'تم الإصدار') {
      actions = `
        <button type="button" class="btn btn-primary btn-sm" onclick="openCertificateModal(${r.student_id}, '${r.doc_type}', '${r.issue_date || '2026-11-19'}')">
          🖨️ طباعة الشهادة الرسمية المختومة
        </button>
      `;
    } else {
      actions = `<span style="color:#dc2626; font-size:0.8rem;">مرفوض (${r.notes || ''})</span>`;
    }

    rows += `
      <tr>
        <td><code>#REQ-${r.request_id}</code></td>
        <td><strong>${student ? student.full_name : r.student_id}</strong></td>
        <td><code>${r.student_id}</code></td>
        <td>${r.doc_type}</td>
        <td>${r.request_date}</td>
        <td><span class="badge ${r.status === 'تم الإصدار' ? 'badge-success' : (r.status === 'مرفوض' ? 'badge-danger' : 'badge-warning')}">${r.status}</span></td>
        <td>${actions}</td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">🖨️ إدارة ومراجعة طلبات استخراج الشهادات والمستندات (خوارزمية 1.7)</h3>
        <span class="badge badge-gold">طلبات الشهادات: ${data.document_requests.length}</span>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>الطالب</th>
              <th>الرقم الجامعي</th>
              <th>نوع الشهادة</th>
              <th>تاريخ الطلب</th>
              <th>الحالة</th>
              <th>الإجراء الإداري</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStaffAcademicView(data) {
  let rows = '';
  data.courses.forEach(c => {
    const instructor = data.instructors.find(i => i.instructor_id === c.instructor_id);
    const count = data.enrollments.filter(e => e.course_code === c.course_code).length;
    rows += `
      <tr>
        <td><code>${c.course_code}</code></td>
        <td><strong>${c.course_name}</strong></td>
        <td>${c.credit_hours} ساعات معتمدة</td>
        <td>${instructor ? instructor.full_name : 'هيئة التدريس'}</td>
        <td>الفرقة ${c.level} (ترم ${c.semester})</td>
        <td><span class="badge badge-primary">${count} طالب مسجل</span></td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">📊 المقررات الدراسية والتوزيع الأكاديمي للفرقة الثالثة</h3>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>كود المقرر</th>
            <th>اسم المقرر</th>
            <th>الساعات</th>
            <th>الأستاذ المسئول</th>
            <th>الفرقة والفصل</th>
            <th>عدد المسجلين</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

// =========================================================================
// شاشات الشئون المالية والخزينة (Finance)
// =========================================================================
function renderFinanceFeesView(data) {
  let rows = '';
  data.fees.forEach(f => {
    const student = data.students.find(s => s.student_id === f.student_id);
    const payments = data.payments.filter(p => p.fee_id === f.fee_id);
    const paid = payments.reduce((acc, p) => acc + p.amount, 0);
    const remaining = f.amount_due - paid;

    let badgeClass = 'badge-success';
    if (f.status === 'غير مسدد') badgeClass = 'badge-danger';
    else if (f.status === 'مسدد جزئيًا') badgeClass = 'badge-warning';

    rows += `
      <tr>
        <td><strong>${student ? student.full_name : f.student_id}</strong></td>
        <td><code>${f.student_id}</code></td>
        <td>${f.amount_due.toLocaleString()} ج.م.</td>
        <td>${paid.toLocaleString()} ج.م.</td>
        <td style="font-weight: bold; color: ${remaining > 0 ? '#dc2626' : '#059669'};">${remaining.toLocaleString()} ج.م.</td>
        <td>${f.due_date}</td>
        <td><span class="badge ${badgeClass}">${f.status}</span></td>
        <td>
          ${remaining > 0 ? `
            <button type="button" class="btn btn-primary btn-sm" onclick="openPaymentModal(${f.fee_id}, '${student ? student.full_name : ''}', ${remaining})">
              💳 توريد وسداد
            </button>
          ` : '<span style="color:#059669; font-weight:bold;">خالص</span>'}
        </td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">💳 كشف الرسوم والموقف المالي للطلاب (خوارزمية 1.6)</h3>
        <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px;">متابعة المطالبات والتحصيل وتوريد مبالغ المصروفات وإصدار الإيصالات الرسمية.</p>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>الطالب</th>
              <th>الرقم الجامعي</th>
              <th>المبلغ المطلوب</th>
              <th>المسدد</th>
              <th>المتبقي</th>
              <th>تاريخ الاستحقاق</th>
              <th>الحالة</th>
              <th>إجراء السداد</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderFinanceReceiptsView(data) {
  let rows = '';
  data.payments.forEach(p => {
    const fee = data.fees.find(f => f.fee_id === p.fee_id);
    const student = fee ? data.students.find(s => s.student_id === fee.student_id) : null;

    rows += `
      <tr>
        <td><strong>${p.receipt_no}</strong></td>
        <td>${student ? student.full_name : ''}</td>
        <td><code>${student ? student.student_id : ''}</code></td>
        <td><strong>${p.amount.toLocaleString()} ج.م.</strong></td>
        <td>${p.payment_date}</td>
        <td><span class="badge badge-gold">${p.method}</span></td>
        <td>
          <button type="button" class="btn btn-primary btn-sm" onclick="openReceiptModal('${p.receipt_no}', '${student ? student.full_name : ''}', '${student ? student.student_id : ''}', ${p.amount}, '${p.method}', '${p.payment_date}', '${fee ? fee.status : 'مسدد'}')">
            🖨️ طباعة الإيصال
          </button>
        </td>
      </tr>
    `;
  });

  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">🧾 سجل إيصالات السداد الرسمية الصادرة</h3>
      </div>
      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>رقم الإيصال</th>
              <th>اسم الطالب</th>
              <th>الرقم الجامعي</th>
              <th>المبلغ المسدد</th>
              <th>تاريخ التوريد</th>
              <th>طريقة السداد</th>
              <th>طباعة</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// =========================================================================
// شاشات مدير النظام (Admin Dashboard)
// =========================================================================
function renderAdminOverviewView(data) {
  return `
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title">📈 مؤشرات الأداء ولوحة قيادة النظام (Executive KPI Dashboard)</h3>
        <button type="button" class="btn btn-danger btn-sm" onclick="resetAllDemoData()">🔄 إعادة ضبط البيانات التجريبية</button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 15px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px;">
          <h4 style="font-size: 1rem; color: #1e3a8a; margin-bottom: 12px;">📊 توزيع تقديرات الطلاب</h4>
          <p>تقدير ممتاز (A): <strong>3 طلاب (50%)</strong></p>
          <p>تقدير جيد جداً (B): <strong>1 طالب (17%)</strong></p>
          <p>تقدير مقبول (D): <strong>1 طالب (17%)</strong></p>
          <p>متوسط GPA الفرقة: <strong>3.42 من 4.00</strong></p>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px;">
          <h4 style="font-size: 1rem; color: #059669; margin-bottom: 12px;">💵 الموقف المالي للمعهد</h4>
          <p>إجمالي المستحقات: <strong>34,000 ج.م.</strong></p>
          <p>إجمالي المحصل: <strong>13,500 ج.م.</strong></p>
          <p>نسبة التحصيل المالي: <strong>40%</strong></p>
          <p>الطلاب المسددين بالكامل: <strong>طالبة واحدة (رغدة)</strong></p>
        </div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px;">
          <h4 style="font-size: 1rem; color: #d97706; margin-bottom: 12px;">🛡️ قواعد الأمان وسلامة البيانات</h4>
          <p>تشفير كلمات المرور: <strong>مفعل (SHA-256)</strong></p>
          <p>التحقق من سقف 18 ساعة: <strong>نشط وفوري</strong></p>
          <p>إنذار الغياب الآلي (25%): <strong>نشط ويعمل</strong></p>
          <p>الحجب المالي للمتأخرات: <strong>نشط ويعمل</strong></p>
        </div>
      </div>
    </div>
  `;
}

// =========================================================================
// معالجة النوافذ المنبثقة والعمليات التفاعلية (Modals & Actions)
// =========================================================================

function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// 1. فتح نافذة رصد الدرجات
function openGradeModal(studentId, studentName, courseCode, courseName) {
  document.getElementById('gradeStudentId').value = studentId;
  document.getElementById('gradeCourseCode').value = courseCode;
  document.getElementById('gradeStudentName').textContent = studentName;
  document.getElementById('gradeCourseName').textContent = `${courseName} (${courseCode})`;

  const existing = appState.data.grades.find(g => g.student_id === studentId && g.course_code === courseCode);
  document.getElementById('gradeCoursework').value = existing ? existing.coursework : 18;
  document.getElementById('gradeMidterm').value = existing ? existing.midterm : 18;
  document.getElementById('gradeFinalExam').value = existing ? existing.final_exam : 50;

  calcLiveGradeTotal();
  openModal('gradeModal');
}

function calcLiveGradeTotal() {
  const cw = parseFloat(document.getElementById('gradeCoursework').value) || 0;
  const mt = parseFloat(document.getElementById('gradeMidterm').value) || 0;
  const fn = parseFloat(document.getElementById('gradeFinalExam').value) || 0;
  const total = Number((cw + mt + fn).toFixed(2));

  let letter = 'F';
  let points = 0.0;
  if (total >= 90) { letter = 'A'; points = 4.0; }
  else if (total >= 80) { letter = 'B'; points = 3.0; }
  else if (total >= 70) { letter = 'C'; points = 2.0; }
  else if (total >= 60) { letter = 'D'; points = 1.0; }
  else { letter = 'F'; points = 0.0; }

  document.getElementById('liveTotalDisplay').textContent = `${total} / 100`;
  document.getElementById('liveLetterDisplay').textContent = letter;
  document.getElementById('livePointsDisplay').textContent = points.toFixed(2);
}

async function submitGradeForm(e) {
  e.preventDefault();
  const student_id = document.getElementById('gradeStudentId').value;
  const course_code = document.getElementById('gradeCourseCode').value;
  const coursework = document.getElementById('gradeCoursework').value;
  const midterm = document.getElementById('gradeMidterm').value;
  const final_exam = document.getElementById('gradeFinalExam').value;

  try {
    const res = await fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id, course_code, coursework, midterm, final_exam })
    });
    const result = await res.json();
    if (result.success) {
      alert(result.message);
      closeModal('gradeModal');
      await fetchSystemState();
    } else {
      alert(`خطأ: ${result.message}`);
    }
  } catch (err) {
    alert('حدث خطأ أثناء رصد الدرجات');
  }
}

// 2. تسجيل الحضور والغياب
function openAttendanceModal(studentId, studentName, courseCode, courseName) {
  document.getElementById('attStudentId').value = studentId;
  document.getElementById('attCourseCode').value = courseCode;
  document.getElementById('attStudentName').textContent = studentName;
  document.getElementById('attCourseName').textContent = `${courseName} (${courseCode})`;
  document.getElementById('attDate').value = new Date().toISOString().split('T')[0];
  openModal('attendanceModal');
}

async function submitAttendanceForm(e) {
  e.preventDefault();
  const student_id = document.getElementById('attStudentId').value;
  const course_code = document.getElementById('attCourseCode').value;
  const lecture_date = document.getElementById('attDate').value;
  const status = document.getElementById('attStatus').value;

  try {
    const res = await fetch('/api/attendance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id, course_code, lecture_date, status })
    });
    const result = await res.json();
    if (result.success) {
      if (result.warningIssued) {
        alert(result.warningMessage);
      } else {
        alert(result.message);
      }
      closeModal('attendanceModal');
      await fetchSystemState();
    } else {
      alert(result.message);
    }
  } catch (err) {
    alert('حدث خطأ في تسجيل الحضور');
  }
}

// 3. سداد المصروفات وتوليد الإيصال
function openPaymentModal(feeId, studentName, remainingAmount) {
  document.getElementById('payFeeId').value = feeId;
  document.getElementById('payStudentName').textContent = studentName;
  document.getElementById('payRemainingAmount').textContent = remainingAmount.toLocaleString();
  document.getElementById('payAmount').value = remainingAmount;
  document.getElementById('payAmount').max = remainingAmount;
  openModal('paymentModal');
}

async function submitPaymentForm(e) {
  e.preventDefault();
  const fee_id = document.getElementById('payFeeId').value;
  const amount = document.getElementById('payAmount').value;
  const method = document.getElementById('payMethod').value;

  try {
    const res = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fee_id, amount, method, received_by: 3 })
    });
    const result = await res.json();
    if (result.success) {
      alert(result.message);
      closeModal('paymentModal');
      await fetchSystemState();

      // فتح نافذة طباعة الإيصال فوراً
      openReceiptModal(
        result.payment.receipt_no,
        document.getElementById('payStudentName').textContent,
        '',
        result.payment.amount,
        method,
        result.payment.payment_date,
        result.newFeeStatus
      );
    } else {
      alert(result.message);
    }
  } catch (err) {
    alert('حدث خطأ في سداد المصروفات');
  }
}

// 4. تسجيل مقرر دراسي
async function registerStudentCourse(studentId, courseCode) {
  try {
    const res = await fetch('/api/enrollments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id: studentId, course_code: courseCode })
    });
    const result = await res.json();
    if (result.success) {
      alert(result.message);
      await fetchSystemState();
    } else {
      alert(`🛡️ حماية النظام: ${result.message}`);
    }
  } catch (err) {
    alert('تعذر تسجيل المقرر');
  }
}

// 5. طلب مستند من الطالب
async function requestDocumentByStudent(studentId, docType) {
  try {
    const res = await fetch('/api/documents/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_id: studentId, doc_type: docType })
    });
    const result = await res.json();
    if (result.success) {
      alert(result.message);
      await fetchSystemState();
    } else {
      alert(`🛡️ حماية النظام: ${result.message}`);
    }
  } catch (err) {
    alert('تعذر تقديم طلب المستند');
  }
}

// 6. اعتماد أو رفض المستند (Staff)
async function actionOnDocument(requestId, action) {
  try {
    const res = await fetch('/api/documents/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request_id: requestId, action, staff_user_id: 2 })
    });
    const result = await res.json();
    if (result.success) {
      alert(result.message);
      await fetchSystemState();
    } else {
      alert(result.message);
    }
  } catch (err) {
    alert('تعذر تنفيذ الإجراء');
  }
}

// 7. إضافة طالب جديد (Staff)
async function submitNewStudentForm(e) {
  e.preventDefault();
  const payload = {
    full_name: document.getElementById('newStdName').value,
    national_id: document.getElementById('newStdNationalId').value,
    birth_date: document.getElementById('newStdBirthDate').value,
    gender: document.getElementById('newStdGender').value,
    phone: document.getElementById('newStdPhone').value,
    address: document.getElementById('newStdAddress').value,
    level: 3,
    group_no: 3
  };

  try {
    const res = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success) {
      alert(result.message);
      e.target.reset();
      await fetchSystemState();
    } else {
      alert(`خطأ: ${result.message}`);
    }
  } catch (err) {
    alert('تعذر إضافة الطالب');
  }
}

// 8. معاينة وطباعة الشهادة الرسمية
function openCertificateModal(studentId, docType, issueDate) {
  const student = appState.data.students.find(s => s.student_id === studentId);
  if (!student) return;

  document.getElementById('certDocNumber').textContent = `2026-CERT-${student.student_id.toString().slice(-4)}`;
  document.getElementById('certMainTitle').textContent = docType;
  document.getElementById('certStudentName').textContent = student.full_name;
  document.getElementById('certStudentLevel').textContent = student.level === 3 ? 'الثالثة' : `الفرقة ${student.level}`;
  document.getElementById('certStudentGroup').textContent = student.group_no;
  document.getElementById('certNationalId').textContent = student.national_id;
  document.getElementById('certStudentCode').textContent = student.student_id;
  document.getElementById('certStudentGPA').textContent = student.gpa.toFixed(2);
  document.getElementById('certIssueDate').textContent = issueDate || new Date().toISOString().split('T')[0];

  openModal('certificateModal');
}

// 9. معاينة وطباعة الإيصال
function openReceiptModal(recNo, studentName, studentId, amount, method, date, status) {
  document.getElementById('recNumber').textContent = recNo;
  document.getElementById('recStudentName').textContent = studentName;
  document.getElementById('recStudentId').textContent = studentId;
  document.getElementById('recAmount').textContent = Number(amount).toLocaleString();
  document.getElementById('recMethod').textContent = method;
  document.getElementById('recDate').textContent = date;
  document.getElementById('recFeeStatus').textContent = status;
  openModal('receiptModal');
}

// 10. إعادة ضبط البيانات بالكامل للتجربة
async function resetAllDemoData() {
  if (confirm('هل أنت متأكد من رغبتك في إعادة ضبط كافة البيانات إلى الحالة الافتراضية؟')) {
    await fetch('/api/reset', { method: 'POST' });
    alert('تمت استعادة البيانات الافتراضية بنجاح!');
    await fetchSystemState();
  }
}

// =========================================================================
// التوثيق الهندسي ومخططات التقارير الثلاثة (DFD, 11 Tables, Java OOP)
// =========================================================================

function openSystemArchitectureModal(tab) {
  openModal('architectureModal');
  switchArchTab(tab);
}

function switchArchTab(tab) {
  const body = document.getElementById('archModalBody');
  const title = document.getElementById('archModalTitle');
  const btnDfd = document.getElementById('btnArchDfd');
  const btnDb = document.getElementById('btnArchDb');
  const btnOop = document.getElementById('btnArchOop');

  btnDfd.className = 'btn btn-sm ' + (tab === 'dfd' ? 'btn-primary' : '');
  btnDb.className = 'btn btn-sm ' + (tab === 'database' ? 'btn-success' : '');
  btnOop.className = 'btn btn-sm ' + (tab === 'oop' ? 'btn-accent' : '');

  if (tab === 'dfd') {
    title.textContent = '📐 مخططات تدفق البيانات (DFD Level 0 & Level 1) والعمليات الثمانية';
    body.innerHTML = `
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 14px; border-radius: 8px; margin-bottom: 15px;">
        <h4 style="color: #1e3a8a; margin-bottom: 6px;">1. مخطط السياق (DFD Level 0 - Context Diagram):</h4>
        <p>يمثل النظام كعملية مركزية واحدة (0.0 نظام إدارة شئون الطلاب SAMS) تتفاعل مع <strong>6 جهات خارجية (External Entities)</strong>:</p>
        <ul style="margin-right: 20px; font-size: 0.9rem;">
          <li><strong>الطالب:</strong> يدخل بيانات الدخول وطلبات التسجيل والمستندات، ويستلم الجدول، الدرجات، والمستندات المعتمدة.</li>
          <li><strong>عضو هيئة التدريس:</strong> يرسل كشوف الحضور والغياب ورصد الدرجات، ويستلم قوائم المقررات والطلاب.</li>
          <li><strong>موظف شئون الطلاب:</strong> يدير بيانات وقيد الطلاب وتعديلات التسجيل وإصدار الشهادات.</li>
          <li><strong>الشئون المالية:</strong> تسجل المدفوعات وتستخرج كشوف المتأخرات والمستحقات والإيصالات.</li>
          <li><strong>إدارة المعهد:</strong> تطلب وتستلم التقارير الإحصائية ومؤشرات الأداء لدعم القرار.</li>
          <li><strong>مدير النظام:</strong> يدير حسابات المستخدمين والصلاحيات وسجلات النشاط والنسخ الاحتياطي.</li>
        </ul>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 8px;">
        <h4 style="color: #0f172a; margin-bottom: 8px;">2. مخطط تدفق البيانات التفصيلي (DFD Level 1 - 8 Processes):</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; font-size: 0.85rem;">
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>1.0 إدارة المستخدمين والدخول</strong><br>التحقق من المستخدمين وصلاحياتهم وتأمين الجلسة. (مخزن D1)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>2.0 إدارة بيانات الطلاب</strong><br>قيد وتحديث بيانات الطلاب والتحقق من 14 رقماً. (مخزن D2)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>3.0 تسجيل المقررات والجداول</strong><br>تسجيل المقررات وفحص سقف 18 ساعة والمانع المالي. (مخازن D3, D4)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>4.0 تسجيل الحضور والغياب</strong><br>رصد المحاضرات واحتساب نسبة الغياب وإنذار الـ 25%. (مخزن D5)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>5.0 إدارة الدرجات والمعدل</strong><br>رصد (20+20+60) وحساب التقديرات ونقاط GPA التراكمي. (مخزن D6)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>6.0 إدارة المصروفات والمدفوعات</strong><br>متابعة الرسوم، السداد، وإصدار إيصال رسمي فريد. (مخزن D7)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>7.0 إصدار المستندات الرسمية</strong><br>مراجعة طلبات شهادة القيد وبيان الدرجات وطباعتها. (مخزن D8)</div>
          <div style="background:#fff; border:1px solid #cbd5e1; padding:8px; border-radius:6px;"><strong>8.0 إنتاج التقارير الإحصائية</strong><br>توليد إحصائيات النجاح والرسوب والتحصيل المالي للإدارة.</div>
        </div>
      </div>
    `;
  } else if (tab === 'database') {
    title.textContent = '🗄️ المخطط العلائقي وقاموس البيانات الكامل (11 جدولاً)';
    body.innerHTML = `
      <div style="margin-bottom: 14px;">
        <p>تم تصميم قاعدة البيانات بـ <strong>11 جدولاً علائقياً</strong> مطابقة بنسبة 100% لقاموس البيانات بالتقرير الثالث، مع قيود السلامة المرجعية (CASCADE, RESTRICT, SET NULL):</p>
      </div>

      <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
        <button class="btn btn-sm btn-primary" onclick="showDbTableDetails('student')">1. student (الطلاب)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('instructor')">2. instructor (الدكاترة)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('course')">3. course (المقررات)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('enrollment')">4. enrollment (التسجيل)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('grade')">5. grade (الدرجات)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('attendance')">6. attendance (الحضور)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('fee')">7. fee (الرسوم)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('payment')">8. payment (السداد)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('document_request')">9. doc_request (المستندات)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('schedule')">10. schedule (الجداول)</button>
        <button class="btn btn-sm" style="background:#e2e8f0;" onclick="showDbTableDetails('users')">11. users (المستخدمين)</button>
      </div>

      <div id="dbTableContentBox" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px;">
        <!-- يتم تعبئتها ديناميكياً -->
      </div>
    `;
    showDbTableDetails('student');
  } else {
    title.textContent = '☕ بنية البرمجة كائنية التوجه (Java OOP Architecture)';
    body.innerHTML = `
      <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 14px; border-radius: 8px; margin-bottom: 16px;">
        <h4 style="color: #b45309; margin-bottom: 6px;">مبادئ الـ OOP المطبقة بنسبة 100% في كود Java الفعلي للمشروع:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; font-size: 0.9rem;">
          <div><strong>1. التجريد (Abstraction):</strong><br>الكلاس <code>public abstract class Person</code> يحتوي على الدوال المشتركة والدالة المجردة <code>getRole()</code>.</div>
          <div><strong>2. الوراثة (Inheritance):</strong><br><code>Student extends Person</code> و <code>Instructor extends Person</code> يرثان الخصائص ويوفران إعادة استخدام الكود.</div>
          <div><strong>3. التغليف (Encapsulation):</strong><br>جميع المتغيرات معرفة بـ <code>private</code> مع دوال <code>getters / setters</code> للتحقق من سلامة البيانات.</div>
          <div><strong>4. تعدد الأشكال (Polymorphism):</strong><br>إعادة تعريف دالة <code>@Override public String getRole()</code> في كل كلاس مشتق بحسب طبيعته.</div>
        </div>
      </div>

      <div style="background: #0f172a; color: #38bdf8; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 0.85rem; line-height: 1.6; overflow-x: auto;">
<span style="color:#f472b6;">public abstract class</span> <span style="color:#60a5fa;">Person</span> {
    <span style="color:#f472b6;">private</span> String nationalId;
    <span style="color:#f472b6;">private</span> String fullName;
    <span style="color:#f472b6;">public abstract</span> String <span style="color:#34d399;">getRole</span>();
}

<span style="color:#f472b6;">public class</span> <span style="color:#60a5fa;">Student</span> <span style="color:#f472b6;">extends</span> <span style="color:#60a5fa;">Person</span> {
    <span style="color:#f472b6;">private int</span> studentId;
    <span style="color:#f472b6;">private double</span> gpa;
    <span style="color:#fbbf24;">@Override</span>
    <span style="color:#f472b6;">public</span> String <span style="color:#34d399;">getRole</span>() { <span style="color:#f472b6;">return</span> <span style="color:#a7f3d0;">"Student"</span>; }
}

<span style="color:#f472b6;">public class</span> <span style="color:#60a5fa;">Instructor</span> <span style="color:#f472b6;">extends</span> <span style="color:#60a5fa;">Person</span> {
    <span style="color:#f472b6;">private int</span> instructorId;
    <span style="color:#f472b6;">private</span> String department;
    <span style="color:#fbbf24;">@Override</span>
    <span style="color:#f472b6;">public</span> String <span style="color:#34d399;">getRole</span>() { <span style="color:#f472b6;">return</span> <span style="color:#a7f3d0;">"Instructor"</span>; }
}
      </div>
    `;
  }
}

function showDbTableDetails(tableName) {
  const box = document.getElementById('dbTableContentBox');
  if (!box || !appState.data) return;

  const dataList = appState.data[tableName === 'student' ? 'students' : (tableName === 'instructor' ? 'instructors' : (tableName === 'course' ? 'courses' : (tableName === 'document_request' ? 'document_requests' : tableName + 's')))] || [];

  let html = `<h4 style="color:#1e3a8a; margin-bottom:8px;">جدول <code>${tableName}</code> (إجمالي السجلات الحالية: ${dataList.length}):</h4>`;
  html += `<div style="overflow-x:auto;"><table class="custom-table" style="font-size:0.8rem;"><thead><tr>`;

  if (dataList.length > 0) {
    const keys = Object.keys(dataList[0]);
    keys.slice(0, 7).forEach(k => html += `<th>${k}</th>`);
    html += `</tr></thead><tbody>`;
    dataList.forEach(row => {
      html += `<tr>`;
      keys.slice(0, 7).forEach(k => html += `<td>${row[k] !== null ? row[k] : '--'}</td>`);
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
  } else {
    html += `<p>لا توجد سجلات</p>`;
  }

  box.innerHTML = html;
}
