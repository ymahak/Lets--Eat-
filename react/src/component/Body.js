
import RestaurentCard,{WithNearDist} from "./RestaurentCard";
import { useState, useEffect  } from "react";
import {resList} from "../Utils/mockdata";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import OnOffline from "./onOffline";
import UserContext from "../Utils/UserContext";
import { useContext } from "react";


const Body=()=>{
 
     const [listOfRestaurent,setlistOfRestaurent]=useState([]);
     const [newList,setnewList]=useState([]);
     const[serchtxt,setserchtxt]=useState("");
     

     console.log("I am renderd");
     const NearDistance=WithNearDist(RestaurentCard);
   
     useEffect(()=>{
       fecthData();
     },[]);
             const fecthData= async()=>{
                const data=   await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json= await data.json();
                // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                 setlistOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                console.log(json);
                // change in between 1 and 2 in night time
             }
             if(useOnlineStatus()===false){
              return <OnOffline/>
             }
             if(listOfRestaurent.length===0){
                return <Shimmer/>;
             }
        const {userName,setNameu}=useContext(UserContext);     
            
    return(
        <div className="body">
       
        
         <div className="filter">
         <button className="m-4  p-4 px-4 py-2 bg-gray-100 rounded-lg" value="filter" onClick={()=>{
         let  desList=listOfRestaurent.filter((rest)=>
            rest.info.avgRating>4.5
           );
           setlistOfRestaurent(desList);
          
         }}>Top Rated Restaurant</button>
         </div>
       <input type="text" className= "  p-2 m-4 border-black bg-gray-200" value={serchtxt}  onChange={(e)=>{
           setserchtxt(e.target.value);
       }}/>
       <button className=" px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
         let srchtxt=listOfRestaurent.filter((fil)=>
          fil.info.name.toLowerCase().includes(serchtxt.toLowerCase()));
         
          setnewList(srchtxt);
       }}>Search</button>


       <input type="text" className= "  p-2 m-4 border-black bg-gray-200" value={userName} onChange={(e)=>{
           setNameu(e.target.value)

       }}/>
        
         
       
        
           
          
            
        
         <div className=" flex  flex-wrap">

        
          {
            newList.length!==0? newList.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurentCard  resdata={restaurant}/></Link>)
         ):listOfRestaurent.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
          {
            restaurant.info.sla.lastMileTravel < 2 ?(<NearDistance resdata={restaurant} />):(<RestaurentCard  resdata={restaurant}/>)
          }
         
          
          
          
          </Link>)
      )
            
            
          }
            
            
            </div>   
        </div>
    )
}
export default Body;