let submit = function(){
    alert("submit");
    let values = [document.getElementsByName("name")[0].value,document.getElementsByName("email")[0].value,document.getElementsByName("message")[0].value];
    let req = "https://maker.ifttt.com/trigger/contact/with/key/KjsjUkae4gJm-W8xYRIyK?value1=" + escape(values[0]) + "&value2=" + escape(values[1]) + "&value3=" + escape(values[2]);
    let embed = "<iframe src='" + req + "'></iframe>";
    alert("success");
    console.log(embed);
}