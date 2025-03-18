const c=document.querySelectorAll("button")

const input=document.getElementById("display")

for(let i=0;i<c.length;i++)
{
   c[i].addEventListener("click",()=>{
      const ButtonClicked=c[i].textContent;
    if(ButtonClicked==="C")
      {
        clrscr();
      }
    else if(ButtonClicked==="DEL")
    {
        deleteone()
    }
    else if(ButtonClicked==="=")
        {
            calculate()
        }
    else{
            append(ButtonClicked)
        }
      
    });
} 
function clrscr(){
    input.value=" ";
}

function calculate() {
    try {
        input.value = eval(input.value);  
    } catch {
        input.value = "Error";
    }
}
function append(ButtonClicked){
    input.value=input.value+ButtonClicked;
}
function deleteone(){
    input.value=input.value.slice(0,-1);
}

