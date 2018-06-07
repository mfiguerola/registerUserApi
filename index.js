const express = require('express');
const app = express();

const pages = {
  home: {
    literals: [{ hello: 'hola' }],
    form: [
      {
        type: 'select',
        values: []
      }
    ]
  }
};

app.route('/page/:pageId').get((req, res) => {
  res.json(pages[req.params.pageId]);
});

const server = app.listen(4000, () => {
  const port = server.address().port;

  console.log('Server listening at http://localhost:%s', port);
});
