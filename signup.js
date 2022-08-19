var val1=document.getElementById("signBtn")
var getemail=document.getElementById("getemail")
var getpassword=document.getElementById("getpassword")
var getfname = document.getElementById("getfname")
var getlname = document.getElementById("getlname")
function getbtn(){
var setvalue1 = localStorage.setItem("getemail",getemail.value);
var setpass1= localStorage.setItem("getpassword",getpassword.value);
var getfname1 = localStorage.setItem("getfname",getfname.value);

if(getfname.value === "" || getlname.value === ""){
    swal("PLEASE FILL THE FORM CORRECTLY")
   }
   else if(getemail.value === "" || getpassword.value === ""){
   swal("PLEASE FILL THE FORM CORRECTLY");
   }
   else{
    window.location = "index.html";
   }

// if(getemail.value === "" || getpassword.value === ""){
//     swal("Please enter correctly")
//    }
// if(getfname.value === "" || getlname.value === ""){
//     swal("Please enter name")
//    }
//    else{
//     window.location = "login.html";
//    }
}
