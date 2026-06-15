
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

// Configure JSON parser
app.use(express.json({
    limit: '10mb',        // Max body size
    strict: true,         // Only accept arrays and objects
    type: 'application/json', // Content types to parse
}));

const newFormData = 'something response';

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

app.get('/getdata', (req, res) => {
    res.send('Hello from our server!')
})

app.get('/getjson', (req, res) => {
    res.send('Hello again from our server!')
})

app.post('/puttext', (req, res) => {

   // const { name, email, age } = req.body;
    const { name } = req.body;

    // req.body contains the parsed JSON
    console.log('Name:', name);
   // console.log('Email:', email);
   // console.log('Age:', age);

    console.log("in puttext: " + req.body);
    //newFormData = req;
    res.json({ success: true, message: "Form processed successfully!"  });
    console.log({ success: true, message: "Form processed successfully!"});
});


app.listen(8080, () => {
    console.log('server listening on port 8080')
})