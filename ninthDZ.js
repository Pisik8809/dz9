function CarModel() {
this.canMove = true;
this.setModel = function(value) {
this.model = value;
}
this.howMatchFuel = function() {
return 12;
}
}

function Sedan() {
this.__proto__ = new CarModel();
this.getModel = function(){
console.log(this.model);
}
this.takeFamily = function() {
console.log('Везу семью');
}
this.howMatchFuel = function() {
var sedanFuel = this.__proto__.howMatchFuel();
return sedanFuel/2;
}
}

car1 = new Sedan();
car1.setModel('toyota');
console.log(car1.model);
car1.takeFamily();
car1.howMatchFuel();
console.log(car1.howMatchFuel());

function Van() {
this.__proto__ = new CarModel();
this.takeLuggage = function() {
console.log('Принимаю багаж');
}
this.howMatchFuel = function() {
var vanFuel = this.__proto__.howMatchFuel();
return vanFuel + 4;
}
}
car2 = new Van();
car2.setModel('gazel');
console.log(car2.model);
car2.takeLuggage();
car2.howMatchFuel();
console.log(car2.howMatchFuel());

function Truck() {
this.__proto__ = new CarModel();
this.takeLoad = function() {
console.log('Принимаю груз');
}
this.howMatchFuel = function() {
var truckFuel = this.__proto__.howMatchFuel();
return truckFuel*2;
}
}

car3 = new Truck();
car3.setModel('kamaz');
console.log(car3.model);
car3.takeLoad();
car3.howMatchFuel();
console.log(car3.howMatchFuel());

function Bus() {
this.__proto__ = new CarModel();
this.takePeople = function() {
console.log('Принимаю людей');
}
this.howMatchFuel = function() {
var busFuel = this.__proto__.howMatchFuel();
return busFuel+busFuel/2;
}
}

car4 = new Bus();
car4.setModel('bogdan');
console.log(car4.model);
car4.takePeople();
car4.howMatchFuel();
console.log(car4.howMatchFuel());
