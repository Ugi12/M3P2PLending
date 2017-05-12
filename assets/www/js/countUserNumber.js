function createNewUserId() {
    var parUserid = 0

    MySql.Execute(
    "sql3.freemysqlhosting.net",
    "sql3173783",
    "NDQRtTqcvt",
    "sql3173783",
    "SELECT Count(*) FROM users",
    function (data2) {
        console.log(data2);
        parUserid = data2.Result[0]["Count(*)"] + 1;
        console.log("Userid: " + parUserid);
    });
    return parUserid;
}
