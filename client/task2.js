






/* Global Variables */


// Setting up the client to retrieve, post and dynamically update the data
// const check = document.getElementById('check');

// check.addEventListener ('click', confirmData);

/* function confirmData (e) {
    document.getElementById('').value;
    document.getElementById('').value;
    get()

    .then(function(data){
        console.log(data);
        postData('', {})
    .then (updateUI())
    })
};
*/
// Expressing the call back function

const demoTask = async () => {
    const response = await fetch('\all')
    try{
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error){
        console.log(error);}
}

demoTask();

// Expressing the postData callback function
/* const postData = async (url = '', data = {}) => {
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

// Expressing the updateUI callback function
const updateUI = async () => {
    const request = await fetch ('');
    try{
        const allData = await request.json();
        document.getElementById('').innerHTML = "";
        document.getElementById('').innerHTML = ""
    }catch(error){
        console.log(error);}
}

*/