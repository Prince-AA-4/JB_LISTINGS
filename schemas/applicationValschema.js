import Joi from "joi";

export const createApplicationSchema = Joi.object({
  resume: Joi.alternatives()
    .try(Joi.string().base64(), Joi.string().uri())
    .required(),
  status: Joi.string().valid("pending", "approved", "rejected").optional(),
});

export const updateApplicationSchema = Joi.object({
  resume: Joi.alternatives()
    .try(Joi.string().base64(), Joi.string().uri())
    .optional(),
  status: Joi.string().valid("pending", "approved", "rejected").optional(),
});
