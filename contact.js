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

let switchToRight = function(link){
 //   document.getElementsByClassName("head")[0].animate([
   //     { transform: 'translate(0, 0)', opacity: 1 },
     //   { transform: 'translate(-50%, 0)', opacity: 0}], 2000);

    document.getElementsByClassName("head")[0].animate({
        transform: ["translate(0,0)","translate(-50%,0)"],
        opacity: [1,0],
        easing: ["ease-in"],
    }, .3);

    window.location.href = "https://roromaniv.github.io" + link;

}

