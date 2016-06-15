import * as IReg  from "../model/IRegistration";

export class UserRepository {

    public getUsers(): Array<IReg.IRegistration> {
        var registraitons = new Array<IReg.IRegistration>();
        registraitons.push
            (
            { salutation: "Mr.", name: "Tom Taillor", age: 20 },
            { salutation: "Mr.", name: "Max Muster", age: 19 }
        );

        return registraitons;
    }
}