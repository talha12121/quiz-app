var val=document.getElementById("login-btn")
var newEmail=document.getElementById("email")
var newPassword=document.getElementById("password")
function btn(){ 
     var email = localStorage.getItem("email")
     var pass = localStorage.getItem("password")
     console.log(email)
     console.log(pass)

      if(newEmail.value === email && newPassword.value === pass){
        window.location="card.html"
    }else{
    swal("ENTER CORRECT EMAIL & PASSWORD")
    }
 
}