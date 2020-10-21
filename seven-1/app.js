let express = require('express');
let app = express();

let signs = {
    "data" : [
        {
            "name" : "aries",
            "info" : "fire sign",
        },
        {
            "name" : "pisces",
            "info" : "water sign",
        },
        {
            "name" : "libra",
            "info" : "air sign",
        },
    ]
}

// serve files from 'public' folder
app.use('/', express.static('public'));

app.get('/signs', (request, response) => {
    response.json(signs);
});

app.get('/signs/:sign', (request, response) => {
    //console.log(request.params.sign);
    let user_sign = request.params.sign;
    let user_obj;

    for(let i=0;i<signs.data.length;i++) {
        if(user_sign == signs.data[i].name) {
            user_obj = signs.data[i];
        }
    }

    if(user_obj) {
        response.json(user_obj);
    }
    else {
        response.json({status: false});
    }

});

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
});