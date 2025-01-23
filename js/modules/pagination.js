export const updateStep = (
  steps,
  paginationBarItems,
  stepNumberText,
  currentStep
) => {
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
