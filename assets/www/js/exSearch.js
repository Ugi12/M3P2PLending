function resultPage()

function exSearch() {
    var name = document.getElementById("name").value;
    var wDate = document.getElementById("Wdate").value;
    var favored = document.getElementById("favored").checked;
    var own = document.getElementById("own").checked;

    console.log(name);
    console.log(wDate);
    console.log(favored);
    console.log(own);

    if (!name) {
        alert("Kein Suchwort eingetragen");
        return false;
    }

    if (!wDate) {
        wDate = false;
    }

    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "SELECT ad_id, ad_creator_id, ad_title FROM ads",//"SELECT * FROM ads JOIN favs on ads.ad_creator_id = favs.fav_user_id",
        function(data4) {
            console.log(data4);
            for (var i=0; i<data4.Result.length;i++) {
                
            }
        });
    return false;
}
