// API references :
// https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components
// https://webpack.js.org/guides/dependency-management/#requirecontext

const getModuleNameDefault = filename => filename
	.split("/")
	.pop()
	.replace(/\.\w+$/, "");

const getModuleContext = requireModule => filename => (
	moduleContext => moduleContext.default || moduleContext
)(requireModule(filename));

export default function importAll(context, invokeCallback, transformModuleName) {
	const SHOULD_INVOKE = typeof invokeCallback === "function";
	const getModule = getModuleContext(context);
	const getModuleName = typeof transformModuleName === "function"
		? transformModuleName
		: getModuleNameDefault;

	return context
		.keys()
		.reduce((acc, filename) => {
			const REQUIRED_MODULE = getModule(filename);
			const MODULE_NAME = getModuleName(filename);

			if (typeof MODULE_NAME !== "string") return acc;

			acc[MODULE_NAME] = REQUIRED_MODULE;
			if (SHOULD_INVOKE) invokeCallback(MODULE_NAME, REQUIRED_MODULE);

			return acc;
		}, {});
}