import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(15).alphanum().required(),
  password: Joi.string().min(6).max(30).alphanum().required()
});
