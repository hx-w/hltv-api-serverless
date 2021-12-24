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
    try {
        res.json(await HLTV.getTopPlayers())
    }
    catch (err) {
        res.json({'detail': `err: ${err}`})
    }
})

app.get('/teams', async (req, res) => {
    res.json(await HLTV.getTopTeams())
})

app.get('/player/:playerId', async (req, res) => {
    res.json(await HLTV.getPlayerById(req.params.playerId))
})

app.get('/stats/:matchId', async (req, res) => {
    res.json(await HLTV.getMatchById(req.params.matchId))
})

app.get('/team/:teamId', async (req, res) => {
    res.json(await HLTV.getTeamById(req.params.teamId))
})

// Error handler
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(403).send({'detail': `server error ${err}`})
})

app.listen(9000, () => {
    console.log(`Server start on http://localhost:9000`);
})