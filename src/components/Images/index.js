import React from "react";


let Image = (props) => {
   return (
      <div className="card">
         <div className="img-container">
            <img alt={props.name} src={props.image} />
         </div>
      </div>
   );
}

   export default Image;