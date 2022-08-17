

document.getElementById("withdrow-button").addEventListener("click", function(){
    const withdrowValue = getValueInputFild('withdrow-input');

    if(isNaN(withdrowValue)){
        return alert("WRONG! Please enter valid Ammount.")
    }
    else{
        const currentValue = getInnerTextValue('current-fild');

        if(currentValue < withdrowValue){
            return alert("WRONG! Your Current Ammout is Low!!")
        }
        else{
            setValueToinnertext('withdrow-fild', withdrowValue);
            document.getElementById('current-fild').innerText = currentValue - withdrowValue;

        }
    }
    
});