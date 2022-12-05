import { updateContactsList } from "./formNavigation.js";
import { addNewContact } from "./ModalFormAddNewContact.js";
import { chooseDdListOption, openDdList } from "./ModalFormContactsDropdown.js";
import { addRemovingCross } from "./ModalFormContactsRemovingCross.js";

export const addContactBtn = document.querySelector('.add-contact');

// ф-я для того, чтобы контактов было не больше 10
// её нужно вызывать и при добавлении контакта и при открытии формы
export function controlContactsAmount() {
  let contactsAmount = document.querySelectorAll('.added-contacts-container');
  if (contactsAmount.length <= 10) {
    // если контактов меньше 10, то мы показываем кнопку добавления нового контакта
    document.querySelector('.added-contacts-bg').classList.add('added-contacts-bg--active');

    // убираем возможность добавлять контакты, если их 10
    if (contactsAmount.length === 10) {
      addContactBtn.style.display = 'none';
      contactsAmount[1].parentElement.classList.add('hide-contacts-btn');
    }
  }
}

  // вешаем обработчик на родителя контаков для открытия dropdown по щелчку на него
  // это нужно устанавливать один раз при открытии формы
export function setListenerForOpenDropdowns() {
  const contactsContainer = document.querySelector('.contacts-container');
  contactsContainer.addEventListener('click', openDdList);
}

  // а вот это нужно обновлять при добавлении каждого контакта, причем старые обработчики нужно чистить
export function capabilityToSetDropdownValue() {
  // ф-я для установки кликнутого значения dropdown в его title
  let ddListContent = document.querySelectorAll('.dd-list__content');
  ddListContent.forEach(el => {
    el.addEventListener('click', chooseDdListOption);
  })
}

// функция, вызывающая ряд функций, необходимых для работы списка контактов
export function makeContactsAlive() {
  controlContactsAmount();
  addRemovingCross();
  capabilityToSetDropdownValue();
}

addContactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewContact();
  updateContactsList();
  makeContactsAlive();
  tippy('.delete-aria' , {
    content: 'Удалить контакт'
  })
});
