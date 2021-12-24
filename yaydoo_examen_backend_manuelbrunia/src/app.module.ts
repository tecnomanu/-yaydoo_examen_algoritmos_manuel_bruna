import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserPersonalInformationController } from './user-personal-information/user-personal-information.controller';
import { UserPersonalInformationModule } from './user-personal-information/user-personal-information.module';

@Module({
  imports: [
    UsersModule,
    UserPersonalInformationModule,
    MongooseModule.forRoot('mongodb://localhost:27017/yaydoo_backend')
  ],
  controllers: [AppController, UserPersonalInformationController],
  providers: [AppService],
})
export class AppModule {}
