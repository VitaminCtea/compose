// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	// 允许标签在运行时沿着测试打印
	displayName: {
		name: "CLIENT",
		color: "blue"
	},
	// All imported modules in your tests should be mocked automatically
	// automock: false,

	// Stop running tests after `n` failures
	// bail: 0,

	// false为在node进行测试，否则遵循在 package.json 中的 Browserify 的 "browser" 字段（浏览器）
	browser: false,

	// The directory where Jest should store its cached dependency information
	// jest用来储存依赖信息缓存的目录
	cacheDirectory: "C:\\Users\\jiazh\\AppData\\Local\\Temp\\jest",

	// Automatically clear mock calls and instances between every test
	// 在每次测试之间自动清除模拟调用和实例。相当于在每个测试之间调用jest.clearAllMocks()。
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	// 是否收集测试时的覆盖率信息, 可能会让测试执行速度被明显减慢。
	collectCoverage: true,
	// An array of glob patterns indicating a set of files for which coverage information should be collected
	//  一个glob模式的数组，指示一组应该收集覆盖率信息的文件。
	//  如果一个文件与指定的glob模式相匹配，那么即使这个文件不存在测试，并且在测试套件中也不需要测试，覆盖率信息也会被收集。
	collectCoverageFrom: [ //	默认值为null
	  "**/temp/*.{js, jsx}", //..收集当前目录下的所有以js或jsx结尾的文件信息
	  "!**/node_modules/**",  //..排除第三方文件夹
	  "!**/vendor/**"
	],

	// The directory where Jest should output its coverage files
	// Jest输出覆盖信息文件的目录。
	// coverageDirectory: "coverage",

	// An array of regexp pattern strings used to skip coverage collection
	// 在执行测试之前，针对所有文件路径匹配的regexp模式字符串数组。如果文件路径匹配任何模式，覆盖信息将被跳过。
	coveragePathIgnorePatterns: [
		//  默认值["node_modules"]
		"\\\\node_modules\\\\"
	],

	// A list of reporter names that Jest uses when writing coverage reports
	// 指定生成覆盖名字
	// coverageReporters: [
	//   "json",
	//   "text",
	//   "lcov",
	//   "clover"
	// ],

	// An object that configures minimum threshold enforcement for coverage results
	// 配置覆盖率结果的最小阈值，当达不到指定的阈值时，将测试失败
	// 如果globs或路径与global一起指定，则将从总体覆盖范围中减去匹配路径的覆盖数据，并独立应用阈值。
	// coverageThreshold: {
	// 	global: { //  全局模式
	// 		branches: 50, //  分支覆盖率
	// 		functions: 50,  //  函数覆盖率
	// 		lines: 50,  //  行覆盖率
	// 		statements: 50  //  语句覆盖率
	// 	},
	// 	"./src/components/": {  //..文件路径
	// 		branches: 40,
	// 		statements: 40
	// 	},
	// 	"./src/reducers/**/*.js": { //..glob模式
	// 		statements: 90
	// 	},
	// 	"./src/api/very-important-module.js": {
	// 		branches: 100,
	// 		functions: 100,
	// 		lines: 100,
	// 		statements: 100
	// 	}
	// 所有剩下的文件的任意一种覆盖率总计低于 50% (根据 global)
	// },

	// A path to a custom dependency extractor
	// 此选项允许使用自定义依赖项提取器。
	// dependencyExtractor: null,

	// Make calling deprecated APIs throw helpful error messages
	// 使调用废弃的api抛出有用的错误消息。有助于简化升级过程。
	// errorOnDeprecated: false,

	// Force coverage collection from ignored files using an array of glob patterns
	// 测试文件通常在收集代码覆盖率时被忽略。使用此选项，您可以覆盖此行为，并在代码覆盖率中包含其他被忽略的文件(glob模式)
	// forceCoverageMatch: [],

	// A path to a module which exports an async function that is triggered once before all test suites
	// globalSetup: null,

	// A path to a module which exports an async function that is triggered once after all test suites
	// globalTeardown: null,

	// A set of global variables that need to be available in all test environments
	// 一组全局变量，在所有测试环境下都可以访问。
	// 注意，如果你在这指定了一个全局引用值（例如，对象或者数组），之后在测试运行中有些代码改变了这个被引用的值，
	// 这个改动对于其他测试不会生效。
	// globals: {},

	// The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
	// maxWorkers: "50%",

	// An array of directory names to be searched recursively up from the requiring module's location
	// moduleDirectories: [
	//   "node_modules"
	// ],

	// An array of file extensions your modules use
	// 模块使用的文件扩展名数组。如果您需要没有指定文件扩展名的模块，则Jest将按照从左到右的顺序查找这些扩展名.
    // 意味着最常用的扩展名应放在最前面
	moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

	// A map from regular expressions to module names that allow to stub out resources with a single module
	// moduleNameMapper: {},

	// An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
	// modulePathIgnorePatterns: [],

  	// Activates notifications for test results
  	// 激活测试结果通知。
	// notify: false,

	// An enum that specifies notification mode. Requires { notify: true }
	// notifyMode: "failure-change",

	// A preset that is used as a base for Jest's configuration
	// preset: null,

	// Run tests from one or more projects
	// 当为项目配置提供了一组路径或glob模式时，Jest将同时在所有指定的项目中运行测试。
	// 这对于单任务或同时处理多个项目非常有用。
	// projects: null,

	// Use this configuration option to add custom reporters to Jest
	// 自定义覆盖报告程序添加到Jest中
	// reporters: undefined,

	// Automatically reset mock state between every test
	// resetMocks: false,

	// Reset the module registry before running each individual test、
	// 在运行每个单独的测试之前重置模块注册表。
	// resetModules: false,

	// A path to a custom resolver
	// 允许使用自定义解析器
	// resolver: null,

	// Automatically restore mock state between every test
	// restoreMocks: false,

	// The root directory that Jest should scan for tests and modules within
	// rootDir: null,

	// A list of paths to directories that Jest should use to search for files in
	// roots: [
	//   "<rootDir>"
	// ],

	// Allows you to use a custom runner instead of Jest's default test runner
	// runner: "jest-runner",

	// The paths to modules that run some code to configure or set up the testing environment before each test
	// setupFiles: [],

	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	// setupFilesAfterEnv: [],

	// A list of paths to snapshot serializer modules Jest should use for snapshot testing
	// snapshotSerializers: [],

	// The test environment that will be used for testing
	testEnvironment: "node",

	// Options that will be passed to the testEnvironment
	// testEnvironmentOptions: {},

	// Adds a location field to test results
	// testLocationInResults: false,

	// The glob patterns Jest uses to detect test files
	// testMatch: [
	//   "**/__tests__/**/*.[jt]s?(x)",
	//   "**/?(*.)+(spec|test).[tj]s?(x)"
	// ],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	// testPathIgnorePatterns: [
	//   "\\\\node_modules\\\\"
	// ],

	// The regexp pattern or array of patterns that Jest uses to detect test files
	// testRegex: [],

	// This option allows the use of a custom results processor
	// testResultsProcessor: null,

	// This option allows use of a custom test runner
	// testRunner: "jasmine2",

	// This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
	// testURL: "http://localhost",

	// Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
	// timers: "real",

	// A map from regular expressions to paths to transformers
	// transform: null,

	// An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
	// transformIgnorePatterns: [
	//   "\\\\node_modules\\\\"
	// ],

	// An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
	// unmockedModulePathPatterns: undefined,

	// Indicates whether each individual test should be reported during the run
	// verbose: null,

	// An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
	// watchPathIgnorePatterns: [],

	// Whether to use watchman for file crawling
	// watchman: true,
};
