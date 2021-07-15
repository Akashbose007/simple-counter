var count=0;

const buttoncount = document.querySelectorAll(".btn");
var value = document.querySelector("#answer");

for(var i=0;i<buttoncount.length;i++)
{
     buttoncount[i].addEventListener("click",function(){
         if(this.id=="-")
            {count--;
             }
         else if(this.id=="0")
         {count=0;
            }
         else if(this.id=="+")
         {count++;
         }
         
         value.textContent=count;
     })



}


