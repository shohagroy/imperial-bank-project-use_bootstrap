
// date and time function 
// date function 
const dayFunction = document.getElementById('day');
dayFunction.innerText = new Date().getDate();

const monthFunction = document.getElementById('month');
monthFunction.innerText = new Date().getMonth();

const yearFunction = document.getElementById('year');
yearFunction.innerText = new Date().getFullYear();

// // time function 
document.getElementById('hours').innerText = new Date().getHours();
document.getElementById('minite').innerText = new Date().getMinutes();


// statement Button 
document.getElementById('statement-button').addEventListener('click', function(){
    window.location.href = "statement.html";

    console.log("hellow world!")
})

// get value in inner input file - function 
function getValueInputFild(inputId){
    const inputIdFind = document.getElementById(inputId);
    const inputIdString = inputIdFind.value;
    const inputIdNumber = parseFloat(inputIdString);
    inputIdFind.value = "";
    return inputIdNumber;
}

// get value in inner text value - function 
function getInnerTextValue(innerid){
    const innerIdfild = document.getElementById(innerid);
    const inneridString = innerIdfild.innerText;
    const inneridNumber = parseFloat(inneridString);
    innerIdfild.value = "";
    return inneridNumber;
}

// set innettext valou function 

function setValueToinnertext(innerText, inputValue){
    const setInnerValue = document.getElementById(innerText);
    const setInnerString = setInnerValue.innerText;
    const setinnerNumber = parseFloat(setInnerString);

    setInnerValue.innerText = setinnerNumber + inputValue;
}
