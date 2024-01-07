import React from 'react';
import './UiInput.css';

export default function UiInput({ label, placeholder, inputValue, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="ui-input-container">
      <label className="ui-input-label">{label}</label>
      <div className="ui-input-border">
        <input
          type="text"
          placeholder={placeholder}
          className="ui-input"
          value={inputValue}
          onChange={handleChange}  
        />
      </div>
    </div>
  );
}
