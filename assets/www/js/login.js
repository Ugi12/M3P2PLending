
// check input data @ login page
$(document).ready(function(){

    alert("Test Zugang. email=admin@mail.com, pw=password");

    $("#loginSubmit").click(function(){
        var email    = $("#email").val();
        var password = $("#password").val();
        var pw  = false;
        var eml = false;
        var user_id = null;

        //SQL Query
        MySql.Execute(

            "sql3.freemysqlhosting.net",
            "sql3173783",
            "NDQRtTqcvt",
            "sql3173783",
            "select * from users",
            function (data) {
                //check input data is correct
                data.Result.forEach(function(entry) {
                    if(entry.user_password === password && entry.user_email === email){
                        pw = true;
                        eml = true;
                        user_id = entry.user_id;
                    }
                });

            // after success input load profile page
            if(pw === true && eml === true){
                window.document.location.href = 'html/Profile.html';
            }else{
                alert("Email oder Passwort falsch, versuche bitte erneut");
                window.document.location.href = 'index.html';

            }
            localStorage.user = user_id;
        });



    });




});