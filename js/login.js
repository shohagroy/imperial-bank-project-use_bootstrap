
// get login button and login function added
document.getElementById('login-button').addEventListener("click", function(){

    // get email value 
    const userEmail = document.getElementById("email-fild");
    const email = userEmail.value;

    // get password value 
    const userpass = document.getElementById('password-fild');
    const password = userpass.value;


    if(email == "" || password ==""){
        alert("Please Enter Your Email and Password!");
    }
    else{
        if(email == "abc@gmail.com" && password == "1234"){
            window.location.href = "dashbord.html";
        }
        else{
            alert("WRONG! Please enter correct email and password.")
        }
    }
    userEmail.value = "";
    userpass.value = "";
})