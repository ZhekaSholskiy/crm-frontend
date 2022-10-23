import { getClientsList } from './requests.js';
import { createTr } from './DOM.js';
import { dateTransform } from './transform.js';

const clientsList = await getClientsList();

clientsList.forEach(el => {
  const creationDate = dateTransform(el.createdAt);
  const updatingDate = dateTransform(el.updatedAt);
  createTr(el.id, el.lastName, el.surname, el.name, creationDate.date, creationDate.time, updatingDate.date, updatingDate.time, el.contacts);
});

