$(document).ready(function(){
    $("#btn1").click(function(){
      
    
     
        $.ajax ({
          url:" http://localhost:3000/array",
          type:"get",
          data:{
            "email":$("#email1").val(),
            "password":$("#password1").val()
          },
          success: function(response){
            let flag=0;
            if(response){
              for(let i=0;i<response.length;i++)
              {
                if(response[i].email===$("#email1").val() && response[i].password===$("#password1").val()){
                 // localStorage.setItem("val",JSON.stringify(response[i].id));
                 sessionStorage.setItem("val",JSON.stringify(response[i].id));
                  flag=1;
                  break;
                }
  
              }
              if(flag===1)
              {
                 sessionStorage.setItem("email",$("#email1").val());
               
               
                console.log("login successful");
                 window.location.replace("../html/homepage.html");
              }
              else 
              {
                console.log("login failed");
              }
            }
          },
            error:function(response){
              alert("error"+JSON.stringify(response));
            }
          });
        });
            
  
                
         
  
    });
    