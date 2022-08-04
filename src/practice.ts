// const message: string = 'hello world';
// console.log(message);

let count = 0; //숫자
count += 1;
// count = '갑자기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 문자열 배열이므로 숫자를 넣으려고 하면 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있다
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있다

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
// color = 'green'; // 에러 발생  리터럴 타입중 green은 없기 때문

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0); //배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어짐
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void { //만약 함수에서 아무것도 반환하지 않는다면 void를 사용
  console.log('I am just saying hello world');
}

// 인터페이스
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자이다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시한다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());   //78.53981633974483     50
});

// interface Person {
//   name: string;
//   age?: number; // 선택적 프로퍼티
// }
// interface Developer extends Person {    //person과 Developer이 비슷하므로 extends 키워드로 상속받는다.
//   skills: string[];
// }

// const person: Person = {
//   name: '김사람',
//   age: 20
// };

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// };

type Person = {
  name: string;
  age?: number; 
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람'
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];

// 결과가 any라면 타입 유추가 깨져 결과가 무엇인지 알 수 없다 이때 Generics를 사용한다.
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);

// interface Items<T> {
//   list: T[];
// }

// const items: Items<string> = {
//   list: ['a', 'b', 'c']
// };

type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c']
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());