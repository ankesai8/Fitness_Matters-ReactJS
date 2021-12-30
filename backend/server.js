const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer();
const app = express();
const port = 1000;
const url = "mongodb+srv://avikal_24:Avikal.24@cluster0.bppqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

app.set('view engine', 'ejs'); //setting ejs as templating engine
app.set('views', './views'); //setting views folder as 'views'

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));




// establishing the mongoose 
mongoose.connect(url).then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
}).catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
});



const user_log = require('./models/user_model'); //has schema of user, this is actually a class
const exercise_log = require('./models/exercise_model'); //has schema of exercise log, this is actually a class



// get request of users
app.get('/all_users', (req, res) => {
    user_log.find(function (err, response) {
        res.json(response);
    });
})

// get request of exercises
app.get('/all_exercises', (req, res) => {
    exercise_log.find(function (err, response) {
        res.json(response);
    });
})

// post request of users
app.post('/new_user', (req, res) => {
    let username = req.body.username;
    let password =  req.body.password ;
    let newuser = new user_log({ username:username , password:password });
    newuser.save((err, user) => {
        if (err) {
            res.status(404);
            res.send("Some Error occured in user");
            console.log(err);
        }
        else {
            res.send("user added!!!");
        }
    })
})

// post request of exercises
app.post('/new_exercise', async (req, res) => {
    let a1 = req.body.username;
    let a2 = req.body.description;
    let a3 = req.body.duration;

    console.log(a1);
    console.log(a2);
    console.log(a3);


    let newex = new exercise_log({ username: a1, description: a2, duration: a3 });
    await newex.save((err, user) => {
        if (err) {
            res.status(404);
            res.send("Some Error occured in exercise");
        }
        else {
            res.send("exercise added!!!");
        }
    })
})





// open the backend server
app.listen(port, () => {
    console.log(`The example app is listening at http://localhost:${port}`);
})