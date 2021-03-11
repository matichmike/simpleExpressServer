const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hey there")
});

app.listen(port, () => {
  console.log('Listening at 3001');
})