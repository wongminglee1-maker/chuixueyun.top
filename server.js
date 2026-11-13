const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  
  // Normalize root
  if (reqPath === '') reqPath = '/';
  
  let targetPath = path.join(process.cwd(), reqPath);
  
  // Check if directory
  try {
    if (fs.existsSync(targetPath)) {
      const stat = fs.statSync(targetPath);
      if (stat.isDirectory()) {
        if (!reqPath.endsWith('/')) {
          res.writeHead(301, { 'Location': reqPath + '/' });
          res.end();
          return;
        }
        targetPath = path.join(targetPath, 'index.html');
      }
    } else {
      // Try appending .html
      if (fs.existsSync(targetPath + '.html')) {
        targetPath = targetPath + '.html';
      }
    }
  } catch (e) {
    // ignore
  }

  fs.readFile(targetPath, (err, data) => {
    if (err) {
      // Serve 404
      const notFoundPath = path.join(process.cwd(), '404.html');
      fs.readFile(notFoundPath, (err404, data404) => {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        if (!err404) {
          res.end(data404);
        } else {
          res.end('404 Not Found - 吹雪云官网');
        }
      });
      return;
    }
    const ext = path.extname(targetPath).toLowerCase();
    res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
    res.end(data);
  });
});

const PORT = 8099;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`吹雪云多页面服务运行在 http://127.0.0.1:${PORT}/`);
});
