Array.prototype.map = function (cb) {
	let temp = [];

	for (let i = 0; i < this.length; ++i) {
		temp.push(cb(this[i], i, this));
	}

	return temp;
};

const numbers = [1, 5, 2, 6, 8];
const squares = numbers.map((element, idx) => element ** 2);

console.log(numbers, squares);
