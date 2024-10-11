# Shape Viewer Application

This project is a **Shape Viewer Application** built with React and designed to be run and developed in **Visual Studio Code (VSCode)**. The application allows users to load, view, create, edit, and save shapes while supporting drag-and-drop functionality for manipulating shapes within a viewport for enhanced interactivity.

## Table of Contents
1. [Features](#features)
2. [Bonus Features](#bonus-features)
3. [Installation and Setup](#installation-and-setup)
4. [Running the Application](#running-the-application)
5. [Testing the Application](#testing-the-application)
6. [Usage](#usage)
7. [Recommended VSCode Extensions](#recommended-vscode-extensions)



## Features

### 1. Shape File Loading and Parsing
- Users can open shape files using the `Open Shape File` button in the top toolbar or left menu.
- The application reads and parses `.shapefile` files and displays the shapes in the viewport.

### 2. Shape Viewing and Translation
- The application displays various shapes such as rectangles and polygons in the viewport as described in the `.shapefile`.

## Bonus Features

### 1. Shape Creation
- Users can create new shapes using the `Create New Shape` button in the left menu.
- The application prompts the user to enter shape properties, including:
  - **Shape Type**: Rectangle or Polygon
  - **Position (`x`, `y`)**.
  - **Size (`width`, `height`)**.
  - **Color**: Hexadecimal format (e.g., `#FF5733`).
  - **zIndex**: Layer position of the shape relative 
  to other shapes.
  - **vertices**: Vertices of polygon [if shape is Polygon]
- The new shape is added to the viewport dynamically.

### 2. Shape Translation
- Shapes can be dragged and dropped (translated) within the viewport.
- Drag-and-drop is implemented. (Using `react-beautiful-dnd` library would've been ideal but since the `.shapefile` file description given in the project document did not support a unique id reference, I did not use the library)
- Users can drag the shapes within the viewport and not beyond it. If dragged beyond viewport, it will be hidden halfway behind the top tool bar or left menu, but not be completely overshadowed by the toolbar or left menu.

### 3. Save As with New Filename
- Save the current shape configuration with a new name using the `Save As` button on the left menu.
- A `.shapefile` is downloaded with the name specified by the user on their local machine.

### 4. Undo All to Initial State
- The `Undo All` button restores the initial state of the application which existed when the `.shapefile` was first imported.
- This reverts the shapes and properties to the state they were in after the first file load or initial app state.

## Installation and Setup

### Prerequisites
- **Node.js** and **npm** or **yarn** installed on your machine.
- **Visual Studio Code** installed.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sjain226/shape-viewer.git
   cd shape-viewer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
   > **Note**: If you run into vulnerabilties issue, run `npm audit fix`. `npm audit` will give you an audit report to debug your vulnerabilities issues.

3. **Open the Project in VSCode**:
   - Open VSCode.
   - Go to `File` > `Open Folder` and select the `shape-viewer` project directory.

## Running the Application

1. **Start the Development Server**:
   After installing the dependencies, run the following command to start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   This will start the application and open it in your default browser at `http://localhost:3000`.

## Testing the Application

1. **Manual Testing**:
   - Open the application and test various features such as:
     - Loading a shape file either through top toolbar or left menu.
     - Dragging and dropping shapes.
     - Creating new shapes.
     - Saving the shape file.
     - Undoing all changes.

2. **Edge Cases**:
   - Test with invalid shape properties to see if the application handles errors correctly.
   - Try dragging shapes outside the viewport to ensure boundary restrictions are applied as described above.

## Usage

1. **Loading Shapes**:
   - Use the `Open Shape File` button to load shapes into the viewport.

2. **Creating Shapes**:
   - Use the `Create New Shape` button in the left menu to create custom shapes with specified properties.

3. **Drag-and-Drop**:
   - Click and drag shapes within the viewport. They will stay within the defined boundaries.

4. **Undo and Save**:
   - Use the `Undo All` button to revert to the initial state.
   - Use the `Save As` button to download the shape configuration.

## Recommended VSCode Extensions

To enhance your development experience in VSCode, install the following extensions:

1. **ESLint**:  
   [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  
   Helps in identifying and fixing code quality issues in JavaScript and React code.

2. **Prettier - Code Formatter**:  
   [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
   Formats your code automatically for consistency.

3. **ES7+ React/Redux/GraphQL/React-Native Snippets**:  
   [dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)  
   Provides useful snippets for React development, including component templates and hooks.

4. **Code Spell Checker**:  
   [streetsidesoftware.code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
   Catches spelling mistakes in your code and comments.

## References
- https://stackoverflow.com/questions/25547475/save-to-local-file-from-blob
- https://emojidb.org/add-emojis?utm_source=user_search [for emojis]
- https://medium.com/nerd-for-tech/simple-drag-and-drop-in-react-without-an-external-library-ebf1c1b809e
- https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
- Geeks for geeks
- Stack Overflow