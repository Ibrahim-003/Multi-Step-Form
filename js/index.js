//ALL STEPS
const steps = document.querySelectorAll(".step");

//PAGINATION
const paginationBarItems = document.querySelectorAll(".pagination__bar-item");
const stepNumberText = document.getElementById("step-number");

// STEP BUTTON
const firstStepBtn = document.querySelector("#first-step-btn");
const secondStepBtn = document.querySelector("#second-step-btn");
const thirdStepBtn = document.querySelector("#third-step-btn");

//SET USER INFO
const userName = document.querySelector(".summary .userName");
const userEmail = document.querySelector(".summary .userEmail");
const userTopics = document.querySelector(".summary .user-topics");

let currentStep = 1;

// FORM VALIDATION
const isValidName = (name) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]{2,40}$/;

  return regex.test(name);
};

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(email);
};

const isValidTopics = (topics) => {
  return topics.length >= 1;
};

const validateData = () => {
  const nameErrorContainer = document.getElementById("nameError-container");
  const emailErrorContainer = document.getElementById("emailError-container");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorNameMessage = `<span>Your name is incorrect, please try again.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#D16D6A">
                                    <path
                                        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" />
                                </svg>`;
  const errorEmailMessage = `<span>Your email is incorrect, please try again.</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#D16D6A">
                                    <path
    d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" />`;
    
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

// UPDATE STEPS
const updateStep = () => {
  currentStep++;

  steps.forEach((step, index) => {
    step.classList.remove("active");

    if (index === currentStep - 1) {
      step.classList.add("active");
    }
  });

  paginationBarItems.forEach((item, index) => {
    item.classList.remove("active");

    if (index === currentStep - 1) {
      item.classList.add("active");
    }
  });

  stepNumberText.innerText = currentStep;
};

const getAllTopics = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"');

  const allTopics = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) allTopics.push(checkbox.value);
  });

  return allTopics;
};

const topicsError = () => {
  const topisErrorContainer = document.getElementById("topicsError-container");
  const errorTopicsMessage = `<span>You need to choice at least one option</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#D16D6A">
                                    <path
                                        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z" />
                                </svg>`;

  topisErrorContainer.innerHTML = errorTopicsMessage;
};

const loadInfo = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const topics = getAllTopics();

  userName.innerText = name;
  userEmail.innerText = email;

  for (const topic of topics) {
    const topicItem = `<li>${topic}</li>`;
    userTopics.insertAdjacentHTML("beforeend", topicItem);
  }
};

firstStepBtn.addEventListener("click", () => {
  if (validateData()) {
    updateStep();
  }
});

secondStepBtn.addEventListener("click", () => {
  if (isValidTopics(getAllTopics())) {
    loadInfo();
    updateStep();
  } else {
    topicsError();
  }
});

thirdStepBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("You succesfully confirm your data");
});
