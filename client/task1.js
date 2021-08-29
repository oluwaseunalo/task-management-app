/* TASK 1. Write a function that finds all elements in the DOM with the tagname
„todo-item“. Every one of these elements should then be removed from
its current parent node and appended to the body element of the
current document. The function should return a Promise that resolves
once all of the elements were successfully added to the body
element. */

// Solution to task 1

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

