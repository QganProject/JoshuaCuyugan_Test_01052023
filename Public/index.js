const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require("path");
const cors = require('cors');

const db = require('./career-Objective/db/goals');
const { json } = require('body-parser');
const { Console } = require('console');


const app = express();
const PORT = 5500;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Auth/auth.html');
});


app.get('/auth.js', function(req, res){
  res.sendFile(__dirname + '/Auth/auth.js');
});

app.get('/auth-style.css', function(req, res){
  res.sendFile(__dirname + '/Auth/auth-style.css');
});

app.get('/Index/index.html', function(req, res){
  res.sendFile(__dirname + '/Index/Index.html');
});

app.get('/Index/img/img-1.png', function(req, res){
  res.sendFile(__dirname + '/Index/img/img-1.png');
});

app.get('/Index/img/hero-bg.jpg', function(req, res){
  res.sendFile(__dirname + '/Index/img/hero-bg.jpg');
});

app.get('/Index/app.js', function(req, res){
  res.sendFile(__dirname + '/Index/app.js');
});

app.get('/Index/style.css', function(req, res){
  res.sendFile(__dirname + '/Index/style.css');
});

app.get('/career-Objective/index.html', function(req, res){
  res.sendFile(__dirname + '/career-Objective/index.html');
});

app.get('/career-Objective/main.js', function(req, res){
  res.sendFile(__dirname + '/career-Objective/main.js');
});

app.get('/career-Objective/careerObjective.css', function(req, res){
  res.sendFile(__dirname + '/career-Objective/careerObjective.css');
});

//CRUD API
app.get('/getAll', async (req,res) => {
  const goals = await db.getAllGoals();
  res.status(201).json({goals})
})

app.post('/goals', async (req,res) => {
  const results = await db.addGoal(req.body);
  res.status(201).json({id: results[0]});
})

app.patch('/update', async (req,res) => {
  const id = await db.updateGoal(req.body.id, req.body.goalname, req.body.goal_description, req.body.goal_reason, req.body.goalTargetDate, req.body.goalCompletedDate);
})

app.delete('/delete/:id', async (req,res) => {
  await db.deleteGoal(req.params.id);
  res.status(200).json({success: true});
})

//END CRUD API

app.use(express.static(path.join(__dirname ,'Public')));

app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));