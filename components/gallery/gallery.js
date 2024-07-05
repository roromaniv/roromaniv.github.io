let galleryInit = function (index) {
  //insert Gallery DOM
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/components/gallery/gallery.html");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.onload = function () {
    document.body.insertAdjacentHTML(
      "afterbegin",
      xhr.responseText.replace("GFRAME", generateFrames(index))
    );
  };
  xhr.send();
};

let closeGallery = function () {
  document.getElementById("gallery").remove();
};

let generateFrames = function (index) {
  let result = "";
  for (let i = 0; i < galleryContents.length; i++) {
    if (i == index) {
      let frame =
        '<div class="frame show"> <div class="img" style="background-image: url(' +
        "'" +
        galleryContents[i][0] +
        "'" +
        ');"></div> <h2 class="t-white pt2">' +
        galleryContents[i][1] +
        '</h2> <p class="t-white" style="opacity: 60%;">' +
        galleryContents[i][2] +
        "</p></div>";
      result += frame;
    } else {
      let frame =
        '<div class="frame hide"> <div class="img" style="background-image: url(' +
        "'" +
        galleryContents[i][0] +
        "'" +
        ');"></div> <h2 class="t-white pt2">' +
        galleryContents[i][1] +
        '</h2> <p class="t-white" style="opacity: 60%;">' +
        galleryContents[i][2] +
        "</p></div>";
      result += frame;
    }
  }
  return result;
};

let nextSlide = function () {
  let frames = Array.from(
    document.getElementById("gallery").getElementsByClassName("frame")
  );
  for (let i = 0; i < frames.length; i++) {
    if (frames[i].classList.contains("show")) {
      frames[i].classList.add("animate__animated", "animate__fadeOutLeft");
      frames[i].addEventListener("animationend", () => {
        frames[i].classList.remove(
          "show",
          "animate__animated",
          "animate__fadeOutLeft"
        );
        frames[i].classList.add("hide");

        if (i + 1 < frames.length) {
          frames[i + 1].classList.add(
            "show",
            "animate__animated",
            "animate__fadeInRight"
          );
          frames[i + 1].classList.remove("hide");
          frames[i].addEventListener("animationend", () => {
            frames[i + 1].classList.remove(
              "animate__animated",
              "animate__fadeInRight"
            );
          });
          return;
        } else {
          i = -1;
          frames[i + 1].classList.add(
            "show",
            "animate__animated",
            "animate__fadeInRight"
          );
          frames[i + 1].classList.remove("hide");
          frames[i].addEventListener("animationend", () => {
            frames[i + 1].classList.remove(
              "animate__animated",
              "animate__fadeInRight"
            );
          });
          return;
        }
      });
    }
  }
};

let prevSlide = function () {
  let frames = Array.from(
    document.getElementById("gallery").getElementsByClassName("frame")
  );
  for (let i = 0; i < frames.length; i++) {
    if (frames[i].classList.contains("show")) {
      frames[i].classList.remove("show");
      frames[i].classList.add("hide");
      if (i - 1 >= 0) {
        frames[i - 1].classList.add("show");
        frames[i - 1].classList.remove("hide");
        return;
      } else {
        i = frames.length;
        frames[i - 1].classList.add("show");
        frames[i - 1].classList.remove("hide");
        return;
      }
    }
  }
};
