export class Contact{
    constructor(){
        this.validate();
        this.checkbutton();
    }

    validate(){
        $(".contact-section").show();

        $("#submit").addClass("disabled");

        let phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/;
        let phoneResult;

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let emailResult;

        var passwordResult;


           
        if ($("#c-password").val() === $("#c-repassword").val()) {
            passwordResult = true;
        } else {
            passwordResult = false; 
        }

        document.getElementById("c-phone").addEventListener('keyup',function(){
            phoneResult = phoneRegex.test($("#c-phone").val());
            console.log(phoneResult)
            if(phoneResult && emailResult && passwordResult){
                $("#submit").removeClass("disabled");
            } else {
                $("#submit").addClass("disabled");
            }

        });   

        document.getElementById("c-email").addEventListener('keyup',function(){
            emailResult = emailRegex.test($("#c-email").val());
            console.log(emailResult)
            if(phoneResult && emailResult && passwordResult){
                $("#submit").removeClass("disabled");
            } else {
                $("#submit").addClass("disabled");
            }

        });

        
    }

          
    
    
}
