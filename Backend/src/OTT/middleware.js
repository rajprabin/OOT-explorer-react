const Joi = require('joi');

module.exports =  function (req, res, next) {
    try {
        const input = req.query

		const joiQuerySchema = Joi.object({
			start_year: Joi.string().required(),
			end_year: Joi.string().required(),
			min_imdb: Joi.string().required(),
			max_imdb: Joi.string().required(),
			genre: Joi.string().required(),
			language:Joi.string().required(),
			type: Joi.string().required(),
			sort: Joi.string().required(),
			page: Joi.string().required()
		});
		
		const inputValidation =  joiQuerySchema.validate(input);
		
        if (inputValidation.error) throw { error: inputValidation.error, };

		next()
    } catch (error) {
		console.error(`Error in middleware ::`, error);
		res.status(400).send(error);
    }
}

