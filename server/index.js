const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune/",(req,res) => {
  const fortunes = [
    'Your family is young, gifted and attractive',
    'Trouble ahead',
    'Don’t just spend time. Invest it',
    'Pennies from heaven find their way to your doorstep this year!',
    'Watch your back',
    'All the effort you are making will ultimately pay off',
    'You will get food poisoning today'
  ]

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

let items = ['pancake-mix','unicorn blood','stroop-waffles','french fries','blueberries','thors-hammer']

app.get('/api/items',(req,res) => {
  res.status(200).send(items)
})

app.post('/api/items',(req,res) => {
  console.log(req.body)
  const { newItem } = req.body
  items.push(newItem)
  res.status(200).send(items)
})

app.delete('/api/items/:tgtIndex', (req,res) => {
  const tgtIndex = +req.params.tgtIndex
  items.splice(tgtIndex,1)
  res.status(200).send(items)
})

app.listen(4000, () => console.log("Server running on 4000"));
