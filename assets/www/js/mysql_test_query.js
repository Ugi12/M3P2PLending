//Testing Execute
MySql.Execute(
    "sql3.freemysqlhosting.net",
    "sql3173783",
    "NDQRtTqcvt",
    "sql3173783",
    "select * from users",
    function (data) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            alert(key + " -> " + data[key]);
          }
        }
        var tmp = data.Result[0];
        for (var key in tmp) {
          if (tmp.hasOwnProperty(key)) {
            alert(key + " -> " + tmp[key]);
          }
        }
});