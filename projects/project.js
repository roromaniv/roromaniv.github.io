var galleryContents;

let hashcheck = function (){
    if(window.location.href.includes("projects")){
        projectInit(window.location.href.split("projects")[1].split('/')[1]);
    }
}

let projectInit = function(projectIndex){
    let projectDOM = new XMLHttpRequest();
    projectDOM.open('GET', ('/projects/project.html'));
    projectDOM.setRequestHeader("Cache-Control", "no-cache");
    projectDOM.onload = function() {
        insertJSON(projectDOM.responseText.toString(), projectIndex);
        bmenuInit();
    }
    projectDOM.send()

    let insertJSON = function(DOM, index){
        let json = new XMLHttpRequest();
        json.open('GET', ('/projects/' + index + '/contents.json'));
        json.setRequestHeader("Cache-Control", "no-cache");
        json.onload = function() {
            let content = JSON.parse(json.responseText);
            document.body.innerHTML += DOM;

            //TEXT AND BUTTON
            document.getElementById("title").innerHTML = content.title;
            document.title = "Project – " + content.title;
            document.getElementById("paragraph").innerHTML = content.paragraph;
            for (let i = 0; i < content["facts"].length; i++) {
                document.getElementById("facts").innerHTML += '<div class="fact column"><h3 class="mbs t-black">{{VALUE}}</h3><p>{{FACT}}</p></div>'.replace("{{FACT}}",content.facts[i]["fact"]).replace("{{VALUE}}",content.facts[i]["value"]);
            }
            document.getElementsByClassName("btn-primary")[0].href = content.link;
            document.getElementsByClassName("btn-primary")[0].innerHTML += content.buttonTitle;

            
            //PREVIEWS
            document.getElementsByClassName("preview")[0].style.backgroundImage = ("url('" + content.images[0].link + "')");
            document.getElementsByClassName("preview")[1].style.backgroundImage = ("url('" + content.images[1].link + "')");
            document.getElementsByClassName("preview")[2].style.backgroundImage = ("url('" + content.images[2].link + "')");
            document.getElementById("moreimages").innerText = content.images.length-3;
            
            //GALLERY
            let images = '';
            for (let i = 0; i < content.images.length; i++) {
                images += '["' + content.images[i].link + '","' + content.images[i].name + '","' + content.images[i].description + '"],';
            }
            galleryContents = eval('[' + images.slice(0, -1) + ']');
        }
        json.send();
    }
}

