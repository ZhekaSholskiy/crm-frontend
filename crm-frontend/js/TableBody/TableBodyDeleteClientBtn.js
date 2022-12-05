import { tbody } from "./TableBodyLoadAndUpdating.js";
import { cancelOperation, openModal } from "../ModalForm/ModalFormCloseOpenCancelButtons.js";
import { deleteClient } from "../requests.js";

// удаление клиента
tbody.addEventListener('click', (event) => {
  if (event.target.className === 'delete-btn') {
    const clientID = event.target.closest('tr').firstChild.textContent;
    deleteClientEvent(clientID);
  }
})

function deleteClientEvent(clientID) {
  document.querySelector('.delete-client__form').style.display = 'flex';
  openModal();
  document.querySelector('.cancel-delete-client').addEventListener('click', cancelOperation);
  document.querySelector('.form-container').style.display = 'none';
  document.querySelector('.delete-client-btn').addEventListener('click', async () => {
    deleteClient(clientID);
  });
}

// закрываем модалку удаления клиента
document.querySelector('.close-delete-form').addEventListener('click', ()  => {
  location.reload();
})
