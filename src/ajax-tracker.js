
window.sr = ScrollReveal();

      sr.reveal('', {
      duration: 2000,
      origin: 'left',
      distance: '20px',
      delay: 0.2,
      });
      sr.reveal('#nav-start, #righsidebar, ', {
      duration: 2000,
      origin: 'right',
      distance: '20px',
      delay: 0.2,
      });

      sr.reveal('.card-img,.card, p,h4,h2,li, #img, #catnav, span', {
      duration: 2000,
      origin: 'bottom',
      distance: '20px',
      scale: 0.9,
      viewfactor: 0.2
      });

      sr.reveal('#logo', {
      duration: 2000,
      origin: 'bottom',
      distance: '20px',
      scale: 0.9,
      viewfactor: 0.2,
      delay: 0.4,
      });
      sr.reveal('#cat-card, #start, #vid', {
      duration: 2000,
      origin: 'bottom',
      distance: '60px',
      scale: 0.9,
      viewfactor: 0.2,
      viewport: window.document.documentElement,
});



$(document).ready(function () {

$('#logindir').click(function (event) {
$('#login_modal').load('login.php');
event.preventDefault();

$.ajax({
  url: 'login.php',
  
});
});
});




$(document).ready(function () {

$('#creatbtn').click(function (event) {
$('#signup_modal').load('signup.php');
event.preventDefault();

$.ajax({
  url:'signup.php',
});
});
});





