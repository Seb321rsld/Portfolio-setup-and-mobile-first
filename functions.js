window.addEventListener("load",createEvent);

function createEvent() {
    let menuSwitch = document.getElementById("menuSwitch");
    let menu = document.getElementById("menu");

    menuSwitch.addEventListener("click",AppearBar);

    let menuItem = document.querySelectorAll("#menu > li");

    for(let i=0;i<menuItem.length;i++){
        menuItem[i].addEventListener("click",DisappearBar);
    }

    function AppearBar () {
        menu.style.visibility = "visible";
    }

    function DisappearBar () {
        menu.style.visibility = "hidden";
    }
}
