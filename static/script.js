function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="https://img.icons8.com/?size=256&id=quuyJoZCkYni&format=png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="https://img.icons8.com/?size=256&id=K7OXfoF0zHXw&format=pngg";
    }
  }

  const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }
  
  const btn = document.querySelector('.modalBtn')
  btn.addEventListener('click', switchModal)
  
  window.onclick = function(event) {
      const modal = document.querySelector('.modal')
    if (event.target == modal) {
      switchModal()
    }
  }


