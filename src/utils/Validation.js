export const emailValidation = email => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !email.match(regex) || email === '';
};

export const phoneValidation = phone => {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return !phone.match(regex);
};

export const textValidation = text => text === '';
