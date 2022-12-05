import { getClientsList } from '../requests.js';
import { createTr } from './TableBodyCreateTr.js';
import { dateTransform } from '../dateTransform.js';
import { respondFilter } from '../SearchInputFiltration.js';

export const tbody = document.querySelector('.tbody');
const loadingBg = document.querySelector('.loading');
// функция: отображает индикатор загрузки, делает запрос серверу
export async function loadingFunction(sortingValue = '') {
  loadingBg.style.display = 'block';
  getClientsList().then(
    (result) => {
      localStorage.removeItem('localData');
      localStorage.setItem('localData', JSON.stringify(result))
      buildTable(respondFilter(result, sortingValue)); // если sortingValue пустое, тогда result остается прежним
      loadingBg.style.display = 'none';

      tippy('.th-href', {
        content: 'скопировать ссылку на клиента'
      })
    }
  );
}

// запрос серверу и отрисовка таблицы сразу после загрузки
loadingFunction();

// обновление списка на основе clientList
export function buildTable(clientsList) {
  cleanTable();
  clientsList.forEach(el => {
    const creationDate = dateTransform(el.createdAt);
    const updatingDate = dateTransform(el.updatedAt);
    createTr(el.id, el.surname, el.lastName, el.name, creationDate.date, creationDate.time, updatingDate.date, updatingDate.time, el.contacts);
  });
  // настраиваем всплывающие подсказки для контактов
  const tips = document.querySelectorAll('.one-img-container');
  tips.forEach(el => {
    if (el.id !== "") {
      tippy(`#${el.id}`, {
        content: `${el.getAttribute('data-contact-type')}: ${el.getAttribute('data-contact-value')}`,
      })
    }
  })
}

// очистка списка перед добавлением обновленных строк
export function cleanTable() {
  const table = document.querySelector('.tbody').childNodes;
  for (let i = 1; i < table.length;) {
    table[i].remove();
  }
}
