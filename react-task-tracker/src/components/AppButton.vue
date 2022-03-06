<script setup>
const { color = "steelblue", text } = defineProps(['color', 'text'])
const emit = defineEmits(["click"]);
</script>

<template>
	<button
		@click="emit('click')"
		:style="{ backgroundColor: color }"
		class="btn"
	>
		{{ text }}
	</button>
</template>
