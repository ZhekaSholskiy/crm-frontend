export const addContactBg = document.querySelector('.add-contact__bg');

const contactsContainer = document.createElement('div');
contactsContainer.classList.add('contacts-container');
addContactBg.prepend(contactsContainer);
const labelList = [];

// ф-я создает варианты выбора в выпадающем списке
function createDdListString(ddListContent, ddListId, ddListTextContent) {
  const ddListInput = document.createElement('input');
  ddListInput.classList.add('dd-list__input');
  ddListContent.append(ddListInput);
  ddListInput.id = ddListId;
  ddListInput.type = 'radio';

  const ddListLabel = document.createElement('label');
  labelList.push(ddListLabel);
  ddListLabel.classList.add('dd-list__label');
  ddListLabel.for = ddListId;
  ddListLabel.textContent = ddListTextContent;
  ddListContent.append(ddListLabel);
}

// ф-я создает строку с вводом контакта
export function addNewContact(listTitle = 'Телефон', contactValue = '') {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('added-contacts-container');
  contactsContainer.append(contactContainer);

    const ddListContainer = document.createElement('div');
    ddListContainer.classList.add('dd-list__container');
    contactContainer.append(ddListContainer);

      const ddList = document.createElement('div');
      ddList.classList.add('dd-list');
      ddListContainer.append(ddList);

        const ddListTitle = document.createElement('div');
        ddListTitle.classList.add('dd-list__title');
        ddList.append(ddListTitle);
        ddListTitle.textContent = listTitle;

      const ddListContent = document.createElement('div');
      ddListContent.classList.add('dd-list__content');
      ddList.append(ddListContent);

        ['Телефон', 'Доп. телефон', 'Email', 'Vk', 'Facebook']
        .map((el, index) => createDdListString(ddListContent, `dd-list__input${index+1}`, el));

    const contactsInput = document.createElement('input');
    contactsInput.classList.add("form-control", "contacts-input");
    contactsInput.placeholder = 'Введите данные контакта';
    contactsInput.type = 'text';
    contactsInput.value = contactValue;
    contactContainer.append(contactsInput);

    const deleteContact = document.createElement('div');
    contactContainer.append(deleteContact);
    deleteContact.classList.add('delete-aria');

    return {
      ddListContainer,
      labelList,
      ddListTitle
    };
}
