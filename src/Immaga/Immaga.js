import React from "react";
import disney from './disney_immaga';
import pixar from './pixar_immaga';
import ghibli from './ghibli_immaga';

const Immaga = () => {
  var movies = [
  'Nausicaä of the Valley of the Wind',
  'Castle in the Sky',
  'My Neighbor Totoro',
  "Kiki's Delivery Service",
  'Porco Rosso',
  'Princess Mononoke',
  'Spirited Away',
  "Howl's Moving Castle",
  'Ponyo on the Cliff by the Sea',
  'The Wind Rises'
];

function renderDetails(info) {
  var details = []
  var total = 0;
  for(let j in info) {
    let jtem = info[j];
    total += jtem.percent
  }
  for (let e in info) {
    details.push(
        <div key={e + '-detail'} style={{width:  `${info[e].percent/total * 100}%`, height:'20px', backgroundColor: info[e].html_code}}>
        </div>
    )
  }
  return details;
}

function renderColor(data, movies, prop) {
  var colors = [];
  var colorCategories = [];
  for(let i in movies) {
    let movie = movies[i];
    let info = data[movie].colors ? data[movie].colors[prop] : data[movie][prop];
    colorCategories.push(calculateCategory(info));
    colors.push(
      <div className='row pr-3' key={i}>
        <small style={{fontSize: '8px'}}className='col-6'>{movie}</small>
        <div className='col'>
          <div className='row'>
            {renderDetails(info)}
          </div>
        </div>
      </div>
    )
  }
  return colors;
}

function calculateCategory(colors) {
  const reducer = (acc, {closest_palette_color_parent}) => { return (acc[closest_palette_color_parent] = (acc[closest_palette_color_parent] || 0 ) + 1, acc)};
  const result = colors.reduce(reducer, {});
  return result;
}
  return (<div className='section p-4'>
    <div className="row">
      <div className="col">
        Ghilbli
        {renderColor(ghibli, movies, 'image_colors')}
      </div>
      <div className="col">
        Pixar
        {renderColor(pixar, Object.keys(pixar), 'image_colors')}
      </div>
      <div className="col">
        Disney
        {renderColor(disney, Object.keys(disney), 'image_colors')}
      </div>
    </div>
  </div>);
};

export default Immaga;
