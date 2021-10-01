## Project Title: Frontend Task
   This repository provides a solution to the task that aimed at fetching data from the server, dynamically update the UI, allow users to check or uncheck the task provided and update the state in the server.

## Installation
- Clone this repository or download ZIP from GitHub and open it from your favourite text editor
- Open the Terminal and install all the dependencies in the package.json using the command npm install
- Run the express server using the command npm start
- Open the website at http://localhost:8080 (you can always change the port in the server.js if you are already using the port 8080).

## Description
### Task 1   
- Created a function to find an html element 'todo-item' and wrapped it around the JavaScript Promise. 
- The function would return a Promise that resolves once all of the elements were successfully added to the body element.
- If the Nodelist is empty and nothing to loop over, the Promise would reject and a statement would be logged to the console.

### Task 2
#### At the Server Side
- The project-id, denoted by projectId, is an array of objects and acts as the endpoint for all routes.

#### At the Client Side
- Transversed the DOM and set up Global Variables.
- Dynamically update the UI with the task-id 1 fetched from the server using the Asynchronous Javascript.
- Fetch and post task based on the checkbox state property using the else if conditional statement. 
- .checked is used to check whether the checkbox state is true or false. For more on .checked property [click here](https://www.w3schools.com/jsref/prop_checkbox_checked.asp).
- Used the strict operator to match checkbox.checked to either true or false.
- If the checkbox is checked, the status 'success', the true state and other 'tasks' properties are posted to the post endpoint-url and pushed to the projectId. In addition, the user get a notifaction on the interface for completing the task. 
- If the checkbox is unchecked, the status 'error', the bool 'false' and other 'tasks' properties are posted to the post endpoint-url and pushed to the projectId. In addition, the user get a notification on the interface to check the box when the task is completed.





 
