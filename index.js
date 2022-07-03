const http = require('http');
const port = process.env.PORT || 3000;
var cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
          'Access-Control-Allow-Methods',
          'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        );
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-Requested-With,content-type',
        );
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
    res.send(req.query.sitetocheck == 'www.zone-annuaire.tel');
  });
  
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
