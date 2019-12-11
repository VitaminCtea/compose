function micrometerLevel(userValue, isKeepTwoDecimal) {
	if (!isNumber(userValue)) throw new TypeError("Please enter valid values");
	const micrometerLevelRegExp = /(\d)(?=(\d{3})+\b)/g;
	const transformString = String(userValue);
	return isHasPoint(transformString)
		? noDecimalPoint(transformString, micrometerLevelRegExp, isKeepTwoDecimal)
		: HaveDecimalPointNumber(
				transformString,
				micrometerLevelRegExp,
				isKeepTwoDecimal
		  );
}
const isNumber = value => typeof value === "number";
const isHasPoint = transformString => transformString.indexOf(".") === -1;
// 无小数的情况
const noDecimalPoint = (
	transformString,
	micrometerLevelRegExp,
	isKeepTwoDecimal
) => {
	transformString = transformString.replace(micrometerLevelRegExp, "$1,");
	isKeepTwoDecimal && (transformString = paddingTwoZero(transformString));
	return transformString;
};
const paddingTwoZero = transformString => {
	const paddingZeroCount = 2;
	transformString += ".";
	for (
		let i = transformString.length - transformString.indexOf(".");
		i <= paddingZeroCount;
		i++
	) {
		transformString += "0";
	}
	return transformString;
};
// 有小数的情况
const HaveDecimalPointNumber = (
	transformString,
	micrometerLevelRegExp,
	isKeepTwoDecimal
) => {
	let splitArray = null,
        valueToConvert;
	isKeepTwoDecimal && (transformString = keepTwoDecimal(transformString));
	splitArray = transformString.split(".");
	valueToConvert = splitArray[0];
	splitArray[0] = valueToConvert.replace(micrometerLevelRegExp, "$1,");
	transformString = splitArray.join(".");
	return transformString;
};
const keepTwoDecimal = transformString => {
	return String(
		Math.round(transformString * Math.pow(10, 2)) / Math.pow(10, 2)
	);
};

exports.micrometerLevel = micrometerLevel;
