const providersDal = require('../providers/dal');
const createError = require('http-errors');
const Joi = require('@hapi/joi');

const compareScores = (a, b) => {
  if (a.score < b.score) {
      return 1;
  }
  if (a.score > b.score) {
      return -1;
  }

  return 0;
};

module.exports.index = req => {
    const querySchema = Joi.object({
        minScore: Joi.number().min(0).required(),
        date: Joi.date().timestamp('unix').required(),
        specialty: Joi.string().required()
    });

    const {error} = querySchema.validate(req.query);

    if (error) {
        throw createError(400, error);
    }

    return providersDal.query(req.query).sort(compareScores).map(provider => provider.name);
};

module.exports.create = req => {
    const querySchema = Joi.object({
        date: Joi.date().timestamp('unix').required(),
        name: Joi.string().required()
    });

    const {error} = querySchema.validate(req.body);

    if (error) {
        throw createError(400, error);
    }

    const res = providersDal.query({name: req.body.name, date: req.body.date});

    if (!res.length) {
        throw createError(400, 'Unavailable doctor or date');
    }

    return res[0];
};