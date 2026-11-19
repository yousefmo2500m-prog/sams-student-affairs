-- =============================================================================
-- نظام إدارة شئون الطلاب (Student Affairs Management System - SAMS)
-- المعهد العالي للحاسبات ونظم المعلومات الإدارية - التجمع الأول
-- إشراف: أ.د / فاروق عبد العزيز | مادة: تحليل وتصميم نظم المعلومات
-- إعداد: كارولين عاطف عطاالله (202411531) & رغدة ابراهيم عبد الخالق (202411586)
-- كود إنشاء قاعدة البيانات لـ Supabase (PostgreSQL) - الجداول الـ 11 + البيانات
-- =============================================================================

-- حذف الجداول بالترتيب العكسي لو كانت موجودة مسبقاً
DROP TABLE IF EXISTS payment CASCADE;
DROP TABLE IF EXISTS fee CASCADE;
DROP TABLE IF EXISTS document_request CASCADE;
DROP TABLE IF EXISTS grade CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS schedule CASCADE;
DROP TABLE IF EXISTS enrollment CASCADE;
DROP TABLE IF EXISTS course CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS instructor CASCADE;
DROP TABLE IF EXISTS student CASCADE;

-- -----------------------------------------------------------------------------
-- 1. جدول الطلاب (student)
-- -----------------------------------------------------------------------------
CREATE TABLE student (
  student_id BIGINT PRIMARY KEY,
  national_id VARCHAR(14) NOT NULL UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  birth_date DATE NOT NULL,
  gender CHAR(1) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(100) UNIQUE,
  address VARCHAR(200),
  level SMALLINT NOT NULL DEFAULT 3,
  group_no SMALLINT DEFAULT 1,
  gpa DECIMAL(3,2) DEFAULT 0.00,
  status VARCHAR(20) DEFAULT 'Active',
  enroll_date DATE NOT NULL DEFAULT CURRENT_DATE,
  CONSTRAINT chk_national_id_len CHECK (CHAR_LENGTH(national_id) = 14),
  CONSTRAINT chk_student_level CHECK (level BETWEEN 1 AND 4)
);

-- -----------------------------------------------------------------------------
-- 2. جدول أعضاء هيئة التدريس (instructor)
-- -----------------------------------------------------------------------------
CREATE TABLE instructor (
  instructor_id SERIAL PRIMARY KEY,
  national_id VARCHAR(14) NOT NULL UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(100) UNIQUE,
  department VARCHAR(60) NOT NULL
);

-- -----------------------------------------------------------------------------
-- 3. جدول المقررات الدراسية (course)
-- -----------------------------------------------------------------------------
CREATE TABLE course (
  course_code VARCHAR(10) PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  credit_hours SMALLINT NOT NULL DEFAULT 3,
  semester SMALLINT NOT NULL DEFAULT 2,
  level SMALLINT NOT NULL DEFAULT 3,
  instructor_id INT REFERENCES instructor(instructor_id) ON DELETE SET NULL,
  CONSTRAINT chk_course_semester CHECK (semester IN (1, 2)),
  CONSTRAINT chk_credit_hours CHECK (credit_hours > 0)
);

-- -----------------------------------------------------------------------------
-- 4. جدول تسجيل المقررات (enrollment)
-- -----------------------------------------------------------------------------
CREATE TABLE enrollment (
  enrollment_id SERIAL PRIMARY KEY,
  student_id BIGINT NOT NULL REFERENCES student(student_id) ON DELETE CASCADE,
  course_code VARCHAR(10) NOT NULL REFERENCES course(course_code) ON DELETE RESTRICT,
  academic_year VARCHAR(9) NOT NULL,
  semester SMALLINT NOT NULL,
  status VARCHAR(20) DEFAULT 'Registered',
  enroll_date DATE NOT NULL DEFAULT CURRENT_DATE,
  CONSTRAINT uk_student_course_year UNIQUE (student_id, course_code, academic_year, semester)
);

-- -----------------------------------------------------------------------------
-- 5. جدول الجداول الدراسية (schedule)
-- -----------------------------------------------------------------------------
CREATE TABLE schedule (
  schedule_id SERIAL PRIMARY KEY,
  course_code VARCHAR(10) NOT NULL REFERENCES course(course_code) ON DELETE CASCADE,
  group_no SMALLINT NOT NULL,
  day_of_week VARCHAR(15) NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  room VARCHAR(50)
);

-- -----------------------------------------------------------------------------
-- 6. جدول الحضور والغياب (attendance)
-- -----------------------------------------------------------------------------
CREATE TABLE attendance (
  attendance_id SERIAL PRIMARY KEY,
  student_id BIGINT NOT NULL REFERENCES student(student_id) ON DELETE CASCADE,
  course_code VARCHAR(10) NOT NULL REFERENCES course(course_code) ON DELETE RESTRICT,
  lecture_date DATE NOT NULL,
  status VARCHAR(15) NOT NULL,
  CONSTRAINT chk_att_status CHECK (status IN ('حاضر', 'غائب', 'بعذر'))
);

-- -----------------------------------------------------------------------------
-- 7. جدول رصد الدرجات وحساب المعدل (grade)
-- -----------------------------------------------------------------------------
CREATE TABLE grade (
  grade_id SERIAL PRIMARY KEY,
  student_id BIGINT NOT NULL REFERENCES student(student_id) ON DELETE CASCADE,
  course_code VARCHAR(10) NOT NULL REFERENCES course(course_code) ON DELETE RESTRICT,
  academic_year VARCHAR(9) NOT NULL,
  coursework DECIMAL(5,2) DEFAULT 0.00,
  midterm DECIMAL(5,2) DEFAULT 0.00,
  final_exam DECIMAL(5,2) DEFAULT 0.00,
  total DECIMAL(5,2) GENERATED ALWAYS AS (coursework + midterm + final_exam) STORED,
  letter_grade CHAR(2),
  grade_points DECIMAL(3,2),
  CONSTRAINT uk_student_course_grade UNIQUE (student_id, course_code, academic_year),
  CONSTRAINT chk_coursework CHECK (coursework BETWEEN 0 AND 20),
  CONSTRAINT chk_midterm CHECK (midterm BETWEEN 0 AND 20),
  CONSTRAINT chk_final CHECK (final_exam BETWEEN 0 AND 60)
);

-- -----------------------------------------------------------------------------
-- 8. جدول المصروفات والرسوم (fee)
-- -----------------------------------------------------------------------------
CREATE TABLE fee (
  fee_id SERIAL PRIMARY KEY,
  student_id BIGINT NOT NULL REFERENCES student(student_id) ON DELETE RESTRICT,
  academic_year VARCHAR(9) NOT NULL,
  semester SMALLINT NOT NULL,
  amount_due DECIMAL(10,2) NOT NULL,
  due_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'Unpaid'
);

-- -----------------------------------------------------------------------------
-- 9. جدول المستخدمين (users)
-- -----------------------------------------------------------------------------
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  student_id BIGINT UNIQUE REFERENCES student(student_id) ON DELETE CASCADE,
  instructor_id INT UNIQUE REFERENCES instructor(instructor_id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP
);

-- -----------------------------------------------------------------------------
-- 10. جدول المدفوعات وتوريد المصروفات (payment)
-- -----------------------------------------------------------------------------
CREATE TABLE payment (
  payment_id SERIAL PRIMARY KEY,
  fee_id INT NOT NULL REFERENCES fee(fee_id) ON DELETE RESTRICT,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE NOT NULL DEFAULT CURRENT_DATE,
  method VARCHAR(30) NOT NULL,
  receipt_no VARCHAR(40) NOT NULL UNIQUE,
  received_by INT REFERENCES users(user_id) ON DELETE SET NULL,
  CONSTRAINT chk_payment_amount CHECK (amount > 0)
);

-- -----------------------------------------------------------------------------
-- 11. جدول طلبات المستندات الرسمية (document_request)
-- -----------------------------------------------------------------------------
CREATE TABLE document_request (
  request_id SERIAL PRIMARY KEY,
  student_id BIGINT NOT NULL REFERENCES student(student_id) ON DELETE CASCADE,
  doc_type VARCHAR(50) NOT NULL,
  request_date DATE NOT NULL DEFAULT CURRENT_DATE,
  status VARCHAR(25) DEFAULT 'قيد المراجعة',
  issue_date DATE,
  issued_by INT REFERENCES users(user_id) ON DELETE SET NULL,
  notes TEXT
);

-- =============================================================================
-- البيانات التجريبية الأولية (Initial Seed Data)
-- =============================================================================

-- أعضاء هيئة التدريس
INSERT INTO instructor (instructor_id, national_id, full_name, phone, email, department) VALUES
(1, '27005120101234', 'أ.د / فاروق عبد العزيز', '01001234567', 'farouk@sams-institute.edu.eg', 'نظم المعلومات الإدارية'),
(2, '27509180104567', 'د/ أمل سمير إبراهيم', '01123456789', 'amal.samir@sams-institute.edu.eg', 'علوم الحاسب'),
(3, '28003150107890', 'د/ هاني مصطفى كمال', '01234567890', 'hany.kamal@sams-institute.edu.eg', 'نظم المعلومات الإدارية');

-- المقررات الدراسية
INSERT INTO course (course_code, course_name, credit_hours, semester, level, instructor_id) VALUES
('CS301', 'تحليل وتصميم نظم المعلومات', 3, 2, 3, 1),
('CS302', 'البرمجة كائنية التوجه (Java OOP)', 3, 2, 3, 2),
('CS303', 'نظم إدارة قواعد البيانات (DBMS)', 3, 2, 3, 3),
('CS304', 'شبكات الحاسب وأمن المعلومات', 3, 2, 3, 2),
('IS305', 'نظم دعم اتخاذ القرار (DSS)', 3, 2, 3, 1),
('IS306', 'أخلاقيات وتشريعات تكنولوجيا المعلومات', 3, 2, 3, 3);

-- الطلاب
INSERT INTO student (student_id, national_id, full_name, birth_date, gender, phone, email, address, level, group_no, gpa, status, enroll_date) VALUES
(202411586, '30304200109876', 'رغدة ابراهيم عبد الخالق', '2003-04-20', 'F', '01019876543', 'ragda.ibrahim@student.sams.edu.eg', 'القاهرة - التجمع الأول', 3, 3, 3.92, 'Active', '2024-09-15'),
(202411531, '30310150102548', 'كارولين عاطف عطاالله', '2003-10-15', 'F', '01289123456', 'caroline.atef@student.sams.edu.eg', 'القاهرة - مصر الجديدة', 3, 3, 3.85, 'Active', '2024-09-15'),
(202411601, '30308110103456', 'أحمد محمد الشناوي', '2003-08-11', 'M', '01155667788', 'ahmed.shenawy@student.sams.edu.eg', 'مدينة نصر - الحي السابع', 3, 3, 2.20, 'Active', '2024-09-15'),
(202411602, '30312050104321', 'سارة محمود الشرقاوي', '2003-12-05', 'F', '01599887766', 'sara.sharkawy@student.sams.edu.eg', 'المعادي - دجلة', 3, 3, 3.40, 'Active', '2024-09-15');

-- حسابات المستخدمين
INSERT INTO users (user_id, username, password_hash, role, student_id, instructor_id, is_active, last_login) VALUES
(1, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Admin', NULL, NULL, TRUE, NOW()),
(2, 'staff_eman', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Staff', NULL, NULL, TRUE, NOW()),
(3, 'finance_tarek', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Finance', NULL, NULL, TRUE, NOW()),
(4, 'dr_farouk', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Instructor', NULL, 1, TRUE, NOW()),
(5, 'dr_amal', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Instructor', NULL, 2, TRUE, NOW()),
(6, '202411586', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Student', 202411586, NULL, TRUE, NOW()),
(7, '202411531', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Student', 202411531, NULL, TRUE, NOW()),
(8, '202411601', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Student', 202411601, NULL, TRUE, NOW());

-- الجداول الدراسية
INSERT INTO schedule (schedule_id, course_code, group_no, day_of_week, start_time, end_time, room) VALUES
(1, 'CS301', 3, 'الأحد', '09:00:00', '11:00:00', 'مدرج 4B (أ.د / فاروق)'),
(2, 'CS301', 3, 'الأحد', '11:15:00', '13:15:00', 'معمل النظم 2'),
(3, 'CS302', 3, 'الاثنين', '10:00:00', '12:00:00', 'مدرج 2A (د/ أمل)'),
(4, 'CS302', 3, 'الاثنين', '12:15:00', '14:15:00', 'معمل جافا 1'),
(5, 'CS303', 3, 'الثلاثاء', '09:00:00', '11:00:00', 'مدرج 3C (د/ هاني)'),
(6, 'CS304', 3, 'الأربعاء', '11:00:00', '13:00:00', 'مدرج 1A');

-- تسجيل المقررات
INSERT INTO enrollment (enrollment_id, student_id, course_code, academic_year, semester, status, enroll_date) VALUES
(1, 202411586, 'CS301', '2026/2027', 2, 'Registered', '2026-02-10'),
(2, 202411586, 'CS302', '2026/2027', 2, 'Registered', '2026-02-10'),
(3, 202411586, 'CS303', '2026/2027', 2, 'Registered', '2026-02-10'),
(4, 202411586, 'CS304', '2026/2027', 2, 'Registered', '2026-02-10'),
(5, 202411586, 'IS305', '2026/2027', 2, 'Registered', '2026-02-10'),
(6, 202411531, 'CS301', '2026/2027', 2, 'Registered', '2026-02-10'),
(7, 202411531, 'CS302', '2026/2027', 2, 'Registered', '2026-02-10'),
(8, 202411531, 'CS303', '2026/2027', 2, 'Registered', '2026-02-10'),
(9, 202411601, 'CS301', '2026/2027', 2, 'Registered', '2026-02-11'),
(10, 202411602, 'CS301', '2026/2027', 2, 'Registered', '2026-02-11');

-- سجلات الحضور والغياب
INSERT INTO attendance (attendance_id, student_id, course_code, lecture_date, status) VALUES
(1, 202411586, 'CS301', '2026-02-15', 'حاضر'),
(2, 202411586, 'CS301', '2026-02-22', 'حاضر'),
(3, 202411586, 'CS301', '2026-03-01', 'حاضر'),
(4, 202411586, 'CS301', '2026-03-08', 'حاضر'),
(5, 202411531, 'CS301', '2026-02-15', 'حاضر'),
(6, 202411531, 'CS301', '2026-02-22', 'حاضر'),
(7, 202411531, 'CS301', '2026-03-01', 'غائب'),
(8, 202411531, 'CS301', '2026-03-08', 'حاضر'),
(9, 202411601, 'CS301', '2026-02-15', 'غائب'),
(10, 202411601, 'CS301', '2026-02-22', 'غائب'),
(11, 202411601, 'CS301', '2026-03-01', 'حاضر'),
(12, 202411601, 'CS301', '2026-03-08', 'غائب');

-- الدرجات والنتائج
INSERT INTO grade (grade_id, student_id, course_code, academic_year, coursework, midterm, final_exam, letter_grade, grade_points) VALUES
(1, 202411586, 'CS301', '2026/2027', 19.5, 19.0, 56.5, 'A', 4.00),
(2, 202411586, 'CS302', '2026/2027', 19.0, 18.5, 55.0, 'A', 4.00),
(3, 202411586, 'CS303', '2026/2027', 18.0, 18.0, 52.0, 'B', 3.00),
(4, 202411531, 'CS301', '2026/2027', 19.0, 19.0, 55.0, 'A', 4.00),
(5, 202411531, 'CS302', '2026/2027', 18.5, 18.0, 53.5, 'A', 4.00),
(6, 202411601, 'CS301', '2026/2027', 14.0, 13.0, 38.0, 'D', 1.00);

-- الرسوم والمطالبات المالية
INSERT INTO fee (fee_id, student_id, academic_year, semester, amount_due, due_date, status) VALUES
(1, 202411586, '2026/2027', 2, 8500.00, '2026-03-30', 'مسدد'),
(2, 202411531, '2026/2027', 2, 8500.00, '2026-03-30', 'مسدد جزئيًا'),
(3, 202411601, '2026/2027', 2, 8500.00, '2026-02-28', 'غير مسدد'),
(4, 202411602, '2026/2027', 2, 8500.00, '2026-03-30', 'غير مسدد');

-- عمليات السداد
INSERT INTO payment (payment_id, fee_id, amount, payment_date, method, receipt_no, received_by) VALUES
(1, 1, 8500.00, '2026-02-12', 'نقدي (خزينة)', 'REC-2026-00101', 3),
(2, 2, 5000.00, '2026-02-14', 'فيزا / بطاقة', 'REC-2026-00102', 3);

-- طلبات الشهادات الرسمية
INSERT INTO document_request (request_id, student_id, doc_type, request_date, status, issue_date, issued_by, notes) VALUES
(1, 202411586, 'شهادة قيد رسمية', '2026-02-20', 'تم الإصدار', '2026-02-21', 2, 'معتمد ومختوم بختم شعار المعهد المعتمد'),
(2, 202411531, 'بيان درجات معتمد', '2026-03-02', 'قيد المراجعة', NULL, NULL, 'بانتظار استكمال باقي المصروفات المقررة');

-- تفعيل صلاحيات الاستعلام للـ Public Role في Supabase
ALTER TABLE student ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructor ENABLE ROW LEVEL SECURITY;
ALTER TABLE course ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollment ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE grade ENABLE ROW LEVEL SECURITY;
ALTER TABLE fee ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_request ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public all" ON student FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON instructor FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON course FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON enrollment FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON schedule FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON attendance FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON grade FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON fee FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON payment FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public all" ON document_request FOR ALL USING (true) WITH CHECK (true);
