let gameseq=[];
let userseq=[];
let btns=["yellow", "red", "green", "purple"];
let started=false;
let level=0;
let maxlevel=0;
let hg=document.querySelector(".hg");
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    gameFlash(randBtn);

}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerText=`Game Over! Score:${level} \n Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 250);
        hg.innerText=`High Score: ${level}`;
        reset();
    }
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
function btnPress(){
    userFlash(this);
    let userColor=this.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
}