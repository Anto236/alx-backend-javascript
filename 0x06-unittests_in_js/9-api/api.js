const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;

  if (!/^\d+$/.test(cartId)) {
    res.status(404).send('Not Found');
    return;
  }

  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
