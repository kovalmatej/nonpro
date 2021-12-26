import express from "express";

// Service
import { sendAnswers } from "../services/QuestionsService.js";

export const QuestionsController = express.Router();

QuestionsController.post("/send", async (req, res) => {
  console.log("Received answers " + req.body.username);
  console.log("Received answers"  + req.body.answers);

  try {
    if(req.body.answers && req.body.username) {
      const errors = await sendAnswers(req.body.answers, req.body.username);

      if(errors == undefined) {
        return res.status(200).send("ok");
      }
    }

    res.status(400).send("error");
    return;
  }catch(e) {
    console.log(e)
  }
});
