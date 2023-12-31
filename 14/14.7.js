var Counter = (function () {
	var num = 0;

	return {
		increase() {
			return (num += 1);
		},
		decrease() {
			return (num -= 1);
		},
	};
})();

console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
