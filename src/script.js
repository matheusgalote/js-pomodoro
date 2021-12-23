import Clock from "./modules/clock.js";

// O future não pode compratilhar do objeto now
// pois a diferença seria sempre a mesma nesse caso

function startTimer() {
  let now = new Date();
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const btns = document.querySelectorAll('.timers')

  btns.forEach(btn => {

    let timer = +btn.innerText;

    function setTime() {
      const newTime = now.setMinutes(now.getMinutes() + timer);
      const clock = new Clock(newTime);

      setInterval(() => {
        minutes.innerText = clock.total().minutes;
        seconds.innerText = ' : ' + clock.total().seconds;
      }, 1000);
    }

    btn.addEventListener('click', setTime);
  });
}

startTimer();



