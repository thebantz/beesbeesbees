// var Grub = function() {
//   this.age = 0;
//   this.color = 'pink';
//   this.food = 'jelly';
// };

// Grub.prototype.eat = function () {

// }

// // --------------------------

// var Bee = function() {
//   Grub.call(this);
//   this.job = 'keep on growing';
//   this.age = 5;
//   this.color = yellow;
// };


// Bee.prototype = Object.create(Grub.prototype);
// Bee.prototype.constructor = Bee;


// -----------------------------
var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};


HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//overwriting the Grub superclass

// HoneyMakerBee.prototype.eat = function(food) {
//   this.food += " has now been consumed";
// }

HoneyMakerBee.prototype.makeHoney = function(honeyPot) {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(honeyPot) {
  this.honeyPot--;
}