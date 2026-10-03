const bootScreen =
    document.getElementById("bootScreen");

const openingHero =
    document.getElementById("openingHero");

const accessScreen =
    document.getElementById("accessScreen");

const invitation =
    document.getElementById("invitation");


/* =====================================
   BOOT SEQUENCE
===================================== */

window.addEventListener("load", function () {

    const lines = [
        document.querySelector(".line-1"),
        document.querySelector(".line-2"),
        document.querySelector(".line-3"),
        document.querySelector(".line-4"),
        document.querySelector(".line-5"),
        document.querySelector(".line-6")
    ];

    lines.forEach(function (line, index) {

        setTimeout(function () {

            line.classList.add("visible");

        }, index * 650);

    });


    /* after SYSTEM READY */

    setTimeout(function () {

        bootScreen.style.opacity = "0";

    }, 3900);


    setTimeout(function () {

        bootScreen.style.display = "none";

        openingHero.classList.add("show");

    }, 4700);

});


/* =====================================
   OPEN INVITATION
===================================== */

function openInvitation() {

    accessScreen.classList.add("show");


    setTimeout(function () {

        document.querySelector(".progress div").style.width = "100%";

    }, 150);


    setTimeout(function () {

        accessScreen.classList.remove("show");

        invitation.classList.add("show");

        window.scrollTo(0, 0);

    }, 2200);

}


/* =====================================
   LOCATION
===================================== */

function openLocation() {

    window.open(
        "https://maps.apple/p/ILH.3besoS9a3_",
        "_blank"
    );

}


/* =====================================
   CLOSING SEQUENCE
===================================== */

const closingTerminal =
    document.querySelector(".closing-terminal");

const closingLines = [
    document.querySelector(".close-1"),
    document.querySelector(".close-2"),
    document.querySelector(".close-3"),
    document.querySelector(".close-4"),
    document.querySelector(".close-5"),
    document.querySelector(".close-6")
];

const closing =
    document.querySelector(".closing");


let closingStarted = false;


function startClosingSequence() {

    if (closingStarted) return;

    closingStarted = true;

    closingTerminal.classList.add("show");


    closingLines.forEach(function (line, index) {

        setTimeout(function () {

            line.classList.add("visible");

        }, 500 + (index * 600));

    });


    setTimeout(function () {

        closing.classList.add("show");

    }, 4100);

}


/* =====================================
   DETECT CLOSING TERMINAL
===================================== */

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                startClosingSequence();

            }

        });

    }, {
        threshold: 0.35
    });


observer.observe(closingTerminal);
