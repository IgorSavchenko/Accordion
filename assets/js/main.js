//----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let content = Array.from(document.querySelectorAll('.fb-section__content'));
  let sections = Array.from(document.querySelectorAll('.fb-section'));
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
      content[i].classList.toggle("fb-section__content--hidden");
    });
  }
});
