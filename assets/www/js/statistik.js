$(document).ready(function(){

    function computeRateValue(xrate, xamount, xrunningtime){
        var x = 0;
        x = (xamount * xrate * xrunningtime) / 1200;
        return x;
    }

    function computeRunningtimeLeft(startdate, xrunningtime){
        var x = 0;
        var today = new Date();
        var year_start = startdate.getFullYear();
        var year_today = today.getFullYear();
        var month_start = startdate.getMonth();
        var month_today = today.getMonth();
        x = (year_start - year_today) * 12;
        x = x - month_start + month_today;
        x = xrunningtime - x;
        return x;
    }

    function Runden2Dezimalstellen(x) {
     Ergebnis = Math.round(x * 100) / 100 ;
     return Ergebnis;
    }

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
                var investment_date = new Date(entry.ad_investment_date);

                var htmlText = "";
                var profit = 0;
                var zinskosten = 0;
                var zukunfts_profit = 0;
                var zukunfts_zinskosten = 0;

                zinskosten = computeRateValue(rate, amount, runningtime);
                profit = zinskosten;

                if (status == 2){
                    // Abgeschlossene Forderungen
                    if(creator == myID){
                        gesamt_zinskosten += zinskosten;
                        htmlText = '<div class="panel panel-primary">';
                        htmlText += '    <div class="panel-heading">';
                        htmlText += '       <h3 class="panel-title">'+ title +'</h3>';
                        htmlText += '    </div>';
                        htmlText += '    <div class="panel-body">';
                        htmlText += '       <label>Status: </label>';
                        htmlText += '       <label>Abgeschlossen</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Geliehener Betrag: </label>';
                        htmlText += '       <label>'+ amount +' Euro</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Zinskosten: </label>';
                        htmlText += '       <label style="color:red;">'+ Runden2Dezimalstellen(zinskosten) +' Euro</label>';
                        htmlText += '   </div>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Abgeschlossenes Investment
                    if(investor == myID){
                        gesamt_profit += profit;
                        htmlText = '<div class="panel panel-primary">';
                        htmlText += '    <div class="panel-heading">';
                        htmlText += '       <h3 class="panel-title">'+ title +'</h3>';
                        htmlText += '    </div>';
                        htmlText += '    <div class="panel-body">';
                        htmlText += '       <label>Status: </label>';
                        htmlText += '       <label>Abgeschlossen</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Investierter Betrag: </label>';
                        htmlText += '       <label>'+ amount +' Euro</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Profit: </label>';
                        htmlText += '       <label style="color:green;">'+ Runden2Dezimalstellen(profit) +' Euro</label>';
                        htmlText += '   </div>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                }
                if (status == 1){
                    // Laufende Forderung
                    var timeLeft = computeRunningtimeLeft(investment_date, runningtime);
                    zukunfts_zinskosten = (zinskosten / runningtime) * timeLeft;
                    zukunfts_profit = zukunfts_zinskosten;
                    zinskosten = (zinskosten / runningtime) * (runningtime - timeLeft);
                    profit = zinskosten;
                    if(creator == myID){
                        gesamt_zinskosten += zinskosten;
                        gesamt_zukunfts_zinskosten += zukunfts_zinskosten;
                        htmlText = '<div class="panel panel-primary">';
                        htmlText += '    <div class="panel-heading">';
                        htmlText += '       <h3 class="panel-title">'+ title +'</h3>';
                        htmlText += '    </div>';
                        htmlText += '    <div class="panel-body">';
                        htmlText += '       <label>Status: L&auml;uft noch </label>';
                        htmlText += '       <label>'+ timeLeft +' Monat(e)!</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Geliehener Betrag: </label>';
                        htmlText += '       <label>'+ amount +' Euro</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Derzeitige Zinskosten: </label>';
                        htmlText += '       <label style="color:red;">'+ Runden2Dezimalstellen(zinskosten) +' Euro</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Zuk&uuml;nftige Zinskosten: </label>';
                        htmlText += '       <label style="color:red;">'+ Runden2Dezimalstellen(zukunfts_zinskosten) +' Euro</label>';
                        htmlText += '   </div>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Laufendes Investment
                    if(investor == myID){
                        gesamt_profit += profit;
                        gesamt_zukunfts_profit += zukunfts_profit;
                        htmlText = '<div class="panel panel-primary">';
                        htmlText += '    <div class="panel-heading">';
                        htmlText += '       <h3 class="panel-title">'+ title +'</h3>';
                        htmlText += '    </div>';
                        htmlText += '    <div class="panel-body">';
                        htmlText += '       <label>Status: L&auml;uft noch </label>';
                        htmlText += '       <label>'+ timeLeft +' Monat(e)!</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Investierter Betrag: </label>';
                        htmlText += '       <label>'+ amount +' Euro</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Derzeitiger Profit: </label>';
                        htmlText += '       <label style="color:green;">'+ Runden2Dezimalstellen(profit) +' Euro</label>';
                        htmlText += '       <br>';
                        htmlText += '       <label>Zuk&uuml;nftiger Profit: </label>';
                        htmlText += '       <label style="color:green;">'+ Runden2Dezimalstellen(zukunfts_profit) +' Euro</label>';
                        htmlText += '   </div>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                }
            });
            var fontcolor = "";
            if( (gesamt_profit - gesamt_zinskosten)<0 ){fontcolor = 'style="color:red;"';}
            else{fontcolor = 'style="color:green;"';}
            var fontcolor2 = "";
            if( (gesamt_zukunfts_profit - gesamt_zukunfts_zinskosten)<0 ){fontcolor2 = 'style="color:red;"';}
            else{fontcolor2 = 'style="color:green;"';}

            html_gesmat_text = document.getElementById("gesamt").innerHTML;
            html_gesmat_text +='                    <div class="panel panel-primary">';
            html_gesmat_text +='                        <div class="panel-heading">';
            html_gesmat_text +='                            <h3 class="panel-title">Aktuelle Bilanz</h3>';
            html_gesmat_text +='                        </div>';
            html_gesmat_text +='                        <div class="panel-body">';
            html_gesmat_text +='                            <label>Gewinnbetrag: </label>';
            html_gesmat_text +='                            <label style="color:green;">'+ Runden2Dezimalstellen(gesamt_profit) +' Euro</label>';
            html_gesmat_text +='                            <br>';
            html_gesmat_text +='                            <label>Zinskosten: </label>';
            html_gesmat_text +='                            <label style="color:red;">'+ Runden2Dezimalstellen(gesamt_zinskosten) +' Euro</label>';
            html_gesmat_text +='                            <br>';
            html_gesmat_text +='                            <label>Bilanz: </label>';
            html_gesmat_text +='                            <label '+ fontcolor +'>'+ Runden2Dezimalstellen(gesamt_profit - gesamt_zinskosten)+' Euro</label>';
            html_gesmat_text +='                        </div>';
            html_gesmat_text +='                    </div>';
            html_gesmat_text +='                    <div class="panel panel-primary">';
            html_gesmat_text +='                        <div class="panel-heading">';
            html_gesmat_text +='                            <h3 class="panel-title">Zukunfts Bilanz</h3>';
            html_gesmat_text +='                        </div>';
            html_gesmat_text +='                        <div class="panel-body">';
            html_gesmat_text +='                            <label>Gewinnbetrag: </label>';
            html_gesmat_text +='                            <label style="color:green;">'+ Runden2Dezimalstellen(gesamt_zukunfts_profit) +' Euro</label>';
            html_gesmat_text +='                            <br>';
            html_gesmat_text +='                            <label>Zinskosten: </label>';
            html_gesmat_text +='                            <label style="color:red;">'+ Runden2Dezimalstellen(gesamt_zukunfts_zinskosten) +' Euro</label>';
            html_gesmat_text +='                            <br>';
            html_gesmat_text +='                            <label>Bilanz:</label>';
            html_gesmat_text +='                            <label '+ fontcolor2 +'>'+ Runden2Dezimalstellen(gesamt_zukunfts_profit - gesamt_zukunfts_zinskosten) +' Euro</label>';
            html_gesmat_text +='                        </div>';
            html_gesmat_text +='                    </div>';
            document.getElementById("gesamt").innerHTML = html_gesmat_text;
    });
});