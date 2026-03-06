import { useState } from "react";

const Fifthcomponent = ()=>{

    //The useState()hook enables us to create dynamic websites whereby it usually has a start/initial state followed by state that gets shown when some effects happen on our websites.

    const [number,setnumber] = useState(10);
    return(
        <div className="Fifthcomponent">
            {/* Below we bind our value for a number */}
            <h1>Welcome to my fifth component</h1>

            <h2>Current number is:{number}</h2>

            {/* Call the setnumber function to update the number after a click effect */}
            <button onClick={()=> setnumber(20)}>Click to update the Number</button>
            
        </div>
    )
}

export default Fifthcomponent;