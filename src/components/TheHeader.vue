<template>
    <header
        class="header"
    >
        <img
            class="header__image"
            :src="require(`@/assets/header/${currentRouteName}.jpg`)"
            alt="image d'un plat du restorant"
        />
    </header>
</template>

<script>
export default {
    name: "TheHeader",
    computed: {
		currentRouteName() {
            return this.$route.name ? this.$route.name : "Plats";
		},
	}
}
</script>

<style lang="scss">
.header {
    &__image {
        width: 100vw;
        height: 30vh;
        object-fit: cover;
    }
}
</style>
