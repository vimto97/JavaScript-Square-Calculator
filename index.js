function square(){
    var number = document.getElementById("number").value;
    ans = number * number;
    document.getElementById("total").innerHTML = ans;
    return;
}


document.getElementById("calculate").onclick = function() {
    var number = document.getElementById("number").value;
    if (number == 0 || number == String ){
        alert("Please enter a number!");
    }else{
    square();
    }
};



