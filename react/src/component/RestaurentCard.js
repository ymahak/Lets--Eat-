import { IMG_URL } from "../Utils/img";
import UserContext from "../Utils/UserContext";
import { useContext } from "react";


// const stylecard={
//     backgroundColor:"#f0f0f0"
// } 

const RestaurentCard= (props)  =>{
 const {resdata}=props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        areaName,
        costForTwo,
        locality
    }= resdata?.info;

    const dsa=useContext(UserContext);
    
//  Optional Chaining is used here => Certainly! Optional chaining is a feature introduced in JavaScript 
// to simplify accessing properties of nested objects when dealing with potentially nullable or 
// undefined values. It's represented by the ?. syntax.
    
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
           
         <img className="rounded-lg" src= {IMG_URL + cloudinaryImageId} />         
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join (", ")}</h4>
         <h4>{avgRating} Ratings</h4> 
         <h4>{areaName}</h4>
         <h4>{costForTwo} </h4>
         <h4>{locality}</h4>
         
        </div>
    )
}
// Higher Order Component
 export const WithNearDist=(RestaurentCard)=>{
    return(props)=>{
        return(
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Near</label>   
                <RestaurentCard  {...props} /> {/* Spread oprator is used here so that inner functionality of original component cant get affected*/}
                </div>
            
        )
    }
}

export default RestaurentCard;
 