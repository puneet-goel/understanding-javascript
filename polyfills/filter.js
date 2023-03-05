Array.prototype.filter = function (cb) {
	let temp = [];

	for (let i = 0; i < this.length; i++) {
		//cb.call(this, this[i], i, this);
		if (cb(this[i], i, this)) {
			temp.push(this[i]);
		}
	}

	return temp;
};

const fruits = ['orange', 'mango', 'apple', 'banana', 'guava'];
const fruit = fruits.filter((fruit) => fruit === 'orange');
const fruit2 = fruits.filter((fruit) => fruit === 'grapes');

console.log(fruit, fruit2);
