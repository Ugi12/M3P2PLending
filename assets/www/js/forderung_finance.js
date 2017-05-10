$(document).ready(function(){
    
    //$("#forderung").hide();

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

    $("#back").click(function(){
        //$("#list").show();
        $("#forderung").hide();
    });

    $("#finance").click(function(){

        function populateDB(tx){
            titel = $("#titel").val();
            betrag = $("#betrag").val();
            laufzeit = $("#laufzeit").val();
            beschreibung = $("#beschreibung").val();

            tx.executeSql('CREATE TABLE IF NOT EXISTS INVESTMENTS (id_forderung, id_user)');

            tx.executeSql('INSERT INTO USER (id_forderung, id_user) VALUES ()');
        }

        function errorCB(err) {
            alert("Error processing SQL: " + err.code);
        }

        function successCB() {
            alert("Ihre Finanzierung wurde erfolgreich durchgeführt.");
        }
        
    });
});
