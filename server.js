const express = require('express'); // Call the Express libs
const mongoose =  require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

const app = express(); // Use a express


// DB CONF
const db = require('./config/keys').mongoURI;


// Connect to MongoDB using Mongoose
mongoose
    .connect(db)
    .then(()=> console.log('mongo db connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello!!!')); //router to a homepage
 
// USE ROUTES

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log('Server running on port ', port));