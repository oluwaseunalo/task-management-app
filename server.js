// Setup empty JS object to act as endpoint for all routes
taskData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Configuring the latest express version with body-parser in the default.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('client'));


// Setup Server

const port = 8080;
const server = app.listen(port,listening);

function listening (){
    console.log('server is running');
    console.log(`running on the localhost:$(port)`);
}

//Setting up the GET & POST request

app.get('https://flexxter.de/Tasks/Get', sendData);
function sendData (req, res) {
    res.send(taskData);
}
app.post('https://flexxter.de/Tasks/Save', holder);
function holder (req, res){
    console.log(req.body)
   let newUpdate = {
    }
    taskData=newUpdate;
    res.send(projectData)
}

