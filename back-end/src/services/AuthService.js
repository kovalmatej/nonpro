import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const checkToken = (username, token) => {
  console.log("Comparing " + jwt.verify(token, process.env.JWT_KEY) + " and " + username)
  if(username === jwt.verify(token, process.env.JWT_KEY)) {
    return undefined;
  }

  return "Token is not valid";
};