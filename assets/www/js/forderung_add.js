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
        var db = localStorage.db;
        db.transaction(queryDB, errorCB, successCB);

    	function queryDB(tx){
    		titel = $("#titel").val();
		 	betrag = $("#betrag").val();
		 	laufzeit = $("#laufzeit").val();
		 	beschreibung = $("#beschreibung").val();


            MySql.Execute(
                    "sql3.freemysqlhosting.net",
                    "sql3173783",
                    "NDQRtTqcvt",
                    "sql3173783",
                    "(INSERT INTO AD (id, status, title, amount, runningtime, creator_user_id, investor_user_id, discription, investment_date) VALUES ()"
                    )

    	}

    	function errorCB(err) {
		    alert("Error processing SQL: " + err.code);
		}

		function successCB() {
		    alert("Ihre Forderung wurde erfolgreich gespeichert.");
		}
		
    });
});
