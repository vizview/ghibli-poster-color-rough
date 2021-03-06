import React from 'react';
import './App.css';
import GoogleVisionColor from './GoogleVisionColor/GoogleVisionColor';
import Immaga from './Immaga/Immaga';
import ColorCategory from './ColorCategories/ColorCategories'
import HueDisplay from './HueDisplay';
import HSLDisplay from './HSL_Display/HSL_Display';
import YearCompare from './YearCompare/YearCompare';
import FullYearCompare from './FullYearCompare/FullYearCompare';

function App() {
  return (
    <div className="App">
      <h1>Google</h1>
      <GoogleVisionColor />
      <h1 className='pt-5'>Immaga</h1>
      <Immaga />
      <h1 className='pt-5'>Color Category</h1>
      <ColorCategory />
      <h1 className='pt-5'></h1>
      <HueDisplay />
      <h1 className='pt-5'>Sort by HSL</h1>
      <h2>Pure Colors</h2>
      <HSLDisplay showAll={false}/>
      <h2>Show Color from Posters</h2>
      <HSLDisplay showAll={true}/>
      <h2>Compare year</h2>
      <YearCompare showAll={false}/>
      <FullYearCompare />
    </div>
  );
}

export default App;
