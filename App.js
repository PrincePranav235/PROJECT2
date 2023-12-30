import React from "react";
import  ReactDOM,{createRoot}  from "react-dom/client";

const a=<h1>Namaste react</h1>;
const b= () =>{
    return(
        <div>
            <h1>hehe ye h function comp asli ghuda diyr isko</h1>
        </div>
    );
}
const fn =()=>(
   
        <div>
            {a}
            {b()}
            <h1>ye h heading from function component</h1>
            <h2>transitive composition krdiyr h mtlb ghusa diye h component ko component mein</h2>;
        </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(fn());