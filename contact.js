let submit = function () {
  let values = [
    document.getElementsByName("name")[0].value,
    document.getElementsByName("message")[0].value,
    document.getElementsByName("email")[0].value,
  ];
  let req =
    "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" +
    escape(values[0]) +
    "&value2=" +
    escape(values[1]) +
    "&value3=" +
    escape(values[2]);
  let embed =
    "<iframe style='display:none; width:0px; height:0px;' onload='this.remove()' src='" +
    req +
    "'></iframe>";
  document.getElementById("contactform").insertAdjacentHTML("afterend", embed);
  document.getElementById("success").style.display = "block";
};

let envelope = function () {
  if (document.getElementById("shade").classList.contains("hide")) {
    document.getElementById("shade").classList.remove("hide");
    document.getElementById("shade").classList.add("show");
    document.getElementById("formcontainer").classList.add("showenvelope");
    document.getElementById("contact").style.bottom = "500px";
  } else {
    document.getElementById("shade").classList.remove("show");
    document.getElementById("shade").classList.add("hide");
    document.getElementById("formcontainer").classList.remove("showenvelope");
    document.getElementById("contact").style.bottom = "0px";
  }
};

//Initiate contact
var form_master = document.createElement("div");
form_master.innerHTML =
  '<div id="shade" class="hide" style="top:0;height:100%; width:100%; position:fixed; background: rgba(0,0,0,.5); z-index: 2; display: flex;justify-content: center; backdrop-filter: blur(5px);"><div id="formcontainer" style="position: fixed; bottom:-500px; width: 600px; height: 500px; background: #ffffff; z-index: 4; display: none; align-items: center;"><form id="contactform" action="javascript:submit()"><input required type="text" name="name" placeholder="Name" /><input required type="email" name="email" placeholder="Email" /><textarea required style="height: 160px;" maxlength="800" name="message" placeholder="Message"></textarea><div id="success" style="display:none; border:none; background: darkcyan;padding:1rem;width: 80%;" class="t-white bold mtm">Yay! I will be in touch shortly :)</div><br><button class="black t-white" style="cursor: pointer; border: none; width: fit-content; padding: 1rem 1.5rem; height: auto;">' +
  "Let's connect" +
  '</button></form></div><div onclick="envelope()" style="top:0;height:100%; width:100%; position:fixed;z-index:3;"></div></div>';
document.body.appendChild(form_master);
document.getElementById("contact").addEventListener("click", envelope());
envelope();
