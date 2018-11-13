 //  OPEN AND CLOSE THE MENU 
 function open_menu () {
    var menu = document.getElementById('menu');  // GET THE MENU
    menu.classList.toggle('open_menu');  // ADD THE OPEN_MENU CLASS
    var botao_menu = document.getElementById('btn-menu');  //GET THE MENU BUTTON
    botao_menu.classList.toggle('visibility');  // REMOVE VISIBILITY FROM MENU BUTTON
  }