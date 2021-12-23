const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const players = await HLTV.getTopPlayers()
        return {
            statusCode: 200,
            body: JSON.stringify(players)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}