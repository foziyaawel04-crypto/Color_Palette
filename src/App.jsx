import { useState } from 'react';
import ColorButton from './components/ColorButton';
import ColorPreview from './components/ColorPreview';
const COLOR_DATA = [
    { id: 1, name: 'Red', hex: '#FF3B30' },
    { id: 2, name: 'Blue', hex: '#007AFF' },
    { id: 3, name: 'Green', hex: '#34C759' },
    { id: 4, name: 'Yellow', hex: '#f7c913' },
    { id: 5, name: 'Purple', hex: '#AF52DE' },
];
export default function App() {
    const [selectedColor, setSelectedColor] = useState(null);
    return(
     <div className="container">
        <h1>Color Palette Picker</h1>
        <p>Pick a color to preview it below</p>
        <div className="palette">
          <h3>Choose a color:</h3>
          <div className="button-group">
            {COLOR_DATA.map((color) => (
              <ColorButton
                key={color.id}
                color={color}
                isSelected={selectedColor?.id === color.id}
                onClick={() => setSelectedColor(color)}
             />
            ))}
         </div>
      </div>
      <ColorPreview color={selectedColor} />
      <button className="reset-btn" onClick={() => setSelectedColor(null)}>
          🔄 Reset
        </button>
      </div>
  );
}
