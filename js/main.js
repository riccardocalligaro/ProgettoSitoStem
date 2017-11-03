// script che rileva se si tratta di un duispositivo mobile, crea una variabile che risulterà vera se è un telefono
 var isMobile = {
     Android: function() {
         return navigator.userAgent.match(/Android/i);
     },
     BlackBerry: function() {
         return navigator.userAgent.match(/BlackBerry/i);
     },
     iOS: function() {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
     },
     Opera: function() {
         return navigator.userAgent.match(/Opera Mini/i);
     },
     Windows: function() {
         return navigator.userAgent.match(/IEMobile/i);
     },
     any: function() {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
     }
 };


// Esistono 3 variabili
// Nome = nome persona
// anni = anni persona
// materia = materia preferita


//  Parte iniziale del quiz, chiede il nome della persona e lo salva nella variabile
  $('#invia_nome').click(function(){
    // salva nella variabile nome il nome
    var nome = $("#nome").val();
    //se non si inserisce nessun nome allora si viene chiamati signor nessuno
      if (nome == "") {
      $('#mostra').text("ciao signor nessuno!");
      $("#invia_nome").addClass('animated shake');
      $("#invia_nome").addClass('button_border');
      $("#invia_nome").off()
      }
      // se il nome viene inserito allora si scrive sulla textbot mostra aggiungendo un punto esclamativo e faccina
      else {
        $('#mostra').text("ciao, ");
        $('#mostra').append(nome)
        $('#mostra').append("! 😊");
        $("#invia_nome").off()
      }
//avvia un timer da 1 s affinchè non ci siano bug tra le transazioni
      setTimeout(
  function()
  {
        //gli elementi spariscono con una transiziones
          $('#mostra').fadeOut(1000)
          $("#invia_nome").fadeOut(1000)
          $("#nome").fadeOut(1000)

  }, 1000);

//avvia un timer da 2s
  setTimeout(
function()
{
      $('#anni_testo').append(nome);
      //setta il nome e compaiono gli elementi della domanda succesiva
      $('#anni_testo').append("?");
      $('#anni').fadeIn(1500)
      $('#anni_testo').fadeIn(1500)
      $('#invia_anni').fadeIn(1500)
}, 2000);
  });
// fine dello javascrit che chiede il nome



//Inizio dello javascript che chiede gli anni

  $("#invia_anni").click(function() {

  //salva nella variabile anni il testo inserito
  var anni = $("#anni").val();
// controlla se i caratteri sono da a > z senza numeri 
  if(anni.match(/^\d+$/)) {
        //se il testo non contiene niente
         if (anni == "") {
           // fa una battuta
             $('#anni_testo').text("Non sei ancora nato?! 😂");
          //aggiunta animazione
             $("#invia_anni").addClass('animated shake');
             $("#invia_anni").addClass('button_border');
           //quando finisce l'animazione
             $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $("#invia_anni").removeClass('animated shake');
             });
          }
          // se il testo e' uguale a qualcosa allora
          else {
            // da 1  ai 3 anni
            if (anni>=1 && anni<=3) {
              //transazione che fa scomparire i vari input e testi
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)
              //timer che fa andare via gli elementi purchè non ci siano bug grafici
              setTimeout(
            function()
            {
              $("#invia_anni").hide()
              $("#anni").hide()
            }, 1000);
            setTimeout(
            function()
            {
              //mostra il gioco adatto
              $("#anni_testo").text("Scopri moltissimi giochi divertenti per la tua fascia d'eta' qui!")
              $("#clementoni").fadeIn(1000);
            }, 1000);

            }


            // dai 4 agli 8 anni LEGO
            if (anni>=4 && anni<=8) {
               //se anni == 14
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)
              setTimeout(
            function()
            {

              $("#invia_anni").hide()
              $("#anni").hide()
            }, 1000);
            setTimeout(
            function()
            {
              $("#anni_testo").text("Scopri Lego! Clicca sull'immagine per maggiori informazioni.")
              $("#lego").css("width", "150px")
               $("#lego").css("margin-top", "20px")
              $("#lego").fadeIn(1000);
            }, 500);

            }


            // Dai 9 ai 13 anni LEGO MINDSTORMS
            if (anni>=9 && anni<=13) {
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)
              setTimeout(
            function()
            {

              $("#invia_anni").hide()
              $("#anni").hide()
            }, 1000);
            setTimeout(
            function()
            {
              $("#anni_testo").text("Scopri Lego Mindstorms! Clicca sull'immagine per maggiori informazioni.")
              $("#10anni").css("width", "150px");
              $("#10anni").fadeIn(1000);
            }, 500);
            }

            if (anni=="14") {
              //se anni == 14
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)
              setTimeout(
            function()
            {

              $("#invia_anni").hide()
              $("#anni").hide()
            }, 1000);
            setTimeout(
            function()
            {
              $("#anni_testo").text("Scopri Arduino! Clicca sull'immagine per maggiori informazioni.")
              $("#14anni").css("width", "220px")
              $("#14anni").fadeIn(1000);
            }, 500);

            }
            //dai 14 ai 60 anni  ARDUINO
            if (anni>14 && anni<60) {
               //se anni == 14
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)
              setTimeout(
            function()
            {

              $("#invia_anni").hide()
              $("#anni").hide()
            }, 1000);
            setTimeout(
            function()
            {
              $("#anni_testo").text("Scopri Arduino! Clicca sull'immagine per maggiori informazioni.")
              $("#14anni").css("width", "220px")
              $("#14anni").fadeIn(1000);
            }, 500);

            }
            //se si inserisce data fasulla
            if (anni>=100) {
              $("#anni_testo").text("Sei troppo vecchio! 😂")
              $("#invia_anni").addClass('animated shake');
              $("#invia_anni").addClass('button_border');
              $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
             $("#invia_anni").removeClass('animated shake');
              });
            }
            // più di 150 anni
            if (anni>=150) {
              $("#anni_testo").text("Credo tu abbia sbagliato!")
              $("#invia_anni").addClass('animated shake');
              $("#invia_anni").addClass('button_border');
              $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
             $("#invia_anni").removeClass('animated shake');
              });
            }
            //se non sono presenti giochi adatti
            if (anni >= 60 && anni<100) {
              $("#anni_testo").text("Non abbiamo giochi adatti per te! 😞")
              $("#invia_anni").addClass('animated shake');
              $("#invia_anni").addClass('button_border');
              $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
             $("#invia_anni").removeClass('animated shake');
              });
            }
          }
       }

      else {
            // se vengono inseriti caratteri speciali, numeri etc
             $('#anni_testo').text("Puoi usare solo caratteri numerici per indicare un'età! 😉");
      }
  });


// form nella pagina contatti

  $("#invia_contatti").click(function() {
    var problema = $("#contatti_messaggio").val()
    // per ora è solo presente la risposta non abbiamo ancora registratodss
      $("#contatti_testo").text("Non abbiamo ancora registarto questo problema! Contattaci 😃 ")
});






// Quiz Materia
  $("#invia_materia").click(function() {
    var materia = $("#materia").val().toLowerCase()
    // MATEMATICA
    if (materia == "matematica") {
      var battue_matematica = new Array("Chi non conosce la matematica difficilmente riesce a cogliere la bellezza, la più intima bellezza, della natura.",
                                        "Sono persuaso che la matematica sia il più importante strumento di conoscenza fra quelli lasciatici in eredità dall’agire umano, essendo la fonte di tutte le cose.",
                                        "Come si dice bellezza poetica si dovrebbe dire altresì dire bellezza matematica. -Blaise Pascal" )
        battuta_scelta_matematica = battue_matematica[Math.floor( Math.random() * battue_matematica.length )];
      $('#materia_testo').text(battuta_scelta_matematica);
    }
    // INGENIERIA
    if (materia == "ingenieria") {
      var ingenieria_batutte = new Array("La scienza è sapere; l’ingegneria è fare.",
                                        "Saranno anche i guerrieri a conquistare la gloria, ma sono gli ingegneri che costruiscono la società.",
                                        "Una volta sono riuscito a comprendere cosa diceva un ingegnere, ma poi per una settimana non capivo più cosa diceva la gente normale.",
                                        "Lo scienziato descrive ciò che esiste; l’ingegnere crea ciò che non era mai stato.",

                                       )
        battuta_scelta_ingenieria = ingenieria_batutte[Math.floor( Math.random() * ingenieria_batutte.length )];
      $('#materia_testo').text(battuta_scelta_ingenieria);
    }
    //SCIENZA
    if (materia == "scienza") {
      var scienza_batutte = new Array("La scienza non è che la spiegazione di un miracolo che non riusciamo mai a spiegare e l’arte è un’interpretazione di quel miracolo..",
                                        "La Natura compone alcune delle sue poesie più belle davanti al microscopio e al telescopio.",
                                        "La più bella e profonda emozione che possiamo provare è il senso del mistero; sta qui il seme di ogni arte, di ogni vera scienza.",
                                        "Niente nella vita va temuto, dev’essere solamente compreso. Ora è tempo di comprendere di più, così possiamo temere di meno.",

                                       )
        battuta_scelta_scienza = scienza_batutte[Math.floor( Math.random() * scienza_batutte.length )];
      $('#materia_testo').text(battuta_scelta_scienza);
    }
    //TECNOLOGIA
    if (materia == "tecnologia") {
      var tecnologia_batutte = new Array("I computer sono veloci e stupidi. Gli uomini sono lenti e intelligenti. L'insieme dei due costituisce una forza incalcolabile. ",
                                        "Il computer è la bicicletta della nostra mente. -Steve Jobs.",
                                        "640 Kb dovrebbero essere abbastanza per chiunque. -Bill Gates",
                                        "I bravi programmatori sanno cosa scrivere. I migliori sanno cosa riscrivere.")
        battuta_scelta_tecnologia = tecnologia_batutte[Math.floor( Math.random() * tecnologia_batutte.length )];
      $('#materia_testo').text(battuta_scelta_tecnologia);
    }
  if (materia != "matematica" && materia != "ingenieria" && materia != "scienza" && materia != "tecnologia") {
    $('#materia_testo').text("Mmmm... non esiste questa materia!😕 ");

  }
  });


// Inizio NavBar versione da telefono

$("#a_premuto_navbar").click(function(){
$(".navbar_mobile").hide()
$("#bottone_mobile").addClass('animated bounceInUp')
});



// Apertura della Navugation Bar da mobile
$('#nav_bar_mobile_button').click(function(){
 

 $(".spiegazione_div").addClass("display_nothing")
 $("#contatti_testo").addClass("display_nothing")
 $("#contatti_messaggio").addClass("display_nothing")
 $("#invia_contatti").addClass("display_nothing")
 $(".body_contatti").addClass("display_nothing")
 $("#invia_materia").addClass("display_nothing")
 $("#materia_testo").addClass("display_nothing")
 $("#materia").addClass("display_nothing")
 $("#bottone_mobile").hide()
 $("#bottone_mobile").removeClass("mobile_open")
 $("#bottone_mobile").addClass("mobile_close")
 $(".navbar_mobile").show()
 $(".navbar_mobile").addClass('animated bounceInUp')
 $(".body_centrale").addClass("display_nothing")
 $("footer").addClass("display_nothing")
 $("#invia_nome").addClass("display_nothing")
 $("#mostra").addClass("display_nothing")
 $("#nome").addClass("display_nothing")
 $("header").addClass("header_mobile")
 $("#invia_anni").addClass("display_nothing")
 $("#close_icon").show()
 $("#close_icon").addClass("animated bounceInDown")
 $(".testo").addClass("display_nothing")
 $(".grey_div").addClass("display_nothing")
 $(".slider").addClass("display_nothing")
 $(".bx-wrapper").addClass("display_nothing")
 $("#clementoni").addClass("display_nothing")
 $(".youtube_player").addClass("display_nothing")
});


//animazione di quando si preme il bottone per chiudere la navbar da mobile
$("#close_icon").click(function() {
  
  $(".spiegazione_div").removeClass("display_nothing")
  $(".spiegazione_div").addClass("animated bounceInUp")
  $("#contatti_testo").removeClass("display_nothing")
  $("#contatti_messaggio").removeClass("display_nothing")
  $("#invia_contatti").removeClass("display_nothing")
  $(".body_contatti").removeClass("display_nothing")
  $("#contatti_testo").addClass("animated bounceInUp")
  $("#contatti_messaggio").addClass("animated bounceInUp")
  $("#invia_contatti").addClass("animated bounceInUp")
  $(".body_contatti").addClass("animated bounceInUp")
  $("#invia_materia").removeClass("display_nothing")
  $("#materia_testo").removeClass("display_nothing")
  $("#materia").removeClass("animated bounceInUp")
  $("#invia_materia").addClass("animated bounceInUp")
  $("#materia_testo").addClass("animated bounceInUp")
  $(".testo").removeClass("display_nothing")
  $("#invia_anni").removeClass("display_nothing")
  $(".youtube_player").removeClass("display_nothing")
  $(".body_centrale").removeClass("display_nothing")
  $(".body_centrale").addClass('animated bounceInUp')
  $("#bottone_mobile").show()
  $("#bottone_mobile style").remove()
  $("#bottone_mobile").addClass("mobile_open")
  $("#bottone_mobile").addClass('animated bounceInUp')
  $("#bottone_mobile").css("style", "")
  $(".navbar_mobile").hide()
  $(".navbar_mobile").removeClass('animated bounce')
  $("footer").removeClass("display_nothing")
  $("footer").addClass('animated bounceInUp')
  $("#invia_nome").removeClass("display_nothing")
  $("#invia_nome").addClass('animated bounceInUp')
  $("#mostra").removeClass("display_nothing")
  $("#mostra").addClass('animated bounceInUp')
  $("#nome").removeClass("display_nothing")
  $("#nome").addClass('animated bounceInUp')
  $("header").removeClass("header_mobile")
  $(".slider").removeClass("display_nothing")
  $(".bx-wrapper").removeClass("display_nothing")
  $("#clementoni").removeClass("display_nothing")
  $("header").addClass('animated bounceInUp')
  $(".testo").addClass("animated bounceInUp")
  $(".grey_div").removeClass("display_nothing")
  $(".grey_div").addClass("animated bounceInUp")
  $('.button_mobile').removeAttr('id','button_close');
  $("#close_icon").hide()
  $("#nav_bar_mobile_button").removeClass("display_nothing")
  $('#nav_bar_mobile_button').fadeIn(1000)
});
