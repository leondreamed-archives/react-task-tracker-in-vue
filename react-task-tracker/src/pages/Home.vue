<script setup>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";
import { state } from "../state";

// Fetch Task
async function fetchTask(id) {
	const res = await fetch(`http://localhost:5000/tasks/${id}`);
	const data = await res.json();

	return data;
}

// Add Task
async function addTask(task) {
	const res = await fetch(`http://localhost:5000/tasks`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(task),
	});

	const data = await res.json();
	state.tasks.push(data);
}

// Delete Task
async function deleteTask(id) {
	await fetch(`http://localhost:5000/tasks/${id}`, {
		method: "DELETE",
	});

	// console.log("delete", id);

	state.tasks = state.tasks.filter((task) => task.id !== id);
}

// Toggle Reminder
async function toggleReminder(id) {
	// console.log("reminder", id);
	// setTasks(
	// 	tasks.map((task) =>
	// 		task.id === id ? { ...task, reminder: !task.reminder } : task
	// 	)
	// );

	const taskToToggle = await fetchTask(id);
	const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

	const res = await fetch(`http://localhost:5000/tasks/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(updTask),
	});

	const data = await res.json();

	const task = state.tasks.find((task) => task.id === id);
	if (task !== undefined) {
		task.reminder = data.reminder;
	}
}
</script>

<template>
	<AddTask v-if="state.showAddTask" @add="addTask" />
	<Tasks
		v-if="state.tasks.length > 0"
		:tasks="state.tasks"
		@delete="deleteTask"
		@toggle="toggleReminder"
	/>
	<template v-else>No Tasks to Show</template>
</template>
