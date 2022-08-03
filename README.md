# Typescript-Study
타입스크립트 강의를 보고 기록하는 레포지토리입니다.
(땅콩코딩)

## Typescript란?
js에 타입을 부여한 언어, js의 모든 기능 포함하고있으며 js에 포함되지 않은 새로운 기능도 있다.
변수 값에 데이터 타입을 지정 하는 특징을 가지고 있다.

```typescript
let a: number = 1;
```

## 타입 추론(Type Inference)
Typescript에서는 타입 표기가 없는 경우 변수에 할당된 값을 보고 타입을 유추해낼 수 있다.

```typescript
let a = 1;    //숫자 1을 할당해 a는 number로 추론
a = "hello";  //a의 타입이 number이기 때문에 오류 발생
```

## 타입 명시
변수를 선언할 떄, 변수 값의 타입을 명시해 변수 값의 데이터 타입을 지정해준다.

```typescript
let a: number = 1;  //변수 뒤에 타입을 지정

//함수
function add(a:number, b:number): number {  //매개변수, 파라미터의 타입을 지정하고 함수리턴값에도 타입을 지정해준다 (void로 지정시 return이 없음을 뜻함)
  return a - b
}

//객체 
function getStudentDetails(studentID: number): {
  studentID: number;
  studentName: string;
  age: number;
  gender: string;
  subject: string;
}
//이런식으로 계속 지정하게되면 코드의 가독성이 떨어진다.
```

## 인터페이스(Interface)
코드를 효율적으로 쓸 수 있다.

```typescript
interface Student {
  studentID: number;
  studentName: string;
  age: number;                                
  gender: string; 
  subject: string;
}

function getStudentDetails(studentID: number): Student{
  return {
    studentID: 12345,
    studentName: "Jenny",
    age: 18,
    gender: "femail",
    subject: "javascript",
  }
}
```
리턴해주는 값은 Student타입의 형식과 같아야한다.

## 선택적 프로퍼티
있어도 되고 없어도 되는 프로퍼티

```typescript
interface Student {
  ...
  age?: number; //변수 앞에 ?를 붙혀준다.                               
}
```

## 메소드
객체 내에서 생성된 함수이다.

```typescript
interface Student {
  ...
  //두 가지 방식이 있음
  addComment (comment: string): string;
  addComment?: (comment: string) => string;
}
```

## readonly
읽을 수만 있게 하는 속성이다.

```typescript
interface Student {
  readonly studentID: number;
  studentName: string;
  age: number;                                
  gender: string; 
  subject: string;
}
```

## 열거형(Enum)
이름이 있는 상수들의 집합을 정의할 수 있다.<br>
의도를 문서화하거나 구분된느 집합을 더 쉽게 만들 수 있다.

```typescript
enum GenderType {
  Male = "male",  //초기화 하지 않는다면 숫자 열거형으로 사용 0부터 순서대로 주어진다.
  Female = "female"
}

interface Student {
  ...                               
  gender: GenderType; 
}
```

## 리터럴 타입
Enum을 심플하게 사용할 수 있다.

```typescript
interface Student { 
  ...                             
  gender: "male" | "female"; 
}
```

## any 타입
아무런 타입이나 할당 가능<br>
*정보를 명확히 명시해야하는 ts에서는 any타입은 가급적 사용하지 않는게 좋다.

```typescript
let someValue: any = 5;
someValue = "string";
```

## 유니언 타입
OR연산자 같이 A이거나 B이다 라는 의미이다.

```typescript
let price: number | string;
price = "hello";
price = 1;
price = true; // number 또는 string 타입이 아니므로 요류 발생
```

## Type Aliases
2개 이상의 타입을 하나의 타입으로 묶고 싶을때 사용한다.

```typescript
type StrOrNum = number | string;
```