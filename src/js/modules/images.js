const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        scroll = calcScroll();


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

      document.body.style.marginRight = `${scroll}px`;
      document.body.style.overflow = 'hidden';
      bigImage.style.height = '500px';
    }

    if (target && target.matches('div.popup')) {
      document.body.style.marginRight = `0px`;
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  })

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

};

export default images;
