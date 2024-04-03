const express = require('express');

const headphonesArray = require('./db/headphones-list.json');
const cart = require('./db/cart.json');
const bodyParser = require('body-parser');
const port = 8000;
const DB = path.join('db', 'cart.json');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(corps());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/headphones', (req, res) => {
  res.status(200);
  res.send(cardInfoTopPicksList);
});
app.get('/cart/get/', (req, res) => {
  res.status(200);
  res.send(cart);
});
app.post('/cart/add', (req, res) => {
  const postData = req.body;
  if (postData) {
    return res.status(400).send('Bad request');
  }

  fs.readFile(DB, (err, data) => {
    if (err) throw err;
    try {
      let cartData = JSON.stringify([...JSON.parse(data).postData]);

      fs.writeFile(DB, cartData, (writeErr) => {
        if (writeErr) {
          return res.status(500).send('Не удалось произвести запись');
        }
        return res.status(200).send('Успешно добавлен товар в корзину');
      });
    } catch {
      return res.status(500).send('Не удалось произвести запись');
    }
  });

  res.status(200);
  res.send();
});
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
