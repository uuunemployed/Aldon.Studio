  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const closeBtn = document.getElementById('nav-div-2');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

    closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
  });

const slider = document.querySelector('.slider');

slider.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();

    slider.scrollBy({
      left: e.deltaY * 10, // множник можна змінити для чутливості
      behavior: 'smooth'
    });
  }
});