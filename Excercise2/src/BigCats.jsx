import SingleCat from "./SingleCat";


const cats = [
  { id: '1', name: "Cheetah", latinName: "Acinonyx jubatus" },
  { id: '2', name: "Cougar", latinName: "Puma concolor" },
  { id: '3', name: "Jaguar", latinName: "Panthera onca" },
  { id: '4', name: "Leopard", latinName: "Panthera pardus" },
  { id: '5', name: "Lion", latinName: "Panthera leo" },
  { id: '6', name: "Snow leopard", latinName: "Panthera uncia" },
  { id: '7', name: "Tiger", latinName: "Panthera tigris" },
];

function BigCatsList() {
return(
    <div className="BigCatsList componentBox">
        <ul>
            { cats.map(cat => (
                <SingleCat
                key={cat.id}
                name={cat.name}
                latinName={cat.latinName}
                image={cat.image}
                />
            ))}
        </ul>
    </div>
);

}

export default BigCatsList;