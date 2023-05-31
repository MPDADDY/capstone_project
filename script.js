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

// featured speakers section
const speakersSection = document.getElementById('speakers');
const featuredSpeakers = [
  {
    name: 'Yochai Benkler',
    image: '<img src="images/speaker_01 1 (5).png" alt="">',
    profession: 'Berkman: proffessor of enterpreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'Kilnam Chon',
    image: '<img src="images/speaker_01 1.png" alt="">',
    profession: '',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society',
  },
  {
    name: 'Lila tretikov',
    image: '<img src="images/speaker_01 1 (3).png" alt="">',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Julia Leda',
    image: ' <img src="images/speaker_01 1 (1).png" alt="">',
    profession: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    name: 'SohYeong Noh',
    image: '<img src="images/speaker_01 1 (4).png" alt="">',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Ryan Merkley',
    image: '<img src="images/speaker_01 1 (2).png" alt="">',
    profession: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

// looping through the object
for (let i = 0; i < featuredSpeakers.length; i += 1) {
  const fetch = document.getElementById('speakers').innerHTML;
  speakersSection.innerHTML = `<article class="speakers">
  <div class="image">
    ${featuredSpeakers[i].image}
  </div>
  <div class="speakerInfo">
    <h5>${featuredSpeakers[i].name}</h5>
    <p class="profession">${featuredSpeakers[i].profession}</p>
    <p></p>
    <p class="description">${featuredSpeakers[i].description}</p>
  </div>
</article>${fetch}`;
}
// more buton functionality
/* const morebtn = document.getElementById('more');
const width = window.innerWidth;
const mySpeakers = document.querySelectorAll('.speakers');

function displayList() {
  for (let i = 0; i < mySpeakers.length; i += 1) {
    if (width < 400 && i >= 2) {
      mySpeakers[i].classList.add = 'open';
    } else {
      mySpeakers.classList.remove('open');
      mySpeakers.classList.add = 'close';
    }
  }
}
morebtn.addEventListener('click', displayList); */
const morebtn = document.getElementById('readmore');
const width = window.innerWidth;
const mySpeakers = document.querySelectorAll('.speakers');

function hideList() {
  for (let i = 0; i < mySpeakers.length; i += 1) {
    if (width < 400 && i >= 2) {
      mySpeakers[i].style.display = 'none';
    }
  }
}
window.onload = hideList;
function displayList() {
  for (let i = 0; i < mySpeakers.length; i += 1) {
    if (width <= 400 && i >= 2) {
      mySpeakers[i].style.display = 'grid';
      morebtn.innerHTML = 'showless';
    }
  }
}
morebtn.addEventListener('click', displayList);