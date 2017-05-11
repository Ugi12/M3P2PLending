alert('statistik.js loaded!');
$(document).ready(function(){
    var myID = 1;
    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "select * from ads where (ad_creator_id='"+ myID +"' and ad_status<>0)or ad_investor_id='"+ myID +"'",
        function (data) {
            alert('DB Success -> ' + data.Success);
            var gesamt_zinskosten = 0;
            var gesamt_profit = 0;
            var gesamt_zukunfts_zinskosten = 0;
            var gesamt_zukunfts_profit = 0;

            data.Result.forEach(function(entry) {
                console.log(entry);
                var title = entry.ad_title;
                var amount = entry.ad_amount;
                var rate = entry.ad_rate;
                var runningtime = entry.ad_runningtime;
                var status = entry.ad_status;
                var creator = entry.ad_creator_id;
                var investor = entry.ad_investor_id;
               // var investment_date = new Date(Date.parse(entry.ad_investment_date.replace('-','/','g')));
                var heute = new Date();

                var htmlText = "";
                var profit = 0;
                var zinskosten = 0;
                var zukunfts_profit = 0;
                var zukunfts_zinskosten = 0;


                if (status = 2){
                    // Abgeschlossene Forderungen
                    if(creator = myID){
                        zinskosten = amount * (rate / 100);
                        htmlText = '<div class="account-wall">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label class="right">Status: </label>';
                        htmlText += '    <label class="ad_status">Abgeschlossen</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Zinskosten: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ zinskosten +'</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Abgeschlossenes Investment
                    if(investor = myID){
                        profit = amount * rate;
                    }
                }
                if (status = 1){
                    // Laufende Forderung
                    if(creator = myID){

                    }
                    // Laufendes Investment
                    if(investor = myID){

                    }
                }
            });

    });
});