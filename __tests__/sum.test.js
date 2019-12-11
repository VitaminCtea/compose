const sum = require("../sum.ts");
const fetchData = require('../temp/asyncTest');

test("must be a date string", () => {
	expect(sum(1, 2)).toBe(3);
});
test("object assignment", () => {
	const data = { one: 1 };
	data["two"] = 2;
	expect(data).toEqual({ one: 1, two: 2 });
});
test("adding postive numbers is not zero", () => {
	const data = [
		{ id: 1, fruit: "apple" },
		{ id: 2, fruit: "banana" },
		{ id: 3, fruit: "pineapple" }
	];
	const find = fruit =>
		[fruit].find(vowel => /^[aeoiu]/.test(vowel) && vowel.substring(0, 1));
	const filter = data =>
        data.filter(item => item.fruit.startsWith(find(item.fruit)));
	expect(filter(data)).toEqual([{ id: 1, fruit: "apple" }]);
});
// 真假值
test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy()
});
test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});
// 数字
test('two plus two', () => {
	const value = 2 + 2;
	//	value比结果大
	expect(value).toBeGreaterThan(3);
	//	value比结果大或者相等
	expect(value).toBeGreaterThanOrEqual(3.5);
	//	value比结果小
	expect(value).toBeLessThan(5);
	//	value比结果小或者相等
	expect(value).toBeLessThanOrEqual(4.5);
	expect(value).toBe(4);
	expect(value).toEqual(4);
});
test('两个浮点数字相加', () => {
	const value = 0.1 + 0.2;
	// 精确相等
	expect(value).toBeCloseTo(0.3);
});
// 字符串
test('there is no I in team', () => {
	expect('team').not.toMatch(/I/);
});
test('but there is "stop" in Christoph', () => {
	expect('Christoph').toMatch(/stop/);
});
// 数组
test('the shopping list has beer or it', () => {
	const shoppingList = [
		'diapers',
		'kleenex',
		'trash bags',
		'paper towels',
		'beer'
	];
	expect(shoppingList).toContain('beer');
	expect(new Set(shoppingList)).toContain('beer');
});
// 抛出一个错误
test('compiling android goes as expected', () => {
	const compileAndroidCode = () => {
		throw new Error('you are using the wrong JDK');
	};
	expect(compileAndroidCode).toThrow();
	expect(compileAndroidCode).toThrow(Error);
	expect(compileAndroidCode).toThrow('you are using the wrong JDK');
	expect(compileAndroidCode).toThrow(/JDK/);
});
// 测试异步, 利用test回调函数里的参数done进行模拟
// test('the data is peanut butter', (done) => {
// 	function callback(data) {
// 		expect(data).toBe('peanut butter');
// 		done();
// 	}
// 	fetchData(callback);
// });
// 测试异步, 利用promise
test('the data is peanut butter', async () => {
	// return expect(fetchData()).resolves.toBe('peanut butter');
	await expect(fetchData()).resolves.toBe('peanut butter');
});
// mock函数
/**
 * .mock 属性
 * 所有的 mock 函数都有这个特殊的 .mock属性
 * 它保存了关于此函数如何被调用、调用时的返回值的信.
 * .mock 属性还追踪每次调用时 this的值
 */
describe('Test mock function', () => {
	function forEach(items, callback) {
		for (let index = 0; index < items.length; index++) {
			callback(items[index]);
		}
	}
	const mockCallback = jest.fn(x => 42 + x);
	forEach([0, 1], mockCallback);
	// mockCallback函数被调用次数
	expect(mockCallback.mock.calls.length).toBe(2);
	// mockCallback第一次调用的参数
	expect(mockCallback.mock.calls[0][0]).toBe(0);
	// mockCallback第二次调用的参数
	expect(mockCallback.mock.calls[1][0]).toBe(1);
	// mockCallback第一次调用的返回值
	expect(mockCallback.mock.results[0].value).toBe(42);
	// mockCallback第二次调用的返回值
	expect(mockCallback.mock.results[1].value).toBe(43);
	// 在测试期间可以将测试值注入到mock函数中
	const myMock = jest.fn();
	myMock
		.mockReturnValueOnce(10)
		.mockReturnValueOnce('x')
		.mockReturnValue(true);
	console.log(myMock(), myMock(), myMock(), myMock());
	const filterTestFn = jest.fn();
	filterTestFn
		.mockReturnValueOnce(true)
		.mockReturnValueOnce(false);
	const result = [11, 12].filter(filterTestFn);
	console.log(result);
});