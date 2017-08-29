//----------------------------------------
function hideAll(element) {
  for (i = 0; i < element.length; i++) {
    element[i].style.display = 'none';
  }
}
function hide(e) {
  e.style.display = 'none';
}
function show(e) {
  e.style.display = 'block';
}
//----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let content = Array.from(document.querySelectorAll('div.fb-section__content'));
  let sections = Array.from(document.querySelectorAll('.fb-section'));
  setTimeout(hideAll(content), 1000);
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
      if (content[i].style.display == 'none') setTimeout(show(content[i]), 1000);
      else setTimeout(hide(content[i]), 1000);
    });
  }
});
