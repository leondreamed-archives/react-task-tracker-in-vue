<script setup>
import { mdiClose } from "@mdi/js";

const emit = defineEmits(["toggle", "delete"]);
const { task } = defineProps(["task"]);
</script>

<template>
	<div
		:class="`task ${task.reminder ? 'reminder' : ''}`"
		@dblclick="emit('toggle', task.id)"
	>
		<h3>
			{{ task.text + " " }}
			<v-icon
				@click="emit('delete', task.id)"
				:icon="mdiClose"
				style="color: red; cursor: pointer"
			/>
		</h3>
		<p>{{ task.day }}</p>
	</div>
</template>

<style scoped>
.task {
	background: #f4f4f4;
	margin: 5px;
	padding: 10px 20px;
	cursor: pointer;
}

.task.reminder {
	border-left: 5px solid green;
}

.task h3 {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
