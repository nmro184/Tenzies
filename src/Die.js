import React from "react"
import DieFace from "./DieFace"
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
   // return (
    //    <div 
      //      className="die-face" 
      //      style={styles}
      //      onClick={props.holdDice}
     //  >
       //     <h2 className="die-num">{props.value}</h2>
      //  </div>
   // )
   
   return(
       //<div 
       //style={styles}
      // onClick={props.holdDice}
           // >
            <DieFace 
                value = {props.value}
                style={styles}
                holdDice={props.holdDice}
                isHeld = {props.isHeld}
              />
         //</div>
   )
}