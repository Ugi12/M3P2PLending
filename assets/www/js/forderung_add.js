$(document).ready(function(){
	
	$("#add_view").hide();
	
    $("#cancel").click(function(){
		$("#add_form").show();
		$("#add_view").hide();
    });
    $("#view").click(function(){
		
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

		/*$("#inner").append(" <img class='profile-img' src='https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120' alt=''> "); 
		$("#inner").append(" <h1 class='middle'>" + titel + "</h1> ");
		$("#inner").append(" <form class='form-signin'> ");
		$("#inner").append(" <label>Kreditbetrag:</label> ");
		$("#inner").append(" <p> " + betrag + " </p> ");
		$("#inner").append(" <label>Laufzeit:</label> ");
		$("#inner").append(" <p> " + laufzeit + " </p> ");
		$("#inner").append(" <label>Beschreibung:</label> ");
		$("#inner").append(" <p> " + beschreibung + " </p> ");
		$("#inner").append(" <button id='cancel' class='btn btn-lg btn-primary half' type='submit'>Abbrechen</button> ");
		$("#inner").append(" <button id='save' class='btn btn-lg btn-primary half' type='submit'>speichern</button> ");
		$("#inner").append(" </form> ");
		
		$("#add_form").hide();
		$("#add_view").show();
		*/
		
    });
    $("#save").click(function(){
		alert("Ihre Forderung wurde erfolgreich gespeichert.");
    });
});
