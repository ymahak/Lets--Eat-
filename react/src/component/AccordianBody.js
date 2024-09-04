import { useDispatch } from "react-redux";
import { IMG_URL } from "../Utils/img";
import { addItem } from "../Utils/cartStore";

const AccordianBody=(props)=>{
    const{acData}=props;
    const dispatch=useDispatch();
    const handleAdd=(name)=>{
        dispatch(addItem(name));
    }
   
    return(
        <div>
             {
            
            acData.map(read=>(
        <div key={read.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 font-extrabold flex justify-between "> 
        
        
        {read.card.info.name}  
        <div className="font-bold "> ₹{read.card.info.price?read.card.info.price/100:read.card.info.defaultPrice/100}</div>
        <p className="font-semibold">{read.card.info.description}</p>
        <div className="w-4/12 p-4">
            <div className="absolute">
                <button className="p-1  shadow-lg mx-auto bg-gray-200 font-medium rounded-lg" onClick={()=>handleAdd(read)}>Add +</button>
            </div>
        <img src={IMG_URL+read.card.info.imageId} className="w-auto"/>
        </div>
        </div>
        
       
            ))
        }
        </div>
    )
}
export default AccordianBody;