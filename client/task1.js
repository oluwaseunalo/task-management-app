// Solution to Task 1


const findTodoItems = () => {
    return new Promise((resolve, reject) => {
        const items = document.querySelectorAll('todo-item');
        // Using the 'for of' method to loop over the items.
        for(item of items){
            if(item.parentNode){
                item.parentNode.removeChild(item)
            };
            const addItem = document.body.appendChild(item);
            console.log(addItem);
            if (addItem){
                resolve ('Element is successfully appended');
            }         
        }
        // if the Nodelist is empty and nothing to loop over.
            if(items.length === 0){
            reject('No element found');
            }
        }
    )};

findTodoItems().then((response)=> {
    console.log(response);
}).catch((error) => {
    console.log(error);
});





