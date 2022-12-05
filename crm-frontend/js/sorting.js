// функции для сортировки по клику на заголовок столбца
import { buildTable } from "./TableBody/TableBodyLoadAndUpdating.js";


// берем элементы заголовков
const sortHeaders = document.querySelectorAll('[data-head]');
// вешаем на них обработчики
sortHeaders.forEach(el => {
  el.addEventListener('click' , () => sortList(reductor(el.getAttribute('data-head')), el.getAttribute('data-direction'), el));
});
// устанавливаем сортировку по умолчанию
sortList(reductor('th-ID'), 'none', document.querySelector('[data-head=th-ID]'));
// в зависимости от кликнутого заголовка, достаем для сортировки нужное поле объекта в списке
function reductor(dataName) {
  switch(dataName) {
    case 'th-ID':
      return 'id';
    case 'th-full-name':
      return 'lastName';
    case 'th-create':
      return 'createdAt';
    case 'th-update':
      return 'updatedAt'
  }
}

// ставим классы для визуального отображения направления сортировки в зависимости и от атрибута
function setClasses(el) {
  switch(el.getAttribute('data-direction')) {
    case 'up':{
      el.classList.remove('sort-down');
      el.classList.add('sort-up');
      return;
    }
    case 'down':{
      el.classList.remove('sort-up');
      el.classList.add('sort-down');
      return;
    }
    case 'none':{
      el.classList.remove('sort-up');
      el.classList.remove('sort-down');
      return;
    }
  }
}

export function sortList(header, direction, el) {
  // смотрим, кликали ли в предыдущий раз на элемент
  const isClicked = el.getAttribute('data-clicked');
  // ставим атрибуты, указывающие, на какой элемент мы только что кликнули
  sortHeaders.forEach(el => {
    el.setAttribute('data-clicked', 'false');
    //убираем флаг сортировки у всех остальных элементов
    el.setAttribute('data-direction', 'none');
  })
  el.setAttribute('data-clicked', 'true');
  // если не кликали, тогда сортируем по возрастанию
  if (isClicked === 'false') {
    direction = 'down';
  };
  // достаем из storage лист
  const clientList = JSON.parse(localStorage.getItem('localData'));
  // сортируем
  clientList.sort((a, b) => {
    if (direction === 'up') return a[header] < b[header] ? 1 : a[header] > b[header] ? -1: 0;
    if (direction === 'down') return a[header] > b[header] ? 1 : a[header] < b[header] ? -1: 0;
  });
  direction === 'down' ? el.setAttribute('data-direction', 'up') : el.setAttribute('data-direction', 'down');
  // перерисовываем стрелочки
  sortHeaders.forEach(el => setClasses(el));
  //перерисовываем табличку
  buildTable(clientList);
}
