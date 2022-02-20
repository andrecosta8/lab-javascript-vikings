// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength =strength;
}
attack(){
  return this.strength;
}
receiveDamage(damage){
  this.health -= damage;
}
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength,){
    super(health,strength)
    this.name = name;
}
attack(){
  return this.strength;
}
receiveDamage(damage){
   this.health -= damage;
    if (this.health > 0){
    return (`${this.name} has received ${damage} points of damage`);
    }
    return (`${this.name} has died in act of combat`);
}
battleCry(){
  return `Odin Owns You All!`;
}
}
// Saxon
class Saxon extends Soldier {

  attack(){
  return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return (`A Saxon has received ${damage} points of damage`);
      }
      return (`A Saxon has died in combat`);

  }
}
// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
}
addViking(viking){
  this.vikingArmy.push(viking);
}

addSaxon(saxon){
  this.saxonArmy.push(saxon);
}

vikingAttack(){
  let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length*Math.random())];
  let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length*Math.random())];
  let vikingAtt = randomSaxon.receiveDamage(randomViking.strength);
  if(randomSaxon.health <= 0){
    this.saxonArmy.splice(randomSaxon,1);
  }
  return vikingAtt;
}
saxonAttack(){
  let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length*Math.random())];
  let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length*Math.random())];
  let saxonAtt = randomViking.receiveDamage(randomSaxon.strength);
  if(randomViking.health <= 0){
    this.vikingArmy.splice(randomViking,1);
  }
  return saxonAtt;

}
showStatus(){
  if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
  if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
  if (this.vikingArmy.length <= 1 && this.saxonArmy.length <=1) return "Vikings and Saxons are still in the thick of battle."
}

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
