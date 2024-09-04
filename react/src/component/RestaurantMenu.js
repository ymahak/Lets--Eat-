import { useState } from "react";
import Shimmer from "./shimmer";

import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurentCategory";

import useRestaurantMenu from "../Utils/useRestaurantMenu";

let count=0;
export const RestaurantMenu=() =>{
   const[showIndex,setShowIndex]=useState(null);

     //const[resInfo,setResInfo]= useState(null);
     const {resId}=useParams();
     const resInfo=useRestaurantMenu(resId );
   
    if(resInfo===null){
        return <Shimmer/>
    }
    count++;
    console.log("I am renderd in Restaurent menu",count);
   
    const {name,areaName,costForTwoMessage,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info ;
    
   let {itemCards}=
   
        resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card ;
    
   // console.log(itemCards);
    //data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
      (itemCards===undefined)?
      {itemCards}=resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card:itemCards;
      //data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card["@type"]
      const categories=resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>
              c.card.card["@type"]===("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") );
              console.log(categories);
    return(
        <div className="menu">
            <h1 className="font-bold text-center my-6 p-4 text-2xl">{name}</h1>
            <h2 className="text-center font-bold ">{cuisines.join(", ")}</h2>
            <h2 className="text-center font-bold">{costForTwoMessage}</h2>
            <h2 className="text-center font-bold">{areaName}</h2>

           
               {/* [0].card.card.title */}
                <ul>
                   
                    {
                    categories.map((list,index)=>
                       <li key={list.card.card.id}>   <RestaurantCategory data={list.card.card} accor={index==showIndex  ?true:false} setShowIndex={()=>setShowIndex(index==showIndex?null:index)} />       </li>
                    )    
                        }

                       
                    
                </ul>
         
        </div>
        
    )
}