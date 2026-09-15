const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Le serveur est bien démarré et fonctionne correctement !', 
  });
});

const news = require('./routes/news.js');
app.use('/news',  news)

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});