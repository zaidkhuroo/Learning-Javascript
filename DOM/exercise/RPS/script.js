let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");



const compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
}
const draw = () => {
    console.log("Draw");
    msg.innerText = "Baradari";
    msg.style.backgroundColor = "black";
}
const showinner = (userwin) => {
    if (userwin) {
        console.log("you won");
        userscore++;
        user.innerText= userscore;
        msg.innerText = "You Won";
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("you lost");
        compscore++;
        comp.innerText= compscore;
        msg.innerText = "You lost";
        msg.style.backgroundColor = "red";
    }
}

const game = (userchoice) => {
    console.log("user choice", userchoice);
    const compchoice = compChoice();
    console.log(" comp choice", compchoice);
    if (userchoice === compchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showinner(userwin);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        game(userchoice);
    });
});

const score = () => {
    const counter = 0;
    if (userwin) {
        counter = +1;
        user.innerText = counter;
    }
    else {
        counter = +1;
        comp.innerText = counter;
    }
}


