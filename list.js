const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const emailError = document.querySelector(".usermail");
const passwordError = document.querySelector(".password");

const loginSuccess = document.createElement("small");
loginSuccess.style.color = "green";
loginSuccess.style.display = "block";
loginForm.appendChild(loginSuccess);


const validEmails = ["JibrilBaller3@gmail.com", "MohaAbdi23@gmail.com"];


const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return "Invalid email format.";
    }
    if (!validEmails.includes(email)) {
        return "Email is not registered.";
    }
    return true;
};


const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$/;
    if (!passwordPattern.test(password)) {
        return "Password must be 6-8 characters, with at least one digit and one special character.";
    }
    return true;
};


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

   
    const emailValidationResult = validateEmail(emailValue);
    if (emailValidationResult !== true) {
        emailError.textContent = emailValidationResult;
    }

    
    const passwordValidationResult = validatePassword(passwordValue);
    if (passwordValidationResult !== true) {
        passwordError.textContent = passwordValidationResult;
    }

    
    if (emailValidationResult === true && passwordValidationResult === true) {
        loginSuccess.textContent = "Login successful!";
        
    }
});



/* 
1. checl if its a valid email 
2. check if the email address exist database
3. check if the password has a special charter a number and length of atleast eight charters 
*/
