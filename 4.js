function Electrodevice(name, power) {
    this.name = name;
    this.power = power;
    this.enabled = false;
};
Electrodevice.prototype.switchOn = function() {
    this.enabled = true;
    console.log(this.name + ' - ' + 'включено');
};
Electrodevice.prototype.switchOff = function() {
    this.enabled = false;
    console.log(this.name + ' - ' + 'выключено');
};
function Lamp(name, power) {
    Electrodevice.call(this, name, power);
};
Lamp.prototype = Object.create(Electrodevice.prototype);
function Computer(name, power) {
    Electrodevice.call(this, name, power);
};
Computer.prototype = Object.create(Electrodevice.prototype);
let deskLamp = new Lamp('Настольная лампа', 60);
let desktopComputer = new Computer('Настольный компьютер', 350);
deskLamp.switchOn();
desktopComputer.switchOn();
let totalPower = deskLamp.power + desktopComputer.power;
console.log('Суммарная потребляемая мощность всех включенных приборов: ' + totalPower + ' Вт');