import React from 'react';

const ToolBar = ({ file, openFile }) => {
  return (
    <div className="w-screen h-10 bg-indigo-500 flex justify-between items-center px-2 text-black">
      <span className="text-lg">Shape Viewer 📐</span>
      {file ? (
        <span className="text-black px-2">{file}</span>
      ) : (
        <button
          className="bg-blue-600 px-4 rounded-full hover:bg-gradient-to-r from-purple-300 via-pink-400 to-red-300 italic transition-all"
          onClick={openFile}
        >
          Open Shape File
        </button>
      )}
    </div>
  );
};

export default ToolBar;
