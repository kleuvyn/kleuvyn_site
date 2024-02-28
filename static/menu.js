function menuShow() {
    let menuMobile = document.querySelector('.menu_logo');
    if (menuMobile.classList.contains('menu-aberto')) {
      menuMobile.classList.remove('menu-aberto');
      document.querySelector('.icon').src="imagens/logo.png";
    } else {
      menuMobile.classList.add('menu-aberto');
      document.querySelector('.icon').src="imagens/logo.png";
    }
  }

const logoMenu = document.getElementById('logo');
logoMenu.addEventListener('click', () => {

  menuShow();
});