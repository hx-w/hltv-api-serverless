const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const player = await HLTV.getPlayerById(event.queryStringParameters['playerId'])
        return {
            statusCode: 200,
            body: JSON.stringify(player)
        };
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `err: ${err}`})
        }
    }
}