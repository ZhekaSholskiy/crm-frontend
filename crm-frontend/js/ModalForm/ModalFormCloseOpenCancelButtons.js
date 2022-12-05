// открываем форму
// код запускаем по загрузке страницы
const formBg = document.querySelector('.form-bg');
const body = document.querySelector('body');
const formContainer = document.querySelector('.form-container');

// закрываем форму при клике на фон
formBg.addEventListener('click', (event) => {
  if (event.target === formBg) {
    document.location.search = '';
  }
})

export function openModal() {
  formBg.style.opacity = 1;
  formBg.style.zIndex = 100;
  formContainer.style.transform = 'translate(-50%, -50%)';
  body.style.overflow = 'hidden';
}

// отменяем изменения, перезагружаем страницу
// код запускаем при открытии модалки добавления клиента
export const cancelBtn = document.querySelector('.cancel-btn');
export function cancelOperation(event) {
  event.preventDefault();
  document.location.search = '';
}
cancelBtn.addEventListener('click', cancelOperation);

// закрываем форму, перезагружаем страницу
// код запускаем при открытии модалки добавления клиента
const closeForm = document.querySelector('.close-form');
closeForm.addEventListener('click', () => document.location.search = '');
