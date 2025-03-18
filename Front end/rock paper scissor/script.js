userscore=0;
computerscore=0;
const a=document.querySelectorAll(".pictures img")
const b=document.getElementById("user-score");
const c=document.getElementById("comp-score");
const d=document.getElementById("button");
const e=document.getElementById("heading");
a.forEach((pictures)=>{
    pictures.addEventListener("click",()=>{
        const userchoice=pictures.getAttribute("id");
        playgame(userchoice)
    });
});


const playgame=(userchoice)=>{
      const computerchoice=computer()
      final(userchoice,computerchoice)
}

const computer=()=>{
    const options=["ROCK","PAPER","SCISSOR"];
    const randomindex=Math.floor(Math.random()*3)
   return options[randomindex];
}
const final=(userchoice,computerchoice)=>{
    console.log(userchoice,computerchoice);
    if((userchoice=="ROCK"&&computerchoice=="SCISSOR")||
        (userchoice=="PAPER" && computerchoice=="ROCK") || 
        (userchoice=="SCISSOR" && computerchoice=="PAPER"))
    {
        e.style.backgroundColor="green";
        d.style.backgroundColor="green";
        d.style.color="white";
        d.innerHTML=`<b>YOU WON COMPUTER SELECTED ${computerchoice}</b>`;
        userscore++;
        b.innerText=userscore;
    }
    else if(userchoice==computerchoice)
    {       
           e.style.backgroundColor="blue";
           d.style.backgroundColor="blue";
           d.style.color="white";
           d.innerHTML="<b>IT IS A DRAW!!</b>";
           
    }
    else{
        e.style.backgroundColor="red";
        computerscore++;
        c.innerText=computerscore
        d.style.backgroundColor="red";
        d.style.color="white";
        d.innerHTML=`<b>YOU LOST COMPUTER SELECTED ${computerchoice}</b>`;


    }
 }

