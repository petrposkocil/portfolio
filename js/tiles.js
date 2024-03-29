console.clear();

const tileEls = document.querySelectorAll('.tile');

let x = 0;
let y = 0;
let currX = 0;
let currY = 0;

document.addEventListener('mousemove', event => {
  let e = event.touches ? event.touches[0] : event;
  x = e.clientX;
  y = e.clientY;
});

Array.from(tileEls).forEach(tileEl => {
  tileEl.addEventListener('mousemove', () => {
    document.body.style.setProperty('--over', 1);
  });

  tileEl.addEventListener('mouseout', () => {
    document.body.style.setProperty('--over', 0);
  });
});

function update() {
  requestAnimationFrame(() => {
    currX = currX + (x - currX) * .15;
    currY = currY + (y - currY) * .15;
    const { innerWidth, innerHeight } = window;
    const rotX = currY / innerHeight * -2 + 1;
    const rotY = currX / innerWidth * 2 - 1;

    document.body.style.setProperty('--mouse-x', currX);
    document.body.style.setProperty('--mouse-y', currY);
    document.body.style.setProperty('--rot-x', rotX);
    document.body.style.setProperty('--rot-y', rotY);

    update();
  });
}

update();
