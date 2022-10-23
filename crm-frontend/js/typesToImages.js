// функция для конвертирования типов контактов в картинки (+ подсказки)

export function contactConversion(contacts, imgContainer) {
  contacts.forEach(contact => {
    console.log(contact.type);
    switch(contact.type) {
      case 'Телефон':
        createContact('#phone', imgContainer, contact.value);
        break;
      case 'Email':
        createContact('#mail', imgContainer, contact.value);
        break;
      case 'Vk':
        createContact('#vk', imgContainer, contact.value);
        break;
      case 'Facebook':
        createContact('#fb', imgContainer, contact.value);
        break;
      default:
        createContact('#default', imgContainer, contact.value);
    }
  });
}

function createContact(path, imgContainer, contactValue) {
  const oneImgContainer = document.createElement('div');
  oneImgContainer.classList.add('one-img-container');
  // const image = document.createElement('img');
  const image = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  const useImage = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  useImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
  useImage.classList.add('use-image');
  image.append(useImage);
  oneImgContainer.append(image);
  const bgHint = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  const bgHintPath = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  bgHintPath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#hint');
  bgHint.append(bgHintPath);
  imgContainer.append(oneImgContainer);

  image.classList.add('contact-img');
  // image.src = path;

  const hintContainer = document.createElement('div');
  hintContainer.classList.add('hint-container');
  oneImgContainer.append(hintContainer);
  hintContainer.append(bgHint);

  const hintText = document.createElement('div');
  const hintTextLink = document.createElement('a');
  hintTextLink.href = `${contactValue}`;
  hintText.classList.add('hint-text');
  hintText.append(hintTextLink);
  hintTextLink.textContent = contactValue;
  hintTextLink.classList.add('hint-text-link');
  // hintText.textContent = contactValue;
  hintContainer.append(hintText);

  oneImgContainer.addEventListener('mouseover', () => {
    oneImgContainer.classList.add('one-img-container--active');
  });

  function hideHint() {
    oneImgContainer.classList.remove('one-img-container--active');
  };

  let hideHintFunc = '';

  oneImgContainer.addEventListener('mouseout', () => {
  hideHintFunc = setTimeout(hideHint, 300);
  });

    hintContainer.addEventListener('mouseover', (event) => {
    clearTimeout(hideHintFunc);
    event.stopPropagation();
  });

    hintContainer.addEventListener('mouseout', (event) => {
    hideHintFunc = setTimeout(hideHint, 300);
    event.stopPropagation();
  });
};
