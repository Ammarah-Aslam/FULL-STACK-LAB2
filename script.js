// ==========================================
// Student Object
// ==========================================

const student = {
    name: "Ammarah",
    registrationNo: "242750",
    program: "BS Computer Science",
    semester: 5,
    cgpa: 3.6,
    attendance: 90,
    assignment: 18,
    midterm: 25,
    finalExam: 45
};


// ==========================================
// Display Student Information
// ==========================================

document.getElementById("studentName").textContent =
    student.name;

document.getElementById("registrationNo").textContent =
    student.registrationNo;

document.getElementById("program").textContent =
    student.program;

document.getElementById("semester").textContent =
    student.semester;

document.getElementById("cgpa").textContent =
    student.cgpa;

document.getElementById("attendance").textContent =
    student.attendance;


// ==========================================
// Academic Calculation
// ==========================================

const totalMarks =
    student.assignment +
    student.midterm +
    student.finalExam;

const maximumMarks = 100;

const percentage =
    (totalMarks / maximumMarks) * 100;


// ==========================================
// Display Academic Marks
// ==========================================

document.getElementById("assignmentMarks").textContent =
    student.assignment;

document.getElementById("midtermMarks").textContent =
    student.midterm;

document.getElementById("finalExamMarks").textContent =
    student.finalExam;

document.getElementById("totalMarks").textContent =
    totalMarks;

document.getElementById("percentage").textContent =
    percentage;


// ==========================================
// Grade Calculation
// ==========================================

let grade;

if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 50) {
    grade = "D";
}
else {
    grade = "F";
}


// ==========================================
// Pass / Fail Decision
// ==========================================

let passFail;

if (percentage >= 50) {
    passFail = "Passed";
}
else {
    passFail = "Failed";
}


// ==========================================
// Display Grade and Result
// ==========================================

document.getElementById("grade").textContent =
    grade;

document.getElementById("passFail").textContent =
    passFail;


// ==========================================
// Scholarship Eligibility
// ==========================================

let scholarshipStatus;

if (
    student.cgpa >= 3.5 &&
    student.attendance >= 90 &&
    percentage >= 80
) {
    scholarshipStatus = "Gold Scholarship";
}
else if (
    student.cgpa >= 3.0 &&
    student.attendance >= 80 &&
    percentage >= 70
) {
    scholarshipStatus = "Silver Scholarship";
}
else {
    scholarshipStatus = "Not Eligible";
}


// ==========================================
// Display Scholarship Status
// ==========================================

document.getElementById("scholarshipStatus").textContent =
    scholarshipStatus;


// ==========================================
// Academic Warning
// ==========================================

let academicStatus;

if (
    student.cgpa < 2.0 ||
    student.attendance < 60 ||
    percentage < 50
) {
    academicStatus = "Critical";
}
else if (
    student.cgpa < 2.5 ||
    student.attendance < 75 ||
    percentage < 60
) {
    academicStatus = "Academic Warning";
}
else {
    academicStatus = "Good Standing";
}


// ==========================================
// Display Academic Status
// ==========================================

document.getElementById("academicStatus").textContent =
    academicStatus;


// ==========================================
// Hoisting Demonstration
// ==========================================

// var is hoisted.
// Before assignment, var gives undefined.

console.log(
    "Value of var before assignment:",
    hoistedVar
);

var hoistedVar = "Hello from var";

console.log(
    "Value of var after assignment:",
    hoistedVar
);


// let is not accessible before declaration.
// Accessing let before declaration causes an error.
// This area is called the Temporal Dead Zone.

try {

    console.log(
        "Value of let before declaration:",
        hoistedLet
    );

}
catch (error) {

    console.log(
        "Error with let:",
        error.message
    );

}

let hoistedLet = "Hello from let";

console.log(
    "Value of let after declaration:",
    hoistedLet
);


// ==========================================
// Operators Demonstration
// ==========================================

// Arithmetic Operators

const marksDifference =
    student.finalExam - student.midterm;

const averageMarks =
    (student.assignment +
        student.midterm +
        student.finalExam) / 3;

const remainingMarks =
    100 - totalMarks;

const marksPercentage =
    totalMarks / 100;

const remainder =
    totalMarks % 2;


// Comparison Operators

const highPercentage =
    percentage >= 80;

const lowAttendance =
    student.attendance < 75;

const passedStudent =
    percentage >= 50;

const sameGrade =
    grade === "A";

const differentGrade =
    grade !== "F";


// Logical Operators

const goldEligible =
    student.cgpa >= 3.5 &&
    student.attendance >= 90 &&
    percentage >= 80;

const needsAttention =
    student.cgpa < 2.5 ||
    student.attendance < 75 ||
    percentage < 60;

const notFailed =
    !passedStudent;


// ==========================================
// Display Operator Results in Console
// ==========================================

console.log("Arithmetic Operators");

console.log(
    "Marks Difference:",
    marksDifference
);

console.log(
    "Average Marks:",
    averageMarks
);

console.log(
    "Remaining Marks:",
    remainingMarks
);

console.log(
    "Marks Percentage:",
    marksPercentage
);

console.log(
    "Remainder:",
    remainder
);


console.log("Comparison Operators");

console.log(
    "High Percentage:",
    highPercentage
);

console.log(
    "Low Attendance:",
    lowAttendance
);

console.log(
    "Passed Student:",
    passedStudent
);

console.log(
    "Same Grade:",
    sameGrade
);

console.log(
    "Different Grade:",
    differentGrade
);


console.log("Logical Operators");

console.log(
    "Gold Eligible:",
    goldEligible
);

console.log(
    "Needs Attention:",
    needsAttention
);

console.log(
    "Not Failed:",
    notFailed
);


// ==========================================
// Final Academic Report
// ==========================================

document.getElementById("reportName").textContent =
    student.name;

document.getElementById("reportRegistration").textContent =
    student.registrationNo;

document.getElementById("reportProgram").textContent =
    student.program;

document.getElementById("reportSemester").textContent =
    student.semester;

document.getElementById("reportTotal").textContent =
    totalMarks;

document.getElementById("reportPercentage").textContent =
    percentage;

document.getElementById("reportGrade").textContent =
    grade;

document.getElementById("reportResult").textContent =
    passFail;

document.getElementById("reportScholarship").textContent =
    scholarshipStatus;

document.getElementById("reportStatus").textContent =
    academicStatus;