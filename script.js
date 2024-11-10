
// This is always the same making it a "const" variable
const display = document.getElementById("display");


// The code below will make the buttons when clicked show in the input box
function buttonDisplay(input){
display.value += input;
}

//The code below makes it so that when you click clear it will clear it (because it's set to an empty value)
function clearDisplay(){
display.value = "";
}

//The code below shows the evaluated number and also it catches any errors and displays "Error" when they are caught
function calculate(){
    try{
display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

