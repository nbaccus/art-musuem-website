var express = require('express');
// var cors = require('cors');

// const port = process.env.PORT || 3000;
const port = 5000;
const app = express();

app.use(express.json());

// app.use(cors());
// var corOptions = {credentials: true, origin: true};
// app.options('/*', cors(corOptions));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

const contacts = [];

app.get('/api/contact:id', (req,res)=>{
    res.send(req.params.id);
    // res.json({ message: "Hello from server!" });
});

app.post('/api/contact', (req, res) => {
    const contactForm = {
        id : contacts.length + 1,        
        FullName: req.body.FullName,
        EmailAddress: req.body.EmailAddress,
        PhoneNumbers: req.body.PhoneNumbers,
        Message: req.body.Message,
        bIncludeAddressDetails: req.body.bIncludeAddressDetails,
        AddressDetails: req.body.AddressDetails
    };
    contacts.push(contactForm);
    // res.json({ message: "Hello from server!" });

});

app.listen(port, ()=> console.log(`Listening on port ${port}`));