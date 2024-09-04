import React,{lazy,Suspense,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Contact from "./component/Contact";
import { Error } from "./component/Error";
import { RestaurantMenu } from "./component/RestaurantMenu";
import UserContext from "./Utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./Utils/Appstore.js";
import Cart from "./component/Cart.js";





 



const About=lazy(()=>import("./component/About"));



const AppLayout=() =>{
 
  const [nameu, setNameu]=useState();

  useEffect(()=>{
    const nam={
      Fname:"Mahak"
    }
    setNameu(nam.Fname);
  },[])
  

    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{userName:nameu,setNameu}}>
    <div>
      
        <Heading/>
        
        <Outlet/>
   
   
    </div>
    </UserContext.Provider>
    </Provider>
     );
};
// Creating a configration for app Route
const appRouter=createBrowserRouter([
  {
    path: "/",
    element :<AppLayout></AppLayout>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/cart",
        element : <Cart/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About></About></Suspense>
        
    
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/> 
  }
  
]);
 const root=ReactDOM.createRoot(document.getElementById("hii"));
 root.render(<RouterProvider router={appRouter}/>);



 
// let head=React.createElement("h1",{id:"jii"},"hello world From React");
//         let root=ReactDOM.createRoot(document.getElementById("hii"));
//         root.render(head);-