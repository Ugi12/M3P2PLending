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
                    "(INSERT INTO AD (ad_id, ad_creator_id, ad_title, ad_amount, ad_rate, ad_description, ad_runningtime, ad_creation_date, ad_status, ad_investor_id, ad_investment_date) VALUES (" +  + ", " +  + ", " +  + ", " +  + ", " +  + ",)"
                    )

    	}
		
    });


});
