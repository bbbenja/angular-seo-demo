const express = require('express');
const rendertron = require('rendertron-middleware');

const app = express();

app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com/render',
}));

app.use(express.static(__dirname + '/dist/demo-seo'));
app.listen(8080);

app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/demo-seo/index.html');
});
