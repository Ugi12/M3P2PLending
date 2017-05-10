$(document).ready(function(){
	
	var titel;
	var betrag;
	var laufzeit;
	var beschreibung;
	var zins;
	var userrating;

	$("#add_view").hide();
	
    $("#cancel").click(function(){
		$("#add_form").show();
		$("#add_view").hide();
    });
    $("#view").click(function(){
		
	 	titel = $("#titel").val();
	 	betrag = $("#betrag").val();
	 	laufzeit = $("#laufzeit").val();
	 	beschreibung = $("#beschreibung").val();
		
		
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

    $("#save").click(function(){

    	function populateDB(tx){
    		titel = $("#titel").val();
		 	betrag = $("#betrag").val();
		 	laufzeit = $("#laufzeit").val();
		 	beschreibung = $("#beschreibung").val();

		 	tx.executeSql('CREATE TABLE IF NOT EXISTS FORDERUNG (id unique autoincrement, TITEL, BETRAG, LAUFZEIT, BESCHREIBUNG, ZINSATZ, USERRATING)');

		 	tx.executeSql('INSERT INTO USER (id, TITEL, BETRAG, LAUFZEIT, BESCHREIBUNG, ZINSATZ, USERRATING) VALUES (titel, betrag, laufzeit, beschreibung, zins, userrating)');
    	}

    	function errorCB(err) {
		    alert("Error processing SQL: " + err.code);
		}

		function successCB() {
		    alert("Ihre Forderung wurde erfolgreich gespeichert.");
		}
		
    });
});
