const express = require('express');
const cors = require('cors');
const Joi = require('joi');


const port = 5000;
const app = express();

app.use(express.json());

app.use(cors());
var corOptions = {credentials: true, origin: true, methods:  'GET,PUT,POST'};
app.options('/*', cors(corOptions));


const contacts = [];

app.post('/api/contact', (req, res) => {

    const schema = Joi.object({
        FullName: Joi.string().min(2).max(30).required(),
        EmailAddress: Joi.string().email().required(),
        PhoneNumbers: Joi.array().items(
            Joi.string().max(20).min(10).pattern(/^\d+$/)) , 
        Message: Joi.string().max(500).required(),
        bIncludeAddressDetails: Joi.boolean(),
        AddressDetails: Joi.object({
            AddressLine1: Joi.string().allow(''),
            AddressLine2: Joi.string().allow(''),
            CityTown: Joi.string().min(3).max(40).allow(''),
            StateCounty: Joi.string().min(3).max(40).allow(''),
            Postcode: Joi.string().min(5).max(7).allow(''),
            Country: Joi.string().min(3).max(40).allow('')
        })

    });

    const validation = schema.validate(req.body);
    if (validation.error){
        res.status(400);
        const errorMessage = {
            Errors: {
            FieldName : validation.error.details[0].path[0],
            Message: validation.error.details[0].message
        }}
        res.send(errorMessage);

        return;
    }
    

    const contactForm = {
        id: contacts.length + 1,        
        FullName: req.body.FullName,
        EmailAddress: req.body.EmailAddress,
        PhoneNumbers: req.body.PhoneNumbers,
        Message: req.body.Message,
        bIncludeAddressDetails: req.body.bIncludeAddressDetails,
        AddressDetails: req.body.AddressDetails
    };
    contacts.push(contactForm);
    res.send(validation);
    
    

});

app.listen(port, ()=> console.log(`Listening on port ${port}`));