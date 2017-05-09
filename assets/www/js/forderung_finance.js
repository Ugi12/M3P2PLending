$(document).ready(function(){
    
    $("#forderung").hide();
    
    $("#back").click(function(){
        $("#").show();
        $("#").hide();
    });
    $("#show").click(function(){
        
        var titel = $("#titel").val();
        var betrag = $("#betrag").val();
        var laufzeit = $("#laufzeit").val();
        var beschreibung = $("#beschreibung").val();
        
        
        if($("#titel").val()!="" && $("#betrag").val()!="" && $("#laufzeit").val()!="" && $("#beschreibung").val()!=""){
            $("#titels").text(titel);
            $("#betrag_view").val(betrag);
            $("#laufzeit_view").val(laufzeit);
            $("#beschreibung_view").val(beschreibung);
            $("#rating_view").val(betrag);
            $("#zins_view").val(betrag);
            $("#add_form").hide();
            $("#add_view").show();
        }
    });
    $("#finance").click(function(){
        alert("Ihre Forderung wurde erfolgreich gespeichert.");
    });
});
