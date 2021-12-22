import Clock from "./modules/clock.js";

// O future não pode compratilhar do objeto now
// pois a diferença seria sempre a mesma nesse caso
const now = new Date();
const now25 = now.setMinutes(now.getMinutes() + 50);
const clock = new Clock(now25);

setInterval(() => {
  console.log(clock.total())
}, 1000)
