let submit = function(){
    let values = [document.getElementsByName("name")[0].value,document.getElementsByName("message")[0].value,document.getElementsByName("email")[0].value];
    let req = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]) + "&value2=" + escape(values[1]) + "&value3=" + escape(values[2]);
    let embed = "<iframe style='display:none; width:0px; height:0px;' onload='this.remove()' src='" + req + "'></iframe>";
    document.getElementById("contactform").insertAdjacentHTML("afterend",embed);
    document.getElementById("success").style.display="block";
}

let envelope = function(){
    if(document.getElementById("shade").classList.contains("hide")){
        document.getElementById("shade").classList.remove("hide");
        document.getElementById("shade").classList.add("show");
        document.getElementById("formcontainer").classList.add("showenvelope");
        document.getElementById("contact").style.bottom="500px";
    }
    else{
        document.getElementById("shade").classList.remove("show");
        document.getElementById("shade").classList.add("hide");
        document.getElementById("formcontainer").classList.remove("showenvelope");
        document.getElementById("contact").style.bottom="0px";
    }
}

//Initiate contact
var form_master=document.createElement('div');
form_master.innerHTML='<div id="shade" onclick="envelope();" class="hide" style="top:0;height:100%; width:100%; position:fixed; background: rgba(0,0,0,.5); z-index: 2; display: flex;justify-content: center; backdrop-filter: blur(5px);"><div id="formcontainer" style="position: fixed; bottom:-500px; width: 600px; height: 500px; background: #ffffff; z-index: 3; display: none; align-items: center;"><div id="contactform"><input required type="text" name="name" placeholder="Name" /><input required type="email" name="email" placeholder="Email" /><textarea style="height: 80px;" maxlength="800" name="message" placeholder="Message"></textarea><input id="success" style="display:none; border:none; background: darkcyan;padding:1rem;width: 80%;" type="text" class="t-white bold" value="Here you go! I will be in touch shortly :)" disabled="" /><br><button onclick="submit()" class="black t-white" style="cursor: pointer; border: none; width: fit-content; padding: 1rem 1.5rem; height: auto;">Send</button></div></div></div>';
document.body.appendChild(form_master);
document.getElementById("contact").addEventListener("click", envelope());
envelope();


