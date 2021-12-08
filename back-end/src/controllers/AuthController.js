import express from "express";

// Service
import { checkToken } from "../services/AuthService.js";

export const AuthController = express.Router();

AuthController.post("/check", async (req, res) => {
  try {
    if(req.body.username && req.body.token && req.body.username != "undefined" && req.body.token != "undefined") {
      const errors = checkToken(req.body.username || "", req.body.token || "");

      if(errors == undefined) {
        res.json({token: req.body.token});
        return;
      }
    }

    res.json({token: ""});
    return;
  }catch(e) {
    console.log(e)
  }
});
