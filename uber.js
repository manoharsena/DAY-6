class UberPrice {
  constructor(distance, duration, baseRate, ratePerMile, ratePerMinute) {
    this.distance = distance;
    this.duration = duration;
    this.baseRate = baseRate;
    this.ratePerMile = ratePerMile;
    this.ratePerMinute = ratePerMinute;
  }

  totalPrice() {
    let ans =
      this.baseRate +
      this.distance * this.ratePerMile +
      this.duration * this.ratePerMinute;

    return `Total Price Rs.${ans}`;
  }
}

const myUber = new UberPrice(10, 15, 50, 25, 3);
console.log(myUber.totalPrice());

//output
//Total Price Rs.345
