import axios from "axios";
import { serverApi } from "../../lib/config";
import { CartItem } from "../../lib/types/search";
import { Order, OrderInquiry, OrderItemInput, OrderUpdateInput } from "../../lib/types/order";

class OrderService{
    private readonly path: string;
  
    constructor() {
        this.path = serverApi;
    }
    public async createOrder (input: CartItem[]): Promise<Order>{
      try{
       const orderItems: OrderItemInput[] = input.map((cartItems: CartItem) => {
        return {
           itemQuantity: cartItems.quantity,
           itemPrice: cartItems.price,
           productId: cartItems._id,
        };
       });
        const url = `${this.path}/order/create`;
        const result = await axios.post(url, orderItems, { withCredentials: true }) ;
        console.log("createOrders", result);
        return result.data
    }
      catch (err) {
        console.log("ERROR", err);
        throw err;
      }
    }
    public async getMyOrders (input: OrderInquiry): Promise<Order[]>{
        try{
            console.log("GetMyOrders;", this.getMyOrders)
            // axios.defaults.withCredentials = true;
            const url = `${this.path}/order/all`;
            const query = `?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;

            const result = await axios.get(url + query, {withCredentials: true})
            console.log("getMyOrders", result);
            return result.data;
         }    
        catch (err) {
          console.log("ERROR GetMyOrders", err);
          throw err;
        }
      }
      public async updateOrder (input: OrderUpdateInput): Promise<Order>{
        try{
            console.log("updateOrder;", this.getMyOrders)
            // axios.defaults.withCredentials = true;
            const url = `${this.path}/order/update`;
            const result = await axios.post(url, input, {withCredentials: true});
            console.log("updateOrder", result);          
            return result.data;
         }    
        catch (err) {
          console.log("ERROR updateOrder", err);
          throw err;
        }
      }
}
export default OrderService