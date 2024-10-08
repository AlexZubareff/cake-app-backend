import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IOrder } from 'src/interfaces/order';
import { IProductInCart } from 'src/interfaces/product';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order implements IOrder {
 

    @Prop()
    userId: string
   
    @Prop()
    order: Array<IProductInCart>

    @Prop()
    productCount: string

    @Prop()
    productCoast: string
 

}

export const OrderSchema = SchemaFactory.createForClass(Order);