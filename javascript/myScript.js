$(document).ready(function() {
    
    $(".navBtn").click(function(){
        $(".banner ul").slideToggle();
    });
    //form submission
    
    //hide error msg box
    $("#response").hide();
    
    //submission
    $("#submit").click(function(e) {
        //prevent automatically submitting form
        e.preventDefault();
        
        var valid = "",
            required = " is required",
            name = $("form #name").val(),
            email = $("form #email").val(),
            phone = $("form #phone").val(),
            message = $("form #msg").val();
        
        if (name == "" || name.length <= 2) {
            valid = "<p>Your name"+ required +"</p>";
        }
        if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
            valid += "<p>Your email " +required+"</p>";
            }
        if (message == "" || message.length <= 5) {
            valid += "<p>A message is " +required+"</p>";
        }
        
        if (valid != "") {
            $("form #response").removeClass().addClass("error").html("<strong>Please correct the errors below</strong>"+ valid).fadeIn("fast");
        }
        else {
            $("form #response").removeClass().addClass("processing").html("<img src='images/loader.gif'>").fadeIn("fast");
            
            var formData = "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message;
            //var formData = $("form").serializeArray();
            
            //console.log(formData);
            submitForm(formData);
        }
            
                 
    }); //form submit function end
    
}); //document ready function end

function submitForm(formData) {
    $.ajax({
        type: 'POST',
        url: 'form.php',
        data: formData,
        success: function(data) {
            console.log(data);
            $("form #response").removeClass().addClass("processing").html("Message sent :\)").fadeIn('fast');
        }
    });
}