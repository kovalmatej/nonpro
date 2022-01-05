import express from "express";
import axios from "axios";

import jwt from "jsonwebtoken";

//Service
import { createUser, loginUser, getId } from "../services/UserService.js";

export const UserController = express.Router();

UserController.post("/register", async (req, res) => {
  console.log("Registering user")
  try {
    const errors = await createUser(req.body);

    if(errors === undefined) {
      axios.post("http://localhost:5000/user/login", {
        username: req.body.username,
        password: req.body.password
      })
        .then(response => {
          console.log(response.data);
          res.json(response.data);
        })
        .catch(err => {
          console.log(err);
        })

      return;
    }else {
      return res.json(errors);
    }
  } catch(e) {
    console.log(e);
    return;
  }
});

UserController.post("/login", async (req, res) => {
  console.log("Loggin user")
  try {
    const errors = await loginUser(req.body);

    if(errors === undefined) {
      const token = jwt.sign(req.body.username, process.env.JWT_KEY);
      
      return res.json({
        token,
        username: req.body.username
      });
    }else {
      return res.json(errors);
    }
  }catch(e) {
    console.log(e);
    return;
  }
});

UserController.get("/id/:username", async (req, res) => {
  try {
    if(req.params.username) {
      const id = await getId(req.params.username);

      if(id) {
        console.log(id)
        return res.status(200).json(id);
      }else {
        return res.status(500);
      }
    }else {
      return res.status(400);
    }
  
  }catch(e) {
    console.log(e);
    return;
  }
});