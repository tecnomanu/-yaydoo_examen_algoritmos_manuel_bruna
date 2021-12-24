import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserPersonalInformation, UserPersonalInformationSchema } from "src/user-personal-information/schema/user-personal-information.schema";
import { User, UserSchema } from "src/users/schemas/user.schema";
import { UserSeederService } from "./users.services";

@Module({
    imports: [MongooseModule.forFeature(
        [
            { name: UserPersonalInformation.name , schema: UserPersonalInformationSchema },
            { name: User.name, schema: UserSchema }
        ]
    )],
    providers: [UserSeederService],
    exports: [UserSeederService],
})
export class UserSeederModule { }