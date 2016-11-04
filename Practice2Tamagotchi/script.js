function Tamagotchi(name, health, foodBalance, waterBalance, happiness) {
    this.name = name || "Pet";
    this.health = health || 75;
    this.foodBalance = foodBalance || 65;
    this.waterBalance = waterBalance || 65;
    this.happiness = happiness || 85;

    this.maxHealthLevel = 100;
    this.maxFoodLevel = 100;
    this.maxWaterLevel = 100;
    this.maxHappinessLevel = 100;
    this.isDead = false;
}

Tamagotchi.prototype.randomAccident = function() {
    if(Math.round(Math.random() * 10) <= 1) {
        this.isDead = true;
        return this.isDead;
    }
};

Tamagotchi.prototype.controlHealth = function(difference) {
    var decWaterBalance = -20;
    var decHappiness = -15;

    if(this.health <= this.maxHealthLevel - difference && this.health > 0) {
        this.health += difference;
        if (this.health <= 20 && this.health > 0) {
            console.log(this.name + " is ill");
            this.controlWaterBalance(decWaterBalance);
            this.changeHappiness(decHappiness);
        }
    }
    else if(this.health <= 0) {
        this.isDead = true;
        console.log(this.name + " is dead!");
    }
    else {
        this.health = this.maxHealthLevel;
    }

};

Tamagotchi.prototype.controlWaterBalance= function(difference) {
    if(this.waterBalance <= this.maxWaterLevel - difference && this.waterBalance > 0) {
        this.waterBalance += difference;
        if(this.waterBalance <= 0) {
            this.isDead = true;
            console.log(this.name + " is dead!");
        }
    }
    else {
        this.waterBalance = this.maxWaterLevel;
    }
};

Tamagotchi.prototype.changeHappiness = function(difference) {
    if((this.happiness <= this.maxHappinessLevel - difference) && (this.happiness > 0)) {
        this.happiness += difference;
        if(this.happiness <= 0) {
            console.log(this.name + " is unhappy! " + this.name + " left you!");
        }
    }
    else {
        this.happiness = this.maxHappinessLevel;
    }
};

Tamagotchi.prototype.walk = function() {
    var incHappiness = 6;
    var decHealth = -5;
    this.foodBalance -= 5;

    if(this.randomAccident()) {
        console.log("Oh! " + this.name + " is dead!");
    }
    else if(this.foodBalance <= 0) {
        this.isDead = true;
        console.log(this.name + " is dead!");
    }
    else {
        this.changeHappiness(incHappiness);
        this.controlHealth(decHealth);
    }
};

Tamagotchi.prototype.eat = function(countFood) {
    var incHappiness = 2;
    var incHealth = 8;

    if(!isNaN(countFood) && countFood <= 3) {
        this.foodBalance += countFood * 6;

        if(this.foodBalance > this.maxFoodLevel) {
            this.isDead = true;
            console.log(this.name + " is dead!");
        }
        else {
            this.changeHappiness(incHappiness);
            this.controlHealth(incHealth);
        }
    }
};

Tamagotchi.prototype.drink = function() {
    var incWaterBalance = 7;
    this.controlWaterBalance(incWaterBalance);
};






