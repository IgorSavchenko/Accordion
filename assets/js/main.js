//----------------------------------------
function hide(element) {
  for (i = 0; i < element.length; i++) {
    element[i].style.display = 'none';
  }
}
//----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let content = Array.from(document.querySelectorAll('div.fb-section__content'));
  let sections = Array.from(document.querySelectorAll('.fb-section'));
  hide(content);
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
      if (content[i].style.display == 'none') content[i].style.display = 'block';
      else content[i].style.display = 'none';
    });
  }
});
