let submit = function(){
    if(document.getElementsByName("email")[0].checkValidity()){
        let values = [document.getElementsByName("name")[0].value,document.getElementsByName("message")[0].value,document.getElementsByName("email")[0].value];
        let req = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]) + "&value2=" + escape(values[1]) + "&value3=" + escape(values[2]);
        let embed = "<iframe style='display:none; width:0px; height:0px;' onload='this.remove()' src='" + req + "'></iframe>";
        document.getElementById("contactform").insertAdjacentHTML("afterend",embed);
    }
    else
    {
        document.getElementsByName("email")[0].setAttribute("oncuechange","validate(obj)");
        document.getElementsByName("email")[0].style.borderBottom="2px solid crimson";
    }
}
let validate=function(obj){
    console.log(obj);
    if(obj.value.checkValidity){
        obj.style.setAttribute("style","");
    }
    else{
        obj.style.borderBottom="2px solid crimson";
    }
}