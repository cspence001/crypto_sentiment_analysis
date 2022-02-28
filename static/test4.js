


function buildPlot(stock) {

    var url = 'https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=max&interval=hourly'

    d3.json(url).then(function(data) {
       var date = data.prices[0];
       var prices = data.prices[1];
       var market_cap = data.market_caps[1]
       var volume = data.total_volumes[1]
       
    })
}
