function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  document.getElementById("hour").textContent = hour;
  document.getElementById("minute").textContent = minute;
  document.getElementById("second").textContent = second;
  document.getElementById("ampm").textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
