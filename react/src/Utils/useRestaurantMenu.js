import { useEffect, useState } from "react";
import { MENU_URL } from "./img";
let count=0;
const useRestaurantMenu=(resId)=>{
   
    const[resInfo,setresInfo]=useState(null);
    // fetch data;
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        const data= await fetch(MENU_URL+resId);
        const json=await data.json();
        setresInfo(json);
        console.log(json);
        console.log("i am called useRestaurent menu");

    }
    return resInfo;
}
export default useRestaurantMenu;