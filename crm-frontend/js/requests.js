export async function getClientsList(clientId = '') {
  const initialClientsList = await fetch(`http://localhost:3000/api/clients/${clientId}`);
  return initialClientsList.json();
 };

 export async function createClient(lastName, name, surname, contacts, method, clientID = '') {
  const createClient = await fetch(`http://localhost:3000/api/clients/${clientID}`, {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: name,
      surname: surname,
      lastName: lastName,
      contacts: contacts
    })
  })
 }

 export async function deleteClient(clientID) {
  const deleteClient = await fetch(`http://localhost:3000/api/clients/${clientID}`, {
    method: 'DELETE',
  })
 }
