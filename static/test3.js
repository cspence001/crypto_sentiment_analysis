


function syncExtremes(e) {
    var thisChart = this.chart;
  
    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
      Highcharts.each(Highcharts.charts, function(chart) {
        if (chart !== thisChart) {
          if (chart.xAxis[0].setExtremes) { // It is null while updating
            chart.xAxis[0].setExtremes(
              e.min,
              e.max,
              undefined,
              false, {
                trigger: 'syncExtremes'
              }
            );
          }
        }
      });
    }
  }

  Highcharts.getJSON('static/json_xports_for_chart_render/doge_time_price_sentiment.json', function(data) {

    // split the data set into ohlc and volume
    var ohlc = [],
      volume = [],
      dataLength = data.length,
      i = 0;
  
    for (i; i < dataLength; i += 1) {
      ohlc.push([
        data[i][0], // the date
        data[i][3], // polarity
  
      ]);
      volume.push([
         data[i][0], // the date
         data[i][1], //price
      ])
    }
  let optionsForSeventhChart = {
    rangeSelector: {
      selected: 2
    },
        xAxis: {
  
      events: {
        setExtremes: syncExtremes
      },
  
    },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        title: {
            text: 'Polarity',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Price',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },

    title: {
      text: 'Doge Reddit Polarity Score v Stock Price'
    },
  
  
    plotOptions: {
      series: {
        showInLegend: true
      }
    },
  
    series: [
    {
        name: 'Polarity',
        type: 'scatter',
        yAxis: 1,
        pointStart: Date.UTC(2020, 0, 28),
        pointInterval: 1000 * 24 * 3600,
        data: ohlc,
        tooltip: {
            valueSuffix: ' compound score'
        }

    }, {
        name: 'Price',
        type: 'spline',
        data: volume,
        tooltip: {
            valueSuffix: ''
        }
    }],
    
  };
      
      Highcharts.stockChart('container7', optionsForSeventhChart)
  
  });
  