var cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
  app.get('/site', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type',
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    console.log(req.query.sitetocheck == 'www.zone-annuaire.tel');
    res.statusCode = 200;
    res.send(req.query.sitetocheck == 'www.zone-annuaire.tel');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
