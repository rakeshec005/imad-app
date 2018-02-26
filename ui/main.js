//import { setInterval } from "timers";

console.log('Loaded!');

//counter code
let btn = document.getElementById('counter');
btn.onclick = () => {

    // Ajax calls
    // create a request object
    let xhr = new XMLHttpRequest();

    // capture the response and store it in the variable
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            // Take some action
            if(xhr.status === 200){
                // extract the value from this request
                let counter = xhr.responseText;

                //render the variable in the correct span
                let span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not done yet
    };
 
    // Make the request
    xhr.open('GET', 'http://localhost/counter', true);
    xhr.send(null);
   
}

// Submit name
let nameInput = document.getElementById('name');
let name = nameInput.value();
submit.onclick = () => {
    // Make a request to server and send the name

    // capture a list of name and render it as a list
    let names = ['name1', 'name2', 'name3', 'name4'];
    let list = '';
    for(let i=0; i<names.length; i++){
        list += '<li>'+ names[i] + '</li>';
    }
    let ul = document.getElementById('namelist');
    ul.innerHTML = list;
}
