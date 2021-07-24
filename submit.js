let submit = function(){
    let values = [document.getElementsByName("name"),document.getElementsByName("email"),document.getElementsByName("message")];
    let req = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]) + "&value2=" + escape(values[1]) + "&value3=" + escape(values[2]);
    let embed = "<iframe src=" + req + "></iframe>";
    
    console.log(embed);
}