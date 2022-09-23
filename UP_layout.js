d3.csv('https://raw.githubusercontent.com/zhyating/Interface/main/class1-efficiency.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
        type:'scattermapbox',
        name: 'Class 1',
        lon: unpack(rows, 'LONGITUDE'),
        lat: unpack(rows, 'LATITUDE'),
        text:  unpack(rows, 'EFFICIENCY'),
        hovertemplate: 'Loation: %{lat},%{lon}; Efficiency: %{text:.5f}',
        mode: 'markers',
        marker: {
            size: 6,
            reversescale: true,
            opacity: 0.5,
            line: {
                width: 0.1,
                color: 'rgb(102,102,102)'
            },
            colorscale: 'Rainbow',
            cmin: 0,
            color: unpack(rows, 'EFFICIENCY'),
            colorbar: {
              thickness: 10,
              x: 0.9,
              len: 0.8,
              title: 'Efficiency'
            }
        }
    }];

    var updatemenus=[
      {
          buttons: [
              {
                  args: ['marker.colorscale', 'Rainbow'],
                  label: 'Rainbow',
                  method: 'restyle'
              },
              {
                  args: ['marker.colorscale', 'Electric'],
                  label:'Electric',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Earth'],
                  label:'Earth',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Hot'],
                  label:'Hot',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Jet'],
                  label:'Jet',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Portland'],
                  label:'Portland',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Viridis'],
                  label:'Viridis',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Greys'],
                  label:'Greys',
                  method:'restyle'
              },
              {
                  args: ['marker.colorscale', 'Cividis'],
                  label:'Cividis',
                  method:'restyle'
              }
          ],
        direction: 'left',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 0.2,
        xanchor: 'left',
        y: 1.2,
        yanchor: 'top'
    }];


    var layout = {
        dragmode: "zoom",
        mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 2.5 },
        margin: {t: 0, b: 0, l: 300, r: 300},
        updatemenus: updatemenus,
    };

    Plotly.newPlot("UP", data, layout, {showLink: false});

});
