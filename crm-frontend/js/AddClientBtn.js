import { openModal } from "./ModalForm/ModalFormCloseOpenCancelButtons.js";
import { setListenerForOpenDropdowns } from "./ModalForm/ModalFormContacts.js";
import { prepareDataToSending } from "./ModalForm/ModalFormCreatingClientRequest.js";

export const saveBtn = document.querySelector('.add-client-btn');

// событие по нажатию на кнопку "добавить клиента" на главном экране под таблицей
const addClientBtn = document.querySelector('.clients-table__btn');
addClientBtn.addEventListener('click', () => {
  openModal();
  setListenerForOpenDropdowns();
  // отправляем запрос на создание клиента
  saveBtn.addEventListener('click', () => prepareDataToSending('POST'));
});

