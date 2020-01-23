import User, { getAge, getName } from "./modules/User.js";

let customer = new User("Gon", "18");
console.log(customer);

getAge(customer);
getName(customer);
