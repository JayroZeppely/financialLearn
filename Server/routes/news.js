const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Les news sont récupérées avec succès !', 
  });
});

//Permet d'exporter le module pour qu'il puisse être utilisé dans d'autres fichiers
module.exports = router;