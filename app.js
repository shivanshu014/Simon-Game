let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let start = document.querySelector(".start-btn");

start.addEventListener("click", function (){
    if(started==false){
        console.log("Started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*btns.length);
    let randColor =  btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
       if(userSeq.length == gameSeq.length) {
         setTimeout(levelUp,1000)
       }
    } else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        resetTo();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}


function resetTo() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}