import { numbersPattern } from '../constants/patters';

export const normalizeCardNumber = (value) =>
  value
    .replace(/\s/g, '')
    .match(/.{1,4}/g)
    ?.join(' ')
    .substring(0, 19) || '';

export const normalizeCardDate = (value) =>
  value
    .replace(/[/]/g, '')
    .match(/.{1,2}/g)
    ?.join('/')
    .substring(0, 5) || '';

export const normalizePostcode = (value) => (value.includes('BY ') ? value : value.replace(value, 'BY '));

export const normalizePhoneNumber = (value) => {
  let inputNumbersValue = value.replace(numbersPattern, '');
  let formattedInputValue = '+375 ';

  if (inputNumbersValue.length === 1) {
    inputNumbersValue = `375${inputNumbersValue}`;
  }
  if (inputNumbersValue.length > 3) {
    formattedInputValue += `(${inputNumbersValue.substring(3, 5)}`;
  }
  if (inputNumbersValue.length >= 6) {
    formattedInputValue += `) ${inputNumbersValue.substring(5, 8)}`;
  }
  if (inputNumbersValue.length >= 9) {
    formattedInputValue += `-${inputNumbersValue.substring(8, 10)}`;
  }
  if (inputNumbersValue.length >= 11) {
    formattedInputValue += `-${inputNumbersValue.substring(10, 12)}`;
  }

  return formattedInputValue;
};

export const isCorrectCode = (value) => {
  const code = value.replace(numbersPattern, '').substring(3, 5);

  return code === '25' || code === '44' || code === '33' || code === '29' ? true : 'Введите корректный код оператора';
};

export const isCorrectCardDate = (value) => {
  const date = new Date();
  const cardMonth = parseInt(value.substring(0, 2), 10);
  const cardYear = parseInt(value.substring(3, 5), 10);

  const isCorrectMonth = cardMonth >= 1 && cardMonth <= 12;
  const isCorrectDate =
    cardYear > parseInt(date.getFullYear().toString().substring(2, 4), 10) ||
    (cardYear === parseInt(date.getFullYear().toString().substring(2, 4), 10) && cardMonth >= date.getMonth() + 1);

  return isCorrectMonth && isCorrectDate ? true : 'Введите корректную дату';
};
