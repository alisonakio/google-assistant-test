const express = require('express');
const router = express.Router();

const {actionssdk, SignIn} = require('actions-on-google');
const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('Hi!');
});

app.intent('actions.intent.TEXT', (conv) => {
    conv.ask(new SignIn('Vamos pegar seus dados'));
});

app.intent('actions.intent.SIGN_IN', (conv, params, signin) => {
    if (signin.status === 'OK') {
      const payload = JSON.stringify(conv.user.profile.payload);
      conv.ask(`I got your account details, ${payload}. What do you want to do next?`);
    } else {
      conv.ask(`I won't be able to save your data, but what do you want to do next?`);
    }
  })

router.post('/',app)

router.get('/',(req,res)=>{
    res.send('webhook');
})

module.exports = router;