import translatable from "@/i18n/translatable";
import { isNil, isString } from "@/components/core/utils";

const checkStringFormat = val => isString(val)
	&& /[a-zA-Z]{2}(?:-[a-zA-Z]{2})?/.test(val);

export default {
	namespaced: true,
	state: {
		default: "fr",
		current: "fr",
	},
	getters: {
		record(state) {
			let lang_record = translatable[state.current];
			if (isNil(lang_record)) lang_record = translatable[state.default];
			return isNil(lang_record) ? {} : lang_record;
		},
	},
	mutations: {
		SET_CURRENT_LANG(state, val) {
			state.current = val;
		},
		SET_DEFAULT_LANG(state, val) {
			state.default = val;
		},
	},
	actions: {
		setDefaultLang({ commit }, val) {
			if (checkStringFormat(val)) commit("SET_DEFAULT_LANG", val);
		},
		setCurrentLang({ commit }, val) {
			if (checkStringFormat(val)) commit("SET_CURRENT_LANG", val);
		},
		resetCurrentLang({ commit, state }) {
			commit("SET_CURRENT_LANG", state.default);
		},
	},
};
