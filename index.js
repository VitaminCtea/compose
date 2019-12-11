const compose = require("./compose");
if (module.hot) {
	module.hot.accept("./compose.js", function() {
		console.log("Accepting the updated printMe module!");
		compose();
	});
}