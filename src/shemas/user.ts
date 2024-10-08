import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IUser } from 'src/interfaces/user';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User implements IUser {

  @Prop({required: true, minlength: 2})
  login: string
 
  @Prop({required: true})
  password: string;

  @Prop()
  // ({required: true})
  email: string

  @Prop()
  cardNumber: string;

  @Prop()
  id: string;

  @Prop()
  role: string;

  @Prop()
  cartId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);