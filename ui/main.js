//import { setInterval } from "timers";

console.log("Loaded!");

//counter code
let btn = document.getElementById("counter");
btn.onclick = () => {
  // Ajax calls
  // create a request object
  let xhr = new XMLHttpRequest();

  // capture the response and store it in the variable
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Take some action
      if (xhr.status === 200) {
        // extract the value from this request
        let counter = xhr.responseText;

        //render the variable in the correct span
        let span = document.getElementById("count");
        span.innerHTML = counter.toString();
      }
    }
    // Not done yet
  };

  // Make the request
  xhr.open("GET", "http://localhost/counter", true);
  xhr.send(null);
};

// Submit name
let submit = document.getElementById("submit_btn");
submit.onclick = () => {
  // Make a request to server and send the name
  // Ajax calls
  // create a request object
  let xhr = new XMLHttpRequest();

  // capture the response and store it in the variable
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Take some action
      if (xhr.status === 200) {
        // capture a list of name and render it as a list
        let names = JSON.parse(xhr.responseText);
        let list = "";
        for (let i = 0; i < names.length; i++) {
          list += "<li>" + names[i] + "</li>";
        }
        let ul = document.getElementById("namelist");
        ul.innerHTML = list;
      }
    }
    // Not done yet
  };

  // Extracting a input field value
  let name = document.getElementById("name").value;
  //let name = nameInput.value();

  // Make the request
  xhr.open("GET", "http://localhost/submit-name?name=" + name, true);
  xhr.send(null);
};
