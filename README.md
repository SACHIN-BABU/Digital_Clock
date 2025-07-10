# Digital_Clock
## Date:10-07-2025
## Sachin B
## 212222060207

## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TimeTrack</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>TimeTrack</h1>
    <p>Live Digital Clock</p>
    <div id="clock"></div>
    <div id="date"></div>
    <button id="toggleFormat">Switch to 24-Hour Format</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  height: 100vh;
  background: #1c1c1c;
  color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
  padding: 30px;
  background: #2d2d2d;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

h1 {
  margin: 0;
  font-size: 36px;
}

#clock {
  font-size: 48px;
  margin-top: 20px;
  letter-spacing: 4px;
}

#clock .colon {
  animation: blink 1s infinite;
}

#date {
  margin-top: 10px;
  font-size: 18px;
  color: #ccc;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #0056b3;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```
## Js:
```
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
```
## Output:
<img width="1908" height="863" alt="Screenshot 2025-07-10 230520" src="https://github.com/user-attachments/assets/83844a5f-a627-4920-89d0-a7573b9e918a" />


## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
