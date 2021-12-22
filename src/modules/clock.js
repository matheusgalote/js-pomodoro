export default class Clock {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get now() {
    return new Date();
  }

  get future() {
    return new Date(this.futureDate);
  }

  get diff() {
    return this.future.getTime() - this.now.getTime();
  }

  get hours() {
    return Math.floor(this.diff / (60 * 60 * 1000));
  }

  get minutes() {
    return Math.floor(this.diff / (60 * 1000));
  }

  get seconds() {
    return Math.floor(this.diff / 1000);
  }

  total() {
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;

    return {
      hours, 
      minutes, 
      seconds
    }
  }

}