// check local storege
let maincolor = localStorage.getItem("option-color");

// backgroun imges
let backgroundImage = true;
// backgroundInterval
let backgroundInterval;
// check random background
let background_option = localStorage.getItem("back_option");
if (background_option !== null) {
  document.querySelectorAll(".randum span").forEach((el) => {
    el.classList.remove("active");
  });

  if (background_option == "true") {
    document.querySelector(".randum .yes").classList.add("active");

    backgroundImage = true;
  } else {
    document.querySelector(".randum .no").classList.add("active");

    backgroundImage = false;
  }
  
}
if (maincolor !== null) {
  document.documentElement.style.setProperty("--main-color", maincolor);
  // check activ class
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("activ");
    // Add activ class
    if (element.dataset.color === maincolor) {
      element.classList.add("activ");
    }
  });
}
// sitting box
document.querySelector(".toggle .fa-gear").onclick = function () {
  // this.style.color="red";
  this.classList.toggle("fa-spin");
  document.querySelector(".sitting-box").classList.toggle("open");
  // this.classList.toggle("icon");
};
// Switch colors
const color = document.querySelectorAll(".color-list li");
color.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    //set color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // save in localStoreg
    localStorage.setItem("option-color", e.target.dataset.color);
    // remov class activ for all li
    color.forEach((element) => {
      element.classList.remove("activ");
    });
    // ad class activ
    e.currentTarget.classList.add("activ");
  });
});

// change background
const randum = document.querySelectorAll(".randum span");
randum.forEach((element) => {
  element.addEventListener("click", (e) => {
    randum.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    if (e.target.dataset.randum === "yes") {
      // console.log("yes");
      backgroundImage = true;
      randumimges();

      localStorage.setItem("back_option", true);
    } else {
      // console.log("no");
      backgroundImage = false;
      clearInterval(backgroundInterval);

      localStorage.setItem("back_option", false);
    }
  });
});

// chaing imges of landing page
let page = document.querySelector(".landing-page");
let imges = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
// function imeges
function randumimges() {
  if (backgroundImage == true) {
    backgroundInterval = setInterval(() => {
      let number = Math.floor(Math.random() * imges.length);
      page.style.backgroundImage = 'url("imges/' + imges[number] + '")';
    }, 1000);
  }
}
randumimges();


// galary
// creat overlay popup
let galary = document.querySelectorAll(".galary img");
galary.forEach((img) => {
  img.addEventListener("click", (ele) => {
    // create element overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    // create imge
    let popupBox = document.createElement("div");
    let popupImg = document.createElement("img");
    popupBox.className = "popup-img";
    popupImg.src = img.src;
    popupBox.appendChild(popupImg);
    document.body.appendChild(popupBox);

    // create heding img
    if (img.alt !== null) {
      let imgHeding = document.createElement("h3");
      let text = document.createTextNode(img.alt);
      imgHeding.appendChild(text);
      popupBox.prepend(imgHeding);
    }
    // create close popup
    let closePopup = document.createElement("span");
    closePopup.innerHTML = "X";
    closePopup.className = "close";
    popupBox.prepend(closePopup);
  });
});
// remov popup and overlay
document.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    // remove popup box
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// select bollet
const allbollets = document.querySelectorAll(".nav-bullet .bullet");
// select links
const links = document.querySelectorAll(".linkes a");

// function
function scroller(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
      // console.log(document.querySelector(e.target.dataset.section));
    });
  });
}
scroller(allbollets);
scroller(links);

// move to up
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// bullet option
let bullrtShow = document.querySelectorAll(".sitting-box .bullet-option span");
let navBullet = document.querySelector(".nav-bullet");
let localBullet = localStorage.getItem("bullet");

if (localBullet !== null) {
  bullrtShow.forEach((span) => {
    span.classList.remove("active");
  });

  if (localBullet === "block") {
    navBullet.style.display = "block";
    document.querySelector(".bullet-option .yes").classList.add("active");
  } else {
    navBullet.style.display = "none";
    document.querySelector(".bullet-option .no").classList.add("active");
  }
}

bullrtShow.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "yes") {
      navBullet.style.display = "block";

      localStorage.setItem("bullet", "block");
    } else {
      navBullet.style.display = "none";
      localStorage.setItem("bullet", "none");
    }
  });
});
// remove class active
bullrtShow.forEach((element) => {
  element.addEventListener("click", (e) => {
    bullrtShow.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

//reset  local storig
document.querySelector(".reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

//handel menu
let BTmenu = document.querySelector(".menu");
let linkMenu = document.querySelector(".linkes");

BTmenu.onclick = function (e) {
  e.stopPropagation();
  BTmenu.classList.toggle("menu-active");
  linkMenu.classList.toggle("open");
};
// kilck any whear to close windo
document.addEventListener("click", function (e) {
  if (e.target !== BTmenu && e.target !== linkMenu) {
    // console.log("this not menu or links");

    if (linkMenu.classList.contains("open")) {

      BTmenu.classList.toggle("menu-active");

      linkMenu.classList.toggle("open");
    }
  }
});

linkMenu.onclick = function (e) {
  e.stopPropagation();
};