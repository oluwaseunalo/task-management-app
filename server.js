

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


const projectId = {
    'tasks': [
        {
            'id': 1,
            'title': 'Paint the wall',
            'description': 'Please paint all the walls in white color',
            'checked': true
        },
        {
            'id': 1,
            'title': 'Clean the site',
            'description': 'Please make sure you clean the construction site before leaving',
            'checked': false
        }
    ]
};

//Setting up the GET & POST request

app.get('/all', sendData);
function sendData (req, res) {
    res.send(projectId);
};


app.post('/post', holder);
function holder (req, res){
    console.log(req.body)
   let newUpdate = {
       tasks: req.body.tasks[0].id,
       checked: req.body.tasks[0].checked
       // content: req.body.content
    }
    projectId=newUpdate;
    res.send(projectId)
}

/* (on success)
{
    'status: 'success'
}

(on error)
{
    'status': 'error'
} */