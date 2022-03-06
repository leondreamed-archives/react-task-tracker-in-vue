<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { state } from "./state";

// Fetch tasks
async function fetchTasks() {
	const res = await fetch("http://localhost:5000/tasks");
	const data = await res.json();
	return data;
}

// Initially Load in Tasks
(async () => {
	const tasksFromServer = await fetchTasks();
	state.tasks = tasksFromServer;
})();
</script>

<template>
	<div class="container">
		<AppHeader
			@add="state.showAddTask = !state.showAddTask"
			:showAdd="state.showAddTask"
		/>
		<router-view />
		<AppFooter />
	</div>
</template>
