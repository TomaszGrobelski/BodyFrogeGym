export function letterTransform (){
    
    const navWords=[...document.querySelectorAll(".head__list--li")];

    const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

    navWords.forEach((word)=>{
        word.addEventListener("mouseover",(event)=> { 
            let iterations=0
            const interval= setInterval(()=>{
                event.target.innerText=event.target.innerText.split("")
                .map((letter,index)=>{
                    if(index <iterations){
                        return event.target.dataset.value[index]
                    }

                return letters[Math.floor(Math.random()*26)]
                })
                .join("");  

                if(iterations>=event.target.dataset.value.length){
                    clearInterval(interval)
                }    
                iterations+= 1;
            },40)
            
        })
    })
}