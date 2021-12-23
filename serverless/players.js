const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    const players = await HLTV.getTopPlayers()
    return {
        statusCode: 200,
        body: JSON.stringify(players)
    };
}