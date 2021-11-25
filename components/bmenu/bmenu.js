let bmenuInit = function(){
    //insert bmenu DOM
    let bmenu = new XMLHttpRequest();
    bmenu.open('GET', '/components/bmenu/bmenu.html');
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

//Initiate contact
document.getElementById("contact").addEventListener("click", envelope());
document.body.appendChild(form_master);

var form_master='<div id="shade" class="hide" style="height:100%; width:100%; position:fixed; background: rgba(0,0,0,.5); z-index: 2; display: flex;justify-content: center;"><div id="formcontainer" style="position: fixed; bottom:-500px; width: 600px; height: 500px; background: #ffffff; z-index: 3; display: none; align-items: center;"><div id="contactform"><input required type="text" name="name" placeholder="Name" /><input required type="email" name="email" placeholder="Email" /><textarea style="height: 80px;" maxlength="800" name="message" placeholder="Message"></textarea><input id="success" style="display:none; border:none; background: darkcyan;padding:1rem;width: 80%;" type="text" class="t-white bold" value="Here you go! I will be in touch shortly :)" disabled="" /><br><button onclick="submit()" class="black t-white" style="cursor: pointer; border: none; width: fit-content; padding: 1rem 1.5rem; height: auto;">Send</button></div></div></div>';
