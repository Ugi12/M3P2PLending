// Link to phpmyadmin zum testen von sql befehlen
// https://u2831340.ct.sendgrid.net/wf/click?upn=eEpzx8Lj0S6zZ6zdOgTXWOVsbEfzkjSpaPCLOvQxGtA-3D_S3Ysil5CZbY-2BcU1OzhtQnANG9HGKW-2Bns3vo2w47bXjMti0bIse2ZGcbD8OPEnh3DvsXj2QgtWJ9QQdDiM81wYV5kLGdo9Opxt5O0QHk96DyNHRv-2FB9DRXFxYAMSr7Q6pmjijK6zyGPUwc5ckZTqRlL5k69o0lm7D2DcZaC9B5hQF0BsvorCWLkiiwKmTXrXz-2BAKy0mOGxQ5oHKE0oI-2FdTPQVb7CXH5WC7Xn95ddMHBw-3D

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