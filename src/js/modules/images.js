const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        body = document.querySelector('body');


  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (evt) => {
    evt.preventDefault();

    let target = evt.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);

      body.style.overflow = 'hidden';
      console.log(bigImage);
      bigImage.style.height = '500px';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      body.style.overflow = '';
    }
  })

  //todo: Доделать ограничение увеличенных картинок

};

export default images;
