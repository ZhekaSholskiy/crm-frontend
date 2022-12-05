// функция, перебирающая ответ сервера и возвращающая отфильтрованный массив
// фильтрация происходит в зависимости от того, что мы ввели в строку поиска

import { dateTransform } from "./dateTransform.js";
import { loadingFunction } from "./TableBody/TableBodyLoadAndUpdating.js";

const searchInput = document.querySelector('.search__input');
export function respondFilter(result, sortingValue) {
  if (sortingValue !== '') {
    let sortedArray = [];
      result.map(
      arrayEl => {
            return (arrayEl['id'].includes(sortingValue) || // ищем в id
            // приводим ФИО в одну строку и убираем зависимость от регистра
            `${arrayEl['lastName']} ${arrayEl['name']} ${arrayEl['surname']}`
            .toLowerCase().includes(sortingValue.toLowerCase()) ||
            // ищем в контактах
            arrayEl['contacts'].map(el => `${el['value']}`.toLowerCase()
            .includes(sortingValue.toLowerCase())).includes(true) ||
            // ищем в датах и времени
             checkData(arrayEl, 'createdAt', sortingValue) ||
             checkData(arrayEl, 'updatedAt', sortingValue))
             // если нашли хоть что-то, добавляем строку в отфильтрованный массив
            && sortedArray.push(arrayEl);
          }
        )
    result = sortedArray}
    return result
  }

  // запрос и отрисовка после фильтрации с задержкой 300мс
  let timerForFilter;
  searchInput.addEventListener('input', () => {
    clearTimeout(timerForFilter);
    timerForFilter = setTimeout(() => loadingFunction(searchInput.value), 300);
  })

  // ф-я для фильтра даты и времени
  function checkData(arrayEl, key, sortingValue) {
    return `${dateTransform(arrayEl[key]).date} ${dateTransform(arrayEl[key]).time}`
            .includes(sortingValue)
  }
