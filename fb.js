$(document).ready(function(){

    
    $("#signup_form").validate({
        rules:{
            Email:{
                
                required:true,
                minlength:4,
                
            },
            Password:{
                required:true,
                minlength:4,
                maxlength:6
            },
            Password_confirm:{
                required:true,
                minlength:4,
                maxlength:6,
                equalTo:"#Password"
            }
               },
               messages:{
                    Email:{
                        required:"enter valid email",
                        minlength:"enter atleast 4 charactor",
                        
                    },Password:{
                        required:"enter valid password"
                    }
               
            }
            
        })
        
    })

