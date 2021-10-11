// Solution to Task 2.

// Transversing the DOM and setting up Global Variables.

const label = document.querySelector('.print__tasks');
const title = label.children[1];
const description = label.children[2];
const taskOneId = document.querySelector('.task__one');
const checkBool = document.querySelector('.bool__one');
const completeOne = document.querySelector('.complete__task');
const workTask = document.querySelector('.work__task');

// Displaying the User's first task data on the UI.

const updateData = async () => {

// Using the endpoint-url '/all' for testing purposes
   const response = await fetch('/all');

  //  const response = await fetch('https://flexxter.de/Tasks/Get');

    try {
        const displayData = await response.json();
        // displaying the response of the GET endpoint-url on the console.
            console.log(displayData);
      //  checkBool.innerHTML = displayData[0].tasks[0].checked;
      //  taskOneId.innerHTML = displayData[0].tasks[0].id;
        title.innerHTML = displayData[0].tasks[0].title;
        description.innerHTML = displayData[0].tasks[0].description;
    }
    catch(error) {
        console.log('error', error);
    }
}

updateData(); 

// Setting up the client to retrieve, post and dynamically update the UI.

const completeTask = document.getElementById('check');

completeTask.addEventListener ('click', newState);

    function newState (e) {
        if (completeTask.checked === true) {
            getData()
            .then(function(data){
                console.log(data);
              postData('/post', {id:data[0].tasks[0].id, title:data[0].tasks[0].title, des:data[0].tasks[0].description, bool:data[0].tasks[0].checked, status: 'sucess'})
        //        postData('https://flexxter.de/Tasks/Save', {id:data[0].tasks[0].id, title:data[0].tasks[0].title, des:data[0].tasks[0].description, bool:data[0].tasks[0].checked, status: 'sucess'})
            })
        
        completeOne.style.display = 'block';
        workTask.style.display = 'none';
        
        }
        
        else if (completeTask.checked === false) {
            getData()
            .then(function(data){
                console.log(data);
             postData('/post', {id:data[0].tasks[0].id, title:data[0].tasks[0].title, des:data[0].tasks[0].description, bool: 'false', status: 'error'})
         //       postData('https://flexxter.de/Tasks/Save', {id:data[0].tasks[0].id, title:data[0].tasks[0].title, des:data[0].tasks[0].description, bool: 'false', status: 'error'})
            })
            completeOne.style.display = 'none';
            workTask.style.display = 'block';
        };
    }

// Expressing the getData call back function

const getData = async () => {

 const response = await fetch('/all')

  //  const response = await fetch('https://flexxter.de/Tasks/Get');
    try{
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log('error', error);}
} 


