$(document).ready(function(){
    var myID = 1;
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
                        htmlText = '<div class="account-wall-2">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label>Status: </label>';
                        htmlText += '    <label>Abgeschlossen</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Geliehener Betrag: </label>';
                        htmlText += '    <label>'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Zinskosten: </label>';
                        htmlText += '    <label style="color:red;">'+ zinskosten +' Euro</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Abgeschlossenes Investment
                    if(investor == myID){
                        profit = amount * (rate / 100);
                        gesamt_profit += profit;
                        htmlText = '<div class="account-wall-2">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label>Status: </label>';
                        htmlText += '    <label>Abgeschlossen</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Investierter Betrag: </label>';
                        htmlText += '    <label>'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Profit: </label>';
                        htmlText += '    <label style="color:green;">'+ profit +' Euro</label>';
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
                        htmlText = '<div class="account-wall-2">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label>Status: L&auml;uft noch </label>';
                        htmlText += '    <label>'+ 656 +' Monat(e)!</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Geliehener Betrag: </label>';
                        htmlText += '    <label>'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Derzeitige Zinskosten: </label>';
                        htmlText += '    <label style="color:red;">'+ zinskosten +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Zuk&uuml;nftige Zinskosten: </label>';
                        htmlText += '    <label style="color:red;">'+ zinskosten +' Euro</label>';
                        htmlText += '</div>';
                        htmlText += document.getElementById("pro_ad").innerHTML;
                        document.getElementById("pro_ad").innerHTML = htmlText;
                    }
                    // Laufendes Investment
                    if(investor == myID){
                        profit = amount * (rate / 100);
                        gesamt_zukunfts_profit += profit;
                        htmlText = '<div class="account-wall-2">';
                        htmlText += '    <h3 class="ad_title">'+ title +'</h3>';
                        htmlText += '    <label>Status: L&auml;uft noch </label>';
                        htmlText += '    <label>'+ 656 +' Monat(e)!</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Investierter Betrag: </label>';
                        htmlText += '    <label>'+ amount +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Derzeitige Profit: </label>';
                        htmlText += '    <label style="color:green;">'+ profit +' Euro</label>';
                        htmlText += '    <br>';
                        htmlText += '    <label>Zuk&uuml;nftige Profit: </label>';
                        htmlText += '    <label style="color:green;">'+ profit +' Euro</label>';
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
            html_gesmat_text +='                    <div class="account-wall-2">';
            html_gesmat_text +='                        <h3 id="titel1" class="ad_title">Gesmat derzeitig</h3>';
            html_gesmat_text +='                        <label>Gewinnbetrag: </label>';
            html_gesmat_text +='                        <label style="color:green;">'+ gesamt_profit +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label>Zinskosten: </label>';
            html_gesmat_text +='                        <label style="color:red;">'+ gesamt_zinskosten +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label>Bilanz: </label>';
            html_gesmat_text +='                        <label '+ fontcolor +'>'+ (gesamt_profit - gesamt_zinskosten)+' Euro</label>';
            html_gesmat_text +='                    </div>';
            html_gesmat_text +='                    <div class="account-wall-2">';
            html_gesmat_text +='                        <h3 id="titel2" class="ad_title">Gesamt bevorstehend</h3>';
            html_gesmat_text +='                        <label>Gewinnbetrag: </label>';
            html_gesmat_text +='                        <label style="color:green;">'+ gesamt_zukunfts_profit +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label>Zinskosten: </label>';
            html_gesmat_text +='                        <label style="color:red;">'+ gesamt_zukunfts_zinskosten +' Euro</label>';
            html_gesmat_text +='                        <br>';
            html_gesmat_text +='                        <label>Bilanz:</label>';
            html_gesmat_text +='                        <label '+ fontcolor2 +'>'+ (gesamt_zukunfts_profit - gesamt_zukunfts_zinskosten)+' Euro</label>';
            html_gesmat_text +='                    </div>';
            document.getElementById("gesamt").innerHTML = html_gesmat_text;
    });
});