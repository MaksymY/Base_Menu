<template>
    <nav class="nav">
        <ul class="nav__links">
            <li 
                v-for="(text, name) in links"
				:key="name"
				class="nav__item"
            >
                <router-link
					:to="{ name }"
					class="nav__link"
					active-class="nav__link--active"
				>
					{{ text }}
				</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "TheNav",
    data: () => ({
		links: {
			Plats: "Plats",
			Boissons: "Boissons",
			Desserts: "Desserts",
			Entrees: "Entrées",
		},
	}),
}
</script>

<style lang="scss">
    .nav {
		background-color: $nav_base_color;
		&__links {
			list-style: none;
			padding: 0;
		}
		&__item {
			display: inline;
			& + & {
				margin-left: 30px;
			}
		}
		&__link {
			text-decoration:none;
			color: $nav_font_color;
		}
	}
</style>