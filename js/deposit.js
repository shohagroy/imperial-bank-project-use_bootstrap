

// get deposit button and set event lissener - funcion 
document.getElementById("deposit-button").addEventListener("click", function(){
    const depositInValue = getValueInputFild('deposit-input');

    if(isNaN(depositInValue)){
        return alert("WRONG! Please enter valid Ammount.")
    }
    else{
        const currentValue = getInnerTextValue("current-fild");

        setValueToinnertext("deposit-fild", depositInValue);
        document.getElementById("current-fild").innerText = currentValue + depositInValue;
    }

    

})