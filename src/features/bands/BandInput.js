
import React, { useState } from 'react';

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('');
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onBandSubmit(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button type="submit">add band</button>
    </form>
  );
  }
export default BandInput;
