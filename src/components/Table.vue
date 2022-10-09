<template>
	<div class="table">
		<div class="table__header">
			<p class="table__header-item">Дата</p>
			<p class="table__header-item">Название</p>
			<p class="table__header-item">Количество</p>
			<p class="table__header-item">Расстояние</p>
		</div>
		<div class="table__body">
			<TableRow  v-for="item of data" :key="item.id" :rowData="item"/>
		</div>
	</div>
</template>

<script>
	import TableRow from "./TableRow";
	
	export default {
		name: 'TestTable',
		components: {
			TableRow,
		},
		props: ['data'],
	}
</script>

<style scoped>
	.table {
		width: 700px;
		height: 640px;
	}
	
	.table__header {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: blue;
		margin: 0;
	}
	
	.table__header-item {
		width: 160px;
		height: 40px;
		margin: 0;
	}
</style>
