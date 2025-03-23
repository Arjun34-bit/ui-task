import React from "react";
import Panel from "./components/Panels";
import "./App.css";

const App = () => {
  const singleSeriesData = [{ label: "Single Label", value: 1234.56 }];
  const multiSeriesData = [
    { label: "Label 1", value: 100 },
    { label: "Label 2", value: 200 },
    { label: "Label 3", value: 300 },
    { label: "Label 4", value: 400 },
    { label: "Label 5", value: 500 },
    { label: "Label 6", value: 600 },
  ];
  return (
    <div className="gaps">
      <h1>Responsive Grid</h1>
      <Panel data={singleSeriesData} />
      <Panel data={multiSeriesData} />
    </div>
  );
};

export default App;
