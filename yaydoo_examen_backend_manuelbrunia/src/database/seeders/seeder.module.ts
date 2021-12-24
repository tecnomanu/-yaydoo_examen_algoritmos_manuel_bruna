import { Logger, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Seeder } from "./seeder";
import { UserSeederModule } from "./users/users.module";

@Module({
    imports: [UserSeederModule, MongooseModule.forRoot('mongodb://localhost:27017/yaydoo_backend')],
    providers: [Logger, Seeder],
})
export class SeederModule { }