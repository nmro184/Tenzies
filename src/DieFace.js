import React from "react"

export default function DieFace(props){
const face1 = (
<div className={props.isHeld ? `dice first-face-held`:`dice first-face`} >
<span className="dot">
</span>
</div>
)
const face2 = (
<div className={props.isHeld ? `dice second-face-held`:`dice second-face`}>
<span className="dot">
</span>
<span className="dot">
</span>
</div>
)
const face3 = (
<div className={props.isHeld ? `dice third-face-held`:`dice third-face`}>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>
)
const face4 = (
<div className={props.isHeld ? `dice fourth-face-held`:`dice fourth-face`}>
<div className="column">
<span className="dot"></span>
<span className="dot"></span>
</div>
<div className="column">
<span className="dot"></span>
<span className="dot"></span>
</div>
</div>
)
const face5 = (
<div className={props.isHeld ? `dice fifth-face-held`:`dice fifth-face`}>

<div className="column">
<span className="dot"></span>
<span className="dot"></span>
</div>

<div className="column">
<span className="dot"></span>
</div>

<div className="column">
<span className="dot"></span>
<span className="dot"></span>
</div>


</div>
)
const face6 = (
<div className={props.isHeld ? `dice sixth-face-held`:`dice sixth-face`} >
<div className="column">
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>
<div className="column">
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>

</div>
)
 const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
const faceArray =[face1,face2,face3,face4,face5,face6]
    return(
        <div onClick={props.holdDice}
            
            
       > 
             {
                  
                  faceArray[props.value - 1]
                  
             }
           </div>
    )
}