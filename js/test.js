console.log("ABC");
var score = 100;
if(score >50){
    var msg = "Win";
    console.log(msg);
}
function drawShape(){
    var mContent = document.getElementById("mContent");
    mContent.innerHTML= ""; 
    for(let i=1; i<=10; i++){ //Phân biệt let và var... 
        var elmP = document.createElement("p");
        elmP.innerHTML = i;
        
        elmP.onclick=function(){
            alert("Test: "+i);
        }
        mContent.appendChild(elmP);
    }
    
}
function clearShape(){
    var mContent = document.getElementById("mContent");
    mContent.innerHTML= ""; 
}

const NAME ="Đang học lại nè trời";//khai báo hằng số  

console.log("NAME"); 

