'use strict';

const controller = require('lib/wiring/controller');

/* GET home page. */
const root = (req, res) => {
  res.json({
    index: {
      title: 'Photo Gallery API',
      environment: req.app.get('env'),
    },
  });
};

module.exports = controller({
  root,
});
