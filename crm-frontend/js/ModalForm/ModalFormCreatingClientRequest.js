import { createClient } from "../requests.js";
import { handleError } from "../ModalForm/ModalFormCreatingClientRequestError.js";

// функция считывает введенные в модальное окно данные и отправляет запрос на создание нового клиента


export async function prepareDataToSending(method, clientID) {
    event.preventDefault();
    const contactsContainers = document.querySelectorAll('.added-contacts-container');
    let contactsArray = [];
    // введенные контакты собираются в массив contactsArray
    contactsContainers.forEach(el => {
      const contactType = el.childNodes[0].childNodes[0].childNodes[0].textContent;
      const contactValue = el.childNodes[1].value;
      contactsArray.push({type: contactType, value: contactValue});
    })
    const response = await createClient(document.getElementById('lastname').value,
                 document.getElementById('name').value,
                 document.getElementById('surname').value,
                 contactsArray, method, clientID);
    if (!response.ok) {
      handleError(response);
    }
}
