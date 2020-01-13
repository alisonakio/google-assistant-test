const express = require('express');
const router = express.Router();

const {actionssdk} = require('actions-on-google');
const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi!');
});

app.intent('actions.intent.TEXT', (conv) => {
    conv.ask('Hi!');
});

router.post('/',app)

router.get('/',(req,res)=>{
    res.send('webhook');
})

module.exports = router;