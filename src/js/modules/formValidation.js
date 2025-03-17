export const isValidName = (name) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]{2,40}$/;
  return regex.test(name);
};

export const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const isValidTopics = (topics) => {
  return topics.length >= 1;
};

export const validateData = () => {
  const nameErrorContainer = document.getElementById("nameError-container");
  const emailErrorContainer = document.getElementById("emailError-container");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorNameMessage = `<span>Your name is incorrect, please try again.</span>`;
  const errorEmailMessage = `<span>Your email is incorrect, please try again.</span>`;

  let dataValid = true;

  if (!isValidName(name)) {
    dataValid = false;
    nameErrorContainer.innerHTML = errorNameMessage;
  } else {
    nameErrorContainer.innerHTML = "";
  }

  if (!isValidEmail(email)) {
    dataValid = false;
    emailErrorContainer.innerHTML = errorEmailMessage;
  } else {
    emailErrorContainer.innerHTML = "";
  }

  return dataValid;
};
