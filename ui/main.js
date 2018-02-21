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