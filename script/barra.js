document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.querySelector('.nav_bar');
  
    navBar.addEventListener('mouseenter', function () {
      navBar.style.height = 'auto'; // Establecemos la altura a 'auto' para que se expanda completamente
    });
  
    navBar.addEventListener('mouseleave', function () {
      navBar.style.height = '87px'; // Establecemos la altura original al salir
    });
  });
  