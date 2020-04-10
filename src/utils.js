export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (typeof value == 'undefined' || value == null) {
    return false;
  }

  if (rules.required) {
    isValid = ('' + value).trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = ('' + value).trim().length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    const lenght = ('' + value).trim().length;
    isValid =
      lenght <= rules.maxLength && lenght > 0 && value !== '' && isValid;
  }

  if (rules.isEmail) {
    // eslint-disable-next-line max-len
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const browserLanguage = function browserLocale() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  }
  return navigator.language;
};

export const getRandomString = function (length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const stripHtmlTags = (element) =>
  element.replace(/<\/?[^>]+(>|$)/g, '');

export const getMonthAndDay = (dateStr) => {
  const parts = dateStr.split('-');
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  const month = date.toLocaleString('default', { month: 'long' });
  return month + ', ' + parts[0];
};
