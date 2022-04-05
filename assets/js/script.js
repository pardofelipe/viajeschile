//carrusel
$('#blogCarousel').carousel({
          interval: 5000
    });
//alert correoEnviado
  function correoEnviado() {
    alert("El correo fue enviado correctamente");
  };
//cambiar color texto dblClick
$(function(){
    $('.titulo').dblclick(function(){
        $(this).css({color:"#dc3545"})
    })
//esconder contenido
    $('.card-title2').click(function(){
        $('.card-text').toggle(1500)
    })
});