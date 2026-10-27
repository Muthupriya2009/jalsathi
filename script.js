const languageButton = document.getElementById("language-toggle");
const saveButton = document.getElementById("save-field");
const fieldName = document.getElementById("field-name");
const growthStage = document.getElementById("growth-stage");
const statusMessage = document.getElementById("status");

let currentLanguage = "en";

languageButton.addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "ta" : "en";

  // Update the language of the page.
  document.documentElement.lang =
    currentLanguage === "en" ? "en" : "ta";

  // Translate every element that has translation text.
  document.querySelectorAll("[data-en]").forEach(function (element) {
    element.textContent = element.dataset[currentLanguage];
  });

  // Translate the field-name placeholder.
  fieldName.placeholder =
    fieldName.dataset["placeholder" + (currentLanguage === "en" ? "En" : "Ta")];

  // Show the other language as the next button option.
  languageButton.textContent =
    currentLanguage === "en" ? "தமிழ்" : "English";

  // Clear old status messages so they don't show in the wrong language.
  statusMessage.textContent = "";
});

saveButton.addEventListener("click", function () {
  const record = {
    name: fieldName.value.trim(),
    growthStage: growthStage.value
  };

  if (!record.growthStage) {
    statusMessage.textContent =
      currentLanguage === "en"
        ? "Please choose the rice growth stage first."
        : "முதலில் நெல் வளர்ச்சி நிலையைத் தேர்ந்தெடுக்கவும்.";
    return;
  }

  try {
    localStorage.setItem("jalsathi-field", JSON.stringify(record));

    statusMessage.textContent =
      currentLanguage === "en"
        ? "Field details saved on this device!"
        : "வயல் விவரங்கள் இந்தச் சாதனத்தில் சேமிக்கப்பட்டன!";
  } catch (error) {
    statusMessage.textContent =
      currentLanguage === "en"
        ? "Could not save. Please check your browser settings."
        : "சேமிக்க முடியவில்லை. உலாவி அமைப்புகளைச் சரிபார்க்கவும்.";
  }
});
