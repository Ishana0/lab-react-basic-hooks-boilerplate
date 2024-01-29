// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";

const UseState=()=>{
    const [like,setLike]=useState(0);

    return(
        <div>
            <p>{like}</p>
            <button onClick={()=> setLike(like+1)}>Like</button>
        </div>
    );
};
export default UseState;