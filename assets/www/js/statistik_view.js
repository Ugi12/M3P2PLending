function viewAd(adID) {
    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "select * from ads where ad_id='" + adID + "'",
        function (data) {
           // alert('DB Success -> ' + data.Success);
            data.Result.forEach(function(entry) {
                console.log(entry);
                var title = entry.ad_title;
                var amount = entry.ad_amount;
                var rate = entry.ad_rate;
                var runningtime = entry.ad_runningtime;
                var status = entry.ad_status;
                var creator = entry.ad_creator_id;
                var investor = entry.ad_investor_id;
                var investment_date = new Date(entry.ad_investment_date);
                var creditscore = entry.ad_creditscore;
                var description = entry.ad_description;

                $("#titels").text(title);
                $("#betrag_view").val(amount);
                $("#laufzeit_view").val(runningtime);
                $("#beschreibung_view").val(description);
                $("#rating_view").val(creditscore);
                $("#zins_view").val(rate);

                $("#add_view").show();
                $("#gesamt").hide();
                $("#pro_ad").hide();
            });
    });
}

$(document).ready(function(){
    $("#add_view").hide();
    $("#back").click(function(){
        $("#add_view").hide();
        $("#gesamt").show();
        $("#pro_ad").show();
    });
});