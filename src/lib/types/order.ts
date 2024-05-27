import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";
import { Member } from "./member";
 
export interface OrderItemInput {
    itemQuantity: number;
    itemPrice: number;
    productId: string;
    orderId?: string;
}

export interface OrderItem{
    _id: string;
    itemQuantity: number;
    itemPrice: number;
    orderId: string;
    productId: string;
    createdAt: Date;
    updatedAt: Date; 
}

export interface Order{
    _id: string;
   orderTotal:number;
   orderDelivery: number;
   orderStatus: OrderStatus;
   memberId: string;
   createdAt: Date;
   updatedAt: Date; 
   // from aggregate
   orderItems: OrderItem[];
   productData: Product[];
   memberData: Member;
 
}
export interface OrderInquiry {
    page: number;
    limit: number;
    orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
   orderId: string;
   orderStatus: OrderStatus;

}