import FormValidator from '../components/FormValidator.js';
import {linkInputAdd,nameInputAdd,nameInputEdit,jobInputEdit,profileName,profileActivity,popupAdd,popupEdit,
param,initialCards,addButton,exitButtonAdd,editButton,exitButtonEdit,formElementAdd,formElementEdit} from '../utils/constants.js'
import {renderCard,openPopup,closePopup,addProfileValue,disabledButton,cleanInput} from '../utils/utils.js'

//Выгрузка корточек на страницу из массива
initialCards.forEach((item)=>{
    renderCard(item.name,item.link, '#template-cards')
})
// Функция слушателей события
const setEventListeners = () =>{
addButton.addEventListener('click',() => openPopup(popupAdd));
addButton.addEventListener('click',() => cleanInput());
exitButtonAdd.addEventListener('click',() => closePopup(popupAdd));
editButton.addEventListener('click',() => openPopup(popupEdit));
addButton.addEventListener('click',() => disabledButton())
editButton.addEventListener('click',() => addProfileValue());
exitButtonEdit.addEventListener('click',() => closePopup(popupEdit));
}

setEventListeners();

function addNameProfile(){
    profileName.textContent = 'Жак-Ив-Кусто';
    profileActivity.textContent = 'Исследователь океана';
}
addNameProfile();

// Сабмит формы добавления
function formSubmitHandlerAdd (evt) {
    evt.preventDefault(); 

    renderCard(nameInputAdd.value,linkInputAdd.value, '#template-cards');

    closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

// Сабмит формы редактирования
function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInputEdit.value;
    profileActivity.textContent = jobInputEdit.value;

    closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', formSubmitHandlerEdit);

// Включение полей валидации
const formAdd = new FormValidator(param, formElementAdd);
formAdd.enableValidation();

const formEdit = new FormValidator(param, formElementEdit);
formEdit.enableValidation();