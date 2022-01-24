const HLTV = require('hltv')
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