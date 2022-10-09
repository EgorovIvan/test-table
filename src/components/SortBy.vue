<template>
	<div class="sort">
		<select @change="$parent.sortBy($event.target.value)" name="sort" required="required">
			<option value="">сортировать по</option>
			<option value="name">названию</option>
			<option value="count">количеству</option>
			<option value="distance">расстоянию</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'SortBy',
		props: ['rowData'],
	}
</script>

<style scoped>
	.sort {
		margin-left: 40px;
	}
	select {
		width: 180px;
		height: 24px;
		margin-bottom: 10px;
	}
</style>
