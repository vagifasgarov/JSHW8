let result = "";

function update(){
document.getElementById('output').innerText = result;

}

function numberAdd(number){
    result += number ;
    update();
}
function hundredTime(){
    result = 100*result
    update()
}

function operate(operator){
    if(operator == "sqrt"){
        result = Math.sqrt(result);
        update()
    }
    else if (operator == "**"){
        result = Math.pow(result,2)
        update()
    }
        else{
            result += " " + operator + " "
            
        } 
        update()
    }
function print(){
try{
    result=eval(result).toString();
    update()
}
catch(error){
    alert("CORRECT YOUR INPUT!")
    reset()

}
}
function reset(){
    result = ""
    update()
}
    
