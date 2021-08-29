
// Transversing the DOM and setting up Global Variables

const label = document.querySelector('.print__tasks');
const title = label.children[1];
const description = label.children[2];
const taskOneId = document.querySelector('.task__one');
const checkBool = document.querySelector('.bool__one');
const completeOne = document.querySelector('.complete__task');
const workTask = document.querySelector('.work__task');

// Displaying the first task data on the UI

const updateData = async () => {
    const response = await fetch('/all');
    try {
        const displayData = await response.json();
      //  checkBool.innerHTML = displayData.tasks[0].checked;
      //  taskOneId.innerHTML = displayData.tasks[0].id;
        title.innerHTML = displayData.tasks[0].title;
        description.innerHTML = displayData.tasks[0].description;
    }
    catch(error) {
        console.log('error', error);
    }
}

updateData(); 

// Setting up the client to retrieve, post and dynamically update the data

const completeTask = document.getElementById('check');

completeTask.addEventListener ('click', newState);

    function newState (e) {
        if (completeTask.checked) {
            getData()
            .then(function(data){
                console.log(data);
                postData('/post', {id:data.tasks[0].id, title:data.tasks[0].title, des:data.tasks[0].description, status: 'sucess'})
            })
        
        completeOne.style.display = 'block';
        workTask.style.display = 'none';
        
        }
        
        else {
            completeOne.style.display = 'none';
            workTask.style.display = 'block';
        };
    }

// Expressing the call back function

const getData = async () => {
    const response = await fetch('/all')
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

