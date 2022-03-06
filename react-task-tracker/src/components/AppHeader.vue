<script setup>
import AppButton from "./AppButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const emit = defineEmits(["add"]);
const { title = "Task Tracker", showAdd } = defineProps(["title", "showAdd"]);

function onClick() {
	emit("add");
}
</script>

<template>
	<header class="header">
		<!-- <p style={headingStyle}></p> -->
		<h1>{{ title }}</h1>
		<AppButton
			v-if="route.path === '/'"
			:color="showAdd ? 'red' : 'green'"
			@click="onClick"
			:text="showAdd ? 'Close' : 'Add'"
		/>
	</header>
</template>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
</style>
