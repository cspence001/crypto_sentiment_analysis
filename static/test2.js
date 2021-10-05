

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
      data[i][1], // price

    ]);
  }
	
  let optionsForFirstChart = {
    rangeSelector: {
      selected: 2
    },

    title: {
      text: 'Doge Stock Price'
    },

    legend: {
      enabled: true
    },
	  xAxis: {

    events: {
      setExtremes: syncExtremes
    },

  },


    series: [{
      pointStart: Date.UTC(2020, 1, 1),
      pointInterval: 1000 * 24 * 3600,
      data: ohlc
    }]
  };
	
Highcharts.stockChart('container', optionsForFirstChart)

});


Highcharts.getJSON('static/json_xports_for_chart_render/doge_time_price_sentiment.json', function(data) {

  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    dataLength = data.length,
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][2], // price change

    ]);
  }
let optionsForSecondChart = {
  rangeSelector: {
    selected: 2
  },
	  xAxis: {

    events: {
      setExtremes: syncExtremes
    },

  },

  chart: {
    type: 'column'
  },
  title: {
    text: 'Doge Price Change'
  },


  plotOptions: {
    series: {
      showInLegend: true
    }
  },

  series: [{
    pointStart: Date.UTC(2020, 1, 1),
    pointInterval: 1000 * 24 * 3600,
    data: ohlc
  }]
};


	
	Highcharts.stockChart('container2', optionsForSecondChart)

});

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
  }
let optionsForThirdChart = {
  rangeSelector: {
    selected: 2
  },
	  xAxis: {

    events: {
      setExtremes: syncExtremes
    },

  },

  chart: {
    type: 'line'
  },
  title: {
    text: 'Doge Reddit Polarity Score'
  },


  plotOptions: {
    series: {
      showInLegend: true
    }
  },

  series: [{
    pointStart: Date.UTC(2020, 1, 1),
    pointInterval: 1000 * 24 * 3600,
    data: ohlc,
  //   marker: {
  //     enabled: true,
  //     radius: 2
  // },
  }]
};


	
	Highcharts.stockChart('container3', optionsForThirdChart)

});

Highcharts.getJSON('static/json_xports_for_chart_render/doge_time_price_sentiment.json', function(data) {

  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    dataLength = data.length,
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][4], // positive score

    ]);
  }
let optionsForFourthChart = {
  rangeSelector: {
    selected: 2
  },
	  xAxis: {

    events: {
      setExtremes: syncExtremes
    },

  },

  chart: {
    type: 'line'
  },
  title: {
    text: 'Doge Reddit Positive Sentiment'
  },


  plotOptions: {
    series: {
      showInLegend: true
    }
  },

  series: [{
    pointStart: Date.UTC(2020, 1, 1),
    pointInterval: 1000 * 24 * 3600,
    data: ohlc
  }]
};


	
	Highcharts.stockChart('container4', optionsForFourthChart)

});

Highcharts.getJSON('static/json_xports_for_chart_render/doge_time_price_sentiment.json', function(data) {

  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    dataLength = data.length,
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][5], // negative score

    ]);
  }
let optionsForFifthChart = {
  rangeSelector: {
    selected: 2
  },
	  xAxis: {

    events: {
      setExtremes: syncExtremes
    },

  },

  chart: {
    type: 'line'
  },
  title: {
    text: 'Doge Reddit Negative Sentiment'
  },


  plotOptions: {
    series: {
      showInLegend: true
    }
  },

  series: [{
    pointStart: Date.UTC(2020, 1, 1),
    pointInterval: 1000 * 24 * 3600,
    data: ohlc
  }]
};


	
	Highcharts.stockChart('container5', optionsForFifthChart)

});

Highcharts.getJSON('static/json_xports_for_chart_render/doge_time_price_sentiment.json', function(data) {

  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    dataLength = data.length,
    i = 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][6], // neutral score

    ]);
  }
let optionsForSixthChart = {
  rangeSelector: {
    selected: 2
  },
	  xAxis: {

    events: {
      setExtremes: syncExtremes
    },

  },

  chart: {
    type: 'line'
  },
  title: {
    text: 'Doge Reddit Neutral Sentiment'
  },


  plotOptions: {
    series: {
      showInLegend: true
    }
  },

  series: [{
    pointStart: Date.UTC(2020, 1, 1),
    pointInterval: 1000 * 24 * 3600,
    data: ohlc
  }]
};


	
	Highcharts.stockChart('container6', optionsForSixthChart)

});