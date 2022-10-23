import { createClient } from "./requests.js";

const saveBtn = document.querySelector('.add-client-btn');

export function prepareDataToSending(method, clientID) {
    event.preventDefault();
    const contactsContainers = document.querySelectorAll('.added-contacts-container');
    let contactsArray = [];
    contactsContainers.forEach(el => {
      const contactType = el.childNodes[0].childNodes[0].childNodes[0].textContent;
      const contactValue = el.childNodes[1].value;
      contactsArray.push({type: contactType, value: contactValue});
    })
    createClient(document.getElementById('name').value,
                 document.getElementById('lastname').value,
                 document.getElementById('surname').value,
                 contactsArray, method, clientID);
}

saveBtn.addEventListener('click', () => {prepareDataToSending('POST')});
