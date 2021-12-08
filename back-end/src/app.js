import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { UserController } from "./controllers/UserController.js";
import { OrganizationsController } from "./controllers/OrganizationsController.js";

// Initialize and start whole app
const initialize = () => {
	const app = express();
	app.use(express.json());

	app.use('/user', UserController);
	app.use('/organizations', OrganizationsController);

	app.listen(process.env.PORT, () => {
		console.log("Listening on port " + process.env.PORT);
	});
};

initialize();
