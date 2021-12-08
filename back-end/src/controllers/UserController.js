import express from "express";

//Service
import { createUser, loginUser } from "../services/UserService.js";

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

UserController.post("/login", async (req, res) => {
  try {
    const errors = await loginUser(req.body);

    if(errors === undefined) {
      return res.send("User logged in successfully");
    }else {
      console.log("error")
      return res.json(errors);
    }
  }catch(e) {
    console.log(e);
    return;
  }
});
