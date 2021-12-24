import { User } from "src/users/schemas/user.schema";
export const users: User[] = [];

const faker = require('faker');
faker.locale = "es";

for(let i = 1; i <= 10; i++) {
    users.push(
        { 
            name: faker.name.findName(), 
            email: faker.internet.email().toLowerCase(), 
            password: faker.internet.password(),
            personalInformation: null,
            createdAt: Date.now().toString(), 
            updatedAt: Date.now().toString() 
        },
    )
}