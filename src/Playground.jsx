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
        <div className="playground__controls">

         <div className="playground__control">
           <div className="slider-container">
             <label className="label" htmlFor="label">box color</label>
             <div className="box-color-container">
               <button
                 className="color-btn"
                 onClick={() => setShowBoxColorPicker(showBoxColorPicker = !showBoxColorPicker)}
                 style={{background: `${boxColor}`}}
               >
               </button>
               {showBoxColorPicker && (
                 <ChromePicker
                   className="chrome-picker-palette"
                   color={boxColor}
                   onChange={e => setBoxColor(e.hex)}
                 />
               )}
             </div>
           </div>
           <div className="value-container">
             <p>{boxColor}</p>
           </div>
         </div>

        <div className="playground__control">
         <div className="slider-container">
           <label className="label" htmlFor="label">background color</label>
           <div className="box-color-container">
             <button
               className="color-btn"
               onClick={() => setShowBackgroundColorPicker(showBackgroundColorPicker = !showBackgroundColorPicker)}
               style={{background: `${backgroundColor}`}}
             >
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
         <div className="value-container">
           <p>{backgroundColor}</p>
         </div>
       </div>

        </div>
      </div>

      <div className="code-output-container">
        <p>{`box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};`}</p>
      </div>

    </div>
  </div>;
}

export default Playground
