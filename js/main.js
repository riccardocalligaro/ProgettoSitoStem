// funzione eseguita quando si preme il pulsante invia nome,
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
        $('#mostra').append(nome);
        $('#mostra').append("! 😊");
        $("#invia_nome").off()
      }
//avvia un timer da 1 s
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

//inizo dello js che chiede gli anni

  $("#invia_anni").click(function() {
        //salva nella variabile anni il testo inserito
        var anni = $("#anni").val();

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
            // dai due ai 4 anni
            if (anni==2) {
              //transazione che fa scomparire i vari input e testi
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)
              //timer che fa andare via gli elementi
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
              $("#clementino_2").fadeIn(1000);
            }, 1000);

            }

            if (anni>="4") {

            }

            if (anni>="7") {

            }

            if (anni>="10") {

            }

            if (anni>="12") {

            }

            if (anni>="13") {

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

//se si inserisce data fasulla
            if (anni>100) {
              $("#anni_testo").text("Sei troppo vecchio! 😂")
              $("#invia_anni").addClass('animated shake');
              $("#invia_anni").addClass('button_border');
              $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
             $("#invia_anni").removeClass('animated shake');
              });
            }
//se non sono presenti giochi adatti
            if (anni > 20) {
              $("#anni_testo").text("Non abbiamo giochi adatti per te! 😞")
              $("#invia_anni").addClass('animated shake');
              $("#invia_anni").addClass('button_border');
              $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
             $("#invia_anni").removeClass('animated shake');
              });
            }
          }
  });

//fine del quiz



// INIZIO NAVBAR


// animazioni della nav bar


//apertura navbar
$('#nav_bar_mobile_button').click(function(){

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


});


//animazione di quando si preme il bottone per chiudere la navbar da mobile
$("#close_icon").click(function() {
$(".testo").removeClass("display_nothing")
$("#invia_anni").removeClass("display_nothing")
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
$("header").addClass('animated bounceInUp')
$(".testo").addClass("animated bounceInUp")
$('.button_mobile').removeAttr('id','button_close');
$("#close_icon").hide()
$("#nav_bar_mobile_button").removeClass("display_nothing")
$('#nav_bar_mobile_button').fadeIn(1000)


});
