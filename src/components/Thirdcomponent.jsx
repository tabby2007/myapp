const Thirdcomponent = ()=>{
    //variables help us to create dynamic websites.(It means the content of the website will be changing automatically with time)
    //Below we declare some variables. Note: Variables are usually declared just before the return statement in ReactJs

    let name = "Tabby";
    let age = 22;
    let message = "I love programming";

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* Below we bind our variables. We use the variable names we had declared before */}
            <h5>My name is:{name}</h5>
            <h5>My age is:{age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;