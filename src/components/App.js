import React from 'react';
import '../styles/App.css'; // Import CSS styles for the entire app (optional)
import Header from './main/Header';
import Intro from './main/Intro';
import Carousel from './Carousel/Carousel';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/index.ts';


const App =() => {
  
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
      <Header />
      <Intro />
      <Carousel/>
      
      
      {/* Main Content */}
      <main>
        <p>This is the main content of my app.</p>
      </main>
      
      {/* Footer */}
      <footer> 
        <p>&copy; 2024 My React App</p>
      </footer>
      </ChakraProvider>
    </div>
  );
}

export default App;
