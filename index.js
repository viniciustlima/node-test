const express = require('express');
const ip = require('ip');

const app = express();

app.get('/', (req, res) => {
	return res.send(`your ip address is: ${ip.address()}`);
});

app.listen(3333, console.log('sever running'));
