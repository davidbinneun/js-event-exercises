let menuElem = document.getElementById('crew');
let titleElem = menuElem.querySelector('.title');

titleElem.addEventListener('click', function() {
  menuElem.classList.toggle('open');
});