var addclassname = 'was-validated';
var removeclassname = 'needs-validation';

$(document).ready(function () {

    $('#loginform').submit(function (e) { 
        e.preventDefault();
        $(this).removeClass(removeclassname);
        $(this).addClass(addclassname);
        console.log($(this).serialize());
        $.ajax({
            type: "post",
            url: "./ajax/login.php",
            data: $(this).serialize(),
            dataType: "html",
            success: function (response) {
                console.log(response);
                if(response != "fail")
                {
                    var data = JSON.parse(response);
                    var text = data.name + "<br>" + data.sirname + "<br>" + data.email + "<br>" + data.dob ;
                    $('#overlay').css("display", "block");
                    $('#text').html(text);
                    $('#loginform')[0].reset();
                    $('#text').click(function (e) { 
                        e.preventDefault();
                        $('#overlay').css("display", "none");
                    });
                }
                else
                {
                    alert("invalid email or password oe un need to signup");
                    $('#loginform')[0].reset();
                }
            }
        });
    });

    $('#signupform').submit(function (e) { 
        e.preventDefault();
        $(this).removeClass(removeclassname);
        $(this).addClass(addclassname);
        console.log($(this).serialize());
        $.ajax({
            type: "post",
            url: "./ajax/update.php",
            data: $(this).serialize(),
            dataType: "html",
            success: function (response) {
                console.log(response);
                if(response != "fail")
                {
                    alert("Thank You");
                    $('#signupform')[0].reset();
                }
            }
        });
    });

});