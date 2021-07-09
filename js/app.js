const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.nav-ul');
  const navLinks = document.querySelectorAll('.nav-li');

  burguer.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.6}s`;
      }
    });

    // Burguer Animation
    burguer.classList.toggle('toggle');
  });
}

navSlide();
