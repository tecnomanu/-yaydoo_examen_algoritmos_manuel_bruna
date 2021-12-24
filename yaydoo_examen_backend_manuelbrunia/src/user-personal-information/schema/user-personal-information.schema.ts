import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import * as mongoose from 'mongoose';

export type UserPersonalInformationDocument = UserPersonalInformation & Document;

@Schema()
export class UserPersonalInformation {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Types.ObjectId;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop({
    type : Date, 
    default: Date.now 
  })
  birthday: string;

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

export const UserPersonalInformationSchema = SchemaFactory.createForClass(UserPersonalInformation);