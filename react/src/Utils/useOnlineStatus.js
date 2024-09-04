import { useState,useEffect } from "react"

const useOnlineStatus=()=>{
    const[checkIt,setcheckIt]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setcheckIt(false);
        });
        window.addEventListener("online",()=>{
             setcheckIt(true);
        })
    },[]);
    return checkIt;
}
export default useOnlineStatus;