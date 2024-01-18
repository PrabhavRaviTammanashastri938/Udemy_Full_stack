// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(a){
    display.value += a;
}


function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
}

function clear(){
    document.getElementById("display").value = '';
}
