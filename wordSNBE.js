const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({}));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:animal', function (req, res) {

    var animal = req.params.animal;
    var sound = "";
    if ("cat" == animal) {
        sound = "냐옹";
    }
    else if ("dog" == animal) {
        sound = "멍멍";
    }
    else if ("pig" == animal) {
        sound = "꿀꿀";
    }

    res.json({ animal: sound })
})



app.listen(3002)