import React from "react";
import disney from './disney_year_color_hsl';
import ghibli from './ghibli_year_color_hsl';


export default function YearCompare({showAll}) {
    const years = [
        1984,
        1986,
        1988,
        1989,
        1992,
        1997,
        2001,
        2004,
        2008,
        2013,
    ]
    
    function renderTableContent(data1, data2) {
        var result = [];
        for(let i in years) {
            var content = years[i];
            if(years[i] == 1984) {
                content = '1984/1985'
            }
            result.push(
                <tr key={years[i]+'-tr'}>
                    <th scope="row">{content}</th>
                    {renderItem(data1, years[i], 'ghibli')}
                    {renderItem(data2, years[i], 'disney')}
                </tr>
            )
        }
        return result
    }

    function renderItem(data, year, dataName){
        var theYear = year;
        if(dataName == 'disney' && year == 1984) {
            theYear=1985
        }
        var result = [];
        const filtered = Object.keys(data).filter(movie => parseInt(data[movie].year) === theYear);
        result.push(
            <td key={theYear + 'list'}>
                {renderColorList(data, filtered)}
            </td>
        )
        return result
    }

    function renderColorList(data, movieList) {
        var result = [];
        for (let i in movieList) {
            let colors = data[movieList[i]]['colors'];
            result.push(
                <div key={movieList[i]}>
                    <div>{movieList[i]}</div>
                    <div className='row'>
                        {renderColors(colors, 'hue', true)}
                    </div>
                    <div className='row pb-5'>
                        {renderColors(colors, 'hue', showAll)}
                    </div>
                    <div className='row'>
                        {renderColors(colors, 'light', showAll)}
                    </div>
                    <div className='row'>
                        {renderColors(colors, 'sat', showAll)}
                    </div>
                </div>
            );
        }
        return result
    }

        
    function renderCompare() {
        var result = [];
        for(let i in years) {
            var content = years[i];
            if(years[i] == 1984) {
                content = '1984/1985'
            }
            result.push(
                <div key={years[i]+'-compare'}>
                    {renderCompareItem(years[i])}
                </div>
            )
        }
        return result
    }

    
    function renderCompareItem(year){
        var disneyYear = year;
        if(year == 1984) {
            disneyYear=1985
        }
        var result = [];
        const filteredDis = Object.keys(disney).filter(movie => parseInt(disney[movie].year) === disneyYear);
        const filteredGhibli = Object.keys(ghibli).filter(movie => parseInt(ghibli[movie].year) === year);
        result.push(
            <div key={year + 'compare-list'}>
                <strong>{year}</strong>
                {compare(filteredDis, filteredGhibli)}
            </div>
        )
        return result
    }

    function compare(filteredDis, filteredGhibli) {
        var result = [];
        for (let i in filteredGhibli) {
            let colors = ghibli[filteredGhibli[i]]['colors'];
            result.push(
                <div key={filteredGhibli[i]}>
                    <div>{filteredGhibli[i]}</div>
                    <div className='row'>
                        <div className='row mr-5'>
                            {renderColors(colors, 'light', showAll)}
                        </div>
                        <div className='row mr-5'>
                            {renderColors(colors, 'sat', showAll)}
                        </div>
                        <div className='row mr-5'>
                        {renderColors(colors, 'hue', showAll)}
                        </div>
                        <div className='row mr-5'>
                        {renderColors(colors, 'hue', true)}
                        </div>
                    </div>
                </div>
            );
        }

        for (let i in filteredDis) {
            let colors = disney[filteredDis[i]]['colors'];
            result.push(
                <div key={filteredDis[i]}>
                    <div>{filteredDis[i]}</div>
                    <div className='row'>
                        <div className='row mr-5'>
                            {renderColors(colors, 'light', showAll)}
                        </div>
                        <div className='row mr-5'>
                            {renderColors(colors, 'sat', showAll)}
                        </div>
                        <div className='row mr-5'>  
                            {renderColors(colors, 'hue', showAll)}
                        </div>
                         <div className='row mr-5'>
                        {renderColors(colors, 'hue', true)}
                        </div>
                    </div>
                </div>
            );
        }
        return result
    }

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
            let width = 700/3/data.length;
            list.push(
                <div
                    key={i}
                    data={bg}
                    style={{width: width+'px', height: '50px', backgroundColor: bg}}>
                </div>
            )
        }
        return list
    }
    

    return(
        <div className='container'>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Year</th>
                <th scope="col">Ghibli</th>
                <th scope="col">Disney</th>
                </tr>
            </thead>
            <tbody>
                {renderTableContent(ghibli, disney)}
            </tbody>
            </table>

            <div className="table">
                <div className="pb-5">
                    {renderCompare()}
                </div>
            </div>
        </div>
    );
}
    