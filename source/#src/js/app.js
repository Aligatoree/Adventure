import * as jsFunctions from "./modules/functions.js";
import IMask from "imask";

jsFunctions.isWebp();
document.addEventListener("DOMContentLoaded", function (e) {
  const animItems = document.querySelectorAll("._anim-items");
  let nameMask = IMask(document.getElementById("name"), {
    mask: /^[A-Za-zА-Яа-я ]+$/,
  });
  let phoneMask = IMask(document.getElementById("phone"), {
    mask: "+{7}(000)000-00-00",
  });

  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 8;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
});
