import Joi from "joi";


export const createApplicationSchema = Joi.object(
    {
        resume: Joi.string().base64().required(),
        status: Joi.string().valid("pending", "approved", "rejected").optional()
    }
)



export const updateApplicationSchema = Joi.object(
    {
        resume: Joi.string().base64().optional(),
        status: Joi.string().valid("pending", "approved", "rejected").optional()

    }
)