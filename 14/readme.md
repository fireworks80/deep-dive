# 14 전역 변수의 문제

## 전역 변수 억제

- 즉시 실행 함수

```js
(function () {
	var foo = 10;
})();

console.log(foo); // Reference error
```

- 네임스페이스 객체

```js

var MYAPP = {};

MYAPP.person = {
    name: 'lee
};

console.log(MYAPP.name); // lee
```

- 모듈 패턴

```js
var Counter = (function () {
	var num = 0;

	return {
		increase() {
			return num + 1;
		},
		decrease() {
			return num - 1;
		},
	};
})();

console.log(Counter.num);
```

- es6 모듈

```html
<script type="module" src="lib.mjs"></script>
```
