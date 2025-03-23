import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

const DataPanel = ({ data }) => {
  const [panelSize, setPanelSize] = useState({ width: 600, height: 200 });

  const getFontSize = () => {
    const baseSize = Math.min(panelSize.width, panelSize.height) / 10;
    return Math.min(32, Math.max(12, baseSize));
  };

  const onResizeStop = (_, __, newItem) => {
    if (newItem.i === "inner-panel") {
      setPanelSize({
        width: newItem.w * 100,
        height: newItem.h * 100,
      });
    }
  };

  // Layout configuration
  const layout = [{ i: "inner-panel", x: 0, y: 0, w: 3, h: 2, static: false }];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={6}
      rowHeight={100}
      width={600}
      onResizeStop={onResizeStop}
      draggableHandle=".drag-handle"
    >
      <div key="inner-panel" className="resizable-panel">
        <div className="drag-handle">Drag Here</div>
        <div className="inner-content">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid-item"
              style={{ fontSize: `${getFontSize()}px` }}
            >
              <span className="label">{item.label}</span>
              <span className="value">{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </GridLayout>
  );
};

export default DataPanel;
