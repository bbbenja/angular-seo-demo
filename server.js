const express = require('express');
const rendertron = require('rendertron-middleware');
var fs = require('fs');
const crawlers = fs.readFileSync('crawler-user-agents.json');

const app = express();

function getCrawlersPattern() {
  return new RegExp(crawlers.map(c => c.pattern).join('|'), 'i');
}

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:8080/render',
  userAgentPattern: getCrawlersPattern()
}));

app.use(express.static(__dirname + '/dist/demo-seo'));
app.listen(8081);

app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/demo-seo/index.html');
});

