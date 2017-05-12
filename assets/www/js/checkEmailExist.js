var MySql2 = {
    _internalCallback : function() { console.log("Callback not set")},
    Execute: function (Host2, Username2, Password2, Database2, Sql2, Callback2) {
        MySql._internalCallback = Callback2;
        // to-do: change localhost: to mysqljs.com
        var strSrc2 = "http://mysqljs.com/sql.aspx?";
        strSrc2 += "Host=" + Host2;
        strSrc2 += "&Username=" + Username2;
        strSrc2 += "&Password=" + Password2;
        strSrc2 += "&Database=" + Database2;
        strSrc2 += "&sql=" + Sql2;
        strSrc2 += "&Callback=MySql._internalCallback";
        var sqlScript2 = document.createElement('script');
        sqlScript2.setAttribute('src', strSrc2);
        document.head.appendChild(sqlScript2);
    }
};

function checkIfEmailExist(parEmail) {
    var exist = false;

    MySql2.Execute(
    "sql3.freemysqlhosting.net",
    "sql3173783",
    "NDQRtTqcvt",
    "sql3173783",
    "SELECT * FROM users WHERE user_email = '" + parEmail + "'",
    function (data1) {
        console.log(data1);
        if (data1.Result.length !== 0) {
            alert("Email existiert schon");
            exist = true;
        }
        console.log(exist);
    });

    return exist;
}

