class Electrodevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.enabled = false;
    };
    switchOn() {
        this.enabled = true;
        console.log(this.name + ' включен');
    };
    switchOff() {
        this.enabled = false;
        console.log(this.name + ' выключен');
    };
};
class Lamp extends Electrodevice {
    constructor(name, power) {
        super(name, power);
    };
};
class Computer extends Electrodevice {
    constructor(name, power) {
        super(name, power);
    };
};
let deskLamp = new Lamp('Настольная лампа', 60);
let desktopComputer = new Computer('Настольный компьютер', 350);
deskLamp.switchOn();
desktopComputer.switchOn();
let totalPower = deskLamp.power + desktopComputer.power;
console.log('Суммарная потребляемая мощность всех включенных приборов: ' + totalPower + ' Вт');
