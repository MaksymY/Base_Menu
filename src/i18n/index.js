import Vue from "vue";
import { isObject, isNull } from "@/components/core/utils";
import Store from "@/store";

// Register the mixin globally
Vue.mixin({
	methods: {
		// Translation method
		// The key should be a string, vars should be a record
		i18n(key, vars) {
			// Get the template string from the translatable record
			const STRING = Store.getters["lang/record"][key] || "";
			// When no variables are defined, the template string will be returned
			if (!isObject(vars)) return STRING;
			// Parse the template string to get the placeholders
			const MATCHES = STRING.match(/(?<=[^\\](?:\\{2})*|^)\$\{\s*\S+?\s*\}/g);
			// When no variables can be found in the template string, the string will be returned
			if (isNull(MATCHES)) return STRING;
			// RegExp memoized to remove opening "${" and closing "}"
			const REG_CLEAN = /\$\{\s*|\s*\}/g;
			// Replace each variable placeholder with its value
			return Array
				.from(MATCHES)
				.reduce((acc, val) => acc.replace(val, vars[val.replace(REG_CLEAN, "")] || ""), STRING);
		},
	},
});