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
		<input @change="$parent.setSearchValue($event)" type="text" placeholder="search" v-model="search"/>
		<button class="btn-search" @click="$parent.setSearchValue(search)" >Применить фильтр</button>
	</div>
</template>

<script>
	export default {
		name: 'FilterBy',
		props: ['rowData'],
		data() {
			return {
				search: '',
			}
		},
	}

</script>

<style scoped>
	select {
		width: 180px;
		height: 24px;
		margin-bottom: 10px;
	}
	
	input {
		width: 172px;
		height: 20px;
		margin-bottom: 10px;
	}
	
	.btn-search {
		width: 180px;
		height: 24px;
		margin-bottom: 10px;
	}
</style>
