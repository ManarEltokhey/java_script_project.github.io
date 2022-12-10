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

function store(){

    var name = document.getElementById('inpEmail');
    var pw = document.getElementById('psw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('inpEmail', name.value);
        localStorage.setItem('psw', pw.value);
        alert('Your account has been created');
    }
}
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
     