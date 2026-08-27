/* --------- animazione per la barra di ricerca -------------- */
const DURATION_SEARCH_BAR_ANIMATION = .8;
const DURATION_ICONS_ANIMATION = .2;
const searchBar = document.querySelector(".form-search-bar");
// dimensioni della search bar ==> width: clamp(180px, 35vw, 500px);

// funzione per animare l'hover di tutte le icone
export function AnimateIcons(icon, box) {
    if(box && icon) {
        box.addEventListener("mouseover", () => {
            gsap.to(box, {
                scale: 1.3,
                duration: DURATION_ICONS_ANIMATION,
                ease: "power.in",
            });
            gsap.to(icon, {
                scale: .6,
                duration: DURATION_ICONS_ANIMATION,
                ease: "power.in",
            });
        });
        box.addEventListener("mouseleave", () => {
            gsap.to(box, {
                scale: 1,
                duration: DURATION_ICONS_ANIMATION,
                ease: "power.in",
            });
            gsap.to(icon, {
                scale: 1,
                duration: DURATION_ICONS_ANIMATION,
                ease: "power.in",
            });
        });
    }
    else if (icon) {
        icon.addEventListener("mouseover", () => {
            gsap.to(icon, {
                scale: .6,
                duration: DURATION_ICONS_ANIMATION,
                ease: "power.in",
            })
        });
        icon.addEventListener("mouseleave", () => {
            gsap.to(icon, {
                scale: 1,
                duration: DURATION_ICONS_ANIMATION,
                ease: "power.in",
            })
        });
    }
};

// dimensioni della search-bar finali
const barWidth = 500;
const barHeight = 50;

const tl = gsap.timeline();
tl.to(searchBar, {
    autoAlpha: 1,
    duration: .1,
    onComplete: () => {
        // autofocus sulla barra di ricerca
        document.querySelector("#input-field").focus();
    }
}, 0);
tl.fromTo("#search-label", {
    autoAlpha: 0,
}, {
    autoAlpha: 1,
    duration: .2
}, 0)
tl.to(searchBar, {
    width: barWidth,
    height: barHeight,
    duration: DURATION_SEARCH_BAR_ANIMATION,
    ease: "back.out",
}, 0);
tl.pause();

export function animateSearchBar(type){
    if (type === "normal") { tl.play(); }
    else if (type === "reverse") { tl.reverse(); }
    else { console.log("Errore nella stringa in input") }
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
