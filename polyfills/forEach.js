Array.prototype.forEach = function (cb) {
	for (let i = 0; i < this.length; ++i) {
		cb(this[i], i, this);
	}
};

const fruits = ['orange', 'mango', 'apple', 'banana', 'guava'];
fruits.forEach((fruit, idx) => {
	console.log(idx + ': ' + fruit);
});
