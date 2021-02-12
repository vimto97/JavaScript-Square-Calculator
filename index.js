function square(){
    var number = document.getElementById("number").value;
    ans = number * number;
    document.getElementById("total").innerHTML = ans;
    return;
}


document.getElementById("calculate").onclick = function() {
square();
      
};



