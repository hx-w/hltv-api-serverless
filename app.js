const HLTV = require('hltv-api').default
const express = require('express')
const app = express()

app.get('/news', async (req, res) => {
    res.json(await HLTV.getNews())
})

app.get('/matches', async (req, res) => {
    res.json(await HLTV.getMatches())
})

app.get('/results', async (req, res) => {
    res.json(await HLTV.getResults())
})

app.get('/players', async (req, res) => {
    res.json(await HLTV.getTopPlayers())
})

app.get('/teams', async (req, res) => {
    res.json(await HLTV.getTopTeams())
})

app.get('/player', async (req, res) => {
    res.json(await HLTV.getPlayerById(req.params.playerId))
})


// Error handler
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(403).send({'detail': `server error ${err}`})
})

app.listen(9000, () => {
    console.log(`Server start on http://localhost:9000`);
})