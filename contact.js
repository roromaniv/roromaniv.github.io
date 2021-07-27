let submit = function(){
    let values = [document.getElementsByName("name")[0].value,document.getElementsByName("message")[0].value,document.getElementsByName("email")[0].value];
    let req = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]) + "&value2=" + escape(values[1]) + "&value3=" + escape(values[2]);
    let embed = "<iframe style='display:none; width:0px; height:0px;' onload='this.remove()' src='" + req + "'></iframe>";
    document.getElementById("contactform").insertAdjacentHTML("afterend",embed);
    document.getElementById("success").style.display="block";
}

let envelope = function(){
    document.getElementById("shade").classList.remove("hide");
    document.getElementById("shade").classList.add("show");

    document.getElementById("formcontainer").classList.add("showenvelope");

    document.getElementById("contact").style.bottom="500px";
}

window.onload = function () { document.getElementById("contact").addEventListener("click", envelope())};
document.getElementById("projectpage").insertAdjacentHTML("afterbegin",'<div id="shade" class="hide" style="height:100%; width:100%; position:fixed; background: rgba(0,0,0,.5); z-index: 2;"></div>');