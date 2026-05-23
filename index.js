const buttonsE1 = document.querySelectorAll("button"); //button html tag is selected
const inputFieldE1 = document.getElementById("result");

for(let i = 0; i<buttonsE1.length; i++){         //17 button length
     buttonsE1[i].addEventListener("click",() => {                //select individual value of i index
        const buttonValue = buttonsE1[i].textContent;  //capture text content of buttons
        if(buttonValue === "C"){
            clearResult();
     }                    
     else if(buttonValue === "=") {
        calculateResult();
     } 
        else if(buttonValue === "Del") {
        deleteLast();
     } 
     else {
        appendValue(buttonValue);
     }    
     });    
}

function clearResult(){
    inputFieldE1.value ="";   //clear value

}

function calculateResult(){
inputFieldE1.value = eval(inputFieldE1.value);               //eval function of java script to process valus
}
function appendValue(buttonValue) {
    inputFieldE1.value += buttonValue;  //append the buttons
}
function deleteLast(){
    inputFieldE1.value = inputFieldE1.value.slice(0,-1);  //slice(staret,end)used to cut part of string
}


