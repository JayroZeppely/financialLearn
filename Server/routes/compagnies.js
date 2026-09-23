const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA','NVDA','TTE.PA'];

    const companiesData = await Promise.all(symbols.map(async (symbol) => {
        try {
            const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=1m&interval=1d`;
            const response = await fetch(url, {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                },
            });

            if (!response.ok) throw new Error(`Request failed: ${response.status}`);
            const data = await response.json();
            console.log(data);
            const result = data.chart.result[0].meta;
            return {
                symbol: symbol,
                longName: result.longName,
                price : result.regularMarketPrice,
                currency: result.currency,
                exchangeName: result.exchangeName,
            };
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: `Erreur lors de la récupération des données pour ${symbol}. ${error.message}`,
            });
        }
    }));

    res.json(companiesData);
});

module.exports = router;