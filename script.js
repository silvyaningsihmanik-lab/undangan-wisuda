function openInvitation() {

    const bootScreen =
        document.getElementById("bootScreen");

    const loadingScreen =
        document.getElementById("loadingScreen");

    const mainContent =
        document.getElementById("mainContent");


    bootScreen.style.opacity = "0";

    bootScreen.style.transition = "opacity .6s ease";


    setTimeout(function () {

        bootScreen.style.display = "none";

        loadingScreen.classList.add("show");


        setTimeout(function () {

            const progress =
                document.querySelector(".progress-bar");

            progress.style.width = "100%";

        }, 150);


        setTimeout(function () {

            loadingScreen.classList.remove("show");

            mainContent.classList.add("show");

            window.scrollTo(0, 0);

        }, 2200);


    }, 600);

}


function openLocation() {

    window.open(
        "https://maps.apple/p/ILH.3besoS9a3_",
        "_blank"
    );

}
