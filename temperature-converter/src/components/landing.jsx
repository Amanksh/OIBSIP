import React from "react";
import { useState } from "react";

const landing = () => {
  const [temperature, setTemperature] = useState(null);
  const [convertedUnit, setConvertedUnit] = useState(null);
  const [unit, setUnit] = useState("celsius");
  const convertUnit = () => {
    if (unit === "celsius") {
      let value = (temperature * 9) / 5 + 32;

      setConvertedUnit(`${value} F`);
    } else if (unit === "fahrenheit") {
      let value = ((temperature - 32) * 5) / 9;

      setConvertedUnit(`${value} C`);
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg mx-auto">
      <h1 className="font-bold text-center mb-6 text-2xl">
        Temperature Converter
      </h1>
      <div className="flex gap-5">
        <input
          type="number"
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Input"
          className="bg-gray-200 p-3 rounded-lg"
        />
        <select
          name="temperature"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fehrenheit</option>
        </select>
      </div>

      <div className="flex flex-row gap-2">
        <button
          className="bg-[#0000FF] text-white hover:text-black grow hover:bg-[#ff4400] text-2xl block  mt-5 p-3 rounded-lg font-bold mx-auto"
          onClick={convertUnit}
        >
          Convert
        </button>
        {/* <button
          className="bg-[#00007f] text-white hover:text-black hover:bg-[#ff4400] text-2xl block  mt-5 p-3 rounded-lg font-bold mx-auto"
          onClick={Reset}
        >
          Reset
        </button> */}
      </div>
      {convertedUnit && (
        <h1 className="text-3xl font-bold text-center mt-5">{convertedUnit}</h1>
      )}
    </div>
  );
};

export default landing;
