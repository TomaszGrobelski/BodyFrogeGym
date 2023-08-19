export function calculator(){
    console.log("yol")
    const buttonBMI=document.querySelector(".bmi__box--calculate")
    const inputHeight=document.querySelector(".bmi__box--height")
    const inputWeight=document.querySelector(".bmi__box--weight")
    const resultBMI=document.querySelector(".bmi-result")
    const resultWeight=document.querySelector(".weight-result")

    buttonBMI.addEventListener("click",()=>{
        let BMI = ((inputWeight.value)/((inputHeight.value/100)**2)).toFixed(2)
        resultBMI.innerText=BMI;

        let category="";
        switch (true) {
            case BMI < 16:
                category = "Wygłodzenie";
                break;
            case BMI >= 16 && BMI < 17:
                category = "Wychudzenie";
                break;
            case BMI >= 17 && BMI < 18.5:
                category = "Niedowaga";
                break;
            case BMI >= 18.5 && BMI < 25:
                category = "Wartość prawidłowa";
                break;
            case BMI >= 25 && BMI < 30:
                category = "Nadwaga";
                break;
            case BMI >= 30 && BMI < 35:
                category = "I stopień otyłości";
                break;
            case BMI >= 35 && BMI < 40:
                category = "II stopień otyłości";
                break;
            default:
                category = "Otyłość skrajna";
                break;
        }
        resultWeight.innerText=category;
    })
}