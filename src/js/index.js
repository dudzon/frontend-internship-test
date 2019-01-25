/* Here goes your JS code */

document.addEventListener("DOMContentLoaded", () => {
  /***************************************
                CONSTANTS
  ****************************************/

  const showForm = document.querySelector("#show-popup-form"),
    popup = document.querySelector(".popup"),
    hideForm = document.querySelector(".popup-form__close"),
    inputEmail = document.querySelector(".popup-form__email"),
    inputPassword = document.querySelector(".popup-form__password"),
    form = document.querySelector(".popup-form");

  /***************************************
               ACTIONS
  ****************************************/

  //   Show popup

  const showPopup = () => {
    showForm.style.display = "none";
    popup.style.display = "block";
  };

  //   Close popup

  const hidePopup = () => {
    showForm.style.display = "block";
    popup.style.display = "none";
  };

  //  Form  Validation

  const validateForm = () => {};

  // Validate Email

  const validateEmail = () => {
    let userEmail = inputEmail.value;
    const pattern = /^[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*(.[A-Za-z]{2,4})$/;
    if (pattern.test(userEmail)) {
    } else {
      showWarning("It's not a valid email!");

      //   Reset warning after input email gets focus
      inputEmail.addEventListener("focus", resetWarning);
    }
  };
  //   Validate Password

  // Show warning
  const showWarning = string => {
    const message = document.createRange().createContextualFragment(`
      <div class="popup-form__warning">${string}</div>
    `);
    form.append(message);
    inputEmail.style.border = "1px solid #ea6b6b";
  };

  //   Reset warning

  const resetWarning = e => {
    const warning = document.querySelector(".popup-form__warning");
    warning.remove();
    inputEmail.style.border = "1px solid #ccc";
    inputEmail.value = "";
  };

  /***************************************
               EVENTS
  ****************************************/

  showForm.addEventListener("click", showPopup);
  hideForm.addEventListener("click", hidePopup);
  inputEmail.addEventListener("blur", validateEmail);
});
