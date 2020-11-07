const sendForm = () => {
  const forms = document.querySelectorAll('form'),
    statusMessage = document.createElement('div');

  statusMessage.innerHTML = `
    <div class='sk-bounce-1 sk-child'></div>
    <div class='sk-bounce-2 sk-child'></div>
    <div class='sk-bounce-3 sk-child'></div>`;

  forms.forEach(item => {
    const inputName = item.querySelector('input[type="text"]'),
      inputTel = item.querySelector('input[type="tel"]'),
      button = item.querySelector('.button__text ');

    inputName.addEventListener('input', event => {
      event.target.value = event.target.value.replace(/[^А-Яа-яЁё\s]/, '');
    });

    item.addEventListener('submit', event => {
      event.preventDefault();

      if (inputTel.value.length === 18) {
        const buttonText = button.textContent;
        inputTel.style.border = '';

        button.textContent = '';
        button.appendChild(statusMessage);
        statusMessage.classList.add('sk-three-bounce');

        let formData = new FormData(item);
        formData = Object.fromEntries(formData);

        createRequest(formData).then(response => {
          if (!response.ok) {
            throw new Error('Ответ сети был не ok');
          } else if (item.closest('.popup__block.popup--active')) {
            item.closest('.popup__block').classList.remove('popup--active');
            item.closest('.popup__wrapper').classList.remove('popup--active');
          }

          statusMessage.classList.remove('sk-three-bounce');
          button.textContent = buttonText;
        }).catch(error => {
          console.error(error);
          button.textContent = 'Ошибка...';

          setTimeout(() => {
            button.textContent = buttonText;
          }, 2000);
        });

        inputName.value = '';
        inputTel.value = '';
      } else {
        inputTel.style.border = '1px solid red';
      }
    });
  });
};

sendForm();
