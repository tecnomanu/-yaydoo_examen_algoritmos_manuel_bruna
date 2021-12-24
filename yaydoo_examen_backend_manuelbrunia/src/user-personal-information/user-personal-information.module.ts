import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPersonalInformation, UserPersonalInformationSchema } from './schema/user-personal-information.schema';
import { UserPersonalInformationController } from './user-personal-information.controller';

@Module({
    imports: [
      MongooseModule.forFeature(
        [{ name: UserPersonalInformation.name, schema: UserPersonalInformationSchema }]
      )
    ],
    controllers: [UserPersonalInformationController],
    providers: [],
  })
export class UserPersonalInformationModule {

}
