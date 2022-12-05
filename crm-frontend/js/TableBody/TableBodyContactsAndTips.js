// функция для конвертирования типов контактов в картинки (+ подсказки)

import { generateRandomString } from "../utils/generateRandomString.js";

export function contactConversion(contacts, imgContainer) {
  contacts.forEach(contact => {
    function shortContact(path) {
      createContact(path, imgContainer, contact.type, contact.value);
    }
    switch(contact.type) {
      case 'Телефон':
        shortContact('#phone');
        break;
      case 'Email':
        shortContact('#mail');
        break;
      case 'Vk':
        shortContact('#vk');
        break;
      case 'Facebook':
        shortContact('#fb');
        break;
      default:
        shortContact('#default');
    }

  });
}

function createContact(path, imgContainer, contactType, contactValue) {
  // создаем контейнер для контакта
  const oneImgContainer = document.createElement('div');
  oneImgContainer.classList.add('one-img-container');
  const randomId = generateRandomString();
  oneImgContainer.id = `why${randomId}`;
  oneImgContainer.setAttribute('data-contact-type', contactType);
  oneImgContainer.setAttribute('data-contact-value', contactValue);

  // здесь создается картинка для контакта
  const image = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  image.classList.add('contact-img');
  const useImage = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  useImage.classList.add('use-image');
  useImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
  image.append(useImage);

  oneImgContainer.append(image);
  imgContainer.append(oneImgContainer);
};
