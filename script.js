document.querySelector('#darkmode').addEventListener('click', function() {
      document.getElementsByTagName('body')[0].classList.toggle('dark');
});

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var formattedTime = currentTime.toLocaleString();

  // Add leading zero to minutes and seconds if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var message = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerText = message;
}
window.onload = function() {
  updateClock(); // Initial call to display the time immediately
  setInterval(updateClock, 1000); // Update the clock every second
}