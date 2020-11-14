import {buttonAdd, param, popupButton} from '../utils/constants.js';

export function disabledButton(){
    buttonAdd.setAttribute('disabled',true);
    buttonAdd.classList.add(param.inactiveButtonClass);
}
export function renderLoading(isLoad){
    const popup = document.querySelector('.popup_opened');
    const btn = popup.querySelector('.popup__button');
    if(isLoad){
        btn.textContent = 'Сохранение...';
    }else{
        btn.textContent = 'Сохранить';
    }
}
export function handleOriginalResponse(res){
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}