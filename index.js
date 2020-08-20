const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const prodRouter = require('./routes/products')
const kontakRouter = require('./routes/kontak')
// parse application/json
app.use(bodyParser.json());
 
//load route
app.use('/api/products', prodRouter)
app.use('/kontak', kontakRouter)
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});