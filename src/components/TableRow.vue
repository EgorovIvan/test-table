<template>
	<hr/>
	<div class="table__row">
		<p class="table__row-item">{{rowData.date}}</p>
		<p class="table__row-item">{{rowData.name}}</p>
		<p class="table__row-item">{{rowData.count}} шт</p>
		<p class="table__row-item">{{rowData.distance}} км</p>
	</div>
</template>

<script>
	export default {
		name: 'TableRow',
		props: ['rowData'],
	}
</script>

<style scoped>
	.table__row {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: black;
		margin: 0;
	}
	.table__row-item {
		width: 160px;
		height: 40px;
		margin: 0;
	}
</style>
