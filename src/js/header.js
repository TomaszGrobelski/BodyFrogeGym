export function initHead(){

    const head = document.querySelector('.head');
    window.addEventListener("scroll",()=>{
        const scrollDistance=window.scrollY;
        head.style.top=scrollDistance + "px";
    })

    
}