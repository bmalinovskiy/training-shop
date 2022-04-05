/* eslint-disable no-nested-ternary */
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
  if (value.includes('+375 (')) {
    if (value.length === 8) {
      return value.replace(value, `${value}) `);
    }
    return value;
  }
  return value.replace(value, '+375 (');
};
