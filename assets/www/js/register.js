function checkEmailExist(data, email) {
    console.log(data);
    var items = data.Result;
    for (var i = 0; i<data.Result.length; i++) {
        if (data.Result[i].user_email === email) {
            return true;
        }
    }
    return false;
}

function insert(userid, vorname, nachname, email, password, enabled, telephone, iban, bic) {
    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "INSERT INTO users VALUES(" + userid + ", '" + vorname + "', '"+ nachname + "', '" + password + "', '" + email +  "', " + enabled + ", null, '"+ telephone + "', null, '" + iban  +"','" + bic +"');",
        function(data3) {
            console.log(data3);
            showResult();
        });
}

function showResult() {
    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "SELECT * FROM users",
        function(data4) {
            console.log(data4);
        });
}

function register() {
    var vorname = document.getElementById("vname").value;
    var nachname = document.getElementById("nname").value;

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var telephone = document.getElementById("tele").value;
    var iban = document.getElementById("iban").value;
    var bic = document.getElementById("bic").value;
    if (password !== password1) {
        alert("Password is not the same");
        return false;
    }

    var userid;

    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "SELECT * FROM users",
        function (data) {
            var exist = checkEmailExist(data, email);
            if (exist) {
                return false;
            }
            userid = data.Result.length+1;
            console.log("userid:" + userid);
            if (!telephone) {
                telephone = null;
            }
            if (!iban) {
                iban = null;
            }

            var enabled = true;
            console.log("bic: " + bic);
            if (!bic || (bic.substring(0,5) != "erste")) {
                enabled = false;
                console.log("bic: " + bic);
                console.log("enabled: " + enabled);
            }

            console.log("enabled: " + enabled);
            insert(userid, vorname, nachname, email, password, enabled, telephone, iban, bic);
            return false;
        });

    return false;
}

