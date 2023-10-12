const counters = document.querySelectorAll('.counter');
document.addEventListener('scroll', scrollPage);
let scrollStarted = false;

function scrollPage(event) {
  const scrollpos = window.scrollY;
  if (scrollpos > 100 && !scrollStarted) {
    countup();
    scrollStarted = true;
  } else if (scrollpos < 100 && scrollStarted) {
    reset();
    scrollStarted = false; // Reset the scrollStarted flag
  }
}

function countup() {
  counters.forEach((counter) => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    const updateCounter = () => {
      const c = +counter.innerText;
      // Incrementer
      const increment = target / 100;
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target.toString();
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => {
    const initialTarget = +counter.getAttribute('data-target');
    counter.innerText = initialTarget.toString();
  });
}