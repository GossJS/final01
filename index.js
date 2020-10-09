require('http')
.Server((req, res) => {
  if (req.url === '/v8') return res.end(process.versions.v8); // 6.8.275.32-node.55
  if (req.url === '/node') return res.end(process.versions.node); // 10.19.0
  if (req.url === '/package.json') return require('fs').createReadStream('./package.json').pipe(res);
  if (req.url === '/day') return res.end(String(new Date(). getDate())); // текущий день от 0 до 31
  if (req.url.startsWith('/mirror?x=')) {
    res.end(req.url.split('x=')[1]); 
  }
  res.end('Ilya Gosudarev');
})
.listen(process.env.PORT);
