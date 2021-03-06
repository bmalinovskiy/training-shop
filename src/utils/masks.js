import { numbersPattern } from '../constants/patters';

export const normalizeCardNumber = (value) =>
  value
    .replace(numbersPattern, '')
    .replace(/\s/g, '')
    .match(/.{1,4}/g)
    ?.join(' ')
    .substring(0, 19) || '';

export const normalizeCardDate = (value) =>
  value
    .replace(numbersPattern, '')
    .replace(/[/]/g, '')
    .match(/.{1,2}/g)
    ?.join('/')
    .substring(0, 5) || '';

export const normalizePostcode = (value) => {
  const postcodeValue = value.replace(numbersPattern, '');
  const formattedPostcodeValue = `BY ${postcodeValue}`;

  if (!postcodeValue) {
    return '';
  }

  return formattedPostcodeValue;
};

export const normalizePhoneNumber = (value) => {
  let phoneValue = value.replace(numbersPattern, '');
  let formattedPhoneValue = '+375 ';

  const codeFirstChar = phoneValue.substring(3, 4);
  const codeSecondChar = phoneValue.substring(4, 5);

  if (!phoneValue) {
    return '';
  }

  if (phoneValue.length === 1 && phoneValue !== '2' && phoneValue !== '3' && phoneValue !== '4') {
    return '';
  }

  if (phoneValue.length === 4 && codeFirstChar !== '2' && codeFirstChar !== '3' && codeFirstChar !== '4') {
    return formattedPhoneValue;
  }

  if (phoneValue.length === 5) {
    if (codeFirstChar === '2') {
      if (codeSecondChar !== '5' && codeSecondChar !== '9') {
        formattedPhoneValue += `(${codeFirstChar}`;
        return formattedPhoneValue;
      }
    }
    if (codeFirstChar === '3') {
      if (codeSecondChar !== '3') {
        formattedPhoneValue += `(${codeFirstChar}`;
        return formattedPhoneValue;
      }
    }
    if (codeFirstChar === '4') {
      if (codeSecondChar !== '4') {
        formattedPhoneValue += `(${codeFirstChar}`;
        return formattedPhoneValue;
      }
    }
  }

  if (phoneValue.length === 1) {
    phoneValue = `375${phoneValue}`;
  }
  if (phoneValue.length > 3) {
    formattedPhoneValue += `(${phoneValue.substring(3, 5)}`;
  }
  if (phoneValue.length >= 6) {
    formattedPhoneValue += `) ${phoneValue.substring(5, 8)}`;
  }
  if (phoneValue.length >= 9) {
    formattedPhoneValue += `-${phoneValue.substring(8, 10)}`;
  }
  if (phoneValue.length >= 11) {
    formattedPhoneValue += `-${phoneValue.substring(10, 12)}`;
  }

  return formattedPhoneValue;
};

export const isCorrectCardDate = (value) => {
  const date = new Date();
  const cardMonth = parseInt(value.substring(0, 2), 10);
  const cardYear = parseInt(value.substring(3, 5), 10);

  const isCorrectMonth = cardMonth >= 1 && cardMonth <= 12;
  const isCorrectDate =
    cardYear > parseInt(date.getFullYear().toString().substring(2, 4), 10) ||
    (cardYear === parseInt(date.getFullYear().toString().substring(2, 4), 10) && cardMonth >= date.getMonth() + 1);

  return isCorrectMonth && isCorrectDate ? true : '?????????????? ???????????????????? ????????';
};
