const HLTV = require('hltv-api').default
const express = require('express')
const app = express()

app.get('/news', async (req, res) => {
    try {
        res.json(await HLTV.getNews())
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/matches', async (req, res) => {
    try {
        res.json(await HLTV.getMatches())
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/results', async (req, res) => {
    try {
        res.json(await HLTV.getResults())
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/players', async (req, res) => {
    try {
        res.json(await getTopPlayers())
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/teams', async (req, res) => {
    try {
        res.json(await HLTV.getTopTeams())
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/player/:playerId', async (req, res) => {
    try {
        res.json(await HLTV.getPlayerById(req.params.playerId))
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/stats/:matchId', async (req, res) => {
    try {
        res.json(await HLTV.getMatchById(req.params.matchId))
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

app.get('/team/:teamId', async (req, res) => {
    try {
        res.json(await HLTV.getTeamById(req.params.teamId))
    }
    catch (err) {
        res.status(403).send({ 'detail': `err: ${err}` })
    }
})

// Error handler
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(403).send({ 'detail': `server error ${err}` })
})

app.listen(9000, () => {
    console.log(`Server start on http://localhost:9000`);
})
