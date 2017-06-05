$(document).ready(function() {
    var panels = $('.user-infos');
    var panelsButton = $('.dropdown-user');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
            }
        })
    });


    $('[data-toggle="tooltip"]').tooltip();

    $('button').click(function(e) {
        e.preventDefault();
        alert("This is a demo.\n :-)");
    });

    MySql.Execute(
    "sql3.freemysqlhosting.net",
    "sql3173783",
    "NDQRtTqcvt",
    "sql3173783",
    "select * from users",
    function (data) {
        for (var i = 0; i<data.Result.length; i++) {
            if (data.Result[i].user_id == localStorage.user) {
                $("#user-name").text("" + data.Result[i].user_firstname + " " + data.Result[i].user_lastname);
                $("#user-email").text("" + data.Result[i].user_email);
                $("#user-email").attr("href" ,"mailto:" + data.Result[i].user_email);
                if (data.Result[i].user_tel && (data.Result[i].user_tel != "null")) {
                    $("#user-tnummer").text("" + data.Result[i].user_tel);
                } else {
                    $("#user-tnummer").text("Keine Angabe");
                }

                if (data.Result[i].user_aboutme) {
                    $("#user-me-text").text("" + data.Result[i].user_aboutme);
                } else {
                    $("#user-me-text").text("Keine Angabe");
                }
                break;
            }
        }
    });

});