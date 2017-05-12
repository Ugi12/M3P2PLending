
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

    if(checkIfEmailExist()) {
        return false;
    }

    var userid = createNewUserId();

    if (!telephone) {
        telephone = null;
    }
    if (!iban) {
        iban = null;
    }

//    MySql.Execute(
//    "sql3.freemysqlhosting.net",
//    "sql3173783",
//    "NDQRtTqcvt",
//    "sql3173783",
//    "INSERT INTO users VALUES(" + userid + ", '" + vorname + "', '"+ nachname + "', '" + password + "', '" + email +  "', true, null, '"+ telephone + "', null, " + iban  +"');",
//    function(data3) {
//        console.log(data3);
//    });
    return false;
};

