d3.csv("https://raw.githubusercontent.com/zhyating/Interface/main/UP-eccentricity.csv", function(d) {
    return {
      lon : d["LONGITUDE"],
      lat : d["LATITUDE"],
      ec : d["ECCENTRICITY"],
  };
}, function(data) {
      var ec_mean = d3.mean(data, function(d) { return d.ec; });
      ec_mean = Number(ec_mean).toFixed(1);
      var ec_median = d3.median(data, function(d) { return d.ec; });
      var ec_sd = d3.deviation(data, function(d) { return d.ec; });
      ec_sd = Number(ec_sd).toFixed(1);
      var ec_min = d3.min(data, function(d) { return d.ec; });
      var ec_max = d3.max(data, function(d) { return d.ec; });

      var values = [['All','California'],
                    [ec_mean,ec_mean],
                    [ec_median,ec_median],
                    [ec_sd,ec_sd],
                    [1495,1495],
                    [846,846]];
      var headerColor = "grey";
      var rowEvenColor = "lightgrey";
      var rowOddColor = "white";

      var data = [{
        type: 'table',
        header: {
          values: [["Eccentricity"], ["Mean"],["Median"],
               ["Standard deviation"],["Maximum"], ["Minimum"]],
          align: "center",
          line: {width: 1, color: 'black'},
          fill: {color: headerColor},
          font: {family: "Arial", size: 14, color: "white"}
        },
        cells: {
          values: values,
          align: "center",
          line: {color: "black", width: 1},
          fill: {color: [[rowOddColor,rowEvenColor]]},
          font: {family: "Arial", size: 12, color: "black"}
        }
      }];

      var layout = {
          autosize: false,
          height: 300,
          width: 1600,
          margin: {l: 350}
        }

      Plotly.newPlot('table', data, layout);
});
