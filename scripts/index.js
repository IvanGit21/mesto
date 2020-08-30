let popup=document.querySelector('.popup');
let editButton=document.querySelector('.edit-button');
let exitButton=document.querySelector('.popup__exit-button');
let popupButton=document.querySelector('.popup__button');
let formElement = document.querySelector('.popup__conteiner');
let nameInput = document.querySelector('.popup__item-name');
let jobInput = document.querySelector('.popup__item-activity');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

function openPopup(){
    popup.classList.toggle('popup_opened')
}

editButton.addEventListener('click',openPopup);
exitButton.addEventListener('click',openPopup);
popupButton.addEventListener('click',openPopup);

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    nameInput=nameInput.value;
    jobInput=jobInput.value;

    profileName.textContent = nameInput;
    profileActivity.textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler);
