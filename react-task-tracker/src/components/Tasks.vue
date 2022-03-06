<script setup>
import Task from "./Task.vue";
const { tasks } = defineProps(["tasks"]);
const emit = defineEmits(['delete', 'toggle']);
</script>

<template>
	<Task
		v-for="task in tasks"
		:key="task.id"
		:task="task"
		@delete="emit('delete', $event)"
		@toggle="emit('toggle', $event)"
	/>
</template>
