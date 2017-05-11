$(document).ready(function(){
    var myID = 2;
    MySql.Execute(
        "sql3.freemysqlhosting.net",
        "sql3173783",
        "NDQRtTqcvt",
        "sql3173783",
        "select * from ads where (ad_creator_id='"+ myID +"' and ad_status<>0)or ad_investor_id='"+ myID +"'",
        function (data) {
 //           alert('DB Success -> ' + data.Success);
            var gesamt_zinskosten = 0;
            var gesamt_profit = 0;
            var gesamt_zukunfts_zinskosten = 0;
            var gesamt_zukunfts_profit = 0;
            var html_gesmat_text = "";
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

                if (status == 2){
                    // Abgeschlossene Forderungen
                    if(creator == myID){
                        zinskosten = amount * (rate / 100);
                        gesamt_zinskosten += zinskosten;
                        htmlText = '<div class="account-wall">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label class="right">Status: </label>';
                        htmlText += '    <label class="ad_status">Abgeschlossen</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Geliehener Betrag: </label>';
                        htmlText += '    <label class="ad_amount">'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Zinskosten: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ zinskosten +' Euro</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Abgeschlossenes Investment
                    if(investor == myID){
                        profit = amount * (rate / 100);
                        gesamt_profit += profit;
                        htmlText = '<div class="account-wall">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label class="right">Status: </label>';
                        htmlText += '    <label class="ad_status">Abgeschlossen</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Investierter Betrag: </label>';
                        htmlText += '    <label class="ad_amount">'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Profit: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ profit +' Euro</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                }
                if (status == 1){
                    // Laufende Forderung
                    if(creator == myID){
                        zinskosten = amount * (rate / 100);
                        gesamt_zukunfts_zinskosten += zinskosten;
                        htmlText = '<div class="account-wall">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label class="right">Status: L&auml;uft noch </label>';
                        htmlText += '    <label class="ad_status">'+ 656 +' Monat(e)!</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Geliehener Betrag: </label>';
                        htmlText += '    <label class="ad_amount">'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Derzeitige Zinskosten: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ zinskosten +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Zuk&uuml;nftige Zinskosten: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ zinskosten +' Euro</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Laufendes Investment
                    if(investor == myID){
                        profit = amount * (rate / 100);
                        gesamt_zukunfts_profit += profit;
                        htmlText = '<div class="account-wall">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label class="right">Status: L&auml;uft noch </label>';
                        htmlText += '    <label class="ad_status">'+ 656 +' Monat(e)!</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Investierter Betrag: </label>';
                        htmlText += '    <label class="ad_amount">'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Derzeitige Profit: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ profit +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label class="right">Zuk&uuml;nftige Profit: </label>';
                        htmlText += '    <label class="ad_zinskosten">'+ profit +' Euro</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                }
            });
            html_gesmat_text = document.getElementById("gesamt").innerHTML;
            html_gesmat_text +='                    <div class="account-wall">';
            html_gesmat_text +='                        <h3 id="titel1" class="left">Derzeitig</h3>';
            html_gesmat_text +='                        <label class="left">Gewinnbetrag: </label>';
            html_gesmat_text +='                        <label class="left">'+ gesamt_profit +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label class="left">Zinskosten: </label>';
            html_gesmat_text +='                        <label class="left">'+ gesamt_zinskosten +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label class="left">Bilanz: </label>';
            html_gesmat_text +='                        <label class="left">'+ (gesamt_profit - gesamt_zinskosten)+' Euro</label>';
            html_gesmat_text +='                    </div>';
            html_gesmat_text +='                    <div class="account-wall">';
            html_gesmat_text +='                        <h3 id="titel2" class="right">Bevorstehend</h3>';
            html_gesmat_text +='                        <label class="right">Gewinnbetrag: </label>';
            html_gesmat_text +='                        <label class="left">'+ gesamt_zukunfts_profit +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label class="right">Zinskosten: </label>';
            html_gesmat_text +='                        <label class="left">'+ gesamt_zukunfts_zinskosten +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label class="right">Bilanz:</label>';
            html_gesmat_text +='                        <label class="left">'+ (gesamt_zukunfts_profit - gesamt_zukunfts_zinskosten)+' Euro</label>';
            html_gesmat_text +='                    </div>';
            document.getElementById("gesamt").innerHTML = html_gesmat_text;
    });
});