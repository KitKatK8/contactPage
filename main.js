
//password match detection. lets start with caching the dom elements necessary here. being: user input in password and confirm password fields.

let form = document.querySelector("form");

function matchDetection() {
    console.log("this works");
    let button = document.getElementsByClassName(".submitButton");
    let passwordInput = document.getElementByid(".password").value;
    let confirmInput = document.getElementByid(".confirmPassword").value;
    let message = document.querySelector(".message");

    button.addEventListener('submit', () => {
        console.log("test");
         message.textContent = "Passwords need to match.";
    });

    console.log(" Password:", passwordInput,'\n',"Confirm Password:",confirmPassword);
*/
   /* if(passwordInput.length != confirmInput.length){
        return message.textContent = "Passwords need to match.";
    }; */

}

