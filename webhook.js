const express = require('express')
const router = express.Router()

const {dialogflow, SignIn} = require('actions-on-google')
const app = dialogflow({debug: true})

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Hi!');
})

app.intent('Default Fallback Intent', (conv) => {
    conv.ask(new SignIn());
})

app.intent('actions.intent.SIGN_IN', (conv, params, signin) => {
    if (signin.status === 'OK') {
        conv.ask('HAHAHAHAHAHA!')
        let email = conv.user
        console.log(email)
        conv.ask(`${email}`)
    //   const payload = JSON.stringify(conv.user.profile.payload);
    //   conv.ask(`I got your account details, ${payload}. What do you want to do next?`);
    } else {
        console.log('num foi')
        conv.ask(':(')
    //   conv.ask(`I won't be able to save your data, but what do you want to do next?`);
    }
  })

router.post('/',app)

router.get('/',(req,res)=>{
    res.send('webhook')
})

module.exports = router