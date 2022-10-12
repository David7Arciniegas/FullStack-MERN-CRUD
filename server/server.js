const { app } = require('./app');

// Utils
const { connectMongo } = require('./utils/database.util');

const startServer = async () => {
	await connectMongo();
     
	const HOST = process.env.HOST || '0.0.0.0';
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, HOST, () => {
		console.log('Express app running!!', PORT);
	});
};

startServer();
