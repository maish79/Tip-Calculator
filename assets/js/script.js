function calculate(){
    let bill = document.getElementById("bill").value;
    let guest = document.getElementById("guest").value;
    let tip = document.getElementById("tip").value;

    let total = (bill + (bill *(tip/100)))/guest;

    document.getElementById("total").innerHTML= total;

}


