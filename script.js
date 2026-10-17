const bouton = document.querySelector("#ouvrir-calendrier");
const accueil = document.querySelector(".accueil");
const calendrier = document.querySelector("#calendrier");

bouton.addEventListener("click", function () {
    bouton.disabled = true;

    const transition = document.createElement("div");
    transition.className = "transition-neige";
    document.body.appendChild(transition);

    // Voile blanc qui couvrira l'écran à la fin.
    const voileFinal = document.createElement("div");
    voileFinal.className = "voile-final";
    transition.appendChild(voileFinal);

    // Particules lumineuses réparties dans un grand disque.
    const nombreParticules = 3500;
    const distanceMax = Math.hypot(
        window.innerWidth,
        window.innerHeight
    ) * 0.78;

    for (let i = 0; i < nombreParticules; i++) {
        const particule = document.createElement("span");
        particule.className = "particule-lumiere";

        const angle = Math.random() * Math.PI * 2;
        const rayon = Math.sqrt(Math.random()) * distanceMax;

        const x = Math.cos(angle) * rayon;
        const y = Math.sin(angle) * rayon;

        const duree = 0.45 + (rayon / distanceMax) * 1.45;
        const taille = 3 + Math.random() * 4;

        particule.style.setProperty("--x", `${x}px`);
        particule.style.setProperty("--y", `${y}px`);
        particule.style.setProperty("--duree", `${duree}s`);
        particule.style.setProperty("--taille", `${taille}px`);
        particule.style.setProperty(
            "--delai",
            `${Math.random() * 0.1}s`
        );

        transition.appendChild(particule);
    }

    // Flocons décoratifs.
    for (let i = 0; i < 45; i++) {
        const flocon = document.createElement("span");
        flocon.className = "flocon-transition";
        flocon.textContent = "❄";

        flocon.style.left = Math.random() * 100 + "%";
        flocon.style.fontSize = (8 + Math.random() * 14) + "px";

        flocon.style.setProperty(
            "--duree",
            `${1.5 + Math.random() * 1.5}s`
        );

        flocon.style.setProperty(
            "--decalage",
            `${Math.random() * 100 - 50}px`
        );

        flocon.style.animationDelay = `${Math.random() * 0.3}s`;
        transition.appendChild(flocon);
    }

    // Déclenche l'expansion des particules.
    requestAnimationFrame(() => {
        transition.classList.add("demarre");
    });

    // Le disque lumineux laisse place à un écran entièrement blanc.
    setTimeout(() => {
        accueil.style.display = "none";
        calendrier.hidden = false;
        transition.classList.add("blanc-final");
    }, 2300);

    // Le blanc s'efface progressivement pour révéler le calendrier.
    setTimeout(() => {
        transition.classList.add("disparait");
    }, 2850);

    // Nettoyage de la transition.
    setTimeout(() => {
        transition.remove();
        bouton.disabled = false;
    }, 3550);
});
