

function SingleCat({name, latinName, image}) {
    return (
    <li className="list">
        <div>
        <img src={image} alt={name} width={150}/>
        <h1>{name}</h1>
        <div>{latinName}</div>
        </div>
    </li>
    )
}

export default SingleCat