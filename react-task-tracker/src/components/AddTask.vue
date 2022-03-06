<script setup>
const text = $ref("");
const day = $ref("");
const reminder = $ref(false);

const emit = defineEmits(['add'])
function onSubmit(e) {
	e.preventDefault();

	if (!text) {
		alert("Please add a task");
		return;
	}

	emit("add", { text, day, reminder });
	text = "";
	day = "";
	reminder = false;
}
</script>

<template>
	<form class="add-form" @submit="onSubmit">
		<div class="form-control">
			<label>Task</label>
			<input type="text" placeholder="Add Task" v-model="text" />
		</div>
		<div class="form-control">
			<label>Day & Time</label>
			<input type="text" placeholder="Add Day" v-model="day" />
		</div>
		<div class="form-control form-control-check">
			<label>Set Reminder</label>
			<input type="checkbox" :v-model="reminder" />
		</div>

		<input type="submit" class="btn btn-block" value="Save Task" />
	</form>
</template>

<style scoped>
.add-form {
	margin-bottom: 40px;
}

.form-control {
	margin: 20px 0;
}

.form-control label {
	display: block;
}

.form-control input {
	width: 100%;
	height: 40px;
	margin: 5px;
	padding: 3px 7px;
	font-size: 17px;
}

.form-control-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.form-control-check label {
	flex: 1;
}

.form-control-check input {
	flex: 2;
	height: 20px;
}
</style>
