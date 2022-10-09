<template>
	<div class="filter">
		<select v-model="$parent.columnName" name="filter1" required="required">
			<option value="">фильтрация по колонке</option>
			<option value="name">название</option>
			<option value="count">количество</option>
			<option value="distance">расстояние</option>
		</select>
		<select v-model="$parent.condition" name="filter2" required="required">
			<option value="">фильтрация по условию</option>
			<option value="contains">содержит</option>
			<option value="equals">равно</option>
			<option value="more">больше</option>
			<option value="less">меньше</option>
		</select>
		<input v-model="$parent.searchValue" v-on:change="$parent.setSearchValue($event)" type="text" placeholder="search"/>
	</div>
</template>

<script>
	export default {
		name: 'FilterBy',
		props: ['rowData'],
	}

</script>

<style scoped>
	select {
		width: 180px;
		height: 24px;
		margin-bottom: 10px;
	}
	
	input {
		width: 180px;
		height: 20px;
	}
</style>
