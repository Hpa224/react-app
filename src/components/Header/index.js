import React from "react";

let Header = (props) => {
   return (
      <div classname="scores">
         Score: {props.score} Highscore: {props.highscore}
      </div>
      );
   }

export default Header