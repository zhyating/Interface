d3.csv('https://raw.githubusercontent.com/zhyating/Interface/main/UP-eccentricity.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
        type:'scattergeo',
        name: 'Union Pacific',
        ids: unpack(rows, 'FRANODEID'),
        locationmode: 'USA-states',
        lon: unpack(rows, 'LONGITUDE'),
        lat: unpack(rows, 'LATITUDE'),
        hovertemplate: 'Loation: %{lat},%{lon};  Eccentricity: %{text:.5f} ',
        text:  unpack(rows, 'ECCENTRICITY'),
        mode: 'markers',
        marker: {
            size: 4,
            opacity: 0.8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'square',
            line: {
                width: 0.1,
                color: 'rgb(102,102,102)'
            },
            colorscale: 'Rainbow',
            cmin: 0,
            color: unpack(rows, 'ECCENTRICITY'),
            colorbar: {
                x: 0.8,
                len: 0.8,
                thickness: 10,
                title: 'Eccentricity'
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
    },
  ]

    var annotations = [
    {
      text: 'Color scheme',
      x: 0.1,
      y: 1.15,
      yref: 'paper',
      align: 'left',
      showarrow: false
    }];

    var layout = {
        autosize: true,
        margin: {t: 0, b: 0, l: 300, r: 300},
        updatemenus: updatemenus,
        annotations: annotations,
        // title: '',
        colorbar: true,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(250,250,250)',
            subunitcolor: 'rgb(168,168,168)',
            countrycolor: 'rgb(168,168,168)',
            countrywidth: 3,
            subunitwidth: 1.5
        }
    };

    Plotly.newPlot("eccentricity", data, layout, {showLink: false});

});
