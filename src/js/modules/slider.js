const slider = (selector, numberSlide = 1, iconWidth = 19.992) => {
  const wrap = document.querySelector(`${selector}__wrap`),
    content = wrap.querySelector(`${selector}__content`),
    iconLeft = wrap.querySelector('.icon--left'),
    iconRight = wrap.querySelector('.icon--right');

  const numberClick = content.children.length - numberSlide;

  let count = 0,
    translateX = 0;

  content.style.transform = `translateX(${translateX}px)`;

  const nextSlide = () => {
    count++;
    iconLeft.classList.add('icon--active');
    if (count < numberClick) {
      translateX -= content.firstElementChild.clientWidth + iconWidth;
      content.style.transform = `translateX(${translateX}px)`;
    } else if (count === numberClick) {
      translateX -= content.firstElementChild.clientWidth + iconWidth;
      content.style.transform = `translateX(${translateX}px)`;
      iconRight.classList.remove('icon--active');
    }
  };

  console.log(content.firstElementChild.clientWidth);

  const prevSlide = () => {
    count--;
    iconRight.classList.add('icon--active');
    if (count > 0) {
      translateX += content.firstElementChild.clientWidth + iconWidth;
      content.style.transform = `translateX(${translateX}px)`;
    } else if (count === 0) {
      translateX += content.firstElementChild.clientWidth + iconWidth;
      content.style.transform = `translateX(${translateX}px)`;
      iconLeft.classList.remove('icon--active');
    }
  };

  iconRight.addEventListener('click', nextSlide);
  iconLeft.addEventListener('click', prevSlide);

  if (document.documentElement.clientWidth <= 990) {
    iconRight.classList.add('icon--active');
    iconLeft.classList.remove('icon--active');
  } else if (document.documentElement.clientWidth > 990) {
    iconRight.classList.remove('icon--active');
    iconLeft.classList.remove('icon--active');
  }
};

if (document.documentElement.clientWidth <= 990 && document.documentElement.clientWidth > 766) {
  slider('.sets');
  slider('.reviews');
  slider('.artificial-spruce', 3);
  slider('.natural-spruce', 3);
  slider('.decorations-spruce', 3);
} else if (document.documentElement.clientWidth <= 766 && document.documentElement.clientWidth > 574) {
  slider('.sets');
  slider('.about', 2);
  slider('.reviews');
  slider('.production', 2);
  slider('.artificial-spruce', 2);
  slider('.natural-spruce', 2);
  slider('.sweets-spruce', 2);
  slider('.decorations-spruce', 2);
} else if (document.documentElement.clientWidth <= 574) {
  slider('.production');
  slider('.about');
  slider('.reviews');
  slider('.sets');
  slider('.artificial-spruce');
  slider('.natural-spruce');
  slider('.sweets-spruce');
  slider('.decorations-spruce');
}
