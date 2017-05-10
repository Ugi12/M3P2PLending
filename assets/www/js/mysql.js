var MySql = {
    _internalCallback : function() { console.log("Callback not set")},
    Execute: function (Host, Username, Password, Database, Sql, Callback) {
        MySql._internalCallback = Callback;
        // to-do: change localhost: to mysqljs.com
        var strSrc = "http://mysqljs.com/sql.aspx?";
        strSrc += "Host=" + Host;
        strSrc += "&Username=" + Username;
        strSrc += "&Password=" + Password;
        strSrc += "&Database=" + Database;
        strSrc += "&sql=" + Sql;
        strSrc += "&Callback=MySql._internalCallback";
        var sqlScript = document.createElement('script');
        sqlScript.setAttribute('src', strSrc);
        document.head.appendChild(sqlScript);
    }
};

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