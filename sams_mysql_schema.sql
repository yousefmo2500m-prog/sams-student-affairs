-- =============================================================================
-- نظام إدارة شئون الطلاب (Student Affairs Management System - SAMS)
-- المعهد العالي للحاسبات ونظم المعلومات الإدارية - التجمع الأول
-- إشراف: د/ فاروق | مادة: تحليل وتصميم نظم المعلومات
-- إعداد الطالبتين: كارولين عاطف عطاالله (202411531) & رغدة ابراهيم عبد الخالق (202411586)
-- ملف قاعدة البيانات الكامل: الجداول + العلاقات + البيانات التجريبية
-- متوافق مع MySQL 8.x / MariaDB
-- =============================================================================

CREATE DATABASE IF NOT EXISTS `sams_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `sams_db`;

-- تعطيل فحص المفاتيح الأجنبية مؤقتًا لإعادة البناء النظيف
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `payment`;
DROP TABLE IF EXISTS `fee`;
DROP TABLE IF EXISTS `document_request`;
DROP TABLE IF EXISTS `grade`;
DROP TABLE IF EXISTS `attendance`;
DROP TABLE IF EXISTS `schedule`;
DROP TABLE IF EXISTS `enrollment`;
DROP TABLE IF EXISTS `course`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `instructor`;
DROP TABLE IF EXISTS `student`;

SET FOREIGN_KEY_CHECKS = 1;

-- -----------------------------------------------------------------------------
-- 1. جدول الطلاب (student)
-- -----------------------------------------------------------------------------
CREATE TABLE `student` (
  `student_id` INT NOT NULL AUTO_INCREMENT COMMENT 'الرقم الجامعي للطالب',
  `national_id` VARCHAR(14) NOT NULL UNIQUE COMMENT 'الرقم القومي (14 رقمًا)',
  `full_name` VARCHAR(100) NOT NULL COMMENT 'الاسم بالكامل رباعي',
  `birth_date` DATE NOT NULL COMMENT 'تاريخ الميلاد',
  `gender` CHAR(1) NOT NULL COMMENT 'النوع: M ذكر / F أنثى',
  `phone` VARCHAR(15) DEFAULT NULL COMMENT 'رقم الهاتف المحمول',
  `email` VARCHAR(100) UNIQUE DEFAULT NULL COMMENT 'البريد الإلكتروني',
  `address` VARCHAR(200) DEFAULT NULL COMMENT 'العنوان السكني بالتفصيل',
  `level` TINYINT NOT NULL COMMENT 'الفرقة الدراسية (1 إلى 4)',
  `group_no` TINYINT DEFAULT 1 COMMENT 'رقم المجموعة الدراسية',
  `gpa` DECIMAL(3,2) DEFAULT 0.00 COMMENT 'المعدل التراكمي من 4.00',
  `status` VARCHAR(15) DEFAULT 'Active' COMMENT 'حالة القيد: مستجد / مقيد / موقوف / خريج',
  `enroll_date` DATE NOT NULL COMMENT 'تاريخ القيد بالمعهد',
  PRIMARY KEY (`student_id`),
  CONSTRAINT `chk_national_id_len` CHECK (CHAR_LENGTH(`national_id`) = 14),
  CONSTRAINT `chk_student_level` CHECK (`level` BETWEEN 1 AND 4)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 2. جدول أعضاء هيئة التدريس (instructor)
-- -----------------------------------------------------------------------------
CREATE TABLE `instructor` (
  `instructor_id` INT NOT NULL AUTO_INCREMENT COMMENT 'كود عضو هيئة التدريس',
  `national_id` VARCHAR(14) NOT NULL UNIQUE COMMENT 'الرقم القومي',
  `full_name` VARCHAR(100) NOT NULL COMMENT 'الاسم بالكامل واللقب العلمي',
  `phone` VARCHAR(15) DEFAULT NULL COMMENT 'رقم الهاتف',
  `email` VARCHAR(100) UNIQUE DEFAULT NULL COMMENT 'البريد الإلكتروني الأكاديمي',
  `department` VARCHAR(60) NOT NULL COMMENT 'القسم العلمي التابع له',
  PRIMARY KEY (`instructor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 3. جدول المقررات الدراسية (course)
-- -----------------------------------------------------------------------------
CREATE TABLE `course` (
  `course_code` VARCHAR(10) NOT NULL COMMENT 'كود المقرر الدراسي مثل CS301',
  `course_name` VARCHAR(100) NOT NULL COMMENT 'اسم المقرر بالعربية',
  `credit_hours` TINYINT NOT NULL COMMENT 'عدد الساعات المعتمدة للمقرر',
  `semester` TINYINT NOT NULL COMMENT 'الفصل الدراسي (1 أو 2)',
  `level` TINYINT NOT NULL COMMENT 'الفرقة الدراسية المستهدفة',
  `instructor_id` INT DEFAULT NULL COMMENT 'أستاذ المادة المسئول',
  PRIMARY KEY (`course_code`),
  CONSTRAINT `fk_course_instructor` FOREIGN KEY (`instructor_id`) 
    REFERENCES `instructor` (`instructor_id`) ON DELETE SET NULL,
  CONSTRAINT `chk_course_semester` CHECK (`semester` IN (1, 2)),
  CONSTRAINT `chk_credit_hours` CHECK (`credit_hours` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 4. جدول تسجيل المقررات (enrollment)
-- -----------------------------------------------------------------------------
CREATE TABLE `enrollment` (
  `enrollment_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم عملية التسجيل',
  `student_id` INT NOT NULL COMMENT 'معرف الطالب',
  `course_code` VARCHAR(10) NOT NULL COMMENT 'كود المقرر',
  `academic_year` VARCHAR(9) NOT NULL COMMENT 'العام الدراسي 2026/2027',
  `semester` TINYINT NOT NULL COMMENT 'الفصل الدراسي',
  `status` VARCHAR(15) DEFAULT 'Registered' COMMENT 'حالة التسجيل: مسجل / محذوف / مكتمل',
  `enroll_date` DATE NOT NULL COMMENT 'تاريخ التسجيل الفعلي',
  PRIMARY KEY (`enrollment_id`),
  UNIQUE KEY `uk_student_course_year` (`student_id`, `course_code`, `academic_year`, `semester`),
  CONSTRAINT `fk_enrollment_student` FOREIGN KEY (`student_id`) 
    REFERENCES `student` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_enrollment_course` FOREIGN KEY (`course_code`) 
    REFERENCES `course` (`course_code`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 5. جدول الجداول الدراسية والمواعيد (schedule)
-- -----------------------------------------------------------------------------
CREATE TABLE `schedule` (
  `schedule_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم سطر الجدول',
  `course_code` VARCHAR(10) NOT NULL COMMENT 'كود المقرر',
  `group_no` TINYINT NOT NULL COMMENT 'رقم المجموعة',
  `day_of_week` VARCHAR(10) NOT NULL COMMENT 'يوم المحاضرة (الأحد، الاثنين...)',
  `start_time` TIME NOT NULL COMMENT 'وقت بداية المحاضرة',
  `end_time` TIME NOT NULL COMMENT 'وقت نهاية المحاضرة',
  `room` VARCHAR(20) DEFAULT NULL COMMENT 'القاعة الدراسية أو المعمل',
  PRIMARY KEY (`schedule_id`),
  CONSTRAINT `fk_schedule_course` FOREIGN KEY (`course_code`) 
    REFERENCES `course` (`course_code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 6. جدول الحضور والغياب (attendance)
-- -----------------------------------------------------------------------------
CREATE TABLE `attendance` (
  `attendance_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم سجل الحضور',
  `student_id` INT NOT NULL COMMENT 'معرف الطالب',
  `course_code` VARCHAR(10) NOT NULL COMMENT 'كود المقرر',
  `lecture_date` DATE NOT NULL COMMENT 'تاريخ المحاضرة',
  `status` VARCHAR(10) NOT NULL COMMENT 'الحالة: حاضر / غائب / بعذر',
  PRIMARY KEY (`attendance_id`),
  CONSTRAINT `fk_attendance_student` FOREIGN KEY (`student_id`) 
    REFERENCES `student` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_attendance_course` FOREIGN KEY (`course_code`) 
    REFERENCES `course` (`course_code`) ON DELETE RESTRICT,
  CONSTRAINT `chk_att_status` CHECK (`status` IN ('حاضر', 'غائب', 'بعذر'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 7. جدول رصد الدرجات (grade)
-- -----------------------------------------------------------------------------
CREATE TABLE `grade` (
  `grade_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم سجل الدرجة',
  `student_id` INT NOT NULL COMMENT 'معرف الطالب',
  `course_code` VARCHAR(10) NOT NULL COMMENT 'كود المقرر',
  `academic_year` VARCHAR(9) NOT NULL COMMENT 'العام الدراسي',
  `coursework` DECIMAL(5,2) DEFAULT 0.00 COMMENT 'أعمال السنة (من 20)',
  `midterm` DECIMAL(5,2) DEFAULT 0.00 COMMENT 'الميدتيرم (من 20)',
  `final_exam` DECIMAL(5,2) DEFAULT 0.00 COMMENT 'الامتحان النهائي (من 60)',
  `total` DECIMAL(5,2) GENERATED ALWAYS AS (`coursework` + `midterm` + `final_exam`) STORED COMMENT 'المجموع الكلي من 100',
  `letter_grade` CHAR(2) DEFAULT NULL COMMENT 'التقدير بالحروف: A, B, C, D, F',
  `grade_points` DECIMAL(3,2) DEFAULT NULL COMMENT 'النقاط من 4.00',
  PRIMARY KEY (`grade_id`),
  UNIQUE KEY `uk_student_course_grade` (`student_id`, `course_code`, `academic_year`),
  CONSTRAINT `fk_grade_student` FOREIGN KEY (`student_id`) 
    REFERENCES `student` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_grade_course` FOREIGN KEY (`course_code`) 
    REFERENCES `course` (`course_code`) ON DELETE RESTRICT,
  CONSTRAINT `chk_coursework` CHECK (`coursework` BETWEEN 0 AND 20),
  CONSTRAINT `chk_midterm` CHECK (`midterm` BETWEEN 0 AND 20),
  CONSTRAINT `chk_final` CHECK (`final_exam` BETWEEN 0 AND 60)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 8. جدول المصروفات والرسوم الدراسية (fee)
-- -----------------------------------------------------------------------------
CREATE TABLE `fee` (
  `fee_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم المطالبة المالية',
  `student_id` INT NOT NULL COMMENT 'معرف الطالب',
  `academic_year` VARCHAR(9) NOT NULL COMMENT 'العام الدراسي',
  `semester` TINYINT NOT NULL COMMENT 'الفصل الدراسي',
  `amount_due` DECIMAL(10,2) NOT NULL COMMENT 'المبلغ المطلوب سداده',
  `due_date` DATE NOT NULL COMMENT 'آخر موعد للسداد',
  `status` VARCHAR(15) DEFAULT 'Unpaid' COMMENT 'حالة السداد: غير مسدد / مسدد جزئيًا / مسدد',
  PRIMARY KEY (`fee_id`),
  CONSTRAINT `fk_fee_student` FOREIGN KEY (`student_id`) 
    REFERENCES `student` (`student_id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 9. جدول المستخدمين (users) - معرف قبل الدفع والطلبات لاستخدامه كـ FK
-- -----------------------------------------------------------------------------
CREATE TABLE `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم المستخدم',
  `username` VARCHAR(50) NOT NULL UNIQUE COMMENT 'اسم المستخدم لتسجيل الدخول',
  `password_hash` VARCHAR(255) NOT NULL COMMENT 'كلمة المرور المشفرة',
  `role` VARCHAR(15) NOT NULL COMMENT 'الدور: Admin, Staff, Instructor, Student, Finance',
  `student_id` INT DEFAULT NULL UNIQUE COMMENT 'ربط الحساب بسجل الطالب إن وجد',
  `instructor_id` INT DEFAULT NULL UNIQUE COMMENT 'ربط الحساب بسجل الدكتور إن وجد',
  `is_active` BOOLEAN DEFAULT TRUE COMMENT 'هل الحساب مفعل ونشط',
  `last_login` DATETIME DEFAULT NULL COMMENT 'تاريخ ووقت آخر تسجيل دخول',
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_users_student` FOREIGN KEY (`student_id`) 
    REFERENCES `student` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_users_instructor` FOREIGN KEY (`instructor_id`) 
    REFERENCES `instructor` (`instructor_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 10. جدول المدفوعات وتوريد المصروفات (payment)
-- -----------------------------------------------------------------------------
CREATE TABLE `payment` (
  `payment_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم عملية السداد',
  `fee_id` INT NOT NULL COMMENT 'رقم المطالبة المالية',
  `amount` DECIMAL(10,2) NOT NULL COMMENT 'المبلغ المسدد فعليًا',
  `payment_date` DATE NOT NULL COMMENT 'تاريخ السداد',
  `method` VARCHAR(20) NOT NULL COMMENT 'طريقة السداد: نقدي / تحويل بنكي / فوري / فيزا',
  `receipt_no` VARCHAR(30) NOT NULL UNIQUE COMMENT 'رقم الإيصال الرسمي الفريد',
  `received_by` INT DEFAULT NULL COMMENT 'الموظف المستلم للمبلغ',
  PRIMARY KEY (`payment_id`),
  CONSTRAINT `fk_payment_fee` FOREIGN KEY (`fee_id`) 
    REFERENCES `fee` (`fee_id`) ON DELETE RESTRICT,
  CONSTRAINT `fk_payment_user` FOREIGN KEY (`received_by`) 
    REFERENCES `users` (`user_id`) ON DELETE SET NULL,
  CONSTRAINT `chk_payment_amount` CHECK (`amount` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 11. جدول طلبات المستندات والشهادات (document_request)
-- -----------------------------------------------------------------------------
CREATE TABLE `document_request` (
  `request_id` INT NOT NULL AUTO_INCREMENT COMMENT 'رقم الطلب',
  `student_id` INT NOT NULL COMMENT 'معرف الطالب مقدم الطلب',
  `doc_type` VARCHAR(50) NOT NULL COMMENT 'نوع المستند: شهادة قيد / بيان درجات / بيان حالة',
  `request_date` DATE NOT NULL COMMENT 'تاريخ تقديم الطلب',
  `status` VARCHAR(20) DEFAULT 'Pending' COMMENT 'الحالة: قيد المراجعة / تم الإصدار / مرفوض',
  `issue_date` DATE DEFAULT NULL COMMENT 'تاريخ الإصدار والاعتماد',
  `issued_by` INT DEFAULT NULL COMMENT 'الموظف المعتمد للإصدار',
  `notes` VARCHAR(255) DEFAULT NULL COMMENT 'ملاحظات الموظف أو سبب الرفض',
  PRIMARY KEY (`request_id`),
  CONSTRAINT `fk_doc_student` FOREIGN KEY (`student_id`) 
    REFERENCES `student` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_doc_user` FOREIGN KEY (`issued_by`) 
    REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =============================================================================
-- البيانات التجريبية الواقعية (Seed Data)
-- مطابقة لبيانات المعهد والدكاترة والطلاب في تقارير المشروع
-- =============================================================================

-- 1. إضافة أعضاء هيئة التدريس
INSERT INTO `instructor` (`instructor_id`, `national_id`, `full_name`, `phone`, `email`, `department`) VALUES
(1, '27005120101234', 'د/ فاروق عبد العزيز', '01001234567', 'farouk@sams-institute.edu.eg', 'نظم المعلومات الإدارية'),
(2, '27509180104567', 'د/ أمل سمير إبراهيم', '01123456789', 'amal.samir@sams-institute.edu.eg', 'علوم الحاسب'),
(3, '28003150107890', 'د/ هاني مصطفى كمال', '01234567890', 'hany.kamal@sams-institute.edu.eg', 'نظم المعلومات الإدارية');

-- 2. إضافة المقررات الدراسية (الفرقة الثالثة - الترم الثاني)
INSERT INTO `course` (`course_code`, `course_name`, `credit_hours`, `semester`, `level`, `instructor_id`) VALUES
('CS301', 'تحليل وتصميم نظم المعلومات', 3, 2, 3, 1),
('CS302', 'البرمجة كائنية التوجه (Java OOP)', 3, 2, 3, 2),
('CS303', 'نظم إدارة قواعد البيانات (DBMS)', 3, 2, 3, 3),
('CS304', 'شبكات الحاسب وأمن المعلومات', 3, 2, 3, 2),
('IS305', 'نظم دعم اتخاذ القرار (DSS)', 3, 2, 3, 1),
('IS306', 'أخلاقيات وتشريعات تكنولوجيا المعلومات', 3, 2, 3, 3);

-- 3. إضافة الطلاب (يشمل رغدة وكارولين كأصحاب المشروع مع طلاب آخرين للتجربة)
INSERT INTO `student` (`student_id`, `national_id`, `full_name`, `birth_date`, `gender`, `phone`, `email`, `address`, `level`, `group_no`, `gpa`, `status`, `enroll_date`) VALUES
(202411531, '30310150102548', 'كارولين عاطف عطاالله', '2003-10-15', 'F', '01289123456', 'caroline.atef@student.sams.edu.eg', 'القاهرة - مصر الجديدة', 3, 3, 3.85, 'Active', '2024-09-15'),
(202411586, '30304200109876', 'رغدة ابراهيم عبد الخالق', '2003-04-20', 'F', '01019876543', 'ragda.ibrahim@student.sams.edu.eg', 'القاهرة - التجمع الأول', 3, 3, 3.92, 'Active', '2024-09-15'),
(202411601, '30308110103456', 'أحمد محمد الشناوي', '2003-08-11', 'M', '01155667788', 'ahmed.shenawy@student.sams.edu.eg', 'مدينة نصر - الحي السابع', 3, 3, 2.75, 'Active', '2024-09-15'),
(202411602, '30312050104321', 'سارة محمود الشرقاوي', '2003-12-05', 'F', '01599887766', 'sara.sharkawy@student.sams.edu.eg', 'المعادي - دجلة', 3, 3, 3.40, 'Active', '2024-09-15');

-- 4. إضافة حسابات المستخدمين (Users)
-- كلمات المرور الافتراضية: 123456 (مشفرة بـ sha256 أو نص تجريبي)
INSERT INTO `users` (`user_id`, `username`, `password_hash`, `role`, `student_id`, `instructor_id`, `is_active`, `last_login`) VALUES
(1, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Admin', NULL, NULL, TRUE, NOW()),
(2, 'staff_eman', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Staff', NULL, NULL, TRUE, NOW()),
(3, 'finance_tarek', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Finance', NULL, NULL, TRUE, NOW()),
(4, 'dr_farouk', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Instructor', NULL, 1, TRUE, NOW()),
(5, 'dr_amal', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Instructor', NULL, 2, TRUE, NOW()),
(6, '202411531', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Student', 202411531, NULL, TRUE, NOW()),
(7, '202411586', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Student', 202411586, NULL, TRUE, NOW()),
(8, '202411601', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Student', 202411601, NULL, TRUE, NOW());

-- 5. الجداول الدراسية (schedule)
INSERT INTO `schedule` (`schedule_id`, `course_code`, `group_no`, `day_of_week`, `start_time`, `end_time`, `room`) VALUES
(1, 'CS301', 3, 'الأحد', '09:00:00', '11:00:00', 'مدرج 4B'),
(2, 'CS301', 3, 'الأحد', '11:15:00', '13:15:00', 'معمل النظم 2'),
(3, 'CS302', 3, 'الاثنين', '10:00:00', '12:00:00', 'مدرج 2A'),
(4, 'CS302', 3, 'الاثنين', '12:15:00', '14:15:00', 'معمل جافا 1'),
(5, 'CS303', 3, 'الثلاثاء', '09:00:00', '11:00:00', 'مدرج 3C'),
(6, 'CS304', 3, 'الأربعاء', '11:00:00', '13:00:00', 'مدرج 1A');

-- 6. تسجيل المقررات للطلاب (enrollment)
INSERT INTO `enrollment` (`enrollment_id`, `student_id`, `course_code`, `academic_year`, `semester`, `status`, `enroll_date`) VALUES
(1, 202411586, 'CS301', '2026/2027', 2, 'Registered', '2026-02-10'),
(2, 202411586, 'CS302', '2026/2027', 2, 'Registered', '2026-02-10'),
(3, 202411586, 'CS303', '2026/2027', 2, 'Registered', '2026-02-10'),
(4, 202411586, 'CS304', '2026/2027', 2, 'Registered', '2026-02-10'),
(5, 202411586, 'IS305', '2026/2027', 2, 'Registered', '2026-02-10'),
(6, 202411531, 'CS301', '2026/2027', 2, 'Registered', '2026-02-10'),
(7, 202411531, 'CS302', '2026/2027', 2, 'Registered', '2026-02-10'),
(8, 202411531, 'CS303', '2026/2027', 2, 'Registered', '2026-02-10'),
(9, 202411601, 'CS301', '2026/2027', 2, 'Registered', '2026-02-11');

-- 7. سجلات الحضور والغياب (attendance)
INSERT INTO `attendance` (`attendance_id`, `student_id`, `course_code`, `lecture_date`, `status`) VALUES
(1, 202411586, 'CS301', '2026-02-15', 'حاضر'),
(2, 202411586, 'CS301', '2026-02-22', 'حاضر'),
(3, 202411586, 'CS301', '2026-03-01', 'حاضر'),
(4, 202411586, 'CS301', '2026-03-08', 'حاضر'),
(5, 202411531, 'CS301', '2026-02-15', 'حاضر'),
(6, 202411531, 'CS301', '2026-02-22', 'حاضر'),
(7, 202411531, 'CS301', '2026-03-01', 'غائب'),
(8, 202411531, 'CS301', '2026-03-08', 'حاضر'),
-- الطالب أحمد الشناوي: تسجيل غياب متكرر لاختبار خوارزمية إنذار الـ 25%
(9, 202411601, 'CS301', '2026-02-15', 'غائب'),
(10, 202411601, 'CS301', '2026-02-22', 'غائب'),
(11, 202411601, 'CS301', '2026-03-01', 'حاضر'),
(12, 202411601, 'CS301', '2026-03-08', 'غائب');

-- 8. رصد الدرجات وحساب النقاط (grade)
INSERT INTO `grade` (`grade_id`, `student_id`, `course_code`, `academic_year`, `coursework`, `midterm`, `final_exam`, `letter_grade`, `grade_points`) VALUES
(1, 202411586, 'CS301', '2026/2027', 19.5, 19.0, 56.5, 'A', 4.00),
(2, 202411586, 'CS302', '2026/2027', 19.0, 18.5, 55.0, 'A', 4.00),
(3, 202411586, 'CS303', '2026/2027', 18.0, 18.0, 52.0, 'B', 3.00),
(4, 202411531, 'CS301', '2026/2027', 19.0, 19.0, 55.0, 'A', 4.00),
(5, 202411531, 'CS302', '2026/2027', 18.5, 18.0, 53.5, 'A', 4.00),
(6, 202411601, 'CS301', '2026/2027', 14.0, 13.0, 38.0, 'D', 1.00);

-- 9. الرسوم الدراسية والمطالبات المالية (fee)
INSERT INTO `fee` (`fee_id`, `student_id`, `academic_year`, `semester`, `amount_due`, `due_date`, `status`) VALUES
(1, 202411586, '2026/2027', 2, 8500.00, '2026-03-30', 'مسدد'),
(2, 202411531, '2026/2027', 2, 8500.00, '2026-03-30', 'مسدد جزئيًا'),
(3, 202411601, '2026/2027', 2, 8500.00, '2026-03-15', 'غير مسدد');

-- 10. سجلات السداد والإيصالات (payment)
INSERT INTO `payment` (`payment_id`, `fee_id`, `amount`, `payment_date`, `method`, `receipt_no`, `received_by`) VALUES
(1, 1, 8500.00, '2026-02-12', 'نقدي', 'REC-2026-00101', 3),
(2, 2, 5000.00, '2026-02-14', 'فيزا / بطاقة', 'REC-2026-00102', 3);

-- 11. طلبات المستندات الرسمية (document_request)
INSERT INTO `document_request` (`request_id`, `student_id`, `doc_type`, `request_date`, `status`, `issue_date`, `issued_by`, `notes`) VALUES
(1, 202411586, 'شهادة قيد', '2026-02-20', 'تم الإصدار', '2026-02-21', 2, 'مستوفاة الشروط وتم الاعتماد والختم الرسمي'),
(2, 202411531, 'بيان درجات', '2026-03-02', 'قيد المراجعة', NULL, NULL, 'في انتظار استكمال باقي المصروفات المقررة');
