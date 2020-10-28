import {buttonAdd,param} from '../utils/constants.js';

export function disabledButton(){
    buttonAdd.setAttribute('disabled',true);
    buttonAdd.classList.add(param.inactiveButtonClass);
}
