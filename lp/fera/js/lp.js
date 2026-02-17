const countdownDate = new Date();
countdownDate.setHours(countdownDate.getHours() + 48);

const timer = document.getElementById("timer");

setInterval(function(){
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = hours + "h "
  + minutes + "m "
  + seconds + "s ";
},1000);
