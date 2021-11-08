import express from "express";
import joi from "joi";


//Services
import { createUser } from "../services/UserService.js";

export const UserController = express.Router();

UserController.post("/register", async (req, res) => {
  try {
    const errors = await createUser(req.body);

    if(errors === undefined) {
      return res.send("User registered successfully");
    }else {
      console.log("error")
      return res.json(errors);
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

UserController.post("/login", (req, res) => {
  res.send("User logged in successfully")
});
