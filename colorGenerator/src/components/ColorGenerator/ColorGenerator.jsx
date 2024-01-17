import { useEffect, useState } from "react";
import "./ColorGenerator.css";

const ColorGenerator = () => {
  const [color, setColor] = useState("#ffffff");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  // Generate Random Number
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 256);
  };
  // Generate RGB Color
  const generateRGBColor = () => {
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);

    const r = generateRandomNumber();
    const g = generateRandomNumber();
    const b = generateRandomNumber();

    return `rgb(${r}, ${g}, ${b})`;
  };
  // Generate HEX Color
  const generateHexColor = () => {
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);

    const r = generateRandomNumber();
    const g = generateRandomNumber();
    const b = generateRandomNumber();

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  // Generate Random Color
  const generateRandomColor = () => {
    if (typeOfColor === "hex") {
      return generateHexColor();
    } else if (typeOfColor === "rgb") {
      return generateRGBColor();
    }
  };

  // copy color code
  const copyColor = () => {
    navigator.clipboard.writeText(color);
    alert("Color Copied");
  };

  useEffect(() => {
    setColor(generateRandomColor());
  }, [typeOfColor]);

  return (
    <div>
      <div style={{ backgroundColor: color, height: "70vh" }}>
        <button onClick={() => setTypeOfColor("hex")}>
          Generate HEX color
        </button>
        <button onClick={() => setTypeOfColor("rgb")}>
          Generate RGB color
        </button>
        <button onClick={() => setColor(generateRandomColor())}>
          Generate New color
        </button>
        <h3>Click to generate color</h3>
        <button onClick={copyColor}>Copy Color</button>
        {color}
      </div>
    </div>
  );
};

export default ColorGenerator;
