import React from "react";
import pixar from './pixar_colors';
import disney from './disney_colors';
import ghibli from './ghibli_data';
import { rgb } from "d3";

const GoogleVisionColor = () => {

function renderData(googleData) {
  var colors = [];
  for(let i in googleData) {
    let movie = i;
    let googleVision = googleData[i];
    colors.push(
      <div key={i}>
        <div className='row'>
        <small style={{fontSize: '8px'}}className='col-2'>{movie}</small>
          <div className='col-10'>
            <div className='row'>
              {renderGoogleVisionColor(googleVision)}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return colors;
}



  function renderGoogleVisionColor(googleVision) {
    var colors = [];
    var data = googleVision;
    if(data.poster_path) {
      data = googleVision.colors;
    }
    var total = 0;
    for(let j in data) {
      let jtem = data[j];
      total += jtem.pixelFraction*100
    }
    for(let i in data) {
      let item = data[i];
      colors.push(
        <div key={i} className='p-0 m-0' style={{width: `${item.pixelFraction*100}%`, height: '50px', backgroundColor: rgb(item.color.red, item.color.green, item.color.blue)}}>
        </div>
      )
    }
    return colors
  }

  return (
    <div className='section'>
      <div className='row p-1'>
        {/* <div className='row p-3'> */}
          <div className='col'>
            <h2>Ghibli</h2>
            {renderData(ghibli)}
          {/* </div> */}
        </div>
        {/* <div className='row p-3'> */}
          <div className='col'>
            <h2>Pixar</h2>
            {renderData(pixar)}
          {/* </div>         */}
        </div>
        {/* <div className='row p-3'> */}
          <div className='col'>
            <h2>Disney</h2>
            {renderData(disney)}
          </div>
        {/* </div> */}
      </div>    
    </div>);
};

export default GoogleVisionColor;
