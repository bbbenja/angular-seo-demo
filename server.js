const express = require('express');
const rendertron = require('rendertron-middleware');
const crawlers = require('crawler-user-agents');

const app = express();

function getCrawlersPattern() {
  return new RegExp(crawlers.map(c => c.pattern).join('|'), 'i');
}

app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com/render',
  userAgentPattern: getCrawlersPattern()
}));

app.use(express.static(__dirname + '/dist/demo-seo'));
app.listen(8080);

app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/demo-seo/index.html');
});

