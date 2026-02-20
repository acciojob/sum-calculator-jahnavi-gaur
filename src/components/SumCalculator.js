import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  // const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   setSum(numbers.reduce((acc, val) => acc + val, 0));
  // }, [numbers]);

  const handleChange = (e) => {
    const value = Number(e.target.value);

    setInputValue(e.target.value);

    // if (!isNaN(value) && e.target.value !== "") {
    //   setNumbers((prev) => [...prev, value]);
    // }
    setSum(prev=>prev+(value))
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
      />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
