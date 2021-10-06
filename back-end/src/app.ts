import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Initialize and start whole app
const initialize = () => {
	const app = express();
	
	app.listen(process.env.PORT, () => {
		console.log("Listening on port " + process.env.PORT);
	});
};

initialize();
