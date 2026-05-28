import BigCatsList from "./BigCats";

function SingleCat({ name, latinName, image, id, onRemove }) {
  return (
    <li className="list">
      <div>
        <img src={image} alt={name} width={150} />
        <h1>{name}</h1>
        <div>{latinName}</div>
        <button onClick={() => onRemove(id)}>Remove Cat</button>
      </div>
    </li>
  );
}

export default SingleCat;
