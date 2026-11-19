const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// =============================================================================
// قاعدة البيانات المركزية في الذاكرة (مطابقة بنسبة 100% للجداول الـ 11 في التقرير الثالث)
// =============================================================================

function getInitialDatabase() {
  return {
    // 1. جدول أعضاء هيئة التدريس (instructor)
    instructors: [
      { instructor_id: 1, national_id: '27005120101234', full_name: 'أ.د / فاروق عبد العزيز', phone: '01001234567', email: 'farouk@sams-institute.edu.eg', department: 'نظم المعلومات الإدارية' },
      { instructor_id: 2, national_id: '27509180104567', full_name: 'د/ أمل سمير إبراهيم', phone: '01123456789', email: 'amal.samir@sams-institute.edu.eg', department: 'علوم الحاسب' },
      { instructor_id: 3, national_id: '28003150107890', full_name: 'د/ هاني مصطفى كمال', phone: '01234567890', email: 'hany.kamal@sams-institute.edu.eg', department: 'نظم المعلومات الإدارية' }
    ],

    // 2. جدول المقررات الدراسية (course)
    courses: [
      { course_code: 'CS301', course_name: 'تحليل وتصميم نظم المعلومات', credit_hours: 3, semester: 2, level: 3, instructor_id: 1 },
      { course_code: 'CS302', course_name: 'البرمجة كائنية التوجه (Java OOP)', credit_hours: 3, semester: 2, level: 3, instructor_id: 2 },
      { course_code: 'CS303', course_name: 'نظم إدارة قواعد البيانات (DBMS)', credit_hours: 3, semester: 2, level: 3, instructor_id: 3 },
      { course_code: 'CS304', course_name: 'شبكات الحاسب وأمن المعلومات', credit_hours: 3, semester: 2, level: 3, instructor_id: 2 },
      { course_code: 'IS305', course_name: 'نظم دعم اتخاذ القرار (DSS)', credit_hours: 3, semester: 2, level: 3, instructor_id: 1 },
      { course_code: 'IS306', course_name: 'أخلاقيات وتشريعات تكنولوجيا المعلومات', credit_hours: 3, semester: 2, level: 3, instructor_id: 3 }
    ],

    // 3. جدول الطلاب (student)
    students: [
      {
        student_id: 202411586,
        national_id: '30304200109876',
        full_name: 'رغدة ابراهيم عبد الخالق',
        birth_date: '2003-04-20',
        gender: 'F',
        phone: '01019876543',
        email: 'ragda.ibrahim@student.sams.edu.eg',
        address: 'القاهرة - التجمع الأول',
        level: 3,
        group_no: 3,
        gpa: 3.92,
        status: 'Active',
        enroll_date: '2024-09-15'
      },
      {
        student_id: 202411531,
        national_id: '30310150102548',
        full_name: 'كارولين عاطف عطاالله',
        birth_date: '2003-10-15',
        gender: 'F',
        phone: '01289123456',
        email: 'caroline.atef@student.sams.edu.eg',
        address: 'القاهرة - مصر الجديدة',
        level: 3,
        group_no: 3,
        gpa: 3.85,
        status: 'Active',
        enroll_date: '2024-09-15'
      },
      {
        student_id: 202411601,
        national_id: '30308110103456',
        full_name: 'أحمد محمد الشناوي',
        birth_date: '2003-08-11',
        gender: 'M',
        phone: '01155667788',
        email: 'ahmed.shenawy@student.sams.edu.eg',
        address: 'مدينة نصر - الحي السابع',
        level: 3,
        group_no: 3,
        gpa: 2.20,
        status: 'Active',
        enroll_date: '2024-09-15'
      },
      {
        student_id: 202411602,
        national_id: '30312050104321',
        full_name: 'سارة محمود الشرقاوي',
        birth_date: '2003-12-05',
        gender: 'F',
        phone: '01599887766',
        email: 'sara.sharkawy@student.sams.edu.eg',
        address: 'المعادي - دجلة',
        level: 3,
        group_no: 3,
        gpa: 3.40,
        status: 'Active',
        enroll_date: '2024-09-15'
      }
    ],

    // 4. جدول الجداول الدراسية (schedule)
    schedules: [
      { schedule_id: 1, course_code: 'CS301', group_no: 3, day_of_week: 'الأحد', start_time: '09:00', end_time: '11:00', room: 'مدرج 4B (أ.د / فاروق)' },
      { schedule_id: 2, course_code: 'CS301', group_no: 3, day_of_week: 'الأحد', start_time: '11:15', end_time: '13:15', room: 'معمل النظم 2' },
      { schedule_id: 3, course_code: 'CS302', group_no: 3, day_of_week: 'الاثنين', start_time: '10:00', end_time: '12:00', room: 'مدرج 2A (د/ أمل)' },
      { schedule_id: 4, course_code: 'CS302', group_no: 3, day_of_week: 'الاثنين', start_time: '12:15', end_time: '14:15', room: 'معمل جافا 1' },
      { schedule_id: 5, course_code: 'CS303', group_no: 3, day_of_week: 'الثلاثاء', start_time: '09:00', end_time: '11:00', room: 'مدرج 3C (د/ هاني)' },
      { schedule_id: 6, course_code: 'CS304', group_no: 3, day_of_week: 'الأربعاء', start_time: '11:00', end_time: '13:00', room: 'مدرج 1A' }
    ],

    // 5. جدول تسجيل المقررات (enrollment)
    enrollments: [
      { enrollment_id: 1, student_id: 202411586, course_code: 'CS301', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 2, student_id: 202411586, course_code: 'CS302', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 3, student_id: 202411586, course_code: 'CS303', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 4, student_id: 202411586, course_code: 'CS304', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 5, student_id: 202411586, course_code: 'IS305', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 6, student_id: 202411531, course_code: 'CS301', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 7, student_id: 202411531, course_code: 'CS302', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 8, student_id: 202411531, course_code: 'CS303', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-10' },
      { enrollment_id: 9, student_id: 202411601, course_code: 'CS301', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-11' },
      { enrollment_id: 10, student_id: 202411602, course_code: 'CS301', academic_year: '2026/2027', semester: 2, status: 'Registered', enroll_date: '2026-02-11' }
    ],

    // 6. جدول الحضور والغياب (attendance)
    attendances: [
      // رغدة (حضور تام)
      { attendance_id: 1, student_id: 202411586, course_code: 'CS301', lecture_date: '2026-02-15', status: 'حاضر' },
      { attendance_id: 2, student_id: 202411586, course_code: 'CS301', lecture_date: '2026-02-22', status: 'حاضر' },
      { attendance_id: 3, student_id: 202411586, course_code: 'CS301', lecture_date: '2026-03-01', status: 'حاضر' },
      { attendance_id: 4, student_id: 202411586, course_code: 'CS301', lecture_date: '2026-03-08', status: 'حاضر' },
      // كارولين (غياب 25% مسموح)
      { attendance_id: 5, student_id: 202411531, course_code: 'CS301', lecture_date: '2026-02-15', status: 'حاضر' },
      { attendance_id: 6, student_id: 202411531, course_code: 'CS301', lecture_date: '2026-02-22', status: 'حاضر' },
      { attendance_id: 7, student_id: 202411531, course_code: 'CS301', lecture_date: '2026-03-01', status: 'غائب' },
      { attendance_id: 8, student_id: 202411531, course_code: 'CS301', lecture_date: '2026-03-08', status: 'حاضر' },
      // أحمد الشناوي (غياب 75% -> متجاوز للحد الأقصى 25% لإثبات تشغيل الإنذار)
      { attendance_id: 9, student_id: 202411601, course_code: 'CS301', lecture_date: '2026-02-15', status: 'غائب' },
      { attendance_id: 10, student_id: 202411601, course_code: 'CS301', lecture_date: '2026-02-22', status: 'غائب' },
      { attendance_id: 11, student_id: 202411601, course_code: 'CS301', lecture_date: '2026-03-01', status: 'حاضر' },
      { attendance_id: 12, student_id: 202411601, course_code: 'CS301', lecture_date: '2026-03-08', status: 'غائب' }
    ],

    // 7. جدول رصد الدرجات (grade)
    grades: [
      { grade_id: 1, student_id: 202411586, course_code: 'CS301', academic_year: '2026/2027', coursework: 19.5, midterm: 19.0, final_exam: 56.5, total: 95.0, letter_grade: 'A', grade_points: 4.0 },
      { grade_id: 2, student_id: 202411586, course_code: 'CS302', academic_year: '2026/2027', coursework: 19.0, midterm: 18.5, final_exam: 55.0, total: 92.5, letter_grade: 'A', grade_points: 4.0 },
      { grade_id: 3, student_id: 202411586, course_code: 'CS303', academic_year: '2026/2027', coursework: 18.0, midterm: 18.0, final_exam: 52.0, total: 88.0, letter_grade: 'B', grade_points: 3.0 },
      { grade_id: 4, student_id: 202411531, course_code: 'CS301', academic_year: '2026/2027', coursework: 19.0, midterm: 19.0, final_exam: 55.0, total: 93.0, letter_grade: 'A', grade_points: 4.0 },
      { grade_id: 5, student_id: 202411531, course_code: 'CS302', academic_year: '2026/2027', coursework: 18.5, midterm: 18.0, final_exam: 53.5, total: 90.0, letter_grade: 'A', grade_points: 4.0 },
      { grade_id: 6, student_id: 202411601, course_code: 'CS301', academic_year: '2026/2027', coursework: 14.0, midterm: 13.0, final_exam: 38.0, total: 65.0, letter_grade: 'D', grade_points: 1.0 }
    ],

    // 8. جدول المصروفات والرسوم (fee)
    fees: [
      { fee_id: 1, student_id: 202411586, academic_year: '2026/2027', semester: 2, amount_due: 8500.0, due_date: '2026-03-30', status: 'مسدد' },
      { fee_id: 2, student_id: 202411531, academic_year: '2026/2027', semester: 2, amount_due: 8500.0, due_date: '2026-03-30', status: 'مسدد جزئيًا' },
      { fee_id: 3, student_id: 202411601, academic_year: '2026/2027', semester: 2, amount_due: 8500.0, due_date: '2026-02-28', status: 'غير مسدد' },
      { fee_id: 4, student_id: 202411602, academic_year: '2026/2027', semester: 2, amount_due: 8500.0, due_date: '2026-03-30', status: 'غير مسدد' }
    ],

    // 9. جدول المدفوعات والإيصالات (payment)
    payments: [
      { payment_id: 1, fee_id: 1, amount: 8500.0, payment_date: '2026-02-12', method: 'نقدي (خزينة)', receipt_no: 'REC-2026-00101', received_by: 3 },
      { payment_id: 2, fee_id: 2, amount: 5000.0, payment_date: '2026-02-14', method: 'فيزا / بطاقة', receipt_no: 'REC-2026-00102', received_by: 3 }
    ],

    // 10. جدول طلبات المستندات والشهادات (document_request)
    document_requests: [
      { request_id: 1, student_id: 202411586, doc_type: 'شهادة قيد رسمية', request_date: '2026-02-20', status: 'تم الإصدار', issue_date: '2026-02-21', issued_by: 2, notes: 'معتمد ومختوم بختم شعار المعهد' },
      { request_id: 2, student_id: 202411531, doc_type: 'بيان درجات معتمد', request_date: '2026-03-02', status: 'قيد المراجعة', issue_date: null, issued_by: null, notes: 'بانتظار استكمال باقي المصروفات' }
    ],

    // 11. جدول المستخدمين (users)
    users: [
      { user_id: 1, username: 'admin', role: 'Admin', student_id: null, instructor_id: null, name: 'مدير النظام المركزي' },
      { user_id: 2, username: 'staff', role: 'Staff', student_id: null, instructor_id: null, name: 'أ/ إيمان صبري (شئون الطلاب)' },
      { user_id: 3, username: 'finance', role: 'Finance', student_id: null, instructor_id: null, name: 'أ/ طارق السيد (الخزينة)' },
      { user_id: 4, username: 'dr_farouk', role: 'Instructor', student_id: null, instructor_id: 1, name: 'أ.د / فاروق عبد العزيز' },
      { user_id: 5, username: 'dr_amal', role: 'Instructor', student_id: null, instructor_id: 2, name: 'د/ أمل سمير' },
      { user_id: 6, username: '202411586', role: 'Student', student_id: 202411586, instructor_id: null, name: 'رغدة ابراهيم عبد الخالق' },
      { user_id: 7, username: '202411531', role: 'Student', student_id: 202411531, instructor_id: null, name: 'كارولين عاطف عطاالله' },
      { user_id: 8, username: '202411601', role: 'Student', student_id: 202411601, instructor_id: null, name: 'أحمد محمد الشناوي' }
    ]
  };
}

let db = getInitialDatabase();

// =============================================================================
// دوال الحسابات والقواعد الأكاديمية الصارمة (Business Logic Functions)
// =============================================================================

function calculateGradeDetails(coursework, midterm, finalExam) {
  const total = Number((coursework + midterm + finalExam).toFixed(2));
  let letter = 'F';
  let points = 0.0;
  if (total >= 90) { letter = 'A'; points = 4.0; }
  else if (total >= 80) { letter = 'B'; points = 3.0; }
  else if (total >= 70) { letter = 'C'; points = 2.0; }
  else if (total >= 60) { letter = 'D'; points = 1.0; }
  else { letter = 'F'; points = 0.0; }
  return { total, letter, points };
}

function updateStudentGPA(studentId) {
  const studentGrades = db.grades.filter(g => g.student_id === studentId);
  if (studentGrades.length === 0) return;

  let totalWeighted = 0;
  let totalHours = 0;
  studentGrades.forEach(g => {
    const course = db.courses.find(c => c.course_code === g.course_code);
    const hours = course ? course.credit_hours : 3;
    totalWeighted += g.grade_points * hours;
    totalHours += hours;
  });

  const student = db.students.find(s => s.student_id === studentId);
  if (student && totalHours > 0) {
    student.gpa = Number((totalWeighted / totalHours).toFixed(2));
  }
}

function hasOverdueFees(studentId) {
  const today = new Date().toISOString().split('T')[0];
  const studentFees = db.fees.filter(f => f.student_id === studentId);
  return studentFees.some(f => f.status !== 'مسدد' && f.due_date < today);
}

// =============================================================================
// واجهات برمجة التطبيقات (API Routes)
// =============================================================================

// استعادة البيانات الأصلية للتجربة في أي وقت
app.post('/api/reset', (req, res) => {
  db = getInitialDatabase();
  res.json({ success: true, message: 'تمت استعادة كافة البيانات الافتراضية بنجاح!' });
});

// جلب الحالة الكاملة للنظام مع إحصائيات معالجة
app.get('/api/state', (req, res) => {
  const enrichedStudents = db.students.map(s => {
    const studentEnrollments = db.enrollments.filter(e => e.student_id === s.student_id);
    const studentAttendances = db.attendances.filter(a => a.student_id === s.student_id);
    const studentFees = db.fees.filter(f => f.student_id === s.student_id);

    const totalLectures = studentAttendances.length;
    const absences = studentAttendances.filter(a => a.status === 'غائب').length;
    const absenceRate = totalLectures > 0 ? Number(((absences / totalLectures) * 100).toFixed(1)) : 0;
    const hasAbsenceWarning = absenceRate > 25.0;

    const totalDue = studentFees.reduce((acc, f) => acc + f.amount_due, 0);
    const studentPayments = db.payments.filter(p => studentFees.some(f => f.fee_id === p.fee_id));
    const totalPaid = studentPayments.reduce((acc, p) => acc + p.amount, 0);
    const remainingFee = totalDue - totalPaid;
    const isOverdue = hasOverdueFees(s.student_id);

    return {
      ...s,
      registeredCoursesCount: studentEnrollments.length,
      absenceRate,
      hasAbsenceWarning,
      totalDue,
      totalPaid,
      remainingFee,
      isOverdue
    };
  });

  res.json({
    students: enrichedStudents,
    instructors: db.instructors,
    courses: db.courses,
    schedules: db.schedules,
    enrollments: db.enrollments,
    attendances: db.attendances,
    grades: db.grades,
    fees: db.fees,
    payments: db.payments,
    document_requests: db.document_requests,
    users: db.users
  });
});

// خوارزمية 1.1: تسجيل الدخول
app.post('/api/login', (req, res) => {
  const { username, role } = req.body;
  let user;
  if (role) {
    user = db.users.find(u => u.role === role);
  } else {
    user = db.users.find(u => u.username === username);
  }
  if (!user) {
    return res.status(401).json({ success: false, message: 'اسم المستخدم أو الدور غير صالح' });
  }
  res.json({ success: true, user });
});

// خوارزمية 1.2: قيد طالب جديد مع فحص 14 رقماً للرقم القومي
app.post('/api/students', (req, res) => {
  const { national_id, full_name, birth_date, gender, phone, email, address, level, group_no } = req.body;

  if (!national_id || national_id.length !== 14 || !/^\d+$/.test(national_id)) {
    return res.status(400).json({ success: false, message: 'الرقم القومي غير صالح؛ يجب أن يتكون من 14 رقماً بالضبط طبقاً للائحة.' });
  }

  if (db.students.some(s => s.national_id === national_id)) {
    return res.status(400).json({ success: false, message: 'عفواً، هذا الرقم القومي مسجل بالفعل لطالب آخر بالمعهد.' });
  }

  const newStudentId = 202411600 + db.students.length + 1;
  const newStudent = {
    student_id: newStudentId,
    national_id,
    full_name,
    birth_date,
    gender: gender || 'M',
    phone: phone || '',
    email: email || `${newStudentId}@student.sams.edu.eg`,
    address: address || '',
    level: parseInt(level) || 3,
    group_no: parseInt(group_no) || 3,
    gpa: 0.00,
    status: 'Active',
    enroll_date: new Date().toISOString().split('T')[0]
  };

  db.students.push(newStudent);

  // إنشاء حساب مستخدم أوتوماتيكياً
  db.users.push({
    user_id: db.users.length + 1,
    username: String(newStudentId),
    role: 'Student',
    student_id: newStudentId,
    instructor_id: null,
    name: full_name
  });

  // إضافة مطالبة المصروفات
  db.fees.push({
    fee_id: db.fees.length + 1,
    student_id: newStudentId,
    academic_year: '2026/2027',
    semester: 2,
    amount_due: 8500.0,
    due_date: '2026-03-30',
    status: 'غير مسدد'
  });

  res.json({ success: true, message: `تم قيد الطالب بنجاح! كود الطالب الجامعي هو: ${newStudentId}`, student: newStudent });
});

// خوارزمية 1.3: تسجيل المقررات وفحص سقف الـ 18 ساعة والمانع المالي
app.post('/api/enrollments', (req, res) => {
  const { student_id, course_code } = req.body;
  const student = db.students.find(s => s.student_id === Number(student_id));
  if (!student) return res.status(404).json({ success: false, message: 'الطالب غير موجود.' });

  if (hasOverdueFees(student.student_id)) {
    return res.status(400).json({ success: false, message: 'عفواً، تم حجب خدمة تسجيل المقررات لوجود متأخرات مالية مستحقة. يرجى سداد المصروفات بالخزينة أولاً.' });
  }

  const alreadyEnrolled = db.enrollments.some(e => e.student_id === student.student_id && e.course_code === course_code && e.semester === 2);
  if (alreadyEnrolled) {
    return res.status(400).json({ success: false, message: 'الطالب مسجل في هذا المقرر بالفعل.' });
  }

  const registeredCourseCodes = db.enrollments.filter(e => e.student_id === student.student_id && e.semester === 2).map(e => e.course_code);
  const currentHours = registeredCourseCodes.reduce((acc, code) => {
    const c = db.courses.find(cr => cr.course_code === code);
    return acc + (c ? c.credit_hours : 3);
  }, 0);

  const targetCourse = db.courses.find(c => c.course_code === course_code);
  const courseHours = targetCourse ? targetCourse.credit_hours : 3;

  if (currentHours + courseHours > 18) {
    return res.status(400).json({
      success: false,
      message: `تجاوز الحد الأقصى للساعات المعتمدة! الطالب مسجل في ${currentHours} ساعة، والحد الأقصى للتسجيل هو 18 ساعة معتمدة.`
    });
  }

  const newEnrollment = {
    enrollment_id: db.enrollments.length + 1,
    student_id: student.student_id,
    course_code,
    academic_year: '2026/2027',
    semester: 2,
    status: 'Registered',
    enroll_date: new Date().toISOString().split('T')[0]
  };

  db.enrollments.push(newEnrollment);
  res.json({ success: true, message: `تم تسجيل مقرر ${targetCourse.course_name} (${course_code}) بنجاح!`, enrollment: newEnrollment });
});

// خوارزمية 1.4: تسجيل الحضور والغياب وفحص إنذار الـ 25%
app.post('/api/attendance', (req, res) => {
  const { student_id, course_code, lecture_date, status } = req.body;
  const newAttendance = {
    attendance_id: db.attendances.length + 1,
    student_id: Number(student_id),
    course_code,
    lecture_date: lecture_date || new Date().toISOString().split('T')[0],
    status
  };

  db.attendances.push(newAttendance);

  const courseRecords = db.attendances.filter(a => a.student_id === Number(student_id) && a.course_code === course_code);
  const total = courseRecords.length;
  const absences = courseRecords.filter(a => a.status === 'غائب').length;
  const absenceRate = Number(((absences / total) * 100).toFixed(1));

  let warningIssued = false;
  if (absenceRate > 25.0) {
    warningIssued = true;
  }

  res.json({
    success: true,
    message: 'تم تسجيل الحضور بنجاح!',
    absenceRate,
    warningIssued,
    warningMessage: warningIssued ? `⚠️ تنبيه رسمي: تجاوز الطالب نسبة الغياب المسموحة (${absenceRate}% > 25%) وتم إدراج إنذار بحقه.` : null
  });
});

// خوارزمية 1.5: رصد الدرجات وحساب التقدير والنقاط وGPA
app.post('/api/grades', (req, res) => {
  const { student_id, course_code, coursework, midterm, final_exam } = req.body;
  const cw = Number(coursework);
  const mt = Number(midterm);
  const fn = Number(final_exam);

  if (cw < 0 || cw > 20) return res.status(400).json({ success: false, message: 'درجة أعمال السنة يجب أن تكون بين 0 و 20.' });
  if (mt < 0 || mt > 20) return res.status(400).json({ success: false, message: 'درجة الميدتيرم يجب أن تكون بين 0 و 20.' });
  if (fn < 0 || fn > 60) return res.status(400).json({ success: false, message: 'درجة الامتحان النهائي يجب أن تكون بين 0 و 60.' });

  const { total, letter, points } = calculateGradeDetails(cw, mt, fn);

  const existingIndex = db.grades.findIndex(g => g.student_id === Number(student_id) && g.course_code === course_code);
  if (existingIndex >= 0) {
    db.grades[existingIndex] = {
      ...db.grades[existingIndex],
      coursework: cw,
      midterm: mt,
      final_exam: fn,
      total,
      letter_grade: letter,
      grade_points: points
    };
  } else {
    db.grades.push({
      grade_id: db.grades.length + 1,
      student_id: Number(student_id),
      course_code,
      academic_year: '2026/2027',
      coursework: cw,
      midterm: mt,
      final_exam: fn,
      total,
      letter_grade: letter,
      grade_points: points
    });
  }

  updateStudentGPA(Number(student_id));
  const student = db.students.find(s => s.student_id === Number(student_id));

  res.json({
    success: true,
    message: `تم رصد الدرجات بنجاح! المجموع: ${total}/100، التقدير: [${letter}]، النقاط: ${points}، والمعدل التراكمي: ${student ? student.gpa : 0.00}`,
    grade: { total, letter_grade: letter, grade_points: points, newGpa: student ? student.gpa : 0.00 }
  });
});

// خوارزمية 1.6: سداد المصروفات وإصدار الإيصال الرسمي
app.post('/api/payments', (req, res) => {
  const { fee_id, amount, method, received_by } = req.body;
  const fee = db.fees.find(f => f.fee_id === Number(fee_id));
  if (!fee) return res.status(404).json({ success: false, message: 'المطالبة المالية غير موجودة.' });

  const existingPayments = db.payments.filter(p => p.fee_id === fee.fee_id);
  const alreadyPaid = existingPayments.reduce((acc, p) => acc + p.amount, 0);
  const remaining = fee.amount_due - alreadyPaid;

  const payAmount = Number(amount);
  if (payAmount <= 0 || payAmount > remaining) {
    return res.status(400).json({ success: false, message: `المبلغ غير صالح، المبلغ المتبقي للسداد هو: ${remaining} ج.م.` });
  }

  const receiptNo = `REC-2026-${String(100 + db.payments.length + 1).padStart(5, '0')}`;
  const payment = {
    payment_id: db.payments.length + 1,
    fee_id: fee.fee_id,
    amount: payAmount,
    payment_date: new Date().toISOString().split('T')[0],
    method: method || 'نقدي (خزينة)',
    receipt_no: receiptNo,
    received_by: received_by || 3
  };

  db.payments.push(payment);

  if (alreadyPaid + payAmount >= fee.amount_due) {
    fee.status = 'مسدد';
  } else {
    fee.status = 'مسدد جزئيًا';
  }

  res.json({
    success: true,
    message: `تم السداد بنجاح! صدر الإيصال الرسمي برقم: ${receiptNo}`,
    payment,
    newFeeStatus: fee.status,
    remainingBalance: remaining - payAmount
  });
});

// خوارزمية 1.7: طلب المستندات والشهادات
app.post('/api/documents/request', (req, res) => {
  const { student_id, doc_type } = req.body;
  const sid = Number(student_id);

  if (hasOverdueFees(sid)) {
    return res.status(400).json({ success: false, message: 'عفواً، لا يمكن استخراج مستندات رسمية لوجود متأخرات مالية على الطالب طبقاً للائحة.' });
  }

  const newRequest = {
    request_id: db.document_requests.length + 1,
    student_id: sid,
    doc_type,
    request_date: new Date().toISOString().split('T')[0],
    status: 'قيد المراجعة',
    issue_date: null,
    issued_by: null,
    notes: 'الطلب قيد مراجعة موظف شئون الطلاب'
  };

  db.document_requests.push(newRequest);
  res.json({ success: true, message: 'تم تقديم طلب المستند بنجاح وهو قيد المراجعة والاعتماد.', request: newRequest });
});

// اعتماد أو رفض المستند (Staff)
app.post('/api/documents/action', (req, res) => {
  const { request_id, action, staff_user_id, notes } = req.body;
  const reqItem = db.document_requests.find(r => r.request_id === Number(request_id));
  if (!reqItem) return res.status(404).json({ success: false, message: 'طلب المستند غير موجود.' });

  if (action === 'approve') {
    reqItem.status = 'تم الإصدار';
    reqItem.issue_date = new Date().toISOString().split('T')[0];
    reqItem.issued_by = staff_user_id || 2;
    reqItem.notes = notes || 'معتمد ومختوم بختم شعار المعهد المعتمد';
  } else {
    reqItem.status = 'مرفوض';
    reqItem.issued_by = staff_user_id || 2;
    reqItem.notes = notes || 'تم الرفض لعدم استيفاء الشروط';
  }

  res.json({ success: true, message: `تم تحديث حالة الطلب إلى [${reqItem.status}]`, request: reqItem });
});

// تصدير التطبيق لدعم Vercel Serverless
module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`SAMS API server running on port ${PORT}`);
  });
}
