/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
 * of the "health" property.
 *
 * Now, create a NEW object called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */


 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    ///////////////////////////
    // Put your code here!
    ///////////////////////////
    function LivingThing(monsterName, monsterHealth) {
      //private to class(instatiated object)
     let name = monsterName;
     let health = monsterHealth;

    //let name = monsterName;
     //let health = monsterHealth;

     //adding getter setters
     this.getName = function(){
        return name;
      }

      this.getHealth = function(){
        return health;
      }

      this.setHealth = function(newHealth){
        health = newHealth;
      }



     this.isAlive = function(){

       if(this.health >0){
         return true;
       } else
       {
       return false;
      }
    }

    /* Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
    * of the "health" property.*/

    this.isAlive = function(){

      if(this.health >0){
        return true;
      } else
      {
      return false;
     }
   }



     }

     function Hero (heroName, heroHealth){
       LivingThing.call(this, heroName, heroHealth);
      /* Check out the following to figure out how to extend an object
      * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
      *
      * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
      * The method should do three things:
      * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
      * 2. Reduce the hero's health by a random value between 0 and 10.
      * 3. Print out how much damage the monster and hero did to each other.*/
      this.attack = function(monster){
        let heroDamage = getRandomIntInclusive(0,10);
        let monsterDamage = getRandomIntInclusive(0,10);


         monster.setHealth() = monster.getHealth() - monsterDamage;

         this.setHealth() = this.getHealth() - heroDamage;

         console.log("hero name " + this.getName() + "recieve " + heroDamage);
         console.log("monster name " + this.getName() + "now has " + monsterDamage)

      }

      /* Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
      * and does the following:
      *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
      *     - But, don't attack if the LivingThing is already dead!
      *  - Repeat the process until all the monsters or the hero is dead.
      *
      * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
      * name of your choice.*/

      this.fight = function(arrayLivingThings){

        for (let i=0; i < arrayLivingThings.length; i++){

          //why wouldn't arrayLivingThings(isAlive()) work?
          if(arrayLivingThings[i].isAlive())
          {
          this.attack(arrayLivingThings[i]);
          }
        }


      }

     }
     let rat = new LivingThing("Rat", 5);

     let goblin = new LivingThing("Goblin", 30);

     let ogre = new LivingThing("Ogre", 80);

     let monsters = [rat, goblin, ogre]

     let hero = new Hero("Superman", 100);


    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + hero.getName() + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    hero.fight(monsters);

    if (hero.isAlive()) {
        console.log("The hero, " + hero.getName() + ", prevailed!");
    }
    else {
        console.log(hero.getName() + " was bested by the monsters. We are doomed");
    }

})();
