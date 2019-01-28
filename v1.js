
$(document).ready(function(){

    $("#submit").click(function(e){
        e.preventDefault();
       
       var userObj={};
       var result = $(":input").serializeArray();
       // $( "#Results").empty();
       jQuery.each(result,function(i,input){
           //userObj[input.name]=input.value;
           
           userObj[input.name] = input.value;
       
          if(input.value == "") {
              alert(input.name + " invalid!!");
          }
          else if(input.value != "") {
              if((input.name == 'Firstname') && (input.value[0]>=0 && input.value[0]<=9)){
                  alert("First Name should start with charatcter");
                  
                  
              }
              else if((input.name == 'Lastname') && (input.value[0]>=0 && input.value[0]<=9)){
                  alert("Middle Name should start with charatcter");
                  
              }
              else if((input.name == 'Middlename') && (input.value[0]>=0 && input.value[0]<=9)){
                  alert("Last Name should start with charatcter");
                  
              }
              else if((input.name == 'Password') && (input.value.length <= 6))
                    alert("Password is too Small");
                    
              
            }
            else
            {
                userObj[input.name] = input.value;
                
              
            }
        });
        if(JSON.stringify(userObj) != '{}')
        {
            $("#tb").append('<tr><td>'+userObj.Firstname+
            '</td>'+'<td>'+userObj.Lastname+
            '</td>'+'<td>'+userObj.Middlename+
            '</td>'+'<td>'+userObj.Email+
            '</td>'+'<td>'+userObj.Password+
            '</td>'+'<td>'+userObj.Gender+
            '</td>'+'<td>'+userObj.Hobbies+'</td></tr>');
        
        }
    });
});
