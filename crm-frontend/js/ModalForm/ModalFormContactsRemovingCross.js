// ф-я для добавления крестика удаления контакта, если поле ввода не пусто
export function addRemovingCross() {
  const contactsInputs = document.querySelectorAll('.contacts-input');
  contactsInputs.forEach(el => {
    if (el.value !== '') {
      el.nextElementSibling.classList.add('delete-aria--active');
    }
    el.nextElementSibling.addEventListener('click', () => {
      el.nextElementSibling.closest('.added-contacts-container').remove();
    })
    el.addEventListener('blur', () => {
      if (el.value !== '') {
        el.nextElementSibling.classList.add('delete-aria--active');
      } else {
        el.nextElementSibling.classList.remove('delete-aria--active');
      }
    })
  })
}
