import { Slider } from "@material-ui/core";
import { useState } from "react";
import { ChromePicker } from "react-color";
import './App.css';
import Playground from "./Playground";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000')
  let [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div className="app">
      <Playground x={x} y={y} blur={blur} spread={spread} color={color}/>
      <div className="app__controls">
        <div className="app__controlsContainer">

          <div className="app__control">
            <div className="slider-container">
              <label className="label" htmlFor="label">x-offset</label>
              <Slider
                min={-50}
                max={50}
                value={x}
                onChange={(event, val) => setX(val)}
                style={{marginLeft: 10, marginRight: 10}}
              />
            </div>
            <div className="value-container">
              <input
                type="text"
                value={x}
                style={{width: 50}}
              />
            </div>
          </div>

          <div className="app__control">
            <div className="slider-container">
              <label className="label" htmlFor="label">y-offset</label>
              <Slider
                min={-50}
                max={50}
                value={y}
                onChange={(event, val) => setY(val)}
                style={{marginLeft: 10, marginRight: 10}}
              />
            </div>
            <div className="value-container">
              <input
                type="text"
                value={y}
                style={{width: 50}}
              />
            </div>
          </div>

          <div className="app__control">
            <div className="slider-container">
              <label className="label" htmlFor="label">blur</label>
              <Slider
                min={0}
                max={50}
                value={blur}
                onChange={(event, val) => setBlur(val)}
                style={{marginLeft: 10, marginRight: 10}}
              />
            </div>
            <div className="value-container">
              <input
                type="text"
                value={blur}
                style={{width: 50}}
              />
            </div>
          </div>

          <div className="app__control">
            <div className="slider-container">
              <label className="label" htmlFor="label">spread</label>
              <Slider
                min={0}
                max={30}
                value={spread}
                onChange={(event, val) => setSpread(val)}
                style={{marginLeft: 10, marginRight: 10}}
              />
            </div>
            <div className="value-container">
              <input
                type="text"
                value={spread}
                style={{width: 50}}
              />
            </div>
          </div>

          <div className="app__control">
            <div className="slider-container">
              <label className="label" htmlFor="label">shadow color</label>
              <div className="box-color-container">
                <button
                  className="color-btn"
                  onClick={() => setShowColorPicker(showColorPicker = !showColorPicker)}
                  style={{background: `${color}`}}
                >
                </button>
                {showColorPicker && (
                  <ChromePicker
                    className="chrome-picker-palette"
                    color={color}
                    onChange={e => setColor(e.hex)}
                  />
                )}
              </div>
            </div>
            <div className="value-container">
              <p>{color}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
