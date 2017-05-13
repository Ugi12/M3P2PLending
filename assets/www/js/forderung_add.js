$(document).ready(function(){
	
	var titel;
	var betrag;
	var laufzeit;
	var beschreibung;
	var zins = 4.5;
	var userrating = 0;


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
			$("#zins_view").val(zins);

			$("#add_form").hide();
			$("#add_view").show();
		}
    });

    $("#save").click(function(){

    		titel = $("#titel").val();
		 	betrag = $("#betrag").val();
		 	laufzeit = $("#laufzeit").val();
		 	beschreibung = $("#beschreibung").val();

             MySql.Execute(
                "sql3.freemysqlhosting.net",
                "sql3173783",
                "NDQRtTqcvt",
                "sql3173783",
                "insert into ads values(null, 2,'Traumhaussss3 Finanzieren', 5090000, 01, 1.5, 'Ich möcaahte ein Haus bauen!', 1203, '2016-04-30', 2, null, null)",
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

//"insert into ads values(null, 1," + titel + ", " + betrag + ", " + userrating + ", " + zins + ", " + beschreibung + ", 12, '2017-01-01', 1, 3, '2017-02-10')",