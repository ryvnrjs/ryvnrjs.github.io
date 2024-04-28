import React, { useState, useEffect } from 'react';
import './AnimationBackground.scss';

function ShapeContainer({ index }) {
  return (
    <div className={`shape-container--${index} shape-animation`}>
      <div className="random-shape"></div>
    </div>
  );
}

function AnimationBackground() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    // Create an array of shape indices (from 1 to 50)
    const shapeArray = Array.from({ length: 30 }, (_, i) => i + 1);
    setShapes(shapeArray);
  }, []);

  return (
    <div className="shape">
      {shapes.map((index) => (
        <ShapeContainer key={index} index={index} />
      ))}
    </div>
  );
}

export default AnimationBackground;
