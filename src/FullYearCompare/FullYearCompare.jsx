import React from "react";
import disney from './disney-hsl-between-year';
import ghibli from './ghibli-hsl-between-year';
import pixar from './pixar-hsl-between-year';


export default function FullYearCompare({showAll}) {    
    function renderColors(data, display, showAll) {
        var theData = data;
        if(display=='light') {
            theData = data.sort(function(a, b) { 
                return parseFloat(a[2]) - parseFloat(b[2]); });
        } else if (display == 'sat') {
            theData = data.sort(function(a, b) { 
                return parseFloat(a[1]) - parseFloat(b[1]); });
        }else if (display == 'hue') {
            theData = data.sort(function(a, b) { 
                return parseFloat(a[0]) - parseFloat(b[0]); });
        } 
        var list = [];
        for (let i in theData) {
            let color = theData[i];
            var bg = `hsl(${color[0]}, ${color[1]*100}%, ${color[2]*100}%)`;
            if (showAll) {
                bg = `hsl(${color[0]}, ${color[1]*100}%, ${color[2]*100}%)`;
            } else if (display == 'hue') {
               bg =  `hsl(${color[0]}, 100%, 50%)`;
            } else if(display=='light'){
                bg = `hsl(0, 0%, ${color[2]*100}%)`;
            } else if(display=='sat'){
                bg = `hsl(0, ${color[1]*100}%, 50%)`;
            }
            let width = 1100/data.length;
            list.push(
                <div
                    key={i}
                    style={{width: width+'px', height: '50px', backgroundColor: bg}}>
                </div>
            )
        }
        return list
    }
    return(
        <div className="container">
            <div
                style={{width: '20px', height: '50px', backgroundColor: 'hsl(228.2142857142857, 87.5%, 12.549019607843137%'}}>
            </div>         
           <div className="row pb-3">
                <div className="col">
                    Ghibli
                    <div className='row'>
                        {renderColors(ghibli, 'all', showAll)}
                    </div>
                    Pixar
                    <div className='row'>
                        {renderColors(pixar, 'all',showAll)}
                    </div>     
                    Disney
                    <div className='row'>
                        {renderColors(disney, 'all',showAll)}
                    </div>
                </div>
            </div>
            <h2>HUE</h2>
            <div className="row pb-3">
                <div className="col">
                    Ghibli
                    <div className='row'>
                        {renderColors(ghibli, 'hue', showAll)}
                    </div>
                    Pixar
                    <div className='row'>
                        {renderColors(pixar, 'hue',showAll)}
                    </div>     
                    Disney
                    <div className='row'>
                        {renderColors(disney, 'hue',showAll)}
                    </div>
                </div>
            </div>
            <h2>LIGHTNESS</h2>
            <div className="row pb-5">
                <div className="col">
                    Ghibli
                    <div className='row'>
                        {renderColors(ghibli, 'light',showAll)}
                    </div>
                    Pixar
                    <div className='row'>
                        {renderColors(pixar, 'light',showAll)}
                    </div>     
                    Disney
                    <div className='row'>
                        {renderColors(disney, 'light',showAll)}
                    </div>
                </div>
            </div>
            <h2>SATUATION</h2>
             <div className="row pb-5">
                <div className="col">
                    Ghibli
                    <div className='row'>
                        {renderColors(ghibli, 'sat',showAll)}
                    </div>
                    Pixar
                    <div className='row'>
                        {renderColors(pixar, 'sat',showAll)}
                    </div>     
                    Disney
                    <div className='row'>
                        {renderColors(disney, 'sat',showAll)}
                    </div>
                </div>
            </div>
        </div>
    )
}