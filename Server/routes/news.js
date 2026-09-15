const {XMLParser} = require("fast-xml-parser");

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

  const url = "https://news.google.com/rss/search?q=Finance+stock&hl=fr&gl=FR&ceid=FR:fr";

  const response = await fetch(url);

  if (!response.ok) {
    return res.status(500).json({ 
      message: 'Erreur lors de la récupération des actualités.', 
    });
  }

  const xmlData = await response.text();
  const parser = new XMLParser({ignoreAttributes: false});
  const jsonData = parser.parse(xmlData);

  const items = jsonData.rss.channel.item || [];

  // Convertir les éléments en un tableau d'objets avec les propriétés souhaitées
  const newsItems = Array.isArray(items) ? items.slice(0,5) : [items];

  res.status(200).json(newsItems);
});

//Permet d'exporter le module pour qu'il puisse être utilisé dans d'autres fichiers
module.exports = router;