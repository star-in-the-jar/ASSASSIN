import React from 'react';
import './UiInput.css';

export default function UiInput({ label, placeholder }) {
  return (
    <div className="ui-input-container">
      <label className="ui-input-label">{label}</label>
      <div className="ui-input-border">
        <input type="text" placeholder={placeholder} className="ui-input" />
      </div>
    </div>
  );
}
