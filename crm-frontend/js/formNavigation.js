//навигация по форме через Enter

const addContactBtn = document.querySelector('.add-contact');

let contactsInputList = document.querySelectorAll('.contacts-input');

function updateContactsList() {
  contactsInputList = document.querySelectorAll('.contacts-input');
  contactsInputList.forEach(el => el.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      el.parentElement.parentElement.nextElementSibling.focus();
    }
  }))
  contactsInputList[contactsInputList.length - 1].focus();
}

addContactBtn.addEventListener('click', updateContactsList);

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

