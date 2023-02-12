// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length == textInput.getAttribute("data-length")
  ) {
    textInput.classList.add("valid");

    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
    textInput.classList.add("invalid");
  }
});
