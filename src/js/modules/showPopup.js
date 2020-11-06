const showPopup = selector => {
  const popupWrapper = document.querySelector('.popup__wrapper'),
    popupBlock = document.querySelector(`.popup__block--${selector}`);

  popupWrapper.classList.add('popup--active');
  popupBlock.classList.add('popup--active');
};

document.querySelectorAll('.callback').forEach(item => {
  item.addEventListener('click', () => showPopup('callback'));
});

document.querySelectorAll('.request').forEach(item => {
  item.addEventListener('click', () => showPopup('request'));
});

document.querySelectorAll('.set').forEach(item => {
  item.addEventListener('click', () => showPopup('set'));
});
