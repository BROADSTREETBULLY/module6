import { useState } from "react";
import SingleCat from "./SingleCat";

const cats = [
  {
    id: "1",
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://transforms.stlzoo.org/production/animals/cheetah-01-01.jpg?w=1200&h=1200&auto=compress%2Cformat&fit=crop&dm=1658942789&s=16e742d7a9628bb93b63a7922179b43e",
  },
  {
    id: "2",
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEks1cgHnZUX-oHGoYRb6MfqoScW2b3Qu11A&s",
  },
  {
    id: "3",
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesJagua.2e16d0ba.fill-375x500.format-webp.webp",
  },
  {
    id: "4",
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIhbTTSrhJkxEGZFNwPQHgsQR-DchH6Lc2Q&s",
  },
  {
    id: "5",
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://i.natgeofe.com/k/116c1914-7405-467c-8d14-cca757564591/photoark-lion.png?wp=1&w=1084.125&h=609",
  },
  {
    id: "6",
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlWtgIPWUUS-TImoAvgXt_wmcA5hrTPnSCQ&s",
  },
  {
    id: "7",
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://i.natgeofe.com/k/60ca05c4-d549-4bfd-a86b-f7e50e68b7a8/photoark-tiger.png?wp=1&w=1084.125&h=609",
  },
];

function BigCatsList() {
const [currentCats, setCurrentCatsList] = useState(cats)

  const catItems = currentCats.map(cat => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ))

  const handleReverseCatsList = () => {
    let newCats = [...currentCats];
    newCats.reverse()
    setCurrentCatsList(newCats);
  }

    const handleAlphaCatsList = () => {
    let newCats = [...currentCats];
      newCats.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCatsList(newCats);
  }

const filterByLatinName = () => {
    const results = cats.filter(cat => cat.latinName.includes("Panthera"));
    setCurrentCatsList(results);
}

const resetCats = () => {
 setCurrentCatsList(cats)
}
  return (
    
    <div>
        <button onClick={handleReverseCatsList}> Reverse List</button>
        <button onClick={handleAlphaCatsList}> Sort Alphabetically</button>
        <button onClick={filterByLatinName}>Show Panthera Family Only</button>
        <button onClick={resetCats}>Reset</button>
      <ul>{ catItems }</ul>
    
    </div>
  );
}

export default BigCatsList;
