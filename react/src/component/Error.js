 import { useRouteError } from "react-router-dom"
 export const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Hello Mahak !! There is an error Kindly Rectify it 

            </h1>
            <h2>Your Error is {err.data}</h2>
        </div>
    )
}
