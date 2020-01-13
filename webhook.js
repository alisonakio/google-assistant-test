const express = require('express');
const router = express.Router();

const {dialogflow} = require('actions-on-google');
const app = dialogflow();

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi!');
});

router.post('/',app)

router.get('/',(req,res)=>{
    res.send('webhook');
})

module.exports = router;