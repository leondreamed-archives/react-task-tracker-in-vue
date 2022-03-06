<script setup>
const name = "Brad";
const x = true;
</script>

<template>
	<div>
		<h1>Hello from React</h1>
		<h2>Hello {{ name + 1 + 1 }}</h2>
		<h3>Hello {{ x ? "Yes" : "No" }}</h3>
	</div>
</template>
