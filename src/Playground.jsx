import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import "./Playground.css";

function Playground({ x, y, blur, spread, opacity, color }) {
  const [boxColor, setBoxColor] = useState("#dedede");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  let [showBoxColorPicker, setShowBoxColorPicker] = useState(false);
  let [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);

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
        <div className="playground__control">


          <div className="box-color-container">
            <button
              onClick={() => setShowBoxColorPicker(showBoxColorPicker = !showBoxColorPicker)}
              // onBlur={() => setShowBoxColorPicker(showBoxColorPicker = !showBoxColorPicker)}
            >
              {showBoxColorPicker ? 'set box color' : 'choose box color'}
            </button>
            {showBoxColorPicker && (
              <ChromePicker
                className="chrome-picker-palette"
                color={boxColor}
                onChange={e => setBoxColor(e.hex)}
              />
            )}
          </div>

          <div className="box-color-container">
            <button
              onClick={() => setShowBackgroundColorPicker(showBackgroundColorPicker = !showBackgroundColorPicker)}
            >
              {showBackgroundColorPicker ? 'set background color' : 'choose background color'}
            </button>
            {showBackgroundColorPicker && (
              <ChromePicker
                className="chrome-picker-palette"
                color={backgroundColor}
                onChange={e => setBackgroundColor(e.hex)}
              />
            )}
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
