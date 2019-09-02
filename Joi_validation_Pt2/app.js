// npm install joi

// develop a validation schema for nested objects

const Joi = require('joi')

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

// example referencing arrayString
const userInput = {personalInfo: {
                      streetAddress: '123456789',
                      city: 'Anytown',
                      state: 'TN'
                    },
                    preferences : arrayString};

const personalInfoSchema = Joi.object().keys({
  streetAddress : Joi.string().trim().required(),
  city : Joi.string().trim().required(),
  state : Joi.string().trim().length(2).required()
});

const preferencesSchemaStrings = Joi.array().items(Joi.string());

const schema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchemaStrings
});

Joi.validate(userInput, schema, (err,result)=>{
  if(err)
    console.log(err);
  else {
    console.log(result);
  }
});

// example referencing arrayObjects
const userInput2 = {personalInfo: {
                      streetAddress: '123456789',
                      city: 'Anytown',
                      state: 'TN'
                    },
                    preferences : arrayObjects};

const personalInfoSchema2 = Joi.object().keys({
  streetAddress : Joi.string().trim().required(),
  city : Joi.string().trim().required(),
  state : Joi.string().trim().length(2).required()
});

const preferencesSchemaObjects = Joi.array().items(Joi.object().keys({
  example: Joi.string().required()
}));

const schema2 = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchemaObjects
});

Joi.validate(userInput2, schema2, (err,result)=>{
  if(err)
    console.log(err);
  else {
    console.log(result);
  }
});
