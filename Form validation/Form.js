function form(){
    var userName = document.getElementById("user_name").value;
    var userEmail = document.getElementById("user_email").value;
    var userPhone = document.getElementById("user_num").value;
    var userPass = document.getElementById("user_pass").value;
    var confirmPass = document.getElementById("confirm").value;
    let userInput = document.getElementById("date").value;
    userInput.max = new Date().toISOString().split("T")[0];
    var college = document.getElementById("clg").value;

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const phoneError = document.getElementById("phone-error");
         const passError = document.getElementById("pass-error");
         const pass1Error = document.getElementById("pass1-error");
        
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        passError.innerHTML = "";
        pass1Error.innerHTML = "";

    //Name validation
   var useChar = /^[A-Za-z ]+$/;
    if(userName == ""){
        nameError.innerHTML = "Please fillup the name";
        return false;
    }
    if(userName.length < 5){
        nameError.innerHTML = "name must be atleast 5 characters";
        return false;
    }
    if(userName.length > 20){
        return false;
    }
    if(userName.match(useChar))
        true;
    else{
        nameError.innerHTML = "**Only alphabates are allowed ";
        return false;
    }


    // Email validation
     if(userEmail.indexOf('@') === 0){
        emailError.innerHTML = "Invalid @ position";
        return false;
    }
    if (userEmail=== "" || !userEmail.includes("@")) {
        emailError.innerHTML =
            "Please enter a valid email address.";
        return false;
    }
     if(userEmail.charAt(userEmail.length - 4) != "." && userEmail.charAt(userEmail.length - 3) != "."){
        emailError.innerHTML = "Invalid . position";
        return false;
     }

    // Phone number validation
     if(!userPhone){
        phoneError.innerHTML = "Please Enter Mobile Number";
        return false;
      }
     if(isNaN(userPhone)){
         phoneError.innerHTML = "Please enter numeric value only";
         return false;
     }
    if(!/^\d{10}$/.test(userPhone)){
        phoneError.innerHTML = "Mobile number should be 10 digits";
        return false;
    }

    // Password validation
    const useChar2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@.#$!%*?&]{8,15}.$/;
    if(userPass == ""){
        passError.innerHTML = "Please Fill password";
        return false;
    }
    if(userPass.length < 8){
        passError.innerHTML = "password must be atleast 8 character";
        return false;
    }
    if(!useChar2.test(userPass)){
        passError.innerHTML = "password must be include atleast one uppercase one lowercase one number and one special chsaracter";
        return false;
    }
    if(userPass != confirmPass){
        pass1Error.innerHTML = "Password not matched";
        return false;
    }    
}