Function.prototype.bind = function (ctx = {}, ...args) {
	ctx.functionRef = this;

	return function (...args2) {
		const allArgs = [...args, ...args2];
		return ctx.functionRef(...allArgs);
	};
};

Function.prototype.bindWithApply = function (ctx = {}, ...args) {
	const context = ctx;
	const fn = this;

	return function (...args2) {
		const allArgs = [...args, ...args2];
		return fn.apply(context, allArgs);
	};
};

//testing
function print(gender, age) {
	console.log(this.fname + ' ' + this.lname + ' ' + gender + ' ' + age);
}

const obj = {
	fname: 'Puneet',
	lname: 'Goel',
};

const func = print.bind(obj, 'male');
func('22');

const func2 = print.bindWithApply(obj, 'male');
func2('22');
