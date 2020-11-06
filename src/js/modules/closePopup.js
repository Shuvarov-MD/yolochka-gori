const closePopup = () => {
  const popupActive = document.querySelectorAll('.popup--active');

  popupActive.forEach(item => item.classList.remove('popup--active'));
};

const popupWrapper = document.querySelector('.popup__wrapper');

popupWrapper.addEventListener('click', event => {
  if (event.target.closest('.popup__close')  || !event.target.closest('.popup__block')) {
    closePopup();
  }
});

document.body.addEventListener('keydown', event => {
  if (event.key === "Escape" && document.querySelector('.popup--active')) {
    closePopup();
  }
});
