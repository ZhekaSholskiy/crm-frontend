import {contactConversion} from './typesToImages.js';

export function createTr(id, lastName, surname, name, dateCreation, timeCreation, updatingDate, updatingTime, contacts) {
  const tbody = document.querySelector('tbody');

  const tr = document.createElement('tr');
  tbody.append(tr);

  const th = document.createElement('th');
  tr.append(th);
  th.textContent = id;

  const fullNameTd = document.createElement('td');
  fullNameTd.textContent = lastName + ' ' + name + ' ' + surname;
  tr.append(fullNameTd);
  const createTimeTd = document.createElement('td');
  tr.append(createTimeTd);
  const createDate = document.createElement('span');
  const createTime = document.createElement('span');
  createDate.classList.add('date-transform');
  createTime.classList.add('time-transform');
  createDate.textContent = dateCreation;
  createTime.textContent = timeCreation;
  createTimeTd.append(createDate);
  createTimeTd.append(createTime);
  const updateTimeTd = document.createElement('td');
  tr.append(updateTimeTd);
  const updateDate = document.createElement('span');
  const updateTime = document.createElement('span');
  updateDate.classList.add('date-transform');
  updateTime.classList.add('time-transform');
  updateDate.textContent = updatingDate;
  updateTime.textContent = updatingTime;
  updateTimeTd.append(updateDate);
  updateTimeTd.append(updateTime);
  const contactsTd = document.createElement('td');
  contactConversion(contacts, contactsTd);
  tr.append(contactsTd);
  const btnContainer = document.createElement('td');
  btnContainer.classList.add('btn-container');
  const changeBtn = document.createElement('button');
  changeBtn.classList.add('change-btn');
  changeBtn.textContent = 'Изменить';
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Удалить';
  btnContainer.append(changeBtn);
  btnContainer.append(deleteBtn);
  tr.append(btnContainer);
}
