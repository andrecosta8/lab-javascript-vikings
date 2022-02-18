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
addVikking(newViking){
  this.vikingArmy.push(newViking);
}
addSaxon(newSaxon){
  this.saxonArmy.push(newSaxon);
}

vikingAttack(){
  let randomViking = this.vikingArmy(Math.floor(this.vikingArmy.length*Math.random()));
  let randomSaxon = this.saxonArmy(Math.floor(this.saxonArmy.length*Math.random()));
  let vikingAtt = randomSaxon.receiveDamage(randomSaxon.strength);
  if(randomSaxon.health <= 0){
    this.saxonArmy.splice(randomSaxon,1);
  }
  return vikingAtt;
}


}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
