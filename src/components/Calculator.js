import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [overwrite, setOverwrite] = useState(true);
  const [result, setResult] = useState(null);

  const handleClear = () => {
    setInput("0");
    setResult(null);
    setOverwrite(true);
  };

  const handleNumber = (value) => {
    if (overwrite) {
      setInput(value);
      setOverwrite(false);
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const handleOperator = (operator) => {
    if (result !== null) {
      setInput(result + operator);
      setResult(null); // Reset result sau khi bắt đầu phép toán mới
    } else if (/[+\-*/]$/.test(input)) {
      if (operator === "-" && !/[+\-*/]{2}$/.test(input)) {
        setInput((prev) => prev + operator);
      } else {
        setInput((prev) => prev.replace(/[+\-*/]+$/, operator));
      }
    } else {
      setInput((prev) => prev + operator);
    }

    setOverwrite(false);
  };

  const handleDecimal = () => {
    const lastNumber = input.split(/[+\-*/]/).pop();
    if (!lastNumber.includes(".")) {
      setInput((prev) => prev + ".");
      setOverwrite(false);
    }
  };

  const handleEquals = () => {
    try {
      const result = eval(input).toString();
      setInput(result);
      setResult(result); // Lưu kết quả vào state để thực hiện phép toán mới
      setOverwrite(true);
    } catch {
      setInput("Error");
      setOverwrite(true);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <div className="buttons">
        <Button id="clear" value="AC" onClick={handleClear} />
        <Button id="divide" value="/" onClick={() => handleOperator("/")} />
        <Button id="multiply" value="*" onClick={() => handleOperator("*")} />
        <Button id="subtract" value="-" onClick={() => handleOperator("-")} />
        <Button id="add" value="+" onClick={() => handleOperator("+")} />
        <Button id="decimal" value="." onClick={handleDecimal} />
        {[...Array(10).keys()].reverse().map((num) => (
          <Button
            key={num}
            id={
              ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][num]
            }
            value={num.toString()}
            onClick={() => handleNumber(num.toString())}
          />
        ))}
        <Button id="equals" value="=" onClick={handleEquals} />
      </div>
    </div>
  );
};

export default Calculator;