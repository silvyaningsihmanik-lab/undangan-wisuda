/* ==================================================
   ELEMENTS
================================================== */

const bootScreen =
    document.getElementById("bootScreen");

const openingHero =
    document.getElementById("openingHero");

const accessScreen =
    document.getElementById("accessScreen");

const invitationPage =
    document.getElementById("invitationPage");

const closingScreen =
    document.getElementById("closingScreen");


/* ==================================================
   PAGE 1 — BOOT SEQUENCE
================================================== */

window.addEventListener("load", function () {

    const bootLines = [
        document.querySelector(".line-1"),
        document.querySelector(".line-2"),
        document.querySelector(".line-3"),
        document.querySelector(".line-4"),
        document.querySelector(".line-5"),
        document.querySelector(".line-6")
    ];


    bootLines.forEach(function (line, index) {

        setTimeout(function () {

            line.classList.add("visible");

        }, index * 650);

    });


    /*
        Setelah SYSTEM READY,
        terminal menghilang.
    */

    setTimeout(function () {

        bootScreen.style.opacity = "0";

    }, 3900);


    /*
        Cover Graduation.exe muncul.
    */

    setTimeout(function () {

        bootScreen.style.display = "none";

        openingHero.classList.add("show");

    }, 4700);

});


/* ==================================================
   OPEN INVITATION
================================================== */

function openInvitation() {

    /*
        Tampilkan loading.
    */

    accessScreen.classList.add("show");


    /*
        Progress bar berjalan.
    */

    setTimeout(function () {

        document.querySelector(
            ".progress div"
        ).style.width = "100%";

    }, 150);


    /*
        Setelah loading selesai,
        PAGE 2 dibuka.
    */

    setTimeout(function () {

        accessScreen.classList.remove("show");

        openingHero.classList.remove("show");

        openingHero.style.display = "none";

        invitationPage.classList.add("show");

        window.scrollTo(0, 0);

    }, 2200);

}


/* ==================================================
   LOCATION
================================================== */

function openLocation() {

    window.open(
        "https://maps.apple/p/ILH.3besoS9a3_",
        "_blank"
    );

}


/* ==================================================
   CLOSE INVITATION
================================================== */

function closeInvitation() {

    /*
        Tampilkan closing system.
    */

    closingScreen.classList.add("show");


    const lines = [

        document.querySelector(".closing-1"),
        document.querySelector(".closing-2"),
        document.querySelector(".closing-3"),
        document.querySelector(".closing-4"),
        document.querySelector(".closing-5"),
        document.querySelector(".closing-6")

    ];


    /*
        Closing code muncul 1/1.
    */

    lines.forEach(function (line, index) {

        setTimeout(function () {

            line.classList.add("visible");

        }, 450 + (index * 600));

    });


    /*
        Setelah selesai,
        kembali ke PAGE 1.
    */

    setTimeout(function () {

        invitationPage.classList.remove("show");

        closingScreen.classList.remove("show");

        openingHero.style.display = "flex";

        openingHero.classList.add("show");

        window.scrollTo(0, 0);


        /*
            Reset closing lines supaya
            kalau dibuka lagi bisa dipakai.
        */

        lines.forEach(function (line) {

            line.classList.remove("visible");

        });

    }, 4400);

}
