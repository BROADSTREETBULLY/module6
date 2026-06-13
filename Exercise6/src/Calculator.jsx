import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("plus");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(num1) || isNaN(num2)) {
      setResult("ERROR.");
      return;
    }

    if (operator === "plus") {
      setResult(num1 + num2);
    } else if (operator === "minus") {
      setResult(num1 - num2);
    } else if (operator === "multiply") {
      setResult(num1 * num2);
    } else if (operator === "divide") {
      if (num2 === 0) {
        setResult("ERROR.");
        return;
      }
      setResult(num1 / num2);
    }

  };


return (
  <div>
    <form>
      <label>
        {" "}
        Number 1: <input name="Num1" value={num1} onChange={(e) => setNum1(Number(e.target.value))}/>
      </label>
      <label> Operator: </label>
      <select id="operator" value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="plus">Plus</option>
        <option value="minus">Minus</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <label>
        {" "}
        Number 2: <input name="Num2" value={num2} onChange={(e) => setNum2( Number(e.target.value))}/>{" "}
      </label>
      <button onClick={ handleSubmit }>Calculate</button>
      <p>Equals:{" "}{result}</p>
    </form>
  </div>
);
}
export default Calculator;
