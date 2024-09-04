
import { useDispatch, useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";
import { clearCart } from "../Utils/cartStore";


const Cart=()=>{
    
    const data=useSelector((state)=>state.cart.items);
    const dispatch=useDispatch();
    const handle=()=>{
        dispatch(clearCart());
    }

    return(

        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className=" align-top m-2 p-2 rounded-md bg-black text-white" onClick={handle}>Clear Cart</button>
            <AccordianBody acData={data}/>
            </div>
               
        </div>
    )

    


}
export default Cart;