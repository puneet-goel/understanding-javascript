const obj = {
	a: 5,
	b: 'Puneet',
	c: function () {
		console.log(this.a);
	},
	d: {
		a: 5,
		b: 'Goel',
	},
	e: false,
};

function deepCopy(data) {
	if (!data) return data;
	let res = null;

	if (typeof data === 'object') {
		res = {};
		for (let prop in data) {
			res[prop] = deepCopy(data[prop]);
		}
	} else if (typeof data === 'string' || typeof data === 'number') {
		res = data;
	}

	return res;
}

//testing
const refCopy = obj;
const shallowCopy = { ...obj };

//compares the reference
console.log('Assignment operator: ' + (refCopy === obj));
console.log('Using Spread operator (level 1): ' + (shallowCopy === obj));
console.log('Using Spread operator (level 2): ' + (shallowCopy.d === obj.d));
