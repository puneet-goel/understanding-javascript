Function.prototype.apply = function (obj = {}, args) {
	obj.functionRef = this;
	return obj.functionRef(...args);
};

const obj = {
	fname: 'Puneet',
	lname: 'Goel',
};

function print(gender) {
	console.log(this.fname + ' ' + this.lname + ' ' + gender);
}

print.apply(obj, ['male']);
