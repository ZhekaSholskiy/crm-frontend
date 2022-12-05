// ф-я преобразует форму добавления клиента в форму изменения клиента

import { saveBtn } from "../AddClientBtn.js";
import { cancelBtn, cancelOperation } from "./ModalFormCloseOpenCancelButtons.js";
import { prepareDataToSending } from "./ModalFormCreatingClientRequest.js";

export const name = document.querySelector('#name');
export const surname = document.querySelector('#surname');
export const lastname = document.querySelector('#lastname');

export function changeClientForm(clientID) {
  const formLegend = document.querySelector('.form-legend');
  formLegend.textContent = 'Изменить данные';
  const clientIDContainer = document.createElement('div');
  formLegend.after(clientIDContainer);
  clientIDContainer.textContent = `ID: ${clientID}`;
  clientIDContainer.classList.add('client-id-container');
  document.querySelector('.fieldset').style.marginBottom = '15px';
  cancelBtn.textContent = 'Удалить клиента';
  cancelBtn.removeEventListener('click', cancelOperation);
  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteClientEvent(clientID);
  });

  saveBtn.removeEventListener('click', () => {prepareDataToSending('POST')});

  document.querySelector('.add-client-btn').addEventListener('click', () => {
    prepareDataToSending('PATCH', clientID);
  })

  const labelName = document.createElement('label');
  name.before(labelName);
  labelName.textContent = 'Имя*';
  labelName.classList.add('label-style');

  const labelSurname = document.createElement('label');
  surname.before(labelSurname);
  labelSurname.textContent = 'Отчество';
  labelSurname.classList.add('label-style');

  const labelLastname = document.createElement('label');
  lastname.before(labelLastname);
  labelLastname.textContent = 'Фамилия*';
  labelLastname.classList.add('label-style');
}
