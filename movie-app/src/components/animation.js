/* --------- animazione per la barra di ricerca -------------- */
const DURATION_SEARCH_BAR_ANIMATION = 1.5;
const search_bar = document.querySelector(".search-bar");
const icon_lens = document.querySelector(".search-icon");
// dimensioni della search bar ==> width: clamp(180px, 35vw, 500px);

export function animateSearchBar(){
    gsap.to(search_bar, {
        autoAlpha: 1,
        duration: .1,
        onComplete: () => {
            // autofocus sulla barra di ricerca
            document.querySelector("#input-field").focus();
        }
    })
    gsap.to(search_bar, {
        width: 500,
        duration: DURATION_SEARCH_BAR_ANIMATION,
        ease: "bounce",
    })
}

/* -------- animazione hover discover section ---------- */
const contArrow = document.querySelector("#cont-arrow");
const arrow = document.querySelector("#svg-arrow-right");

export function AnimateArrow_Hover() {
    // animazione hover della freccia
    gsap.to(contArrow, {
        scale: 1.3,
        duration: .2,
        ease: "power.in",
    })
    gsap.to(arrow, {
        scale: .5,
        duration: .2,
        ease: "power.in",
    })
}
export function AnimateArrow_Leave() {
    // animazione hover della freccia
    gsap.to(contArrow, {
        scale: 1,
        duration: .2,
        ease: "power.in",
    })
    gsap.to(arrow, {
        scale: 1,
        duration: .2,
        ease: "power.in",
    })
}

/* -------------- animazione delle card dei film ------------ */
const filmsContainer = document.querySelector(".container-films");

export function AnimateCard_Hover(event) {
    const movieCard = event.target.closest(".film-discover-card");

    if (!movieCard || !filmsContainer.contains(movieCard)) return;
    
    gsap.to(movieCard, {
        scale: 1.1,
        duration: 1,
        ease: "power2.out",
        cursor: "pointer"
    });
}

export function AnimateCard_Leave(event) {
    const movieCard = event.target.closest(".film-discover-card");

    if (!movieCard || !filmsContainer.contains(movieCard)) return;
    if (event.relatedTarget && movieCard.contains(event.relatedTarget)) return;
    
    gsap.to(movieCard, {
        scale: 1,
        duration: 1,
        ease: "power2.out"
    });
}
