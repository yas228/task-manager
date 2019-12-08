
  var cookieContent = "";
  var cookie="";
  var cookiel="";
  var logged = localStorage.getItem("logged");
  function checkLogin(){
    if(logged=="true"){
      document.getElementById("HeaderUsername").innerHTML= localStorage.getItem("username");
      document.getElementById("wusername").innerHTML= localStorage.getItem("username");
      document.getElementById("login").style.display="none";
      document.getElementById("header1").style.display="inline-block";
      document.getElementById("welcome1").style.display="inline-block";
      document.getElementById("body").style.display="flex";
      document.getElementById("header2").style.display="none";
      document.getElementById("welcome0").style.display="none";
      document.getElementById("username").style.display="inline-block";
      document.getElementById("logo").style.display="inline-block";
    }
     else{
      document.getElementById("header1").style.display="none";
      document.getElementById("header2").style.display="inline-block";
      document.getElementById("username").style.display="none";
      document.getElementById("welcome1").style.display="none";
      document.getElementById("welcome0").style.display="inline-block";
      document.getElementById("logo").style.display="none";
    }
}
  function deleteform(){
      document.getElementById("user").value="";
      document.getElementById("name").value="";
      document.getElementById("surname").value="";
      document.getElementById("email").value="";
      document.getElementById("pass").value="";
      document.getElementById("birth").value="";
      document.getElementById("terms").value="";
      document.getElementById("purpose").value="";
      document.getElementById("interests").value="";
      document.getElementById("languages").value="";

  }
  function logout(){
      document.getElementById("header1").style.display="none";
      document.getElementById("header2").style.display="inline-block";
      document.getElementById("username").style.display="none";
      document.getElementById("logo").src="images/User.png";
      localStorage.setItem("logged", "false");
      alert("You logged out correctly");
      window.location.replace("index.html");
      document.getElementById("welcome1").style.display="none";
      document.getElementById("welcome0").style.display="inline-block";
  }
  function login(){
    document.getElementById("login").style.display="block";
  }

  function register(){
    document.getElementById("register").style.display="block";
  }

  function getCookie(cname) {//get the cookie
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  function setCookie(cname,cvalue,exdays) {//set the cookie
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function checkCookie() { //check cookie on register and set it if it does not exist
       cookie=getCookie(document.getElementById("email").value);
       if(cookie==""){
         cookieContent = document.getElementById("email").value+","+document.getElementById("pass").value+","+document.getElementById("user").value+","+document.getElementById("img").value+","+document.getElementById("name").value+","+document.getElementById("surname").value+","+document.getElementById("birth").value+","+document.getElementById("interests").value+","+document.getElementById("languages").value+","+document.getElementById("purpose").value;
         setCookie(document.getElementById("email").value, cookieContent, 5);
         deleteform();
         document.getElementById("register").style.display="none";
         alert("You have registered correctly!");
         deleteform();
       }
       else{
         alert("User already exists");
       }
     }

    function checkLoginCookie(){ //check cookie on login
       cookiel=getCookie(document.getElementById("emaillogin").value);
       if(cookiel==""){
         alert("Email is not registered.");
         return;
       }
       var content = cookiel.split(",");
       if(content[1]!=document.getElementById("passlogin").value){
         alert("Incorrect password.");
        return;
       }
       localStorage.setItem("username", content[2]);
       document.getElementById("HeaderUsername").innerHTML= content[2];
       document.getElementById("wusername").innerHTML= content[2];
       document.getElementById("login").style.display="none";
       document.getElementById("header1").style.display="inline-block";
       document.getElementById("welcome1").style.display="inline-block";
       document.getElementById("body").style.display="flex";
       document.getElementById("header2").style.display="none";
       document.getElementById("welcome0").style.display="none";
       document.getElementById("username").style.display="inline-block";
       if(content[3]!=""){
         document.getElementById("logo").src=content[3];
       }
       localStorage.setItem("logged", "true");
       alert("You have logged in correctly!");
     }

  function show (elem) {
    elem.style.display="block";
  }
  function hide (elem) {
    elem.style.display="";
  }

  window.onclick = function(event) {
    var share = document.getElementById("sharepopup");
    var register = document.getElementById("register");
    var login = document.getElementById("login");
    var ham1 = document.getElementById("settings2");
    var ham2 = document.getElementById("settings3");
    var ham3 = document.getElementById("settings1");

    if (event.target == register) {
      register.style.display = "none";
    }
    if (event.target == login) {
      login.style.display = "none";
    }



  }

  checkLogin();



  function sendMessage(){
    var chat = document.getElementById("chat").value;
    var date = new Date();

    var chatHistory = document.getElementById("chatHistory").lastElementChild;
    chatHistory.insertAdjacentHTML ('afterend',
      "<div class=\"chatContainer darker\"><img src=\"./images/User.png\" alt=\"Avatar\" class=\"right\" style=\"width:100%;\"><p>"
      +chat+"</p><span class=\"time-left\">"+date.getHours()+":"+date.getMinutes()+"</span></div>"
    )
    setTimeout(function(){
      chatHistory = document.getElementById("chatHistory").lastElementChild;
      chatHistory.insertAdjacentHTML ('afterend',
      "<div class=\"chatContainer\"><img src=\"./images/User.png\" alt=\"Avatar\" class=\"left\" style=\"width:100%;\"><p>Sweet! So, what do you wanna do today?</p><span class=\"time-right\">"+date.getHours()+":"+date.getMinutes()+"</span></div>");
  }, 2000);
 
   document.getElementById("chat").value = "";


  }
