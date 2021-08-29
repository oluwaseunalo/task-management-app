
// Transversing the DOM and setting up Global Variables

const label = document.querySelector('.print__tasks');
const title = label.children[1];
const description = label.children[2];
const taskOneId = document.querySelector('.task__one');
const checkBool = document.querySelector('.bool__one');

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
        const h = document.createElement('h3');
        h.textContent = 'Thank you for completing the task';
        taskOneId.appendChild(h);
        }
        
        else {
            const p = document.createElement('p');
            p.textContent = 'Please check the box when the task is completed';
            taskOneId.appendChild(p);
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
        console.log(error);}
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
        console.log(error);
    }
}

