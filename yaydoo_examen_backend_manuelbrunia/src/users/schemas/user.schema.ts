import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserPersonalInformation } from 'src/user-personal-information/schema/user-personal-information.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserPersonalInformation'} )
  personalInformation: UserPersonalInformation;

  @Prop({
    type : Date, 
    default: Date.now 
  })
  createdAt: string;

  @Prop({
    type : Date, 
    default: Date.now ,
  })
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);