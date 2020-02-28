import React from "react";

let Header = (props) => {
   return (
      <div className="scores">
         Score: {props.score} Highscore: {props.highscore}
      </div>
      );
   }

export default Header