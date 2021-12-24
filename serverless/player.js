const HLTV = require('hltv-api').default

exports.handler = async function (event, context) {
    try {
        const player = await HLTV.getPlayerById(event.queryStringParameters['playerId'])
        return {
            statusCode: 200,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(player)
        }
    }
    catch (err) {
        return {
            statusCode: 403,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ 'detail': `${err}` })
        }
    }
}