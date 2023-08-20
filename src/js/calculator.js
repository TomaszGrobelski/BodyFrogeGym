import { bmiFunction} from './bmiFunction'
export function calculator(){
    const buttonBMI = document.querySelector(".bmi__box--calculate")
    buttonBMI.addEventListener("click",bmiFunction)
}
