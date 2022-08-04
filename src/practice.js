"use strict";
// const message: string = 'hello world';
// console.log(message);
let count = 0; //숫자
count += 1;
// count = '갑자기 문자열'; // 이러면 에러가 납니다!
const message = 'hello world'; // 문자열
const done = true; // 불리언 값
const numbers = [1, 2, 3]; // 숫자 배열
const messages = ['hello', 'world']; // 문자열 배열
// messages.push(1); // 문자열 배열이므로 숫자를 넣으려고 하면 안된다!
let mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있다
let nullableNumber = null; // number 일수도 있고 null 일수도 있다
let color = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
// color = 'green'; // 에러 발생  리터럴 타입중 green은 없기 때문
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0); //배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어짐
}
const total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('I am just saying hello world');
}
class Circle {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시한다.
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea()); //78.53981633974483     50
});
const person = {
    name: '김사람'
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const people = [person, expert];
// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];
// 결과가 any라면 타입 유추가 깨져 결과가 무엇인지 알 수 없다 이때 Generics를 사용한다.
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
const items = {
    list: ['a', 'b', 'c']
};
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
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
