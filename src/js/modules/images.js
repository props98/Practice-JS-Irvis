const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');


  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alighItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (evt) => {
    evt.preventDefault();

    let target = evt.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  })

  //todo: Доделать ограничение увеличенных картинок

};

export default images;