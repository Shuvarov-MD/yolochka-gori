const toggleMenu = () => {
  const menuSpan = document.querySelectorAll('.menu__span'),
    menuList = document.querySelector('.menu__list');

  menuSpan.forEach(item => {
    item.classList.toggle('menu__span--active');
  });
  menuList.classList.toggle('menu__list--active');
};

document.body.addEventListener('click', event => {
  const menuActive = document.querySelector('.menu__list--active');

  if (event.target.closest('.menu__burger') ||
  event.target.closest('.menu__item') ||
  menuActive && !event.target.closest('.menu__list--active')) {
    toggleMenu();
  }
});
