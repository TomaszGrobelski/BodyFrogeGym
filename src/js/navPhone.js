export function navPhone() {
    const navButton = document.querySelector(".head__right--nav");
    const navHead = document.querySelector(".head__list");

    navButton.addEventListener("click", () => {
        navHead.style.display = navHead.style.display === "flex" ? "none" : "flex";
        navHead.style.display = navHead.style.display === "flex" ? navHead.classList.add("head_list-phone") : navHead.classList.remove("head_list-phone");
    });


    let isPhoneLayout = false; 
    
    window.addEventListener("resize", () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth >= 750 && isPhoneLayout) {
            isPhoneLayout = false; 
            navHead.classList.remove("head_list-phone");
            navHead.style.display = "none"
        } else if (screenWidth < 750 && !isPhoneLayout) {
            isPhoneLayout = true; 
        }
    });
}