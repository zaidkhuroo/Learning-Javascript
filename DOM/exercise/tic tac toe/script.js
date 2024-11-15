let allbox = document.querySelectorAll(".boxer");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#winner");

let turn0 = true;
let win_scripts = [ // 2d array
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

allbox.forEach((boxer) => {
    boxer.addEventListener("click", () => {
        if (turn0) {
            boxer.innerText = "0";
            turn0 = false;
        }
        else {
            boxer.innerText = "X";
            turn0 = true;

        }
        boxer.disabled = true;
        winner();
    });
    
});

const resetGame = () => {
    turn0 = true;
    enableboxer();
};

const disableboxer = () => {
    for (let box of allbox) {
        box.disabled = true;
    }
};

const enableboxer = () => {
    for (let box of allbox) {
        box.enabled = true;
        box.innerText = "";
    }
};

const showinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    disableboxer();

}

const winner = () => {
    for (let pattern of win_scripts) {
        let pos1 = allbox[pattern[0]].innerText;
        let pos2 = allbox[pattern[1]].innerText;
        let pos3 = allbox[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showinner(pos1);

            }
        }
    }
};

reset.addEventListener("click", resetGame);


