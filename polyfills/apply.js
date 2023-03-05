Function.prototype.apply = function (obj = {}, args) {
	obj.context = this;
	let res = obj.context(...args);
	delete obj.context;
	return res;
};

//testing
const obj = {
	fname: 'Puneet',
	lname: 'Goel',
};

function print(gender) {
	console.log(this.fname + ' ' + this.lname + ' ' + gender);
}

print.apply(obj, ['male']);
