$(document).ready(function(){
	
	var titel;
	var betrag;
	var laufzeit;
	var beschreibung;
	var zins;
	var userrating;

    $("#form_add").submit(function(e) {
        e.preventDefault();
    });

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
			$("#zins_view").val("4,5%");
			$("#add_form").hide();
			$("#add_view").show();
		}
    });

    $("#save").click(function(){

            titel = $("#titels").text();
            beschreibung = $("#beschreibung").val();
		 	betrag = parseInt($("#betrag").val());
		 	laufzeit = parseInt($("#laufzeit").val());

            MySql.Execute(
                "sql3.freemysqlhosting.net",
                "sql3173783",
                "NDQRtTqcvt",
                "sql3173783",
                "insert into ads values(null, 3,'" + titel + "', " + betrag + ", 0, 4.5, '" + beschreibung + "', " + laufzeit + ", '2017-05-08 13:10:02.047', 1, null, null);"
            );
            alert("Ihre Forderung wurde erfolgreich gespeichert!");
            window.location.replace("forderung_add.html");
    });


});