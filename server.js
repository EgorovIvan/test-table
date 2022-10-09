const { Pool, Client } = require('pg')
const pool = new Pool({
	user: 'user',
	host: '127.0.0.1',
	database: 'userdb',
	password: '1234',
	port: 5432,
})
pool.query('SELECT * FROM test', (err, res) => {
	console.log(err, res)
	pool.end()
})

const client = new Client({
	user: 'user',
	host: '127.0.0.1',
	database: 'userdb',
	password: '1234',
	port: 5432,
})
client.connect()
client.query('SELECT * FROM test', (err, res) => {
	console.log(err, res)
	client.end()
})