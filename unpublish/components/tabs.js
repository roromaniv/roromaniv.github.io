 let tabInit = function (n){
    let tabs = Array.from(document.getElementById("tabs").getElementsByTagName("li"));
    let tabcontents = Array.from(document.getElementById("tabcontent").children);
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        tabcontents[i].classList.remove("show");
        tabcontents[i].classList.add("hide");
    }
    tabs[n].classList.add("active");
    tabcontents[n].classList.remove("hide");
    tabcontents[n].classList.add("show");
};
