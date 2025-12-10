import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Async sum calculation to keep UI smooth
  useEffect(() => {
    const calculateSum = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // simulate async work
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };

    if (numbers.length > 0) {
      calculateSum();
    }
  }, [numbers]);

  const handleAddNumber = () => {
    const parsedNumber = parseInt(inputValue, 10);
    if (!isNaN(parsedNumber)) {
      setNumbers((prev) => [...prev, parsedNumber]);
    }
    setInputValue("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      <button
        onClick={handleAddNumber}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Add Number
      </button>

      <h3 style={{ marginTop: "20px" }}>Total Sum: {sum}</h3>
    </div>
  );
};

export default SumCalculator;
