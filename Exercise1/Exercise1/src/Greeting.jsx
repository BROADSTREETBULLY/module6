function Greeting({name='World', children}){

    return(
        <div>
            <h1>Hello {name}</h1>
            <p>{children}</p>
        </div>
    )

}

export default Greeting;