import IReg = require("./IRegistration");

export class Registration implements IReg.IRegistration {

    public salutation: string;
    public name: string;
    public age: number;

    constructor(registration: IReg.IRegistration) {
        this.age = registration.age;
        this.name = registration.name;
        this.salutation = registration.salutation;
    }

    public isValid() {
        return this.age >= 18;
    }
}