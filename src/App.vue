<template>
	<div id="app">
		<TheNav />
		<TheHeader />
		<router-view/>
	</div>
</template>
<script>
import TheNav from "@/components/TheNav.vue";
import TheHeader from "@/components/TheHeader.vue"

export default {
	components: {
		TheNav,
		TheHeader,
	},
}
</script>

<style lang="scss">
@include font-face("./assets/fonts/Avenir/", "Avenir-Medium", otf, "Avenir-Medium");
@include font-face("./assets/fonts/Avenir/", "Avenir-Book", otf, "Avenir-Book", bold);

html,
body {
	height: 100%;
	font-family: "Avenir-Medium", sans-serif;
	box-sizing: border-box;
}
h1, h2, h2, p {
	padding: 0;
	margin: 0;
}

::selection {
    display: none;
}
</style>
