import React from 'react';
import './App.css';
import GoogleVisionColor from './GoogleVisionColor/GoogleVisionColor';
import Immaga from './Immaga/Immaga';
import ColorCategory from './ColorCategories/ColorCategories'
function App() {
  return (
    <div className="App">
      <h1>Google</h1>
      <GoogleVisionColor />
      <h1 className='pt-5'>Immaga</h1>
      <Immaga />
      <h1 className='pt-5'>Color Category</h1>
      <ColorCategory />
    </div>
  );
}

export default App;
