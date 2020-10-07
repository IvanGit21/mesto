const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const param = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const showInputError = (formElement, inputElement,errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(param.inputErrorClass);
    errorElement.classList.add(param.errorClass);
    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement,inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(param.inputErrorClass);
    errorElement.classList.remove(param.errorClass);
    errorElement.textContent = '';
}

const checkInputValidity = (formElement,inputElement) => {
if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
} else {
    hideInputError(formElement,inputElement);
}
}
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(param.inactiveButtonClass);
        buttonElement.setAttribute('disabled',true)
    } else {
        buttonElement.classList.remove(param.inactiveButtonClass);
        buttonElement.removeAttribute('disabled',true)
    }
};

const setEventListeners = (formElement) =>{
    const inputList = Array.from(formElement.querySelectorAll(param.inputSelector));
    const buttonElement = formElement.querySelector(param.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement)=>{
        inputElement.addEventListener('input',()=>{
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
}
const enableValidation = () =>{
    const formList = Array.from(document.querySelectorAll(param.formSelector));

    formList.forEach((formElement) =>{
        setEventListeners(formElement);
    })
}

enableValidation(param);

