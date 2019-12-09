
  var cookieContent = "";
  var cookie="";
  var cookiel="";
  var logged = localStorage.getItem("logged");


  function showhambur(elem){
    document.getElementById(elem).style.display="block";
  }
  function showEdit(elem){
    document.getElementById("projectid").value= elem;
    document.getElementById("edit").style.display="block";
    alert("afsddas");
  }

  function changeText(){
    document.getElementById(document.getElementById("projectid").value).innerHTML= document.getElementById("newname").value;
    document.getElementById("edit").style.display="none";
  }

  function hide_all(){
    hideProject("tasks_project_1");
    hideProject("tasks_project_2");
    hideProject("tasks_project_3");
    hideProject("tasks_project_4");
    hideProject("tasks_project_5");
  }

  function hide_and_show (elem, elem2){
    hideProject("tasks_project_1");
    hideProject("tasks_project_2");
    hideProject("tasks_project_3");
    hideProject("tasks_project_4");
    hideProject("tasks_project_5");

    showProject(elem);
    document.getElementById("title_of_project").innerHTML= document.getElementById(elem2).innerHTML;
  }


  function hideColumn (elem) {
      if(confirm("¿Are you sure you want to remove it?")){
      document.getElementById(elem).style.display="none";
    }
    var elements = document.getElementsByClassName("lowline");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.position="relative";
    }
  }

  function hideProject(elem){
      document.getElementById(elem).style.display="none";
  }

  function showProject(elem){
    document.getElementById(elem).style.display="contents";
}


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

  function newTask(){
    var description = document.getElementById("new_task_description").value;
    var name = document.getElementById("new_task_name").value;
    var project = document.getElementById("title_of_project").value;

    var model_project = "tasks_project_";
    console.log($("#projectWindow > div").length);
    var n_div = $("#projectWindow > div").length;

    for(var b= 1;b<n_div;b++){
      var my_id = model_project + b;
      if("none" != document.getElementById(my_id).style.display){
        b = n_div +5;
      }
    }

    n_div = $("#"+my_id+" > div").length + 1;
    my_new_task_id="task" + b + "_" + n_div;
    var taskHistory = document.getElementById(my_id).lastElementChild;
    taskHistory.insertAdjacentHTML("afterend",'<div id="'+my_new_task_id +'" class="task"><div class="task_container"><div class="tick"><input type="checkbox" value="Option 1" name="option_1" id="option_1" /></div><div class="task_name">'+name+'</h4></div><div class="task_description"><h4 class="text_task_description">'+description+'</h4></div><div class="task_hamburguer"><img href=# onclick="hideColumn('+"'"+my_new_task_id+"'"+')" src="images/round-add-button.svg" class="task-icon1"></div></div></div>');


  }

  function showChat(){
    document.getElementById("showchat").style.display="grid";
    document.getElementById("showtask").style.display="none";
    document.getElementById("body").style.display="none"
    document.getElementById("companylogo").style.display="none";
  }
  function showTask(){
    document.getElementById("showtask").style.display="grid";
    document.getElementById("showchat").style.display="none";
    document.getElementById("body").style.display="none"
    document.getElementById("companylogo").style.display="none";
  }
  function showIndex(){
    document.getElementById("showchat").style.display="none";
    document.getElementById("companylogo").style.display="inline";
    document.getElementById("body").style.display="flex";
    checkLogin();
  }


  function checkLogin(){
    var logged = localStorage.getItem("logged");
    if(logged=="true"){
      document.getElementById("HeaderUsername").innerHTML= localStorage.getItem("username");
      document.getElementById("wusername").innerHTML= localStorage.getItem("username");
      document.getElementById("login").style.display="none";
      document.getElementById("header1").style.display="inline-block";
      document.getElementById("welcome1").style.display="inline-block";
      document.getElementById("header2").style.display="none";
      document.getElementById("welcome0").style.display="none";
      document.getElementById("username").style.display="inline-block";
      document.getElementById("logo").style.display="inline-block";
      document.getElementById("logo").src=localStorage.getItem("logo");
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
      localStorage.setItem("logged", "false");
      showIndex();
      alert("You logged out correctly");
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
      document.getElementById("logo").style.display="inline-block";
       if(content[3]!=""){
         localStorage.setItem("logo", content[3]);
         document.getElementById("logo").src=content[3];
       }
      else{
        localStorage.setItem("logo", "images/User.png");
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
