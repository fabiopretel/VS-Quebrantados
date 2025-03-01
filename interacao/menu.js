// -------------- Menu --------------

document.addEventListener("DOMContentLoaded", function () {
    let botao = document.querySelector(".botaoMenu");
    let menu = document.getElementById("menuLateral");
    let menuItems = menu.querySelectorAll("a"); // Seleciona todos os links dentro do menu

    // Ao clicar no botão do menu, abre ou fecha o menu
    botao.addEventListener("click", function (event) {
        event.stopPropagation(); // Impede que o clique no botão feche o menu imediatamente
        menu.classList.toggle("menu-aberto");
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !botao.contains(event.target)) {
            menu.classList.remove("menu-aberto");
        }
    });

    // Adiciona um evento de clique para cada item do menu
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menu.classList.remove("menu-aberto"); // Fecha o menu
        });
    });
});

// -------------- Slide --------------
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
  
