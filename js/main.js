import { handleStepNavigation } from "./modules/steps.js";
import { validateData } from "./modules/formValidation.js";
import { updateStep } from "./modules/pagination.js";

const steps = document.querySelectorAll(".step");
const paginationBarItems = document.querySelectorAll(".pagination__bar-item");
const stepNumberText = document.getElementById("step-number");

const firstStepBtn = document.querySelector("#first-step-btn");
const secondStepBtn = document.querySelector("#second-step-btn");
const thirdStepBtn = document.querySelector("#third-step-btn");

const userName = document.querySelector(".summary .userName");
const userEmail = document.querySelector(".summary .userEmail");
const userTopics = document.querySelector(".summary .user-topics");

document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 1;

  handleStepNavigation(
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
  );

  document.querySelector("form").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
});
