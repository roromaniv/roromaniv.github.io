let submit = function(){
    alert("submit");
    let values = [document.getElementsByName("name"),document.getElementsByName("email"),document.getElementsByName("message")];
    let req = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]).toString() + "&value2=" + escape(values[1]).toString() + "&value3=" + escape(values[2]).toString();
    let embed = "<iframe src=" + req + "></iframe>";
    alert("success");
    console.log(embed);
}