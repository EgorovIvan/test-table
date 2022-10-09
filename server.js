const {Pool, Client} = require('pg')
const http = require("http");

// настройки сервера
const host = 'localhost';
const port = 8000;

// настройки базы данных
const pool = new Pool({
	user: 'user',
	host: '127.0.0.1',
	database: 'userdb',
	password: '1234',
	port: 5432,
})
// запрос в бд
pool.query('SELECT * FROM test', (err, res) => {
	console.log(err, res)
	pool.end()
})

// настройки базы данных
const client = new Client({
	user: 'user',
	host: '127.0.0.1',
	database: 'userdb',
	password: '1234',
	port: 5432,
})
client.connect()

// запрос в бд
client.query('SELECT * FROM test', (err, res) => {
	console.log(err, res)
	const data = JSON.stringify(res)
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
		'Access-Control-Max-Age': 2592000,
		/** add other headers as per requirement */
	};
	const requestListener =
		function (req, res) {
		res.writeHead(200, headers);
		res.end(data);
	};
	
	const server = http.createServer(requestListener);
	server.listen(port, host, () => {
		console.log(`Server is running on http://${host}:${port}`);
	});
	client.end()
})





