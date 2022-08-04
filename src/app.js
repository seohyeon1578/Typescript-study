"use strict";
let student = {
    name: "Jake",
    cours: "TypeScript",
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
// student.name = 1; 타입이 다르기 때문에 오류 발생
function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
}
let studentID = 12345;
let studentName = "Jenny Kim";
let age = 21;
let gender = "female";
let subject = "javascript";
let courseCompleted = false;
// 열거형(Enum)
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
let studentDetail = {
    studentID: 12345,
    studentName: "Jenny Kim",
    age: 22,
    gender: "male",
    subject: "Typescript",
    courseCompleted: true
};
function getStudentDetails(studentID) {
    return studentDetail;
}
function saveStudentDetails(student) {
    console.log(student);
}
saveStudentDetails(studentDetail);
let someValue;
let price = 5;
price = 'tree';
let itemPrice;
const setItemPrice = (price) => {
    // Typeof Operator
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
// function 함수이름 (매개변수1: 타입, 매개변수2: 타입): 함수리턴타입 {
// }
const sendGreeting = (message = 'Hello', userName = 'there') => console.log(`${message}, ${userName}`);
sendGreeting(); //Hello, there
sendGreeting('Good'); //Good, there
sendGreeting('good', 'jenny'); //good, jenny
class Employee {
    //비공개 변수 명명 관례: 앞에 _ 붙이기
    constructor(_fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek) {
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = () => {
            console.log(`${this._fullName}의 작업은 ${this._jobTitle}이고
    일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek}달러 이다.`);
        };
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        this._fullName = value;
    }
}
let employee1 = new Employee('Jenny', 22, '주니어 개발자', 46, 35);
employee1.fullName = "Tom";
console.log(employee1.fullName);
// employee1.fullName = "Tom" private이기때문에 접근 불가
employee1.printEmployeeDetails();
