function menuShow() {
    let menuMobile = document.querySelector('.menu_logo');
    if (menuMobile.classList.contains('menu-fechado')) {
      menuMobile.classList.remove('menu-fechado');
      document.querySelector('.icon').src="https://img.icons8.com/?size=256&id=quuyJoZCkYni&format=png";
    } else {
      menuMobile.classList.add('menu-fechado');
      document.querySelector('.icon').src="https://img.icons8.com/?size=256&id=K7OXfoF0zHXw&format=pngg";
    }
  }

const logoMenu = document.getElementById('logo');
logoMenu.addEventListener('click', () => {

  menuShow();
});