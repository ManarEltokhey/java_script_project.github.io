function signup(e){
    event.preventDefault();
    // console.log('working');
     var email=document.getElementById("inpEmail").value;
     var pass=document.getElementById("inpPass").value;
     var user= {
     inpEmail: email,
     inpPass : pass,
     };
      var json=JSON.stringify(user);
      localStorage.setItem(user,json);
      console.log("user added");
  }
   function loginFun(e){
     event.preventDefault();
     console.log('still working');
      var email=document.getElementById('inpEmail').value;
     var pass=document.getElementById('inpPass').value;
     var result=document.getElementById('result');


  
    var user=localStorage.getItem(email);
    var data=JSON.parse(user);
    console.log(data);
     }
// function loginFun(e){
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
    // function loginFun(e){
    //     event.preventDefault();
    //     // console.log('working');
    //      var email=document.getElementById("inpEmail").value;
    //      var pass=document.getElementById("inpPass").value;
    //      var user= {
    //      inpEmail: email,
    //      inpPass : pass,
    //      };
    //      var json=JSON.stringify(user);
    //      localStorage.setItem(user,json);
    //      console.log("user added");
    //   }
    //   if(user == null){
    //     // result.innerHTML='Wrong Email';
    //     document.getElementById("result").innerHTML ='Wrong Email';
    // }else if(email == data.inpEmail && pass == data.inpPass){
    //     // result.innerHTML = 'logged in';
    //     document.getElementById("result").innerHTML ='logged in';
    //   }else{
    //     // result.innerHTML = 'Wrong password';
    //     document.getElementById("result").innerHTML ='Wrong password';
    //   }

     
// function setcookie(){
//     var e=document.getElementById("inpEmail").value;
//     var p=document.getElementById("inpPass").value;
//     document.cookie="Myemail="+e+";path=http://localhost/web6pm/";
//     document.cookie="Mypassword="+p+";path=http://localhost/web6pm/";
// }
     