export function initialize(){
    const entryBox= document.querySelectorAll(".entry-box")
    const gymDescription= document.querySelector(".entry-box--gym-description")
    const fitnesDescription= document.querySelector(".entry-box--fitnes-description")
    const personalDescription= document.querySelector(".entry-box--personal-description")
    const sweatDescription= document.querySelector(".entry-box--sweat-description")
    const rehabilitationDescription= document.querySelector(".entry-box--rehabilitation-description")
    const gymIcon= document.querySelector(".fa-dumbbell")
    const fitnesIcon= document.querySelector(".fa-person-running")
    const personalIcon= document.querySelector(".fa-person")
    const sweatIcon= document.querySelector(".fa-house-tsunami")
    const rehabilitationIcon= document.querySelector(".fa-hands")


    entryBox.forEach(box=>{
        box.addEventListener("mouseenter",()=>{
            if (box.classList.contains("entry__container--gym")){
                gymIcon.style.display="none"
                gymDescription.style.display="block";
            }
            if (box.classList.contains("entry__container--fitnes")){
                fitnesIcon.style.display="none"
                fitnesDescription.style.display="block";
            }
            if (box.classList.contains("entry__container--personal-training")){
                personalIcon.style.display="none"
                personalDescription.style.display="block";
            }
            if (box.classList.contains("entry__container--sweat-room")){
                sweatIcon.style.display="none"
                sweatDescription.style.display="block";
            }
            if (box.classList.contains("entry__container--rehabilitation")){
                rehabilitationIcon.style.display="none"
                rehabilitationDescription.style.display="block";
            }
        })
    })
    
    entryBox.forEach(box=>{
        box.addEventListener("mouseleave",()=>{
            if (box.classList.contains("entry__container--gym")){
                gymIcon.style.display="block"
                gymDescription.style.display="none";
            }
            if (box.classList.contains("entry__container--fitnes")){
                fitnesIcon.style.display="block"
                fitnesDescription.style.display="none";
            }
            if (box.classList.contains("entry__container--personal-training")){
                personalIcon.style.display="block"
                personalDescription.style.display="none";
            }
            if (box.classList.contains("entry__container--sweat-room")){
                sweatIcon.style.display="block"
                sweatDescription.style.display="none";
            }
            if (box.classList.contains("entry__container--rehabilitation")){
                rehabilitationIcon.style.display="block"
                rehabilitationDescription.style.display="none";
            }
        })
    })



}
