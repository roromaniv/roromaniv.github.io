let bmenuInit = function(){
    //insert bmenu DOM
    let bmenu = new XMLHttpRequest();
    bmenu.open('GET', '/mywebsite/components/bmenu/bmenu.html');
    bmenu.setRequestHeader("Cache-Control", "no-cache");
    bmenu.onload = function() {
        document.body.insertAdjacentHTML("afterbegin", bmenu.responseText);
    }
    bmenu.send()
}

bmenuInit();

let triggerMenu = function (){
    let menuClass = document.getElementById("bmenu").classList;
    if(menuClass.contains("hide")){
        menuClass.remove("hide");
    }
    else{
        menuClass.add("hide");
    }
}
