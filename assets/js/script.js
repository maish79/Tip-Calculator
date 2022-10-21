function calculate(){
    let bill = parseInt(document.getElementById("bill").value);
    let guest = parseInt(document.getElementById("guest").value);
    let tip = parseInt(document.getElementById("tip").value);

    let total =(bill + (bill*(tip*.01)))/guest;

    document.getElementById("total").innerHTML= total.toFixed(2);
    
    
    
    }



