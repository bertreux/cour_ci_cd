const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = server;

// Ajoutez le code suivant pour fermer le serveur après les tests
//afterAll(() => {
//    server.close();
//});