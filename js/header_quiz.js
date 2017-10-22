//aggiunge classe a compasso se la grandezza dello schermo e' minore di 1350
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});


  $('#invia_nome').click(function(){
    var a = $("#nome").val();

      if (a == "") {
      $('#mostra').text("ciao signor nessuno!");
      $("#invia_nome").addClass('animated shake');
      $("#invia_nome").addClass('button_border');
      $("#invia_nome").off()

      }
      else {
        $('#mostra').append(a);
        $('#mostra').append("! 😊");
        $("#invia_nome").off()
      }

      setTimeout(
  function()
  {
          $('#mostra').fadeOut(1000)
          $("#invia_nome").fadeOut(1000)
          $("#nome").fadeOut(1000)

  }, 1000);


  setTimeout(
function()
{
      $('#anni_testo').append(a);
      $('#anni_testo').append("?");
      $('#anni').fadeIn(1500)
      $('#anni_testo').fadeIn(1500)
      $('#invia_anni').fadeIn(1500)
}, 2000);


  });

  $("#invia_anni").click(function() {

        var anni = $("#anni").val();

         if (anni == "") {

             $('#anni_testo').text("Non sei ancora nato?! 😂");
             $("#invia_anni").addClass('animated shake');
             $("#invia_anni").addClass('button_border');
             $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $("#invia_anni").removeClass('animated shake');
             });

          }


          else {

            if (anni>=2 && anni<4) {

              $("#anni_testo").fadeOut(500)
              $("#invia_anni").fadeOut(500)
              $("#anni").fadeOut(500)

              setTimeout(
            function()
            {
              $("#anni_testo").hide()
              $("#invia_anni").hide()
              $("#anni").hide()
            }, 1000);
            setTimeout(
            function()
            {
              $("#clementino_2").fadeIn(1000);
            }, 500);

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

            if (anni>="14") {

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

            if (anni>100) {
              $("#anni_testo").text("Sei troppo vecchio! 😂")
              $("#invia_anni").addClass('animated shake');
              $("#invia_anni").addClass('button_border');
              $('#invia_anni').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
             $("#invia_anni").removeClass('animated shake');
              });
            }




          }

  });

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

  //funzione navbar da mobile
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
