var val=document.getElementById("login-btn")
var email=document.getElementById("email")
var password=document.getElementById("password")
function btn(){ 
     var setvalue = localStorage.setItem("email",email.value)
     var setpass= localStorage.setItem("password",password.value)
    
     if(email.value === "" || password.value === ""){
         swal("Please enter correctly")
        }
        else{
         window.location = "card.html";
        }
}