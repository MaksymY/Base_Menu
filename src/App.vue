<template>
	<div id="app">
		<TheNav />
		<router-view/>
	</div>
</template>
<script>
import TheNav from "@/components/TheNav.vue";

export default {
	components: {
		TheNav,
	},
}
</script>

<style lang="scss">

</style>