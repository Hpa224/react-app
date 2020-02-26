import React from "react";
import "./index.css";

let Image = (props) => {
   return (
      <div className="card">
         <div className="img-container">
            <img alt={props.name} src={props.image} className="col-4" data-clicked={false} onClick={(e) => props.coolFunction(e)}/>
         </div>
      </div>
      );
   };

   export default Image;