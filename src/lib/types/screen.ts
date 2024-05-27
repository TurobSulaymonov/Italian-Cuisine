import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/* REACT APP STATE */
export interface AppRootState{
    homePage: HomePageState;
    productPage: ProductPageState;
    ordersPage: OrdersPageState;
    userPage: UserPageState;
}
/** HOMEPAGE **/
export interface HomePageState{
    popularDishes: Product[];
    newDishes:Product [];
    topUsers: Member[];
}
/** PRODCUTS  PAGE **/
export interface ProductPageState{
     restaurant: Member | null;
     chosenProduct: Product | null;
     products: Product[];
}
/** ORDERS PAGE **/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
export interface UserPageState{
  
}