const bootScreen = document.getElementById("boot-screen");
const openingHero = document.getElementById("opening-hero");
const accessScreen = document.getElementById("access-screen");
const invitationPage = document.getElementById("invitation-page");
const closingScreen = document.getElementById("closing-screen");

const progressBar = document.getElementById("progress-bar");


/* BOOT */

window.addEventListener("load", () => {

    setTimeout(() => {

        bootScreen.classList.add("hidden");
        openingHero.classList.remove("hidden");

    }, 4700);

});


/* OPEN INVITATION */

function openInvitation() {

    openingHero.classList.add("hidden");
    accessScreen.classList.remove("hidden");

    progressBar.style.width = "0%";

    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 100);


    setTimeout(() => {

        accessScreen.classList.add("hidden");
        invitationPage.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 2300);

}


/* LOCATION */

function openLocation() {

    window.open(
        "https://maps.apple/p/ILH.3besoS9a3_",
        "_blank"
    );

}


/* CLOSE INVITATION */

function closeInvitation() {

    invitationPage.classList.add("hidden");
    closingScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    setTimeout(() => {

        closingScreen.classList.add("hidden");
        openingHero.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 4500);

}
