import React from 'react';

const LeftMenu = ({ openFile, saveAs, undo, addShape }) => {
  return (
    <div className="h-screen bg-indigo-900 p-6 border-r border-gray-200">
      <button
        onClick={openFile}
        className="bg-blue-600 px-4 rounded-full hover:bg-gradient-to-r from-purple-300 via-pink-400 to-red-300 transition-all italic"
      >
        Open Shape File
      </button>
      <br/>
      <button
        onClick={saveAs}
        className="bg-purple-600 px-4 mt-4 rounded-full  hover:bg-gradient-to-r from-yellow-300 via-orange-400 to-red-300 transition-all italic"
      >
        Save As 📥
      </button>
      <br/>
      <button
        onClick={undo}
        className="bg-purple-600 px-4 mt-4 rounded-full  hover:bg-gradient-to-r from-yellow-300 via-orange-400 to-red-300 transition-all italic"
      >
        Undo All 🔄
      </button>
      <br/>
      <button
        onClick={addShape}
        className="bg-purple-600 px-4 mt-4 rounded-full  hover:bg-gradient-to-r from-yellow-300 via-orange-400 to-red-300 transition-all italic"
      >
       Create New Shape ➕
      </button>
      <input
        id="file-input"
        type="file"
        accept=".shapefile"
        className="hidden"
        onChange={openFile}
      />
    </div>
  );
};

export default LeftMenu;
