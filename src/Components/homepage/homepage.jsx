import React, { useState } from 'react';

function Homepage() {
  const [result, setResult] = useState('');
  const [berlinPosition, setBerlinPosition] = useState({ top: '0px', left: '150px' });

  const handleAnswer = (answer) => {
    setResult(`Come meet me tomorrow`);
  };

  const handleAnswers = (answer) => {
    
  };

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 400) + 'px';
    const randomLeft = Math.floor(Math.random() * 400) + 'px';
    setBerlinPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative', height: '500px' }}>
      <h1>Wanna go on jhula jhulne with me?</h1>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onMouseEnter={moveButton}
          onClick={() => handleAnswers('Berlin')}
          style={{ ...buttonStyle, position: 'absolute', top: berlinPosition.top, left: berlinPosition.left }}
        >
          No
        </button>
        <button onClick={() => handleAnswer('Paris')} style={{ ...buttonStyle, position: 'relative', left: '0px' }}>
          Yes
        </button>
      </div>
      <p>{result}</p>
    </div>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Homepage;
