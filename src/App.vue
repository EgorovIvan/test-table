<template>
	<div class="container">
		
		<FilterBy/>
		<div class="main">
			<SortBy/>
			<TestTable :data="showItems"/>
			<div class="pagination">
				<Pagination v-for="item of arrayPage" :key="item.id" :page="item"/>
			</div>
		</div>
	
	</div>

</template>

<script>
	import axios from 'axios'
	import TestTable from './components/Table.vue'
	import SortBy from './components/SortBy.vue'
	import FilterBy from './components/FilterBy.vue'
	import Pagination from './components/Pagination.vue'
	
	
	export default {
		name: 'App',
		components: {
			TestTable,
			SortBy,
			FilterBy,
			Pagination
		},
		data() {
			return {
				api: 'http://localhost:8000',
				testData: [],
				sorted: [],
				filtered: [],
				arrayPage: [],
				searchValue: '',
				columnName: '',
				condition: '',
				countPage: 10,
				showPage: 1,
				showItems: [],
				error: false,
			}
		},
		methods: {
			
			// функция сортировки
			sortBy(event) {
				switch (event) {
					case 'name':
						this.sorted.sort((a, b) => {
							const nameA = a.name.toLowerCase()
							const nameB = b.name.toLowerCase()
							if (nameA > nameB) {
								return 1
							}
							if (nameA < nameB) {
								return -1
							}
							return 0
						})
						break
					case 'count':
						this.sorted.sort((a, b) => a.count - b.count)
						break
					case 'distance':
						this.sorted.sort((a, b) => a.distance - b.distance)
						break
					default:
						this.sorted
				}
				this.filterBy()
			},
			
			// данные поля ввода по фильтрации
			setSearchValue(event) {
				this.searchValue = event.target.value
				this.filterBy()
			},
			
			// функция фильтрации
			filterBy() {
				const value = this.searchValue
				const column = this.columnName
				const cond = this.condition
				
				function filterByValue(item) {
					if (column === 'name') {
						if (cond === 'contains' && item.name.toLowerCase().includes(value.toLowerCase())) {
							return true
						}
					}
					if (column === 'count') {
						if (cond === 'contains' && item.count.toLowerCase().includes(value.toLowerCase())) {
							return true
						}
						if (cond === 'equals' && item.count == value) {
							return true
						}
						if (cond === 'more' && item.count > value) {
							return true
						}
						if (cond === 'less' && item.count < value) {
							return true
						}
					}
					if (column === 'distance') {
						if (cond === 'contains' && item.distance.toLowerCase().includes(value.toLowerCase())) {
							return true
						}
						if (cond === 'equals' && item.distance == value) {
							return true
						}
						if (cond === 'more' && item.distance > value) {
							return true
						}
						if (cond === 'less' && item.distance < value) {
							return true
						}
					}
					if (column === '' || cond === '') {
						return true
					}
					return false
				}
				
				if (column === 'name' && (cond === 'equals' || cond === 'more' || cond === 'less')) {
					alert("Выберите другое условие")
				} else {
					this.filtered = this.sorted.filter(filterByValue)
				}
				this.pagination(this.filtered.length)
				this.showItems = this.filtered.slice((this.showPage - 1) * this.countPage, this.countPage * this.showPage)
			},
			
			// функция выбора страницы
			handleClickPage(value) {
				this.showPage = value
				this.showItems = this.filtered.slice((this.showPage - 1) * this.countPage, this.countPage * this.showPage)
			},
			
			// расчет количества страник
			pagination(countItem) {
				const sumPage = Math.ceil((countItem) / this.countPage)
				this.arrayPage = []
				for (let i = 0; i < sumPage; i++) {
					this.arrayPage.push(i + 1)
				}
			},
			
			// функция запроса данных с сервера
			getJson(url) {
				return axios.get(url)
					.then( (response) => {
						for (let el of response.data.rows) {
							this.testData.push(el);
						}
						this.pagination(this.testData.length),
							this.showItems = this.testData.slice((this.showPage - 1) * this.countPage, this.countPage * this.showPage)
					})
					.catch(error => {
						console.log(error);
						this.error = true;
					})
			},
		},
		mounted() {
			this.getJson(`${this.api}`)
			this.sorted = this.testData
			this.filtered = this.testData
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: space-between;
		width: 900px;
		margin: 0 auto;
	}
	
	.main {
		display: flex;
		flex-direction: column;
	}
	
	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>