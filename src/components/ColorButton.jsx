import React from 'react';

export default function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      className={`color-btn ${isSelected ? 'active' : ''}`}
      style={{ backgroundColor: color.hex }}
      onClick={onClick}
    >
      {color.name} {isSelected && '✓'}
    </button>
  );
}
