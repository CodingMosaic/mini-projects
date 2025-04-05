const newYear = "31 dec 2025";

function countDown () {
  const newYearDate = new Date(newYear);
  const currenctDate = new Date();

  const totalSecondsLeft = (newYearDate - currenctDate) / 1000;

  const remainingDays = Math.floor(totalSecondsLeft / (60 * 60 * 24));
  const remainingHours = Math.floor(totalSecondsLeft / 3600 % 24);
  const remainingMinutes = Math.floor(totalSecondsLeft / 60 % 60);
  const remainingSeconds = Math.floor(totalSecondsLeft % 60);

  document.getElementById("days").textContent = remainingDays;
  document.getElementById("hours").textContent = remainingHours;
  document.getElementById("minutes").textContent = remainingMinutes;
  document.getElementById("seconds").textContent = remainingSeconds;
}

countDown();
setInterval(countDown, 1000);