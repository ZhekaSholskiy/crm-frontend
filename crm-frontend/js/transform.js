export function dateTransform(dateString) {

  const stringDate = new Date(dateString);

  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
  }

  const date = stringDate.toLocaleString("ru", dateOptions);
  const time = stringDate.toLocaleString("ru", timeOptions);

  return  {
    date,
    time
  }
}
