var num = 0;
var result = 0;
var cCount = 0;
var isAdd = false;
var isMinus = false;
var isMultiply = false;
var isDivide = false;


function numButtonPress(buttonClicked){
    var screen = document.querySelector(".box");

    if(screen.innerHTML.length <= 7){
        if(isAdd){
            screen.innerHTML = "0";
        }
        if(isMinus){
            screen.innerHTML = "0";
        }
        if(isMultiply){
            screen.innerHTML = "0";
        }
        if(isDivide){
            screen.innerHTML = "0";
        }


        if(screen.innerHTML == "0"){
            if(buttonClicked.innerText == ".")
                screen.innerHTML += buttonClicked.innerText;
            else
                screen.innerHTML = buttonClicked.innerText;
        }
        else{
            if(buttonClicked.innerText == "."){
                if(screen.innerHTML.indexOf(buttonClicked.innerText) != -1){
                    // Already have a . on the screen, so ignore this one
                }
                // Add to the screen output
                else{
                    screen.innerHTML += buttonClicked.innerText;
                }
            }
            else{
                screen.innerHTML += buttonClicked.innerText;
            }

        }
    }

    else{
        // Do nothing
    }

}

function clearScreen() {
    var screen = document.querySelector(".box");
    screen.innerHTML = "0";
    cCount++;
    if(cCount == 2){
        num = 0;
        result = 0;
        console.log("Num forgotten");
        cCount = 0;
    }
}

function addButton() {
    var screen = document.querySelector(".box");
    num = parseInt(screen.innerHTML);
    isAdd = true;
}

function minusButton(){
    var screen = document.querySelector(".box");
    num = parseInt(screen.innerHTML);
    isMinus = true;
}

function multiplyButton(){
    var screen = document.querySelector(".box");
    num = parseInt(screen.innerHTML);
    isMultiply = true;
}

function divideButton(){
    var screen = document.querySelector(".box");
    num = parseInt(screen.innerHTML);
    isDivide = true;
}

function equalsButton(){
    var screen = document.querySelector(".box");
    if(isAdd){
        result += num;
        num = parseInt(screen.innerHTML);
        result += num;
        isAdd = false;
    }
    if(isMinus){
        result = num;
        console.log(result);
        num = parseInt(screen.innerHTML);
        result -= num;
        console.log(result);
        isMinus = false;
    }
    if(isMultiply){
        result = num;
        num = parseInt(screen.innerHTML);
        result *= num;
        isMultiply = false;
    }
    if(isDivide){
        result = num;
        num = parseInt(screen.innerHTML);
        result /= num;
        isDivide = false;
    }

    if(result.toString().length > 7)
        screen.innerHTML = "Num too long";
    else
        screen.innerHTML = result.toString();
    
}