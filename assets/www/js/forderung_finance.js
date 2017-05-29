$(document).ready(function(){
	
	var ford_liste = "";
	var myID = localStorage.user;
	var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var date = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;

    $("#forderung_view").hide();
	
	MySql.Execute(
		"sql3.freemysqlhosting.net",
		"sql3173783",
		"NDQRtTqcvt",
		"sql3173783",
		"select ad_id, ad_title, ad_amount, ad_runningtime from ads where not (ad_creator_id = " + myID + " or ad_status = 1)",
        function(data){
            data.Result.forEach(function(entry){
                ford_liste +=       '<div class="panel panel-default" style="margin:10px;">'
                                +       '<div class="panel-heading">'
                                +           '<h3 class="panel-title">' + entry.ad_title + '</h3>'
                                +       '</div>'
                                +       '<div class="panel-body">'
                                +           '<label>Betrag: </label>'
                                +           '<label style="color:green; margin-left:20px;">' + entry.ad_amount + '</label>'
                                +           '<br>'
                                +           '<label>Laufzeit: </label>'
                                +           '<label style="color:red; margin-left:10px;">' + entry.ad_runningtime + '</label>'
                                +       '</div>'
                                +       '<button id="' + entry.ad_id + '" class="btn btn-lg btn-primary" style="margin:10px;" type="button">Ansicht</button>'
                                +   '</div>';

            });
            $("#liste").append(ford_liste);

            $("button").click(function(){
                var titel = "";
                var betrag = "";
                var laufzeit = "";
                var beschreibung = "";
				var rate = "";
                var id = this.id;

                MySql.Execute(
                    "sql3.freemysqlhosting.net",
                    "sql3173783",
                    "NDQRtTqcvt",
                    "sql3173783",
                    "select ad_title, ad_amount, ad_runningtime, ad_rate, ad_description from ads where ad_id = " + id + "",
                    function (data){
                        data.Result.forEach(function(entry) {
                            titel = entry.ad_title;
                            betrag = entry.ad_amount;
                            laufzeit = entry.ad_runningtime;
							rate = entry.ad_rate;
                            beschreibung = entry.ad_description;
                        });

                        $("#titels").text(titel);
                        $("#betrag_view").val(betrag);
                        $("#laufzeit_view").val(laufzeit);
                        $("#beschreibung_view").text(beschreibung);
                        $("#rating_view").val(rate);
                        $("#zins_view").val("4,5%");


                        $("#forderung_view").show();
                        $("#forderungen").hide();

                        $("#back").click(function(){
                             $("#forderung_view").hide();
                             $("#forderungen").show();
                        });

                        $("#finance").click(function(){
                            MySql.Execute(
                                "sql3.freemysqlhosting.net",
                                "sql3173783",
                                "NDQRtTqcvt",
                                "sql3173783",
                                "update ads set ad_investor_id = " + myID + ", ad_investment_date = '" + date + "', ad_status = 1 where ad_id =  " + id + "",
                             );
                             alert("Ihre Finanzierung wurde erfolgreich durchgeführt!");
                             location.replace("forderung_list_view.html");
                        });
                    }
                );

            });


            $("#suche").click(function(){

				$("#liste").remove();
				var suchtext = $("#titel_suche").val();
				ford_liste = "";

				MySql.Execute(
				"sql3.freemysqlhosting.net",
				"sql3173783",
				"NDQRtTqcvt",
				"sql3173783",
				"select ad_id, ad_title, ad_amount, ad_runningtime from ads where not (ad_creator_id = " + myID + " or ad_status = 1) and ad_title = '" + suchtext + "'",
				function(data){
					data.Result.forEach(function(entry){
						ford_liste +=       '<div class="panel panel-default" style="margin:10px;">'
										+       '<div class="panel-heading">'
										+           '<h3 class="panel-title">' + entry.ad_title + '</h3>'
										+       '</div>'
										+       '<div class="panel-body">'
										+           '<label>Betrag: </label>'
										+           '<label style="color:green; margin-left:20px;">' + entry.ad_amount + '</label>'
										+           '<br>'
										+           '<label>Laufzeit: </label>'
										+           '<label style="color:red; margin-left:10px;">' + entry.ad_runningtime + '</label>'
										+       '</div>'
										+       '<button id="' + entry.ad_id + '" class="btn btn-lg btn-primary" style="margin:10px;" type="button">Ansicht</button>'
										+   '</div>';

					});
					$("#liste_container").append("<div id='liste'></div>");
					$("#liste").append(ford_liste);
				});
			});


			$("#alle").click(function(){
				location.replace("forderung_list_view.html");
			});
        }
    );

});
