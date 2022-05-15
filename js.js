
function closeMenu (){
    const close = document.querySelector('.navbar__links');
    const navbar = document.querySelector('.navbar');
    close.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
  }
  closeMenu()