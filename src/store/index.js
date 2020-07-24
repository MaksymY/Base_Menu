import Vue from "vue";
import Vuex from "vuex";
import importAll from "@/components/core/globales";

Vue.use(Vuex);

// Auto import statically store modules
const MODULES = importAll(require.context("@/store/modules", true, /\w+\.js$/));

export default new Vuex.Store({
	modules: MODULES,
});
