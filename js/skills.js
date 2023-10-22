
// selct skills progress
let skill = document.querySelector(".skills");
const up = document.querySelector("#up");
window.onscroll = function () {
  let SkillOffsetTop = skill.offsetTop;

  // console.log(SkillOffsetTop);

  let SkillOffsetHeight = skill.offsetHeight;
  // console.log(SkillOffsetHeight);

  let windowHeight = this.innerHeight;
  // console.log(windowHeight);

  let windowScrollTop = this.pageYOffset;
  // console.log(windowScrollTop);

  // console.log(SkillOffsetTop + SkillOffsetHeight - windowHeight );

  if (windowScrollTop > SkillOffsetTop + SkillOffsetHeight - windowHeight) {
    // console.log("Skill Section");
    let ourskill = document.querySelectorAll(".skill-box .skill-progress span");
    ourskill.forEach((span) => {
      span.style.width = span.dataset.progress;
    })
  }
  // button up
  if (window.scrollY >= 600) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
//================================ up ==============================


