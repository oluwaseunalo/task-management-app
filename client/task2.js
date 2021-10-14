
// Creating a custom element todo-item
class TodoItems extends HTMLElement {
    constructor(){
        super();
        this._task = {
            'id': 1,
            'title': 'paint the wall',
            'description': 'Please paint all the walls in white color',
            'bool': true,
         }
     
        }

        set task(value){
           return this._task = value
        }
        
        get task(){
           return this._task
        }
  

    }

    
   

window.customElements.define('todo-item', TodoItems)


const list = document.querySelector('todo-item')

function loadTask() {
    list.innerHTML = `<h1>${list.task.title}</h1> <h3>${list.task.description}</h3> `
}
loadTask();


// Setting up the client to retrieve and post data

const completeTask = document.querySelector('.check');

completeTask.addEventListener ('click', newState);

    function newState (e) {
        if (completeTask.checked === true) {
            getData()
            .then(function(data){
                console.log(data);
              postData('https://flexxter.de/Tasks/Save', {id:data[0].tasks[0].id, title:data[0].tasks[0].title, des:data[0].tasks[0].description, bool:data[0].tasks[0].checked, status: 'sucess'})
            })
        
        }
        
        else if (completeTask.checked === false) {
            getData()
            .then(function(data){
                console.log(data);
             postData('https://flexxter.de/Tasks/Save', {id:data[0].tasks[0].id, title:data[0].tasks[0].title, des:data[0].tasks[0].description, bool: 'false', status: 'error'})
            })
        };
    }

// Expressing the getData call back function

const getData = async () => {


    const response = await fetch('https://flexxter.de/Tasks/Get');
    try{
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log('error', error);}
} 


// Expressing the postData callback function
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
        });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch(error){
        console.log('error', error);
    }
}


