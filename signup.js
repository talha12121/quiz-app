var val1=document.getElementById("signBtn")
var email1=document.getElementById("email1")
var password1=document.getElementById("password1")
var getfname = document.getElementById("getfname")
var getlname = document.getElementById("getlname")
function getbtn(){
var setvalue1 = localStorage.setItem("email",email1.value);
var setpass1= localStorage.setItem("password",password1.value);
var getfname1 = localStorage.setItem("getfname",getfname.value);

if(getfname.value === "" || getlname.value === ""){
    swal("PLEASE FILL THE FORM CORRECTLY")
   }
   else if(email1.value === "" || password1.value === ""){
   swal("PLEASE FILL THE FORM CORRECTLY");
   }
   else{
    window.location = "index.html";
   }

}
