$(document).ready(function(){
      
    $("#sum").click(function(){ 
      let name=$("#name1").val();
      let city=$("#city1").val();
      let email=$("#email1").val();
     let pass=$("#password1").val();
     if(name.length==0 || city.length==0 || email.length==0 || pass.length==0)
     {
      alert("enter proper data");
     }
        else {
        $.ajax({
        url:" http://localhost:3000/array",
        type:"post",
        data: {
           "name":name,
           "city":city,
           "email":email,
           "password":pass

        },
        success: function(response,status,xhr)
        {
            window.location.replace("Login.html");
        },
        error:function(status)
        {
            alert("error"+status)
        }
    });
  }


    })
  })