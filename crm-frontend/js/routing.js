// здесь будет код для маршрутизации по окнам с клиентами по ID

import { openExistingClientForm } from "./TableBody/TableBodyChangeClientBtn.js";
import { tbody } from "./TableBody/TableBodyLoadAndUpdating.js";

const clientHref = new URL (document.location.href);

//если при загрузке в url у нас есть id, то мы грузим конкретного клиента
if (clientHref.search.includes('id')) {
  openExistingClientForm(clientHref.search.replace('?id', ''));
}

// функция для копирования ссылки на клиента в буфер обмена по клику на его ID
tbody.addEventListener('click', (e) => {
  if (e.target.className === 'th-ID th-href') {
    navigator.clipboard.writeText(document.location.href + 'id' + e.target.textContent);
    alert('ссылка на клиента скопирована в буфер обмена');
  }
})
