const express = require("express");
const router = express.Router();

const { actionssdk, SignIn } = require("actions-on-google");
const app = actionssdk({
  debug: true,
  clientId:
    "194996161787-h383lk60f9kn59teje3vlofemludn4r8.apps.googleusercontent.com"
});

app.intent("actions.intent.MAIN", conv => {
  conv.ask("HAHAHAHAAHAH");
});

app.intent("actions.intent.TEXT", conv => {
  conv.ask(new SignIn("Vamos pegar seus dados"));
});

app.intent("actions.intent.SIGN_IN", (conv, params, signin) => {
  if (signin.status === "OK") {
    conv.ask("HAHAHAHAHAHA!");
    let email = conv.user;
    console.log(email);
    conv.ask(`${email}`);
    //   const payload = JSON.stringify(conv.user.profile.payload);
    //   conv.ask(`I got your account details, ${payload}. What do you want to do next?`);
  } else {
    console.log("num foi");
    conv.ask(":(");
    //   conv.ask(`I won't be able to save your data, but what do you want to do next?`);
  }
});

router.post("/", app);

router.get("/", (req, res) => {
  res.send("webhook");
});

module.exports = router;
