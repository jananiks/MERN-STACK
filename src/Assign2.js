import React, { useState } from 'react';
import './App.css';


function Assign() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    if (name) {
      fetch(`https://api.agify.io/?name=${name}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      console.error('Name input is empty');
    }
  };

  return (
    <div className="Assign2-container">
      <input 
        type="text" 
        className="input-box" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter a name" 
      />
      
      <button 
        className="submit-button" 
        onClick={handleButtonClick}
      >
        Get Meaning
      </button>
    
      
    </div>
  );
}

export default Assign;