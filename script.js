function openInvitation() {

    const opening =
        document.getElementById("opening");

    const accessScreen =
        document.getElementById("accessScreen");

    const invitation =
        document.getElementById("invitation");


    opening.style.display = "none";


    accessScreen.classList.add("show");


    setTimeout(function () {

        accessScreen.classList.remove("show");

        invitation.classList.add("show");

        window.scrollTo(0, 0);

    }, 1200);

}



function openLocation() {

    window.open(
        "https://maps.apple/p/ILH.3besoS9a3_",
        "_blank"
    );

}