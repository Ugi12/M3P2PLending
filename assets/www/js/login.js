
// check input data @ login page
$(document).ready(function(){

    alert("Test Zugang. email=admin@mail.com, pw=password");

    $("#loginSubmit").click(function(){
        var email    = $("#email").val();
        var password = $("#password").val();
        var pw  = false;
        var eml = false;

        //SQL Query
        MySql.Execute(

            "sql3.freemysqlhosting.net",
            "sql3173783",
            "NDQRtTqcvt",
            "sql3173783",
            "select * from users",
            function (data) {

                var tmp = data.Result[0];

                //check input data is correct
                for (var key in tmp) {
                    if (tmp.hasOwnProperty(key) ) {
                        if(password === tmp[key]){
                            pw = true;
                        }
                    }

                    if (tmp.hasOwnProperty(key) ) {
                        if(email === tmp[key]){
                            eml = true;
                        }
                    }
                }
            // after success input load profile page
            if(pw === true && eml === true){
                window.document.location.href = 'html/Profile.html';
            }else{
                alert("Email oder Passwort falsch, versuche bitte erneut");
                window.document.location.href = 'index.html';

            }
        });



    });




});