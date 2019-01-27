(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* Here goes your JS code */

document.addEventListener("DOMContentLoaded", function () {
  /***************************************
                CONSTANTS
  ****************************************/

  var main = document.querySelector(".main"),
      showForm = document.querySelector("#show-popup-form"),
      popup = document.querySelector(".popup"),
      hideForm = document.querySelector(".popup-form__close"),
      inputEmail = document.querySelector(".popup-form__email"),
      inputPassword = document.querySelector(".popup-form__password"),
      terms = document.querySelector(".form-terms__input"),
      warning = document.querySelector(".popup-form__warning"),
      submitBtn = document.querySelector(".popup-form__submitBtn");

  /***************************************
               ACTIONS
  ****************************************/

  //   Show popup

  var showPopup = function showPopup() {
    showForm.style.display = "none";
    popup.style.display = "block";
  };

  //   Close popup

  var hidePopup = function hidePopup() {
    showForm.style.display = "block";
    popup.style.display = "none";
  };

  //  Form  Validation

  var validateForm = function validateForm(e) {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateTerms();
    if (warning.children.length < 1) {
      setTimeout(function () {
        showSuccessMessage();
      }, 3000);
    } else {
      return;
    }
  };

  // Validate Email

  var validateEmail = function validateEmail() {
    var userEmail = inputEmail.value;
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  var validatePassword = function validatePassword() {
    var passwordLength = inputPassword.value.length;
    if (passwordLength < 5) {
      showWarning("Password must have at least five characters!", "password-error", "password");
      inputPassword.style.border = "1px solid #ea6b6b";

      //   Reset warning after input password gets focus
      inputPassword.addEventListener("focus", resetInputWarning);
    } else {
      // hide error warning if password passes validation
      hideWarning(warning.querySelector(".password-error"));
    }
    return true;
  };
  //  Validate terms & conditions
  var validateTerms = function validateTerms() {
    if (!terms.checked) {
      console.log("checked");
      showWarning("Please accept terms & conditions", "terms-error", "terms");
    } else {
      hideWarning(warning.querySelector(".terms-error"));
    }
  };

  // Show warning, if there is already warning displayed, don't add another one.

  var showWarning = function showWarning(string, className, data) {
    if (!checkElem(data)) {
      var message = document.createRange().createContextualFragment("<div class=" + className + " data-error =" + data + ">" + string + "</div>");
      warning.append(message);
    }
  };

  //   Reset Input Warning

  function resetInputWarning() {
    this.style.border = "1px solid #ccc";
  }
  //   Clear error message
  var hideWarning = function hideWarning(elem) {
    if (elem) {
      elem.remove();
    }
  };

  //   Check if error message exists,to prevent adding duplicate warnings

  var checkElem = function checkElem(data) {
    //   MS EDGE doesn't support  "for...of" loops so I had to revert to old school "for" loop.

    // for (let elem of warning.children) {
    //   if (elem.dataset.error === data) {
    //     elem.remove();
    //   }
    // }
    for (var i = 0; i < warning.children.length; i++) {
      if (warning.children[i].dataset.error === data) {
        warning.children[i].remove();
      }
    }
  };

  //   Hide popup after sumbitting and display success message

  var showSuccessMessage = function showSuccessMessage() {
    popup.style.display = "none";
    var message = document.createRange().createContextualFragment("<p class=\"main__message\">Thank you</p>");
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQ7Ozs7QUFJQSxNQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFBQSxNQUNFLFdBQVcsU0FBUyxhQUFULENBQXVCLGtCQUF2QixDQURiO0FBQUEsTUFFRSxRQUFRLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUZWO0FBQUEsTUFHRSxXQUFXLFNBQVMsYUFBVCxDQUF1QixvQkFBdkIsQ0FIYjtBQUFBLE1BSUUsYUFBYSxTQUFTLGFBQVQsQ0FBdUIsb0JBQXZCLENBSmY7QUFBQSxNQUtFLGdCQUFnQixTQUFTLGFBQVQsQ0FBdUIsdUJBQXZCLENBTGxCO0FBQUEsTUFNRSxRQUFRLFNBQVMsYUFBVCxDQUF1QixvQkFBdkIsQ0FOVjtBQUFBLE1BT0UsVUFBVSxTQUFTLGFBQVQsQ0FBdUIsc0JBQXZCLENBUFo7QUFBQSxNQVFFLFlBQVksU0FBUyxhQUFULENBQXVCLHdCQUF2QixDQVJkOztBQVVBOzs7O0FBSUE7O0FBRUEsTUFBTSxZQUFZLFNBQVosU0FBWSxHQUFNO0FBQ3RCLGFBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsTUFBekI7QUFDQSxVQUFNLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLE9BQXRCO0FBQ0QsR0FIRDs7QUFLQTs7QUFFQSxNQUFNLFlBQVksU0FBWixTQUFZLEdBQU07QUFDdEIsYUFBUyxLQUFULENBQWUsT0FBZixHQUF5QixPQUF6QjtBQUNBLFVBQU0sS0FBTixDQUFZLE9BQVosR0FBc0IsTUFBdEI7QUFDRCxHQUhEOztBQUtBOztBQUVBLE1BQU0sZUFBZSxTQUFmLFlBQWUsSUFBSztBQUN4QixNQUFFLGNBQUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJLFFBQVEsUUFBUixDQUFp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LENBQVksT0FBWjtBQUNELEdBTkQ7O0FBUUE7Ozs7QUFJQSxXQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DO0FBQ0EsV0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxTQUFuQztBQUNBLGFBQVcsZ0JBQVgsQ0FBNEIsTUFBNUIsRUFBb0MsYUFBcEM7QUFDQSxnQkFBYyxnQkFBZCxDQUErQixNQUEvQixFQUF1QyxnQkFBdkM7QUFDQSxZQUFVLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQXBDO0FBQ0QsQ0EvSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBIZXJlIGdvZXMgeW91ciBKUyBjb2RlICovXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKSxcclxuICAgIHNob3dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXBvcHVwLWZvcm1cIiksXHJcbiAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIiksXHJcbiAgICBoaWRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtZm9ybV9fY2xvc2VcIiksXHJcbiAgICBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1mb3JtX19lbWFpbFwiKSxcclxuICAgIGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWZvcm1fX3Bhc3N3b3JkXCIpLFxyXG4gICAgdGVybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdGVybXNfX2lucHV0XCIpLFxyXG4gICAgd2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtZm9ybV9fd2FybmluZ1wiKSxcclxuICAgIHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtZm9ybV9fc3VibWl0QnRuXCIpO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgIEFDVElPTlNcclxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAvLyAgIFNob3cgcG9wdXBcclxuXHJcbiAgY29uc3Qgc2hvd1BvcHVwID0gKCkgPT4ge1xyXG4gICAgc2hvd0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9O1xyXG5cclxuICAvLyAgIENsb3NlIHBvcHVwXHJcblxyXG4gIGNvbnN0IGhpZGVQb3B1cCA9ICgpID0+IHtcclxuICAgIHNob3dGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuXHJcbiAgLy8gIEZvcm0gIFZhbGlkYXRpb25cclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YWxpZGF0ZUVtYWlsKCk7XHJcbiAgICB2YWxpZGF0ZVBhc3N3b3JkKCk7XHJcbiAgICB2YWxpZGF0ZVRlcm1zKCk7XHJcbiAgICBpZiAod2FybmluZy5jaGlsZHJlbi5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNob3dTdWNjZXNzTWVzc2FnZSgpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBWYWxpZGF0ZSBFbWFpbFxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IHVzZXJFbWFpbCA9IGlucHV0RW1haWwudmFsdWU7XHJcbiAgICBjb25zdCBwYXR0ZXJuID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICBpZiAoIXBhdHRlcm4udGVzdCh1c2VyRW1haWwpKSB7XHJcbiAgICAgIHNob3dXYXJuaW5nKFwiSXQncyBub3QgYSB2YWxpZCBlbWFpbCFcIiwgXCJlbWFpbC1lcnJvclwiLCBcImVtYWlsXCIpO1xyXG5cclxuICAgICAgaW5wdXRFbWFpbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZWE2YjZiXCI7XHJcblxyXG4gICAgICAvLyAgIFJlc2V0IHdhcm5pbmcgYWZ0ZXIgaW5wdXQgZW1haWwgZ2V0cyBmb2N1c1xyXG5cclxuICAgICAgaW5wdXRFbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgcmVzZXRJbnB1dFdhcm5pbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaGlkZSBlcnJvciB3YXJuaW5nIGlmIGVtYWlsIHBhc3NlcyB2YWxpZGF0aW9uXHJcbiAgICAgIGhpZGVXYXJuaW5nKHdhcm5pbmcucXVlcnlTZWxlY3RvcihcIi5lbWFpbC1lcnJvclwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuICAvLyAgIFZhbGlkYXRlIFBhc3N3b3JkXHJcbiAgY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhc3N3b3JkTGVuZ3RoID0gaW5wdXRQYXNzd29yZC52YWx1ZS5sZW5ndGg7XHJcbiAgICBpZiAocGFzc3dvcmRMZW5ndGggPCA1KSB7XHJcbiAgICAgIHNob3dXYXJuaW5nKFxyXG4gICAgICAgIFwiUGFzc3dvcmQgbXVzdCBoYXZlIGF0IGxlYXN0IGZpdmUgY2hhcmFjdGVycyFcIixcclxuICAgICAgICBcInBhc3N3b3JkLWVycm9yXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlucHV0UGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2VhNmI2YlwiO1xyXG5cclxuICAgICAgLy8gICBSZXNldCB3YXJuaW5nIGFmdGVyIGlucHV0IHBhc3N3b3JkIGdldHMgZm9jdXNcclxuICAgICAgaW5wdXRQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgcmVzZXRJbnB1dFdhcm5pbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaGlkZSBlcnJvciB3YXJuaW5nIGlmIHBhc3N3b3JkIHBhc3NlcyB2YWxpZGF0aW9uXHJcbiAgICAgIGhpZGVXYXJuaW5nKHdhcm5pbmcucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZC1lcnJvclwiKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG4gIC8vICBWYWxpZGF0ZSB0ZXJtcyAmIGNvbmRpdGlvbnNcclxuICBjb25zdCB2YWxpZGF0ZVRlcm1zID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXJtcy5jaGVja2VkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcclxuICAgICAgc2hvd1dhcm5pbmcoXCJQbGVhc2UgYWNjZXB0IHRlcm1zICYgY29uZGl0aW9uc1wiLCBcInRlcm1zLWVycm9yXCIsIFwidGVybXNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoaWRlV2FybmluZyh3YXJuaW5nLnF1ZXJ5U2VsZWN0b3IoXCIudGVybXMtZXJyb3JcIikpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFNob3cgd2FybmluZywgaWYgdGhlcmUgaXMgYWxyZWFkeSB3YXJuaW5nIGRpc3BsYXllZCwgZG9uJ3QgYWRkIGFub3RoZXIgb25lLlxyXG5cclxuICBjb25zdCBzaG93V2FybmluZyA9IChzdHJpbmcsIGNsYXNzTmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFjaGVja0VsZW0oZGF0YSkpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50XHJcbiAgICAgICAgLmNyZWF0ZVJhbmdlKClcclxuICAgICAgICAuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9JHtjbGFzc05hbWV9IGRhdGEtZXJyb3IgPSR7ZGF0YX0+JHtzdHJpbmd9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgIHdhcm5pbmcuYXBwZW5kKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vICAgUmVzZXQgSW5wdXQgV2FybmluZ1xyXG5cclxuICBmdW5jdGlvbiByZXNldElucHV0V2FybmluZygpIHtcclxuICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2NjY1wiO1xyXG4gIH1cclxuICAvLyAgIENsZWFyIGVycm9yIG1lc3NhZ2VcclxuICBjb25zdCBoaWRlV2FybmluZyA9IGVsZW0gPT4ge1xyXG4gICAgaWYgKGVsZW0pIHtcclxuICAgICAgZWxlbS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyAgIENoZWNrIGlmIGVycm9yIG1lc3NhZ2UgZXhpc3RzLHRvIHByZXZlbnQgYWRkaW5nIGR1cGxpY2F0ZSB3YXJuaW5nc1xyXG5cclxuICBjb25zdCBjaGVja0VsZW0gPSBkYXRhID0+IHtcclxuICAgIC8vICAgTVMgRURHRSBkb2Vzbid0IHN1cHBvcnQgIFwiZm9yLi4ub2ZcIiBsb29wcyBzbyBJIGhhZCB0byByZXZlcnQgdG8gb2xkIHNjaG9vbCBcImZvclwiIGxvb3AuXHJcblxyXG4gICAgLy8gZm9yIChsZXQgZWxlbSBvZiB3YXJuaW5nLmNoaWxkcmVuKSB7XHJcbiAgICAvLyAgIGlmIChlbGVtLmRhdGFzZXQuZXJyb3IgPT09IGRhdGEpIHtcclxuICAgIC8vICAgICBlbGVtLnJlbW92ZSgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhcm5pbmcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHdhcm5pbmcuY2hpbGRyZW5baV0uZGF0YXNldC5lcnJvciA9PT0gZGF0YSkge1xyXG4gICAgICAgIHdhcm5pbmcuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyAgIEhpZGUgcG9wdXAgYWZ0ZXIgc3VtYml0dGluZyBhbmQgZGlzcGxheSBzdWNjZXNzIG1lc3NhZ2VcclxuXHJcbiAgY29uc3Qgc2hvd1N1Y2Nlc3NNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50XHJcbiAgICAgIC5jcmVhdGVSYW5nZSgpXHJcbiAgICAgIC5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoYDxwIGNsYXNzPVwibWFpbl9fbWVzc2FnZVwiPlRoYW5rIHlvdTwvcD5gKTtcclxuICAgIG1haW4uYXBwZW5kKG1lc3NhZ2UpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgRVZFTlRTXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgc2hvd0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQb3B1cCk7XHJcbiAgaGlkZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQb3B1cCk7XHJcbiAgaW5wdXRFbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB2YWxpZGF0ZUVtYWlsKTtcclxuICBpbnB1dFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHZhbGlkYXRlUGFzc3dvcmQpO1xyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmFsaWRhdGVGb3JtKTtcclxufSk7XHJcbiJdfQ==
