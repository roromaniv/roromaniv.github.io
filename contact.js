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

let values = [  "We need an MVP for X and Y. Where do we begin?",
                    "How do we improve our MOFU performance after the user demo?",
                    "Our users aren't active. What's wrong?",
                    "We've taken a pivot and it doesn't seem to be worth it. How do we decide? ",
                    "We hired 3 designers. How do we organize their work? ",
                    "We've got some tech debt, but we need X new features. What do we do?",
                    "Our developers aren't devoted. How do we aspire them?"];

let typeIt = function(elem, val){
    let i = 0;
    setInterval(function(){
        elem.value+=val[i]; 
        i++; 
        if(i>=val.length){return;}
    }, (Math.random(1000) + 1000));
}

let eraseIt = function(elem){

}
