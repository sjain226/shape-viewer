import React, { useState, useRef } from 'react';
import LeftMenu from './components/LeftMenu';
import ToolBar from './components/ToolBar';
import Viewport from './components/Viewport';

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [file, setFile] = useState('');
  const [initial, setInitial] = useState([]);

  // Create a reference for the hidden file input
  const fileRef = useRef(null);

  // File selection and reading
  const handleFile = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;
    setFile(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsedShapes = parseFile(text);
      console.log(parsedShapes)
      setInitial(parsedShapes)
      setShapes(parsedShapes);
    };
    reader.readAsText(file);
  };

  const saveAs = () => {
    const newFileName = prompt("Enter the new filename:", "new-file.shapefile");
    if (newFileName) {
      const data = shapes
        .map(
          (shape) =>
            `${shape.type}, ${shape.x}, ${shape.y}, ${shape.zIndex}, ${shape.width}, ${shape.height}, ${shape.color}, ${
              shape.vertix ? shape.vertix.map((v) => v.join(' ')).join(', ') : ''
            }`
        )
        .join('\n');

      const blob = new Blob([data], { type: 'text/plain' });
      if (!blob || blob.size === 0) {
        console.error('Failed to create Blob.');
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = newFileName;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const undo = () => {
    setShapes(initial); // Reset shapes to the initial shapes
  };

  const addShape = () => {
    const type = prompt('Enter shape type (e.g., Rectangle, Polygon):');
    if (!type) return;

    const x = parseInt(prompt('Enter X position:', '0'),10);
    const y = parseInt(prompt('Enter Y position:', '0'),10);
    const width = parseInt(prompt('Enter width:', '0'),10);
    const height = parseInt(prompt('Enter height:', '0'),10);
    const color = prompt('Enter color in hex(e.g., #FF5733):');
    const zIndex = parseInt(prompt('Enter zIndex:', '0'),10);

    if (!type || isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height) || !color || isNaN(zIndex)) {
      alert('Invalid shape details.');
      return;
    }

    // new shape object
    const newShape = {
      type,
      x,
      y,
      width,
      height,
      color,
      zIndex,
      vertix: [], // vertices should be empty or null if the shape is not a polygon
    };

    // Add new shape to the array
    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  // File content into shapes
  const parseFile = (text) => {
    const lines = text.split('\n').filter((line) => line.trim());
    return lines.map((line) => {
      const [type, x, y, zIndex, width, height, color, ...rest] = line.split(', ');
      const shape = {
        type: type.trim(),
        x: parseInt(x.trim(), 10),
        y: parseInt(y.trim(), 10),
        zIndex: parseInt(zIndex.trim(), 10),
        width: parseInt(width.trim(), 10),
        height: parseInt(height.trim(), 10),
        color: `#${color.trim()}`,
      };

      // Parse the vertices if a Polygon
      if (type.trim() === 'Polygon' && rest.length) {
        shape.vertix = rest.join(',') .split(',') .map(point => point.trim().split(' ').map(Number))
        .filter(point => point.length === 2 && !isNaN(point[0]) && !isNaN(point[1])); // Filter out invalid points
      }
      return shape;
    });
  };


  const openFileInput = () => {
    if (fileRef.current) {
      fileRef.current.click(); 
    }
  };

  return (
    <div className="screen">
      <ToolBar filename={file} openFile={openFileInput} />
      <div className="flex">
        <LeftMenu filename={file} openFile={openFileInput}  saveAs={saveAs} undo={undo} addShape={addShape} />
        <Viewport shapes={shapes} setShapes={setShapes} />
      </div>

      <input
        ref={fileRef}
        type="file"
        id="file-input"
        className="hidden"
        onChange={handleFile}
      />
    </div>
  );
};

export default App;
