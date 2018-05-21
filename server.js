const express = require('express');
const rendertron = require('rendertron-middleware');
const fs = require('fs');
const crawlers = fs.readFileSync('crawler-user-agents.json');
const morgan = require('morgan');
const app = express();

function getCrawlersPattern() {
  return new RegExp(JSON.parse(crawlers).map(c => c.pattern).join('|'), 'i');
}

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:8080/render',
  userAgentPattern: getCrawlersPattern()
}));

app.use(express.static(__dirname + '/dist/demo-seo'));
app.use(morgan('combined'));
app.listen(8081);

app.get('google1dbef6dede4b34f9.html', function(req, res){
  res.sendFile(__dirname + '/dist/demo-seo/google1dbef6dede4b34f9.html');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/demo-seo/index.html');
});

