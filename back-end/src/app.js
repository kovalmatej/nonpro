import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { UserController } from "./controllers/UserController.js";
import { OrganizationsController } from "./controllers/OrganizationsController.js";
import { AuthController } from "./controllers/AuthController.js";
import { QuestionsController} from "./controllers/QuestionsController.js";

// Initialize and start whole app
const initialize = () => {
	const app = express();
	
	app.use(express.json());
	app.use(cors());

	app.use('/user', UserController);
	app.use('/organizations', OrganizationsController);
	app.use('/auth', AuthController);
	app.use('/questions', QuestionsController);

	app.listen(process.env.PORT, () => {
		console.log("Listening on port " + process.env.PORT);
	});
};

initialize();
