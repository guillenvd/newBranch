const express = require('express'); // Call the Express libs
const mongoose =  require('mongoose');
const app = express(); // Use a express


// DB CONF
const db = require('./config/keys').mongoURI;

// Connect to MongoDB using Mongoose
mongoose
    .connect(db)
    .then(()=> console.log('mongo db connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello!!!')); //router to a homepage
 
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('Server running on port ', port));