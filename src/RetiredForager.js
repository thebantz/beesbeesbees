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


// // -----------------------------
// var HoneyMakerBee = function() {
//   Bee.call(this);
//   this.age = 10;
//   this.job = 'make honey';
//   this.honeyPot = 0;
// };


// HoneyMakerBee.prototype = Object.create(Bee.prototype);
// HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// //overwriting the Grub superclass

// // HoneyMakerBee.prototype.eat = function(food) {
// //   this.food += " has now been consumed";
// // }

// HoneyMakerBee.prototype.makeHoney = function(honeyPot) {
//   this.honeyPot++;
// }

// HoneyMakerBee.prototype.giveHoney = function(honeyPot) {
//   this.honeyPot--;
// }

// //----------------------------

// var ForagerBee = function() {
//   Bee.call(this);
//   this.job = 'find pollen';
//   this.canFly = true;
//   this.treasureChest = [];

// };

// ForagerBee.prototype = Object.create(Bee.prototype);
// ForagerBee.prototype.constructor = ForagerBee;

// ForagerBee.prototype.forage = function(treasure) {
//   this.treasureChest.push(treasure);
// }

// ------------------------------

var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};


RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(forageItem) {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}