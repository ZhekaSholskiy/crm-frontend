import { addEnterContactAria } from "./enteringContactAria.js";

// логика работы кнопки добавления контакта и выпадающих списков, ограничение контактов до 10

const addContactBtn = document.querySelector('.add-contact');
let contactsAmount;

// ф-я для добавления крестика удаления контакта, если поле ввода не пусто
function addRemoveBtn() {
  const contactsInputs = document.querySelectorAll('.contacts-input');
  contactsInputs.forEach(el => {
    if (el.value !== '') {
      el.nextElementSibling.classList.add('delete-aria--active');
    }
    el.nextElementSibling.addEventListener('click', () => {
      el.nextElementSibling.closest('.added-contacts-container').remove();
    })
    el.addEventListener('blur', () => {
      if (el.value !== '') {
        el.nextElementSibling.classList.add('delete-aria--active');
      } else {
        el.nextElementSibling.classList.remove('delete-aria--active');
      }
    })
  })
}

function toggleClassContainer(el) {
  el.classList.toggle('dd-list__content--active');
}

// функция для открытия/закрытия выпадающего списка
function openDdList() {
  if (event.target.className === 'dd-list') {
    toggleClassContainer(event.target.parentElement);
  }
}

// ф-я для выбора опции из выпадающего списка
function chooseDdListOption() {
  event.currentTarget.previousSibling.textContent = event.target.textContent;
  event.currentTarget.parentElement.parentElement.nextElementSibling.focus();
  toggleClassContainer(event.currentTarget.parentElement.parentElement);
}

export function addContactConfiguration() {
  contactsAmount = document.querySelectorAll('.added-contacts-container');
  if (contactsAmount.length <= 9) {
    document.querySelector('.added-contacts-bg').classList.add('added-contacts-bg--active');

    addRemoveBtn();

    let ddListContent = document.querySelectorAll('.dd-list__content');

    const contactsContainer = document.querySelector('.contacts-container');

    contactsContainer.addEventListener('click', openDdList);

    ddListContent.forEach(el => {
      el.addEventListener('click', chooseDdListOption);
    })

    if (contactsAmount.length === 9) {
      addContactBtn.style.display = 'none';
      contactsAmount[1].parentElement.classList.add('hide-contacts-btn');
    }

  }
}

addContactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.added-contacts-bg').classList.add('added-contacts-bg--active');
  const newContact = addEnterContactAria();
  newContact.ddListContainer.addEventListener('click', openDdList);
  newContact.labelList[newContact.labelList.length - 1].parentElement.addEventListener('click', chooseDdListOption);
  addRemoveBtn();
});
