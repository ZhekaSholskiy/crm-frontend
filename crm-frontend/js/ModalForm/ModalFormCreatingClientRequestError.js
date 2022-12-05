// функция, которая выводит ошибку запроса над блоком с кнопками

const addClientBtn = document.querySelector('.add-client-btn');

export async function handleError(result) {
  //чистим предыдщуие ошибки, если они были
  const forCleaning = document.querySelectorAll('.error-wrapper');
  forCleaning.forEach(el => el.remove());
  const errorWrapper = document.createElement('div');

  //создаем контейнер для текущих ошибок
  errorWrapper.classList.add('error-wrapper');
  addClientBtn.before(errorWrapper);

  // обрабатываем разные статусы ошибок
  switch(result.status) {
      case 422:
          const response = await result.json();
          response.errors.map(error => {
            const errorBody = document.createElement('div');
            errorBody.textContent = `Ошибка: ${error.message} в поле ${error.field}`;
            errorBody.classList.add('error-body');
            errorWrapper.append(errorBody);
          })
          return;
      case 404:
          errorWrapper.textContent =
          'Переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных'
          return;
      case 500:
          errorWrapper.textContent =
          'странно, но сервер сломался :('
          return;
      default:
          errorWrapper.textContent =
          'Что-то пошло не так...'
          return;
    }
}
