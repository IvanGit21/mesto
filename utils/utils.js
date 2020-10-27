import {submitButton,param} from '../utils/constants.js';

export function disabledButton(){
    submitButton.setAttribute('disabled',true);
    submitButton.classList.add(param.inactiveButtonClass);
}
