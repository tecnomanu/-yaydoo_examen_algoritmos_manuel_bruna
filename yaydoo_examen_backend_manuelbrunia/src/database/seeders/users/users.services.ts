import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/users/schemas/user.schema";
import { users } from "./data";
import { UserPersonalInformation, UserPersonalInformationDocument } from "../../../user-personal-information/schema/user-personal-information.schema";
const faker = require('faker');
faker.locale = "es";

@Injectable()
export class UserSeederService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>,
    @InjectModel('UserPersonalInformation') private personalInformationModel: Model<UserPersonalInformationDocument>,
  ) { }

  create(): Array<Promise<User>> {
    return users.map(async (user: UserDocument) => {
      return await this.userModel
        .findOne({ email: user.email })
        .then(async dbUser => {
          if (dbUser) {
            return Promise.resolve(null);
          }
          const new_user = await this.userModel.create(user);
          const new_personal_info = await this.personalInformationModel.create({
            user: new_user._id,
            address: faker.address.streetAddress(), 
            phone: faker.phone.phoneNumber(),
            birthday: Date.parse(faker.date.past(30)),
            createdAt: Date.now().toString(), 
            updatedAt: Date.now().toString() 
          })
          new_user.personalInformation = new_personal_info._id;
          await new_user.save();
          return Promise.resolve(new_user,);
        })
        .catch(error => Promise.reject(error));
    });
  }
}