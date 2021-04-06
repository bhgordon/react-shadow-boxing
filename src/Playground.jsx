import React from 'react';
import { CompactPicker } from 'react-color';
import { useState } from 'react';
import "./Playground.css";

function Playground({ x, y, blur, spread, opacity, color }) {
  const [boxColor, setBoxColor] = useState("#dedede");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  return <div className="playground">
    <div className="playground-container">

      <div className="box-container"
        style={{ background: `${backgroundColor}`}}
      >
        <div className="box"
          style={{
            boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}`,
            background: `${boxColor}`
          }}
        >
        </div>
      </div>

      <div className="playground-controls-container">
        <div className="app__control">
          <div className="box-color-container">
            <CompactPicker color={boxColor} onChange={e => setBoxColor(e.hex)} />
          </div>
          <div className="background-color-container">
             <CompactPicker color={backgroundColor} onChange={e => setBackgroundColor(e.hex)} />
          </div>
        </div>
      </div>

      <div className="code-output-container">
        <textarea value={`box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};`}></textarea>
      </div>

    </div>
  </div>;
}

export default Playground
