
const translations = {
  en: {
    welcome: "Welcome to JalSathi!",
    subtitle: "Smarconstt water management for rice farmers 🌾",
    save: "Save Field Details",
    saved: "Your field details have been saved!"
  },
  ta: {
    welcome: "ஜல்சாதிக்கு வரவேற்கிறோம்!",
    subtitle: "நெல் விவசாயத்திற்கான நீர் மேலாண்மை 🌾",
    save: "வயல் விவரங்களைச் சேமிக்கவும்",
    saved: "உங்கள் வயல் விவரங்கள் சேமிக்கப்பட்டன!"
  }
};

let currentLanguage = "en";

function changeLanguage(language) {
  currentLanguage = language;

   welcome = document.getElementById("welcome");
 const  subtitle = document.getElementById("subtitle");
  const saveButton = document.getElementById("saveButton");

  if (welcome) {
    welcome.textContent = translations[language].welcome;
  }

  if (subtitle) {
    subtitle.textContent = translations[language].subtitle;
  }

  if (saveButton) {
saveButton.textContent = translations[language].save;
  }
}

  const farmerName = document.getElementById("farmerName");
  const fieldStage = document.getElementById("growthStage");

   details = {
    name: farmerName ? farmerName.value.trim() : "",
    stage: fieldStage ? fieldStage.value : ""
  };

  if (!details.name) {
    alert("Please enter the farmer name!");
    return;
  }
    
 localStorage.setItem("jalSathiField", JSON.stringify(details));

  alert(translations[currentLanguage].saved);
}

console.log("JalSathi JavaScript loaded successfully! 🌾");
const saveRainfallButton =
  document.getElementById("saveRainfall");

saveRainfallButton.addEventListener("click", function () {
  const rainfall =
    document.getElementById("rainfall").value;
const
  const message =
    document.getElementById("rainfallMessage");

  if (rainfall === "") {
    message.textContent =
      "Please choose a rainfall observation.";
    return;
  }

  localStorage.setItem("jalSathiRainfall", rainfall);

  message.textContent =
    "Rainfall observation saved successfully!";
});

window.addEventListener("DOMContentLoaded", function () {
  // Restore the saved field details.
  const savedField = localStorage.getItem("jalSathi-field");

  if (savedField) {
    try {
      const details = JSON.parse(savedField);

      const nameInput = document.getElementById("farmerName");
      const stageInput = document.getElementById("fieldStage");
      const fieldNameInput = document.getElementById("field-name");

      if (nameInput) nameInput.value = details.name || "";
      if (stageInput) stageInput.value = details.stage || "";
      if (fieldNameInput) fieldNameInput.value = details.fieldName || "";
    } catch (error) {
      console.error("Could not restore field details:", error);
    }
  }

  // Restore the saved rainfall observation.
  const savedRainfall = localStorage.getItem("jalSathiRainfall");
  const rainfallInput = document.getElementById("rainfall");

  if (savedRainfall && rainfallInput) {
    rainfallInput.value = savedRainfall;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const savedField = localStorage.getItem("jalSathiField");

  if (savedField) {
    const details = JSON.parse(savedField);
functionsaveFieldDetails
    const farmerName = document.getElementById("farmerName");
    const fieldStage = document.getElementById("growthStage");

    if (farmerName) {
      farmerName. () {
value = details.name || "";
    }

    if (fieldStage) {
      fieldStage.value = details.stage || "";
    }
  }
});

