<template>
	<div class="table">
		<div class="table__header">
			<p>Дата</p>
			<p>Название</p>
			<p>Количество</p>
			<p>Расстояние</p>
		</div>
		<div class="table__body">
		
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserTable',
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>
