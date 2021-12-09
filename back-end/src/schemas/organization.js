import Joi from "joi";

export const organizationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  ico: Joi.string().length(8).required(),
  city: Joi.string().required(),
  street: Joi.string(),
  psc: Joi.string().max(7).alphanum(),
  pravna_forma: Joi.string(),
  iban: Joi.string(),
  category: Joi.string(),
  owner: Joi.number(),
});
