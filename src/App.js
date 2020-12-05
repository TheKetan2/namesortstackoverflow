import React, { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState([
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic" },
    { name: "Zeros", value: 37 }
  ]);

  const sorting = () => {
    const data = [...state];
    data.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    console.log(data);
    setState(data);
  };

  useEffect(() => {
    sorting();
  }, []);

  return (
    <div className="App">
      <table>
        <tr>
          <th>Firstname</th>
          <th>data</th>
        </tr>
        {state.map(i => {
          return (
            <tr key={i.name}>
              <td>{i.name}</td>
              <td>{i.value}</td>
            </tr>
          );
        })}
      </table>
      <button onClick={sorting}>sort</button>
    </div>
  );
}
