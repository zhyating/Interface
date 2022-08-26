d3.csv('https://raw.githubusercontent.com/zhyating/Interface/main/UP-eccentricity.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var scl = [[0,'rgb(5, 10, 172)'],[0.1,'rgb(40, 60, 190)'],[0.25,'rgb(70, 100, 245)'], [0.5,'rgb(90, 120, 245)'],[0.75,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']];

    var data = [{
        type:'scattergeo',
        locationmode: 'USA-states',
        lon: unpack(rows, 'LONGITUDE'),
        lat: unpack(rows, 'LATITUDE'),
        hoverinfor:  unpack(rows, 'FRANODEID'),
        text:  unpack(rows, 'FRANODEID'),
        mode: 'markers',
        marker: {
            size: 3,
            opacity: 0.8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'square',
            line: {
                width: 0.1,
                color: 'rgb(102,102,102)'
            },
            colorscale: scl,
            cmin: 0,
            color: unpack(rows, 'ECCENTRICITY'),
            colorbar: {
                x: 1,
                len: 0.5,
                title: 'Eccentricity'
            }
        }
    }];


    var layout = {
        autosize: false,
        width: 1500,
        height: 1500,
        // title: 'Eccentricity of nodes',
        colorbar: true,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(250,250,250)',
            subunitcolor: 'rgb(217,217,217)',
            countrycolor: 'rgb(217,217,217)',
            countrywidth: 0.5,
            subunitwidth: 0.5
        }
    };

    Plotly.newPlot("myDiv", data, layout, {showLink: false});

});
