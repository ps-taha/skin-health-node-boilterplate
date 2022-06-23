import * as Joi from 'joi';

const getSampleData = {
  query: Joi.object().keys({
    brandname: Joi.string(),
  }),
};

export default getSampleData;
