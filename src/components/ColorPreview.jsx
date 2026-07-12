import React from 'react';

export default function ColorPreview({ color }) {
  return (
    <div className="preview-section">
      <h3>Preview:</h3>
      <div 
        className={`preview-box ${!color ? 'empty' : ''}`}
        style={{ backgroundColor: color ? color.hex : 'transparent' }}
      >
        {!color && <span className="icon">🎨</span>}
      </div>
      <p className="color-status">
        Selected Color: {color ? (
          <span style={{ color: color.hex, fontWeight: 'bold' }}>{color.name}</span>
        ) : (
          'No color selected yet'
        )}
      </p>
    </div>
  );
}
