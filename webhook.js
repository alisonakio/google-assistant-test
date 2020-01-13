const express = require('express');
const router = express.Router();

const {actionssdk} = require('actions-on-google');
const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi!');
});

router.post('/',app)

module.exports = router;