// смена класса для открытия dropdown
function toggleClassContainer(el) {
  el.classList.toggle('dd-list__content--active');
}

// функция для открытия/закрытия выпадающего списка
export function openDdList(event) {
  if (event.target.className === 'dd-list') {
    toggleClassContainer(event.target.parentElement);
  }
}

// ф-я для выбора опции из выпадающего списка
export function chooseDdListOption(event) {
  event.currentTarget.previousSibling.textContent = event.target.textContent;
  event.currentTarget.parentElement.parentElement.nextElementSibling.focus();
  toggleClassContainer(event.currentTarget.parentElement.parentElement);
}
