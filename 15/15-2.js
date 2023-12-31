// 함수 레벨 스코프
// ========================
// var x = 1;
// if (true) {
// 	var x = 10;
// }

// console.log(x); // 10

// var i = 10;

// for (var i = 0; i < 5; i++) {
// 	console.log(i);
// }

// console.log(i);

// 변수 호이스팅
// ============================

// console.log(foo);

// foo = 123;

// console.log(foo);

// var foo;

// let 키워드
// ============================
// var foo = 123;
// var foo = 456;

// let bar = 123;
// let bar = 456; SyntaxError 발생

// 15.2.2 블록 레벨 스코프
// =======================================

// let foo = 1;

// {
// 	let foo = 2;
// 	let bar = 3;
// }

// console.log(foo); // 1
// console.log(bar); ReferenceError: bar is not defined
// let i = 10;

// function foo() {
// 	let i = 100;

// 	for (let i = 1; i < 3; i++) {
// 		console.log(i); // 1 ~ 2
// 	}

// 	console.log(i); // 100
// }
// foo();
// console.log(i); // 10

// 15-9
// console.log(foo); ReferenceError: foo is not defined

// let foo;
// console.log(foo);

// foo = 1;
// console.log(foo);

// 15-10
// let foo = 1;

// {
// 	console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
// 	let foo = 2;
// }

// 15-15
// {
// console.log(foo);
// 	const foo = 1;
// 	console.log(foo);
// }

// console.log(foo);

// 15-19
const person = {
	name: 'Lee',
};

person.name = 'Kim';

console.log(person);
