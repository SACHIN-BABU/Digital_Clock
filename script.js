let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hrs = now.getHours();
  const mins = now.getMinutes().toString().padStart(2, "0");
  const secs = now.getSeconds().toString().padStart(2, "0");
  const ampm = hrs >= 12 ? 'PM' : 'AM';

  let displayHrs = hrs;
  if (!is24Hour) {
    displayHrs = hrs % 12 || 12;
  }

  const hours = displayHrs.toString().padStart(2, "0");

  document.getElementById('clock').innerHTML =
    `${hours}<span class="colon">:</span>${mins}<span class="colon">:</span>${secs} ${!is24Hour ? ampm : ''}`;

  document.getElementById('date').innerText = now.toDateString();
}

document.getElementById('toggleFormat').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggleFormat').innerText =
    is24Hour ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
  updateClock();
});

setInterval(updateClock, 1000);
updateClock();
