Array.prototype.reduce = function (cb, initial) {
	let accumulator = initial;

	for (let i = 0; i < this.length; ++i) {
		accumulator = cb(accumulator, this[i], i, this);
	}

	return accumulator;
};

const numbers = [1, 5, 2, 6, 8];
const sum = numbers.reduce((accumulator, element) => accumulator + element, 0);

console.log(sum);
