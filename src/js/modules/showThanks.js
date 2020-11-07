function showThanks() {
  const popupWrapper = document.querySelector('.popup__wrapper'),
    popupThanks = document.querySelector('.popup__block--thanks');

    popupWrapper.classList.add('popup--active');
    popupThanks.classList.add('popup--active');

    setTimeout(() => {
      popupWrapper.classList.remove('popup--active');
      popupThanks.classList.remove('popup--active');
    }, 2000);
}
