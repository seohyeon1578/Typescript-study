var student = {
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
var studentID = 12345;
var studentName = "Jenny Kim";
var age = 21;
var gender = "female";
var subject = "javascript";
var courseCompleted = false;
// 열거형(Enum)
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var studentDetail = {
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
var someValue;
var price = 5;
price = 'tree';
var itemPrice;
var setItemPrice = function (price) {
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
var sendGreeting = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    return console.log("".concat(message, ", ").concat(userName));
};
sendGreeting(); //Hello, there
sendGreeting('Good'); //Good, there
sendGreeting('good', 'jenny'); //good, jenny
var Employee = /** @class */ (function () {
    //비공개 변수 명명 관례: 앞에 _ 붙이기
    function Employee(_fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this._fullName, "\uC758 \uC791\uC5C5\uC740 ").concat(_this._jobTitle, "\uC774\uACE0\n    \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this._hourlyRate * _this.workingHoursPerWeek, "\uB2EC\uB7EC \uC774\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('Jenny', 22, '주니어 개발자', 46, 35);
employee1.fullName = "Tom";
console.log(employee1.fullName);
// employee1.fullName = "Tom" private이기때문에 접근 불가
employee1.printEmployeeDetails();
