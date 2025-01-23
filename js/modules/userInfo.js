export const topicsError = () => {
  const topisErrorContainer = document.getElementById("topicsError-container");
  const errorTopicsMessage = `<span>You need to choose at least one option</span>`;

  topisErrorContainer.innerHTML = errorTopicsMessage;
};

export const loadInfo = (userName, userEmail, userTopics) => {
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

const getAllTopics = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allTopics = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) allTopics.push(checkbox.value);
  });

  return allTopics;
};
