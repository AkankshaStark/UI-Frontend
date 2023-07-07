
const switchers = [...document.querySelectorAll('.switcher')]
switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

let signup = document.querySelector(".btn-signup");
let login = document.querySelector(".btn-login");

var attempt = 3; 
function validate(){
var username = document.getElementById("login-email").value;
var password = document.getElementById("login-password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "index.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("login-email").disabled = true;
document.getElementById("login-password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
function validatesignup(){
    var name =
        document.getElementById("signup-name").value;
    var email =
        document.getElementById("signup-email").value;
    var password =
        document.getElementById("signup-password").value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation
  
    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }
      
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
       
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }
  
    if(password.length <8){
        alert("Password should be atleast 8 character long");
        password.focus();
        return false;
  
    }
    alert ("Successful Signup");
 window.location = "index.html"; 
  
    return true;
}
