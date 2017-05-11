$(document).ready(function(){
    document.getElementById("nav").innerHTML = (
        '<nav class="navbar navbar-default">' +
        '    <div class="container-fluid">' +
        '        <!-- Brand and toggle get grouped for better mobile display -->' +
        '        <div class="navbar-header">' +
        '            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
        '                <span class="sr-only">Toggle navigation</span>' +
        '                <span class="icon-bar"></span>' +
        '                <span class="icon-bar"></span>' +
        '                <span class="icon-bar"></span>' +
        '            </button>' +
        '            <a class="navbar-brand" href="#">P2P Lending</a>' +
        '        </div>' +
        '        <!-- Collect the nav links, forms, and other content for toggling -->' +
        '         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
        '             <ul class="nav navbar-nav">' +
        '                 <li><a href="Profile.html">Mein Profil</a></li>' +
        '                 <li><a href="statistik.html">Bilanz</a></li>' +
        '                 <li class="dropdown">' +
        '                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Forderung <span class="caret"></span></a>' +
        '                     <ul class="dropdown-menu">' +
        '                         <li><a href="forderung_add.html">Erstellen</a></li>' +
        '                         <li><a href="forderung_list_view.html">Liste Anzeigen</a></li>' +
        '                     </ul>' +
        '                 </li>' +
        '                 <li><a href="HelpNabout.html">&Uuml;ber uns</a></li>' +
        '             </ul>' +
        '         </div><!-- /.navbar-collapse -->' +
        '     </div><!-- /.container-fluid -->' +
        ' </nav>'
    );
});