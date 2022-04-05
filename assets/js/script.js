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

//smoothScroll
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });