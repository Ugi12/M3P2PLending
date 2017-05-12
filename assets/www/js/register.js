
function register() {
    var vorname = document.getElementById("vname").value;
    var nachname = document.getElementById("nname").value;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var telephone = document.getElementById("tele").value;
    var iban = document.getElementById("iban").value;
    if (password !== password1) {
        alert("Password is not the same");
        return false;
    }

    var exist = false;

    MySql.Execute(
    "sql3.freemysqlhosting.net",
    "sql3173783",
    "NDQRtTqcvt",
    "sql3173783",
    "SELECT * FROM users WHERE user_email = '" + email + "'",
    function (data1) {
        if (data1.Result.length !== 0) {
            alert("Email existiert schon");
            exist = true;
        }
});

    if (exist === true) {
        return false;
    }

    var userid = 0;

    MySql.Execute(
    "sql3.freemysqlhosting.net",
    "sql3173783",
    "NDQRtTqcvt",
    "sql3173783",
    "SELECT Count(*) FROM users",
    function (data2) {
        userid = data2.Result[0]["Count(*)"];
});

//Später
//    MySql.Execute(
//    "sql3.freemysqlhosting.net",
//    "sql3173783",
//    "NDQRtTqcvt",
//    "sql3173783",
//    "INSERT INTO users VALUES(" + userid + ", '" + vorname + "', '"+ nachname + "', '" + password + "', '" + email +  "', ");
//    );
    return false;
};

