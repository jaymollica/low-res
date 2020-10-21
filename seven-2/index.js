const { response } = require('express');
let express = require('express');
let app = express();

//parse json
let bodyParser = require('body-parser');
app.use(bodyParser.json());

//database init
let Datastore = require('nedb');
let db = new Datastore('coffee.db');
db.loadDatabase();

let cupTracker = [];

app.post('/cups', (req,res)=> {
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        coffee: req.body.number,
    }

    //insert data into db
    db.insert(obj,(err, newDocs)=> {
        if(err) {
            res.json({status: "fail"});
        } else {
            res.json({status: "success"});
        }
    })
})

app.use("/", express.static('public'));

app.listen(5000, ()=> {
    console.log("we at 5000");
})


app.get('/getCups', (req,res)=> {

    db.find({}, (err, docs)=> {
        if(err) {
            res.json({status: "fail"});
        }
        else {
            let obj = {data: docs};
            res.json(obj);
        } 
    })
})
