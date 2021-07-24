let submit = function(){
    let values = [document.getElementsByName("name"),document.getElementsByName("email"),document.getElementsByName("message")];
    document.getElementById("contactform").innerHTML+="<iframe src=" + embed + "></iframe>"

    let embed = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]) + "&value2=" + escape(values[1]) + "&value3=" + escape(values[2]);
    
}