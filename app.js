function getNumber(num){
    //console.log(num)
    var output = document.getElementById("output");
    output.value += num;
}

function clearResult(){
    var output = document.getElementById("output");
    output.value = "";
}

function getResult(){
    var output = document.getElementById("output");
    output.value = eval(output.value);
}

