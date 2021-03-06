$(document).ready(function(){
    document.getElementById("nav").innerHTML = (
    '<nav id="menu" class="menu slideout-menu slideout-menu-left">' +
    '    <section class="menu-section">' +
    '        <ul class="menu-section-list">' +
    '            <li><a href="Profile.html">Mein Profil</a></li>' +
    '            <li><a href="statistik.html">Bilanz</a></li>' +
    '        </ul>' +
    '    </section>' +
    '    <section class="menu-section">' +
    '        <h3 class="menu-section-title">Forderung</h3>' +
    '        <ul class="menu-section-list">' +
    '            <li><a href="forderung_add.html">Forderung Erstellen</a></li>' +
    '            <li><a href="forderung_list_view.html">Forderung Liste</a></li>' +
    '        </ul>' +
    '    </section>' +
    '    <section class="menu-section">' +
    '        <ul class="menu-section-list">' +
    '            <li><a href="HelpNabout.html">Info</a></li>' +
    '            <li><a href="About.html">&Uuml;ber uns</a></li>' +
    '            <li><a href="../index.html">Logout</a></li>' +
    '        </ul>' +
    '    </section>' +
    '</nav>'
//        '<nav class="navbar navbar-default">' +
//        '    <div class="container-fluid">' +
//        '        <!-- Brand and toggle get grouped for better mobile display -->' +
//        '        <div class="navbar-header">' +
//        '            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
//        '                <span class="sr-only">Toggle navigation</span>' +
//        '                <span class="icon-bar"></span>' +
//        '                <span class="icon-bar"></span>' +
//        '                <span class="icon-bar"></span>' +
//        '            </button>' +
//        '            <a class="navbar-brand" href="#">P2P Lending</a>' +
//        '        </div>' +
//        '        <!-- Collect the nav links, forms, and other content for toggling -->' +
//        '         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
//        '             <ul class="nav navbar-nav">' +
//        '                 <li><a href="Profile.html">Mein Profil</a></li>' +
//        '                 <li><a href="statistik.html">Bilanz</a></li>' +
//        '                 <li class="dropdown">' +
//        '                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Forderung <span class="caret"></span></a>' +
//        '                     <ul class="dropdown-menu">' +
//        '                         <li><a href="forderung_add.html">Forderung Erstellen</a></li>' +
//        '                         <li><a href="forderung_list_view.html">Forderung Liste</a></li>' +
//        '                     </ul>' +
//        '                 </li>' +
//        '                 <li><a href="HelpNabout.html">&Uuml;ber uns</a></li>' +
//        '             </ul>' +
//		'			  <ul class="nav navbar-nav navbar-right">' +
//                        '<li><a href="register.html">Registrieren</a></li>' +
//                        '<li><a href="../index.html">Logout</a></li>' +
//                      '</ul>' +
//        '         </div><!-- /.navbar-collapse -->' +
//        '     </div><!-- /.container-fluid -->' +
//        ' </nav>'
    );

    document.getElementById("navbar").innerHTML = (
        '<nav class="navbar navbar-default">' +
        '    <div class="container-fluid">' +
        '        <div class="navbar-header">' +
        '            <button type="button" class="navbar-toggle pull-left js-slideout-toggle" style="margin-left:10px;" aria-expanded="false">' +
        '                <span class="sr-only">Toggle navigation</span>' +
        '                <span class="icon-bar"></span>' +
        '                <span class="icon-bar"></span>' +
        '                <span class="icon-bar"></span>' +
        '            </button>' +
        '            <h4 class="navbar-text" style="margin-left:15px;">P2P-Lending</h4>' +
        '        </div><!-- /.navbar-collapse -->' +
        '    </div><!-- /.container-fluid -->' +
        '</nav>'
    );
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
      });
    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
      slideout.toggle();
      });

    slideout.on('beforeclose', function () {
        this.menu.style.transform = 'translateX(-256px)';
    });

    slideout.on('beforeopen', function () {
        this.menu.style.transform = 'translateX(0px)';
    });

});