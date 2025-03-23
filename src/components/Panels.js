import "./Panel.css";
import React, { useEffect, useRef, useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const Panel = ({
  className = "layout",
  rowHeight = 30,
  cols = 12,
  data = [],
  onLayoutChange = () => {},
}) => {
  const [layout, setLayout] = useState([
    { x: 0, y: 0, w: 4, h: 4, i: "panel", static: false },
  ]);

  const { w, h } = layout[0];

  const calculateFontSize = (w, h) => {
    return Math.max(4, Math.min(32, (w + h) * 2));
  };

  const calculateGridItemSize = (w, h) => {
    return {
      width: `${Math.max(80, w * 20)}px`,
      height: `${Math.max(50, h * 15)}px`,
    };
  };

  const fontSize = calculateFontSize(w, h);

  //   const { width, height } = calculateGridItemSize(w, h);

  return (
    <ReactGridLayout
      layout={layout}
      onLayoutChange={(newLayout) => {
        setLayout(newLayout);
        onLayoutChange(newLayout);
      }}
      rowHeight={rowHeight}
      cols={cols}
      className={className}
      isResizable={true}
      isDraggable={false}
    >
      <div key="panel" className="resizable-container">
        <div className="panel-content">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid-item"
              style={{ fontSize: `${fontSize}px` }}
            >
              <span className="label">{item.label}</span>
              <span className="value">{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </ReactGridLayout>
  );
};

export default Panel;
