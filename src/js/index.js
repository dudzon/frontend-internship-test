/* Here goes your JS code */

document.addEventListener("DOMContentLoaded", () => {
  /***************************************
                CONSTANTS
  ****************************************/

  const main = document.querySelector(".main"),
    showForm = document.querySelector("#show-popup-form"),
    popup = document.querySelector(".popup"),
    hideForm = document.querySelector(".popup-form__close"),
    inputEmail = document.querySelector(".popup-form__email"),
    inputPassword = document.querySelector(".popup-form__password"),
    form = document.querySelector(".popup-form"),
    warning = document.querySelector(".popup-form__warning"),
    submitBtn = document.querySelector(".popup-form__submitBtn");

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

  const validateForm = e => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (warning.children.length < 1) {
      console.log("send form");
      setTimeout(() => {
        showSuccesMessage();
      }, 3000);
    } else {
      return;
    }
  };

  // Validate Email

  const validateEmail = () => {
    let userEmail = inputEmail.value;
    const pattern = /^[_A-Za-z0-9-]+(.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*(.[A-Za-z]{2,4})$/;
    if (!pattern.test(userEmail)) {
      showWarning("It's not a valid email!", "email-error", "email");

      inputEmail.style.border = "1px solid #ea6b6b";

      //   Reset warning after input email gets focus

      inputEmail.addEventListener("focus", resetInputWarning);
    } else {
      // hide error warning if email passes validation
      hideWarning(warning.querySelector(".email-error"));
    }

    return true;
  };
  //   Validate Password
  const validatePassword = () => {
    const passwordLength = inputPassword.value.length;
    if (passwordLength < 5) {
      showWarning(
        "Password must have at least five characters!",
        "password-error",
        "password"
      );
      inputPassword.style.border = "1px solid #ea6b6b";

      //   Reset warning after input password gets focus
      inputPassword.addEventListener("focus", resetInputWarning);
    } else {
      // hide error warning if password passes validation
      hideWarning(warning.querySelector(".password-error"));
    }
    return true;
  };

  // Show warning, if there is already warning displayed, don't add another one.

  const showWarning = (string, className, data) => {
    if (!checkElem(data)) {
      const message = document
        .createRange()
        .createContextualFragment(
          `<div class=${className} data-error =${data}>${string}</div>`
        );
      warning.append(message);
    }
  };

  //   Reset Input Warning

  function resetInputWarning() {
    this.style.border = "1px solid #ccc";
  }
  //   Clear error message
  const hideWarning = elem => {
    if (elem) {
      elem.remove();
    }
  };

  //   check if error message exists,to prevent adding duplicate warnings

  const checkElem = data => {
    //   MS EDGE doesn't support  for...of loops so I had to revert to old school for loop.

    // for (let elem of warning.children) {
    //   if (elem.dataset.error === data) {
    //     elem.remove();
    //   }
    // }
    for (let i = 0; i < warning.children.length; i++) {
      if (warning.children[i].dataset.error === data) {
        warning.children[i].remove();
      }
    }
  };

  //   Hide popup after sumbitting and display success message

  const showSuccesMessage = () => {
    popup.style.display = "none";
    const message = document
      .createRange()
      .createContextualFragment(`<p class="main__message">Thank you</p>`);
    main.append(message);
  };

  /***************************************
               EVENTS
  ****************************************/

  showForm.addEventListener("click", showPopup);
  hideForm.addEventListener("click", hidePopup);
  inputEmail.addEventListener("blur", validateEmail);
  inputPassword.addEventListener("blur", validatePassword);
  submitBtn.addEventListener("click", validateForm);
});
