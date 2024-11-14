// event handling
let mydiv = document.querySelector("div");
mydiv.onmouseover = () => {
    console.log("I got hovered");
};

// event object
mydiv.onclick=(event) =>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
};


// event listeners
// An event listener adds a responsive functionality to an element, allowing that element to wait and "listen" for the event to occur. Event listeners are similar to event handlers, but in event listeners, you can add multiple events on a single element.
 mydiv.addEventListener("click",(event) =>{
    console.log("i got clicked");
 });
 mydiv.addEventListener("click",(event) =>{
    console.log("i got clicked 2");
 });

 let event3= () =>{
    console.log("i got clicked 3");
 }
 mydiv.addEventListener("click",event3);

//  remove event listener  
// note: the callback reference should be same to remove.
mydiv.removeEventListener("click",event3);


// practice (button to toggle bw dark and light mode)
let mode= document.querySelector("#mode");
let mymode="light";
let body =  document.querySelector("body");
mode.addEventListener("click",(event) =>{
    if(mymode==="light"){
        mymode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mymode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mymode);
 });