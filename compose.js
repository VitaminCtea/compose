import sound from "./22.mp3";
function sortArray(array) {
	let minIndex;
	let copyArray = array.slice(0);
	for (let i = 0, len = copyArray.length; i < len; i++) {
		minIndex = i;
		for (let j = i; j < len; j++) {
			if (copyArray[minIndex] > copyArray[j]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			let temp = copyArray[minIndex];
			copyArray[minIndex] = copyArray[i];
			copyArray[i] = temp;
		}
	}
	return copyArray;
}
let filterData = item => item > 33;
let iseven = item => item & 1;
let isold = item => !iseven(item);
let result = sortArray([1, 4, 5, 8, 3, 2, 10, 67, 33, 20, 19, 100, 49, 37, 50])
	.filter(filterData)
	.filter(iseven)
	.every(isold);
console.log(result);
function compose() {
	let parameters = arguments;
	let start_index = parameters.length - 1;
	return function() {
		let decrement_index = start_index;
		let prev_result = parameters[start_index].apply(null, arguments);
		let parameter_length = parameters[start_index].length;
		while (decrement_index--) {
			prev_result = parameters[decrement_index].apply(null, [
				prev_result,
				...Array.prototype.slice.call(arguments, parameter_length)
			]);
			parameter_length += parameters[decrement_index].length - 1;
		}
		return prev_result;
	};
}
let a = (a, b, c) => a + b + c;
let b = (d, e, f) => d + e + f;
let c = (g, h, i, j) => g + h + i + j;
let d = (k, l, m, n) => k + l + m + n;
let testCompose = compose(
	d,
	c,
	b,
	a
);
let returnResult = testCompose(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
console.log(returnResult);
function curry_function(fn) {
	function inner_function(len, args) {
		if (len === 0) {
			return fn.apply(null, args);
		}
		return function() {
			return inner_function(
				len - arguments.length,
				args.concat(Array.prototype.slice.call(arguments))
			);
		};
	}
	return inner_function(fn.length, []);
}
let add = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log(curry_function(add)(1, 2)(3)(4, 5, 6));
function date_function(date) {
	const just_now = "刚刚",
		a_minute_ago = "1分钟以前",
		minutes_ago = "分钟以前",
		a_hour_ago = "1小时以前",
		hours_ago = "小时以前";
	const yesterday = "昨天",
		days_ago = "天以前";
	const a_week_ago = "1周以前",
		weeks_ago = "周以前";
	const a_month_ago = "1个月以前",
		months_ago = "个月以前";
	const year_ago = "年以前";
	const a_minute_into_seconds = 60,
		two_minute_into_seconds = 120,
		a_hour_into_seconds = 3600,
		two_hours_into_seconds = 7200,
		a_day_into_seconds = 86400;

	const a_week = 7,
		two_week = 14;
	const a_month = 30,
		two_months = 60;
	const a_year = 365;
	const a_day = 0,
		two_days = 1;
	const converting_to_seconds = 1000;

	const diff = (new Date().getTime() - date.getTime()) / converting_to_seconds;
	const day_diff = Math.floor(diff / a_day_into_seconds);

	return (
		(day_diff === a_day &&
			((diff < a_minute_into_seconds && just_now) ||
				(diff < two_minute_into_seconds && a_minute_ago) ||
				(diff < a_hour_into_seconds &&
					Math.floor(diff / a_minute_into_seconds) + minutes_ago) ||
				(diff < two_hours_into_seconds && a_hour_ago) ||
				(diff < a_day_into_seconds &&
					Math.floor(diff / a_hour_into_seconds) + hours_ago))) ||
		(day_diff === two_days && yesterday) ||
		(day_diff < a_week && day_diff + days_ago) ||
		(day_diff < two_week && a_week_ago) ||
		(day_diff < a_month && Math.floor(day_diff / a_week) + weeks_ago) ||
		(day_diff < two_months && a_month_ago) ||
		(day_diff < a_year && Math.floor(day_diff / a_month) + months_ago) ||
		Math.floor(day_diff / a_year) + year_ago
	);
}
console.log(date_function(new Date("2019-07-04T14:58")));
//  Generator function
//  Array flattening
/**
 * @param array Array to flatten
 */
function* flatten(array) {
	if (!array.length) return [];
	for (let i = 0, len = array.length; i < len; i++) {
		let item = array[i];
		if (typeof item != "null" && Array.isArray(item)) {
			yield* flatten(item);
		} else {
			yield item;
		}
	}
}
let sort = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
let newArray = [
	...flatten([
		1,
		[[2, 3, [11, 20, [12, 13, [14, 15, [11]]]]], 4],
		[5, [7, [8, 9], 10], 6]
	])
].sort(sort);
console.log(newArray);
/**
 * Generator initial value
 * @param generatorFunction
 */
function wrapper(generatorFunction) {
	return function(...args) {
		let generatorObject = generatorFunction(...args);
		generatorObject.next();
		return generatorObject;
	};
}
const wrapped = wrapper(function*() {
	console.log(`First input: ${yield}`);
	return "Done";
});
wrapped().next("Generator initial value");
/**
 * Traverse the object through the generator interface
 * @param object
 */
function* objectEntries(object) {
	let propKeys = Reflect.ownKeys(object);
	for (let propKey of propKeys) {
		yield [propKey, object[propKey]];
	}
}
for (let [key, value] of objectEntries({ first: "Jane", last: "Doe" })) {
	console.log(`${key}: ${value}`);
}
/**
 * The state machine
 * @param {*} doc document
 */
function* clock() {
	while (true) {
		yield console.log("你是我的小呀小苹果!");
		yield console.log("怎么爱你都不嫌多");
	}
}
for (let i = 0, stateGenerator = clock(); i < 5; i++) {
	stateGenerator.next();
}
function runGeneratorFunction(generatorFunction) {
	const generator = generatorFunction();
	function next(err, data) {
		let result = generator.next(data);
		if (result.done && typeof result.value === "undefined") return;
		result.value.then(data => {
			console.log(data);
			next(err, data);
		});
	}
	next();
}
let g = string => new Promise(resolve => resolve(string));
let h = string => new Promise(resolve => resolve(string));
let i = string => new Promise(resolve => resolve(string));
let j = function(string1, string2, string3) {
	return function*() {
		console.log("自动执行Generator函数");
		yield g(string1);
		yield h(string2);
		yield i(string3);
	};
};
runGeneratorFunction(
	j(
		"传说中你为爱甘心被搁浅",
		"我也可以为你潜入海里面",
		"怎么忍心断绝，忘记我不变的誓言,我眼泪断了线"
	)
);

let vendors = ["webkit", "ms", "o", "moz"];
for (
	let vendor = 0, requestFrame;
	!window.requestAnimationFrame && (requestFrame = vendors[vendor++]);

) {
	let cancelAnimationFrame =
		requestFrame + "CancelAnimationFrame" ||
		requestFrame + "CancelRequestAnimationFrame";
	let requestAnimationFrame = requestFrame + "RequestAnimationFrame";
	window.requestAnimationFrame = window[requestAnimationFrame];
	window.cancelAnimationFrame = window[cancelAnimationFrame];
	if (window.requestAnimationFrame && window.cancelAnimationFrame) break;
}
let animate = ((callback, element) => {
	let lastTime = 0;
	let executive_function = () => {
		let currentTime = new Date().getTime();
		let time = Math.max(0, 16 - (currentTime - lastTime));
		let step = () => callback(currentTime + lastTime);
		let timeoutId = setTimeout(step, time);
		lastTime = currentTime + time;
		return timeoutId;
	};
	return executive_function;
})();
let cancelAnimate = id => clearTimeout(id);
window.requestAnimationFrame = window.requestAnimationFrame || animate;
window.cancelAnimationFrame = window.cancelAnimationFrame || cancelAnimate;
console.log(window.requestAnimationFrame, window.cancelAnimationFrame);
let pipe = (function() {
	return function(value) {
		let funcStack = [];
		let proxy = new Proxy(
			{},
			{
				get: function(pipeObject, fnName) {
					if (fnName === "get")
						return funcStack.reduce((val, fn) => fn(val), value);
					funcStack.push(window[fnName]);
					return proxy;
				}
			}
		);
		return proxy;
	};
})();
window.double = n => n * 2;
window.pow = n => n * n;
window.reverseInt = n =>
	n
		.toString()
		.split("")
		.reverse()
		.join("") | 0;
console.log(pipe(3).double.pow.reverseInt.get);

function createBird(bird) {
	switch (bird.type) {
		case "EuropeanSwallow":
			return new EuropeanSwallow(bird);
		case "AfricanSwallow":
			return new AfricanSwallow(bird);
		case "NorwegianBlueParrot":
			return new NorwegianBlueParrot(bird);
		default:
			return new Bird(bird);
	}
}
class Bird {
	constructor(birdObject) {
		Object.assign(this, birdObject);
	}
	get plumage() {
		return "unknow";
	}
	get airSpeedVelocity() {
		return null;
	}
}
class EuropeanSwallow extends Bird {
	get plumage() {
		return "average";
	}
	get airSpeedVelocity() {
		return 35;
	}
}
class AfricanSwallow extends Bird {
	get plumage() {
		return this.numberOfCoconuts > 2 ? "tired" : "average";
	}
	get airSpeedVelocity() {
		return 40 - 2 * this.numberOfCoconuts;
	}
}
class NorwegianBlueParrot extends Bird {
	get plumage() {
		return this.voltage > 100 ? "scorched" : "beautiful";
	}
	get airSpeedVelocity() {
		return this.isNailed ? 0 : 10 + this.voltage / 10;
	}
}
let plumages = birds =>
	new Map(birds.map(b => createBird(b)).map(bird => [bird.name, bird.plumage]));
let speeds = (birds, name) =>
	new Map(
		birds
			.map(b => createBird(b))
			.map(bird => [bird.name, bird.airSpeedVelocity])
	);
let birdInfo = [
	{ type: "NorwegianBlueParrot", voltage: 200, name: "FuLiu", isNailed: false }
];
console.log(plumages(birdInfo).get("FuLiu"));
console.log(speeds(birdInfo).get("FuLiu"));

let withinBand = (usage, bottom, top) =>
	usage > bottom
		? Math.min(usage, top) - bottom
		: usage > top
		? usage - top
		: 0;
let baseCharge = (usage = 0) =>
	withinBand(usage, 0, 100) * 0.3 +
	withinBand(usage, 100, 200) * 0.5 +
	withinBand(usage, 100, 200) * 0.7;
console.log(baseCharge(500));

function setDimension(name, value) {
	let array = ["width", "height"];
	if (array.includes(name)) return `This value of this ${name} is: ${value}`;
	throw new TypeError(
		"This parameter name is not the correct parameter. Please re-enter it"
	);
}
console.log(setDimension("height", 400));

let replaceHTML = data =>
	data
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
let traverse = function(data, ...values) {
	let result = data[0];
	for (let i = 0, len = values.length; i < len; i++) {
		let arg = String(values[i]);
		result += replaceHTML(arg);
		result += data[i];
	}
	return result;
};
let saferHTML = (templateData, ...values) => traverse(templateData, values);
let outputHTML = function() {
	let free = "Are you free now?";
	let sender = '<script>alert("abc")</script>';
	return saferHTML`<p>${sender} has sent you a message. ${free}</p>`;
};
console.log(outputHTML());
let cumulative = (initialVal, currentVal) => initialVal + currentVal;
let sumMatrix = matrix =>
	matrix.map(array => array.reduce(cumulative, 0)).reduce(cumulative, 0);
console.log(sumMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
const paramRegFunc = () => /(?<=\().+(?=\)\s+?{)/;
const bodyRegFunc = () => /(?<={)([\s\S]|\n)+(?:(?=\}))/m;
const funcString = func => func.toString();
const isPrototype = func => typeof func === "function" && !!func.prototype;
const matching = (reg, string) => reg.exec(string);
const constructFunc = (body, param) => new Function(param, body);

const performConstructFunc = (body, param) =>
	param ? constructFunc(body[0], param[0]) : constructFunc(body[0]);
const evalFunc = target => eval(funcString(target));

const resultParamAndBody = (target, func) =>
	matching(func(), funcString(target));

const extractFunctionBody = target =>
	isPrototype(target) && !!bodyRegFunc()
		? performConstructFunc(
				resultParamAndBody(target, bodyRegFunc),
				resultParamAndBody(target, paramRegFunc)
		  )
		: evalFunc(target);

const func = (a, b, c) => a + b + c;
console.log(extractFunctionBody(func)(10, 700, 70));

// const test = (date) => new Date(date.toString());
// const transform = (date, type) => {
//     const fillZero = 10;
//     switch(type) {
//         case 'month': return date.getMonth() < fillZero ? '0' + date.getMonth() : date.getMonth();
//         case 'day': return date.getDate() < fillZero ? '0' + date.getDate() : date.getDate();
//     }
// }
// let getPrevYear = function (date) {
//     date = test(date);
//     let year = date.getFullYear();
//     return function () {
//         year = year - 1;
//         const month = transform(date, 'month');
//         const day = transform(date, 'day')
//         const result = `${ year } - ${ month } - ${ day }`;
//         console.log(result);
//         return result;
//     }
// };
// let stringDate = getPrevYear('2019-09-05');
// let date1 = getPrevYear(new Date());

// document.getElementById('button').addEventListener('click', date1);

// DOM回顾
// let div = document.getElementById('div');
// let attr = div.attributes;
// let newAttr = Object.keys(attr).map((item) => attr[item].specified && attr[item].nodeValue);
// div.innerHTML = newAttr.join(' , ');

// // table
// const table = document.createElement('table');
// table.border = 1;
// table.width = '100%';
// const tbody = document.createElement('tbody');
// table.appendChild(tbody);

// for (let i = 0, len = newAttr.length; i < len; i++) {
//     tbody.insertRow(i);
//     for (let j = 0; j < len; j++) {
//         tbody.rows[i].insertCell(j);
//         tbody.rows[i].cells[j].appendChild(document.createTextNode(newAttr[i]));
//     }
// }
// document.body.appendChild(table);

// 音频
const audio = document.getElementById("audio");
audio.crossOrigin = "anonymous";
audio.src = sound;

const ctx = new AudioContext();
const analyser = ctx.createAnalyser();
const audioSource = ctx.createMediaElementSource(audio);

audioSource.connect(analyser);
audioSource.connect(ctx.destination);

analyser.fftSize = 2048; //  默认
// console.log(arrayBuffer);
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height - 2;
const meterWidth = 5;
const gap = 2;
const meterNum = width / (meterWidth + gap);

let gradient = context.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(1, "#0f00f0");
gradient.addColorStop(0.8, "#ff0ff0");
gradient.addColorStop(0, "#f00f00");
context.fillStyle = gradient;
let flag = false;
function render() {
	let arrayBuffer = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(arrayBuffer);
	if (!flag) {
		flag = true;
		console.log(arrayBuffer);
	}
	const step = Math.round(arrayBuffer.length / meterNum);
	context.clearRect(0, 0, width, height);
	for (let i = 0; i < meterNum; i++) {
		const value = arrayBuffer[i * step];
		const x = i * (meterWidth + gap);
		const y = height - value + 2;
		context.clearRect(x, y, width, height);
		context.fillRect(x, y, meterWidth, height);
	}
	requestAnimationFrame(render);
}
render();

let str = "<p>rrtrt&nbsp; &nbsp; &nbsp; &nbsp; yyy&nbsp; &nbsp; &nbsp; &nbsp;</p>";
str = str.replace(/(?<=\s\1+([a-zA-Z]))(\&nbsp;\s?)+/g, "");

console.log(str);

let myMenu = document.querySelector(".menu");
let oppMenu = document.querySelector(".menu-icon");

function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");
	if (!myMenu.classList.contains("menu--visible")) {
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove("menu--visible");
	}
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);