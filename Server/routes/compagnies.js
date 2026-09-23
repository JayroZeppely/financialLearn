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
            
            const price = result.regularMarketPrice;
            const previousClose = result.chartPreviousClose;

            const variation = price - previousClose;
            const variationPercent = (variation / previousClose) * 100;

            return {
                symbol: symbol,
                longName: result.longName,
                price : price,
                currency: result.currency,
                exchangeName: result.exchangeName,
                variation: variation,
                variationPercent: variationPercent
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

router.get('/:companyName', async (req, res) => {
    const symbol = req.params.companyName;
    try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=1mo&interval=1d`;
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0",
            },
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const data = await response.json();
        console.log(data);
        const result = data.chart.result[0].meta;

        const price = result.regularMarketPrice;
        const previousClose = result.chartPreviousClose;

        const variation = price - previousClose;
        const variationPercent = (variation / previousClose) * 100;

        res.json({
            symbol: symbol,
            longName: result.longName,
            price : price,
            currency: result.currency,
            exchangeName: result.exchangeName,
            variation: variation,
            variationPercent: variationPercent,
            timestamps : data.chart.result[0].timestamp,
            prices : data.chart.result[0].indicators.quote[0].close
        });

        console.log('Détails de l\'entreprise :', res.json());
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Erreur lors de la récupération des données pour ${symbol}. ${error.message}`,
        });
    }
});

module.exports = router;