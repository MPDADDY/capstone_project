const openNav = document.getElementById('bars');
const closeNav = document.getElementById('close');
const navlinks = document.getElementById('navlinks');
const navlistElements = document.querySelectorAll('.mynav');
function openMobileNav() {
  navlinks.style.display = 'block';
  openNav.style.display = 'none';
  closeNav.style.display = 'block';
}

function closeMobileNav() {
  navlinks.style.display = 'none';
  openNav.style.display = 'block';
  closeNav.style.display = 'none';
}
for (let i = 0; i < navlistElements.length; i += 1) {
  navlistElements[i].addEventListener('click', closeMobileNav);
}
closeNav.addEventListener('click', closeMobileNav);
openNav.addEventListener('click', openMobileNav);
