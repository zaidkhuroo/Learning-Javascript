let ch = document.querySelector("h1");
ch.innerText = ch.innerText + " hey there";

let mydivs = document.querySelectorAll(".mydiv");

// first method
// mydivs[0].innerHTML="1st div";
// mydivs[1].innerHTML="2nd div";
// mydivs[2].innerHTML="3rd div";

// second method with loop
let id=1;
for (div of mydivs) {
    div.innerText = `i am the ${id} div `;
    id++;
}
