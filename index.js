
// createRow()

// function createRow(){
//     var tbody = document.querySelector("table tbody");
// var tr = document.createElement("tr");


// var market = document.createElement("td");
// market.innerHTML = "بیتکوین"

// var price = document.createElement("td");
// price.innerHTML = "40000"

// var high = document.createElement("td");
// high.innerHTML = "42000"

// var low = document.createElement("td");
// low.innerHTML = "38000"

// tr.appendChild(market)
// tr.appendChild(price)
// tr.appendChild(low)
// tr.appendChild(high)

// tbody.appendChild(tr)
// }

fetch("https://api.wallex.ir/v1/markets")
    .then((response)=>{return response.json()})
    .then((data)=>{
        data = data.result.symbols
        
        var coins = [
            "BTCUSDT",
            "ETHUSDT",
            "LTCUSDT",
            "DASHUSDT",
            "ADAUSDT",
            "CAKEUSDT",
            "ATOMUSDT",
            "BCHUSDT",
            "EOSUSDT",
            "BNBUSDT",
            "LINKUSDT",
            "SANDUSDT"
        ];

        coins = coins.map((coin)=>{
         
            return{
                name: data[coin].faBaseAsset,
                price: Math.round(data[coin].stats.bidPrice),
                high: Math.round(data[coin].stats["24h_lowPrice"]),
                low: data[coin].stats["24h_highPrice"]
            }
        })
        
        coins.forEach((coin)=>{
            var tag = createTag(coin);
            document.querySelector("table tbody").appendChild(tag)
        })
    

    })

    function createTag(coin){
        var newTr = document.createElement("tr");
        Object.values(coin).forEach((element)=>{
            var newTd = document.createElement("td");
            newTd.innerHTML = element;
            newTr.appendChild(newTd)
        });
        return newTr
    }