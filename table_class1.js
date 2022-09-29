d3.csv("https://raw.githubusercontent.com/zhyating/Interface/main/class1-efficiency.csv", function(d) {
  return {
        lon : d["LONGITUDE"],
        lat : d["LATITUDE"],
        ef : d["EFFICIENCY"],
  };
}, function(data) {
        var ef_min = d3.min(data, function(d) { return d.ef; });
        ef_min = Number(ef_min).toFixed(6);
        var ef_max = d3.max(data, function(d) { return d.ef; });
        ef_max = Number(ef_max).toFixed(6);
        var ef_mean = d3.mean(data, function(d) { return d.ef; });
        ef_mean = Number(ef_mean).toFixed(6);
        var ef_median = d3.median(data, function(d) { return d.ef; });
        ef_median = Number(ef_median).toFixed(6);
        var ef_sd = d3.deviation(data, function(d) { return d.ef; });
        ef_sd = Number(ef_sd).toFixed(6);

        var values = [['All','County'], [ef_mean,'-'], [ef_median,'-'],
         [ef_sd,'-'], [ef_max,'-'], [ef_min,'-']];
        var headerColor = "grey";
        var rowEvenColor = "lightgrey";
        var rowOddColor = "white";

        var data = [{
          type: 'table',
          header: {
            values: [["Efficiency"], ["Mean"],["Median"],
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
            margin: {l:350}
          }

        Plotly.newPlot('table_class1', data, layout);
});
