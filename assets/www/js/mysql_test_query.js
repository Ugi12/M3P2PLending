// Link to phpmyadmin zum testen von sql befehlen
// https://u2831340.ct.sendgrid.net/wf/click?upn=eEpzx8Lj0S6zZ6zdOgTXWOVsbEfzkjSpaPCLOvQxGtA-3D_S3Ysil5CZbY-2BcU1OzhtQnANG9HGKW-2Bns3vo2w47bXjMti0bIse2ZGcbD8OPEnh3DvsXj2QgtWJ9QQdDiM81wYV5kLGdo9Opxt5O0QHk96DyNHRv-2FB9DRXFxYAMSr7Q6pmjijK6zyGPUwc5ckZTqRlL5k69o0lm7D2DcZaC9B5hQF0BsvorCWLkiiwKmTXrXz-2BAKy0mOGxQ5oHKE0oI-2FdTPQVb7CXH5WC7Xn95ddMHBw-3D
// HOST DATABASE PASSWORD USER sind unten zu lesen
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