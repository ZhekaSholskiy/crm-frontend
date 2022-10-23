import { getClientsList, deleteClient, createClient } from "./requests.js";
import { addEnterContactAria } from "./enteringContactAria.js";
import { addContactConfiguration } from "./contactsEvents.js";
import { prepareDataToSending } from "./dataPreProcessing.js";

// открытие/закрытие формы добавления клиента

const addClientBtn = document.querySelector('.clients-table__btn');
const formBg = document.querySelector('.form-bg');
const closeForm = document.querySelector('.close-form');
const body = document.querySelector('body');
const cancelBtn = document.querySelector('.cancel-btn');

addClientBtn.addEventListener('click', () => {
  formBg.style.display = 'block';
  body.style.overflow = 'hidden';
})

function cancelOperation() {
  event.preventDefault();
  location.reload();
}

cancelBtn.addEventListener('click', cancelOperation);

closeForm.addEventListener('click', ()  => {
  location.reload();
})

document.querySelector('.close-delete-form').addEventListener('click', ()  => {
  location.reload();
})

// форма изменения данных клиента

const tbody = document.querySelector('.tbody');

function changeClientForm(clientID) {
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
  document.querySelector('.add-client-btn').addEventListener('click', () => {
    prepareDataToSending('PATCH', clientID);
  })
}

tbody.addEventListener('click', async (e) => {
  if (e.target.className === 'change-btn') {
    const clientId = e.target.closest('tr').firstChild.textContent;
    const client = await getClientsList(clientId);
    formBg.style.display = 'block';
    body.style.overflow = 'hidden';
    const name = document.querySelector('#name');
    const surname = document.querySelector('#surname');
    const lastname = document.querySelector('#lastname');
    name.value = client.name;
    surname.value = client.surname;
    lastname.value = client.lastName;

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
    client.contacts.forEach(element => {
      addEnterContactAria(element.type, element.value);
    });
    addContactConfiguration();
    changeClientForm(clientId);
  }
})

tbody.addEventListener('click', () => {
  if (event.target.className === 'delete-btn') {
    const clientID = event.target.closest('tr').firstChild.textContent;
    deleteClientEvent(clientID);
  }
})

function deleteClientEvent(clientID) {
  document.querySelector('.delete-client__form').style.display = 'flex';
  body.style.overflow = 'hidden';
  document.querySelector('.cancel-delete-client').addEventListener('click', cancelOperation);
  document.querySelector('.form-container').style.display = 'none';
  formBg.style.display = 'block';
  document.querySelector('.delete-client-btn').addEventListener('click', () => {
    deleteClient(clientID)
  });
}
