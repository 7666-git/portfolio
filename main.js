function onClickEvent(input){
    let val = document.getElementById(input).innerHTML
    document.getElementById("disp").value += val
}

function clearing(){
    document.getElementById("disp").value = ""
}

function calculate(){
    let input = document.getElementById("disp").value
    console.log(input)
    document.getElementById("disp").value = eval(input)
   
}