import { addNewContact } from "../ModalForm/ModalFormAddNewContact.js";
import { tbody } from "./TableBodyLoadAndUpdating.js";
import { openModal } from "../ModalForm/ModalFormCloseOpenCancelButtons.js";
import {  makeContactsAlive, setListenerForOpenDropdowns } from "../ModalForm/ModalFormContacts.js";
import { getClientsList } from "../requests.js";
import { changeClientForm, lastname, name, surname } from "../ModalForm/TransformAddClientModalToChangeClient.js";

export function toggleLoading(e, toggle) {
    e.target.children[0].style.opacity = toggle === 1 ? 1 : 0;
    e.target.children[1].style.opacity = toggle === 1 ? 0 : 1;
}

// логика при нажатии на кнопку "изменить клиента"
tbody.addEventListener('click', async (e) => {
  if (e.target.className === 'change-btn') {
    toggleLoading(e, 1);
    // при нажатии на кнопку "изменить клиента", получаем его айдишник и делаем запрос серверу
    const clientId = e.target.closest('tr').firstChild.textContent;
    history.pushState('','',`?id${clientId}`);
    openExistingClientForm(clientId, e);
  }
})

export async function openExistingClientForm(clientId, event) {
    const client = event ? await getClientsList(clientId).then(response => {
      toggleLoading(event, 0);
      return response;
    }
  ) :
  await getClientsList(clientId);

  // открываем форму добавления клиента, меняем её на форму изменения клиента
  openModal();
  changeClientForm(clientId);

  // берем соответствующие инпуты и вставляем загруженные данные нужного клиента
  name.value = client.name;
  surname.value = client.surname;
  lastname.value = client.lastName;

  // вырисовываем все имеющиеся контакты нужного клиента
  client.contacts.forEach(element => {
    addNewContact(element.type, element.value);
  });

  setListenerForOpenDropdowns();
  makeContactsAlive();
}
