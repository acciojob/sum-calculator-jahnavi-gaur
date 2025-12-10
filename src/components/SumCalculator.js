import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setSum(numbers.reduce((acc, val) => acc + val, 0));
  }, [numbers]);



  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setInputValue(value);
      setNumbers((prev) => [...prev, value]);
    } else {
      setInputValue("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontWeight: "bold" }}>Sum Calculator</h1>

      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        style={{
          padding: "8px",
          width: "200px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      />

      <h3 style={{ marginTop: "20px", fontSize: "20px" }}>
        Sum: {sum}
      </h3>
    </div>
  );
};

export default SumCalculator;
