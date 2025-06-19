const clock = document.getElementById('clock');
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const toggle = document.getElementById('theme-toggle');

for (let i = 0; i < 60; i++) {
  const tick = document.createElement('div');
  tick.classList.add('tick');
  if (i % 5 !== 0) tick.classList.add('minor');
  tick.style.transform = `rotate(${i * 6}deg) translate(-50%, -50%)`;
  clock.appendChild(tick);
}

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() % 12 + minutes / 60;

  secondHand.style.transform = `rotate(${seconds * 6 - 90}deg)`;
minuteHand.style.transform = `rotate(${minutes * 6 - 90}deg)`;
hourHand.style.transform   = `rotate(${hours   * 30 - 90}deg)`;
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark')
    ? 'Light Mode'
    : 'Dark Mode';
});


updateClock();
setInterval(updateClock, 1000);
