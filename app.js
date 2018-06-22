const express = require('express');
const app = express();

const wotdRoutes = require('./api/routes/wotd');

app.use('/wotd', wotdRoutes);

app.use((req,res,next) => {

	const error = new Error('Not found');
	error.status = 404;
	next(error);
})

module.exports = app;