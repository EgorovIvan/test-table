<template>
	<div class="pagination">
		<button @click="$parent.handleClickPage(page)" class="btn-page" type="button">{{page}}</button>
	</div>
</template>

<script>
	export default {
		name: 'PaginationComp',
		props: ['page']
	}

</script>

<style scoped>
	.btn-page {
		width: 30px;
		height: 30px;
		font-size: 18px;
		bottom: 10px;
		border: none;
		background: white;
		cursor: pointer;
		
	}
	.btn-page:active {
		color: red;
	}
	.btn-page:hover,
	.btn-page:hover{
		background: darkgrey;
	}
</style>
