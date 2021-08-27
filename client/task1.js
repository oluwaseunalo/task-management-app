const findChecklist = () => {
    return new Promise(function(resolve, reject){
        const items = document.querySelectorAll('checklist');
        for(item of items){
            parent.removeChild(item);
            document.body.appendChild(item);
            const checklistItem = document.body.appendChild(item);
            if (checklistItem){
                resolve ('Element is successfully appended');
            }
            else {
                reject('Element cannot be found');
            }
        }
        }
    )};

findChecklist().then(function(response){
    console.log(response);
}).catch((error) => {
    console.log(error);
});

