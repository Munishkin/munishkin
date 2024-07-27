const wrapper = document.querySelector('.header svg');

function draw() {
  wrapper.classList.add('active');
}

function erase() {
  wrapper.classList.remove('active');
}

wrapper.addEventListener('mouseenter', () => {
    erase();
    setTimeout(draw, 1200)
}, false);

setTimeout(draw, 300)
