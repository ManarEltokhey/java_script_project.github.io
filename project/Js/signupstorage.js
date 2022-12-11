// function signup(e){
//     event.preventDefault();
//     // console.log('working');
//      var email=document.getElementById("inpEmail").value;
//      var pass=document.getElementById("inpPass").value;
//      var user= {
//      inpEmail: email,
//      inpPass : pass,
//      };
//       var json=JSON.stringify(user);
//       localStorage.setItem(user,json);
//       console.log("user added");
//   }
//    function loginFun(e){
//      event.preventDefault();
//      console.log('still working');
//       var email=document.getElementById('inpEmail').value;
//      var pass=document.getElementById('inpPass').value;
//      var result=document.getElementById('result');


  
//     var user=localStorage.getItem(email);
//     var data=JSON.parse(user);
//     console.log(data);
//      }
// // function loginFun(e){
// //     event.preventDefault();
// //     // console.log('working');
// //      var email=document.getElementById("inpEmail").value;
// //      var pass=document.getElementById("inpPass").value;
// //      var user= {
// //      inpEmail: email,
// //      inpPass : pass,
// //      };
// //       var json=JSON.stringify(user);
// //       localStorage.setItem(user,json);
// //       console.log("user added");
// //   }
//     // function loginFun(e){
//     //     event.preventDefault();
//     //     // console.log('working');
//     //      var email=document.getElementById("inpEmail").value;
//     //      var pass=document.getElementById("inpPass").value;
//     //      var user= {
//     //      inpEmail: email,
//     //      inpPass : pass,
//     //      };
//     //      var json=JSON.stringify(user);
//     //      localStorage.setItem(user,json);
//     //      console.log("user added");
//     //   }
//     //   if(user == null){
//     //     // result.innerHTML='Wrong Email';
//     //     document.getElementById("result").innerHTML ='Wrong Email';
//     // }else if(email == data.inpEmail && pass == data.inpPass){
//     //     // result.innerHTML = 'logged in';
//     //     document.getElementById("result").innerHTML ='logged in';
//     //   }else{
//     //     // result.innerHTML = 'Wrong password';
//     //     document.getElementById("result").innerHTML ='Wrong password';
//     //   }

     
// // function setcookie(){
// //     var e=document.getElementById("inpEmail").value;
// //     var p=document.getElementById("inpPass").value;
// //     document.cookie="Myemail="+e+";path=http://localhost/web6pm/";
// //     document.cookie="Mypassword="+p+";path=http://localhost/web6pm/";
// // }

//  get values from user
function checkReg(){
    var valMobile = document.getElementById("Mobile").value;
    var valPsw = document.getElementById("psw").value;
    var valUserName = document.getElementById("inpName").value;
    var valEmail = document.getElementById("InpEmail").value;
// RegExp
var regMobile = /^01[0125][0-9]{8}$/gm
var regPsw = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
var regUserName = /^[A-z]{3,} [A-z]{3,}$/
var regEmail = /^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$/
// text RegExp on values
var resMobile=regMobile.test(valMobile);
var  resPsw= regPsw.test(valPsw);
 var resUserName = regUserName.test(valUserName);
 var resEmail = regEmail.test(valEmail);
    }


//Password
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    
    var valid=false
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {

      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        valid=true

      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        valid=false
      }
      
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        valid=true
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        valid=false
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
        valid=true
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
        valid=false
      }
      
      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        valid=true
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        valid=false
      }

      if(valid){
        var btn =getElementById("btnSignUp")
        btn.style.disabled=true;
      }

    }

   if(valid==false){
        var btn =getElementById("btnSignUp")
        btn.disabled=true;
      }




function store(){

    var name = document.getElementById('inpEmail');
    var pw = document.getElementById('psw');
    
    if(name.value.length == 0){
    }else if(pw.value.length == 0){

    }else if(name.value.length == 0 && pw.value.length == 0){
    }
    else{
        console.log(pw)
        localStorage.setItem('inpEmail', name.value);
        localStorage.setItem('psw', pw.value);
        alert('Your account has been created');
    }
    }

    // else if(pw.value.length > 8){
    //     alert('Max of 8');

    // }else if(!pw.value.match(numbers)){
    //     alert('please add 1 number');

    // }else if(!pw.value.match(upperCaseLetters)){
    //     alert('please add 1 uppercase letter');

    // }else if(!pw.value.match(lowerCaseLetters)){
    //     alert('please add 1 lovercase letter');

    //}
  
//}
function check(){
    var storedName = localStorage.getItem('inpEmail');
    var storedPw = localStorage.getItem('psw');

    var userName = document.getElementById('inpEmail');
    var userPw = document.getElementById('inpPass');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}
     