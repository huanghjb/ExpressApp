import express = require("express");
import repository = require("../Scripts/repository/Users");
export function registrations(req: express.Request, res: express.Response) {
    let rep = new repository.UserRepository();
    res.send(rep.getUsers());
}

export function register (req: express.Request, res: express.Response) {

}