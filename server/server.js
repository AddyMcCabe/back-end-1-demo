// this is where we will store our server/express code
const express = require('express');
const cors = require('cors');

// we will now invoke express and set it equal to a variable called app
const app = express();

// middleware - external code you want to run everytime your server starts up
app.use(express.json()); 
app.use(cors());

// creating makeshift/dummy database
const dummyInventory = ['battle axe', 'sword', 'shield', 'helm', 'pack', 'rations', 'dagger', 'bow', 'arrows', 'coat of arms'];

// creating our endpoints
app.get('/api/inventory', (req, res) => {
    console.log(req.query);

    if(req.query.item) {
        const filteredInventory = dummyInventory.filter((invItem) => {
        return invItem.toLowerCase().includes(req.query.item.toLowerCase());
        })
        return  res.status(200).send(filteredInventory);
    } else {
        return res.status(200).send(dummyInventory);
    }
})

app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params);
    const numIndex = +req.params.id;
    res.status(200).send(dummyInventory[numIndex]);
})

// lets officially open the door to our server
const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
    console.log('server is running on 5050');
})

