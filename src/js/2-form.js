
const inputs = document.querySelectorAll(".input-placeholder");


inputs.forEach((input) => {
    input.addEventListener("click", () => {
      input.setAttribute("placeholder", "Type area");
    });
  });



  const form = document.querySelector(".feedback-form");
  const formData = { email: "", message: "" }
  const localStorageKey = "feedback-form-state";

  function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  function loadFromLS(key) {
    const body = localStorage.getItem(key);
    try {
      const data = JSON.parse(body);
      return data;
    } catch {
      return body;
    }
  }
  
  form.addEventListener("input", (e) => {
    const userEmail = e.currentTarget.elements.email.value.trim();
    const userMessage = e.currentTarget.elements.message.value.trim();
    formData.email = userEmail;
    formData.message = userMessage;
    saveToLS(localStorageKey, formData)
  });

  
  function resetPage() {
    const localData = loadFromLS(localStorageKey);
    if (localData) {
      form.elements.email.value = localData.email || '';
      form.elements.message.value = localData.message || '';
    }
  }
  
  resetPage();
  
 form.addEventListener('submit', e => {
    e.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    const userEmail = e.currentTarget.elements.email.value.trim();
    const userMessage = e.currentTarget.elements.message.value.trim();
    formData.email = userEmail;
    formData.message = userMessage;
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    e.target.reset();
  });
  
  