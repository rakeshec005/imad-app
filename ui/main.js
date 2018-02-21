//import { setInterval } from "timers";

console.log('Loaded!');

//move images
let moveImage = document.getElementById('madi');
let marginLeft = 0;
function moveRight() {
    marginLeft += 1;
    moveImage.style.marginLeft = marginLeft + 'px';
}

moveImage.onclick = () => {
    let interval = setInterval(moveRight, 50);
    
};
