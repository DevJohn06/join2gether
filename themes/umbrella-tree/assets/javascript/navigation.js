/* Open the sidenav */
function openNav() {
    document.getElementById("sideNav").style.width = "100%";
    setTimeout(function () {
        document.getElementById("navbar").style.cssText =
            "display:none; transition:0.5;";
        document.getElementById("mobileNav").style.display = "block";
    }, 100);
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("mobileNav").style.display = "none";
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }