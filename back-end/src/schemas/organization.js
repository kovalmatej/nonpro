import Joi from "joi";

export const organizationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  ico: Joi.string().length(8).required(),
  city: Joi.string().alphanum().required(),
  street: Joi.string().alphanum(),
  psc: Joi.string().max(7).alphanum(),
  pravna_forma: Joi.string(),
  iban: Joi.string(),
  owner: Joi.number(),
});
