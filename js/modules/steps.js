import { updateStep } from "./pagination.js";
import { validateData, isValidTopics } from "./formValidation.js";
import { topicsError, loadInfo } from "./userInfo.js";

export const handleStepNavigation = (
  firstStepBtn,
  secondStepBtn,
  thirdStepBtn,
  steps,
  paginationBarItems,
  stepNumberText,
  userName,
  userEmail,
  userTopics,
  currentStep
) => {
  firstStepBtn.addEventListener("click", () => {
    if (validateData()) {
      updateStep(steps, paginationBarItems, stepNumberText, currentStep);
    }
  });

  secondStepBtn.addEventListener("click", () => {
    const topics = getAllTopics();
    if (isValidTopics(topics)) {
      currentStep = 2;
      loadInfo(userName, userEmail, userTopics);
      updateStep(steps, paginationBarItems, stepNumberText, currentStep);
    } else {
      topicsError();
    }
  });

  thirdStepBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("You successfully confirmed your data");
  });
};

const getAllTopics = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allTopics = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) allTopics.push(checkbox.value);
  });

  return allTopics;
};
