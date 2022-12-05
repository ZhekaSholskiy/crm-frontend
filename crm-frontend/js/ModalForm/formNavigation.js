//навигация по форме через Enter
export function updateContactsList() {
  let contactsInputList = document.querySelectorAll('.contacts-input');
  contactsInputList.forEach(el => el.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      el.parentElement.parentElement.nextElementSibling.focus();
    }
  }))
  contactsInputList[contactsInputList.length - 1].focus();
}

const fullNameInputList = document.querySelectorAll('.mb-3');
fullNameInputList.forEach(el => {
  el.childNodes[1].addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      try {
        el.nextElementSibling.childNodes[1].focus();
      }
      catch (err) {
        el.parentNode.nextElementSibling.childNodes[2].focus();
      }
    }
  })
});

