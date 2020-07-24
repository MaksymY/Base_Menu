export function isNil(obj) {
    return obj == null;
}
export function isNull(obj) {
    return obj === null;
}
export function isString(obj) {
	return typeof obj === "string";
}
export function isObject(obj) {
	return !isNil(obj) && typeof obj === "object" && !Array.isArray(obj);
}
