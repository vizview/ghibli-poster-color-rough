import React from "react";
import disney from './disney-category';
import pixar from './pixar-category';
import ghibli from './ghibli-category';
import color_names from './color_code';
export default function ColorCategory() {

    function renderCategories(data) {
        var details = []
        
        for (let item in data) {
            let colorName = data[item].color;
            let colorCode = color_names[colorName];
            details.push(
            <div key={item + '-detail'} style={{width: '20vw', height:`${data[item].percentage * 10}px`, backgroundColor: colorCode}}>
            {colorName}
            </div>
            )
        }
        return details;
    }
    
    return(
        <div className='row'>
            Ghibli
            <div className='col'>
                {renderCategories(ghibli)}
            </div>
            Pixar
            <div className='col'>
                {renderCategories(pixar)}
            </div>   
            Disney         
            <div className='col'>
                {renderCategories(disney)}
            </div>
        </div>
    );

}