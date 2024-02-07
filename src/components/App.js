import React from 'react';
import '../App.css'; // Import CSS styles for the entire app (optional)
import Header from './Header';
import Intro from './Intro';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>

      {/* Main Content */}
      <main>
        <p>This is the main content of my app.</p>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
