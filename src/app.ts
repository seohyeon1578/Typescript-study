let student = {
  name: "Jake",
  cours: "TypeScript",
  codingIQ: 80,
  code: function () {
    console.log('brain is working hard');
  }
};
// student.name = 1; 타입이 다르기 때문에 오류 발생

function calculateCodingIQ(lostPoints: number){
  return 100 - lostPoints;
}

let studentID: number = 12345;
let studentName: string = "Jenny Kim";
let age: number = 21;
let gender: string = "female";
let subject: string = "javascript";
let courseCompleted: boolean = false;

// 열거형(Enum)
enum GenderType {
  Male = "male",
  Female = "female",
  GenderNeutral = "genderNeutral"
}

// 인터페이스
interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;                                //선택적 매개변수
  gender: "male" | "female" | "genderNeutral"; //리터럴 타입
  subject: string;
  courseCompleted: boolean;
  
  //함수, 둘다 같은 기능
  // addComment (comment: string): string;
  addComment?: (comment: string) => string;
}

let studentDetail: Student = {
  studentID: 12345,
  studentName: "Jenny Kim",
  age: 22,
  gender: "male",
  subject: "Typescript",
  courseCompleted: true
};

function  getStudentDetails(studentID:number): Student {
  return studentDetail;
}

function saveStudentDetails(student: Student): void {
  console.log(student);
}

saveStudentDetails(studentDetail);

let someValue: any;
let price: number | string = 5;
price = 'tree';
// price = true; //지정된 타입이 아니므로 boolean타입은 할당 X

type StrOrNum = number | string;  //Type Aliases
let itemPrice: number;

const setItemPrice = (price: StrOrNum): void =>{
  // Typeof Operator
  if(typeof price === 'string'){
    itemPrice = 0;
  }else {
    itemPrice = price;
  }
}

setItemPrice(50);

// function 함수이름 (매개변수1: 타입, 매개변수2: 타입): 함수리턴타입 {
// }

const sendGreeting = (message = 'Hello', userName = 'there'): void => console.log(`${message}, ${userName}`);

sendGreeting();               //Hello, there
sendGreeting('Good');         //Good, there
sendGreeting('good', 'jenny') //good, jenny

class Employee {
  //비공개 변수 명명 관례: 앞에 _ 붙이기
  constructor(
    private _fullName: string, 
    private _age: number, 
    private _jobTitle: string, 
    private _hourlyRate: number, 
    public workingHoursPerWeek: number){
  }

  get fullName () {
    return this._fullName;
  }

  set fullName (value: string) {
    this._fullName = value;
  }

  printEmployeeDetails = ():void => {
    console.log(`${this._fullName}의 작업은 ${this._jobTitle}이고
    일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek}달러 이다.`)
  }
}

let employee1 = new Employee('Jenny', 22, '주니어 개발자', 46, 35);
employee1.fullName = "Tom"
console.log(employee1.fullName)
// employee1.fullName = "Tom" private이기때문에 접근 불가
employee1.printEmployeeDetails();