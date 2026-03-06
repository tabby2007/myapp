import { useState } from "react"

const Sixthcomponent =()=>{

    const[weight,setnumber]=useState("50kgs");
    return(
        <div className="Sixthcomponent">
            <h1>This is my sixth component</h1>
            <h4>The current weight is:{weight}</h4>
            <button onClick={()=>setnumber("55kgs")}>Click to update weight</button>
        </div>
    )
}
export default Sixthcomponent;