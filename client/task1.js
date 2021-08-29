

const findTodoItems = () => {
    return new Promise(function(resolve, reject){
        const items = document.querySelectorAll('todo-item');
        for(item of items){
            parent.removeChild(item);
            document.body.appendChild(item);
            const todoItem = document.body.appendChild(item);
            if (todoItem){
                resolve ('Element is successfully appended');
            }
            else {
                reject('Element cannot be found');
            }
        }
        }
    )};



findTodoItems().then(function(response){
    console.log(response);
}).catch((error) => {
    console.log(error);
});

