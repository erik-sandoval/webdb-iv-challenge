const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/dishes', (req,res) => {
  db('dishes')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'something happened' });
    });
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
