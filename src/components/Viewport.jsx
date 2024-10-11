import React from 'react';
import { useState} from 'react';

const Viewport = ({ shapes, setShapes }) => {
  const [drag, setDrag] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, index) => {
    setCurrentIndex(index);
    setOffset({
      x: e.clientX - shapes[index].x,
      y: e.clientY - shapes[index].y,
    });
    setDrag(true);
  };

  const handleMouseMove = (e) => {
    if (!drag || currentIndex === null) return;

    // Prevent default behavior to avoid text selection or other unwanted interactions
    e.preventDefault();

    const updatedShapes = [...shapes];
    const shape = updatedShapes[currentIndex];

    // Calculate the new x and y positions, ensuring they are within the viewport
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    // Update the shape's position without causing a re-render flicker
    updatedShapes[currentIndex] = {
      ...shape,
      x: newX,
      y: newY,
    };

    setShapes(updatedShapes);
  };

  const handleMouseUp = () => {
    setDrag(false);
    setCurrentIndex(null);
  };

  return (
    <div className="relative flex-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" 
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        // Limit the viewport width and height
        maxWidth: '100vw - 100px', 
        maxHeight: '100vh - 100px', 
        overflow: 'hidden', 
        position: 'relative',
      }}>
      {shapes.map((shape, index) => {
        // Initialize clipPath as 'none' by default
        let clipPath = 'none';

        // Check if shape is a Polygon and points is an array
        if (shape.type === 'Polygon' && Array.isArray(shape.vertix)) {
          const vertices = shape.vertix
            .map(([x, y]) => {
              const xPercent = (x / shape.width) * 100;
              const yPercent = (y / shape.height) * 100;
              return `${xPercent}% ${yPercent}%`; // Convert points to CSS clip-path format
            }).join(', ');
          clipPath = `polygon(${vertices})`;
        }

        return (
          <div
            key={index}
            className="absolute bg-cover"
            style={{
              left: `${shape.x}px`,
              top: `${shape.y}px`,
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              zIndex: shape.zIndex,
              backgroundColor: shape.color.split(";")[0], // Set the background color
              border: "1px solid black",
              clipPath: clipPath, // Apply the dynamically created clipPath
            }}
            onMouseDown={(e) => handleMouseDown(e, index)}
          ></div>
        );
      })}
    </div>
  );
};

export default Viewport;
