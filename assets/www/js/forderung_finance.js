$(document).ready(function(){
    
    //$("#forderung").hide();
    /*
    $("#show").click(function(){
        
        var titel = $("#titel").val();
        var betrag = $("#betrag").val();
        var laufzeit = $("#laufzeit").val();
        var beschreibung = $("#beschreibung").val();

        $("#titels").text(titel);
        $("#betrag_view").val(betrag);
        $("#laufzeit_view").val(laufzeit);
        $("#beschreibung_view").val(beschreibung);
        $("#rating_view").val(betrag);
        $("#zins_view").val(betrag);

        $("#add_form").hide();
        $("#add_view").show();
    });
    */

    $("#back").click(function(){
        //$("#list").show();
        $("#forderung").hide();
    });

    $("#finance").click(function(){

        titel = $("#titel").val();
        betrag = $("#betrag").val();
        laufzeit = $("#laufzeit").val();
        beschreibung = $("#beschreibung").val();

        MySql.Execute(
            "sql3.freemysqlhosting.net",
            "sql3173783",
            "NDQRtTqcvt",
            "sql3173783",
            "update ads set ad_investor_id = 2, ad_investment_date = '', ad_status = 1",
            function (data) {
                for (var key in data) {
                  if (data.hasOwnProperty(key)) {
                    alert(key + " -> " + data[key]);
                    if(data[key] == true){
                        alert("Ihre Forderung wurde erfolgreich gespeichert!");
                    }
                    else{
                        alert("nix");
                    }
                  }
                }
            }
         );

    });
});
