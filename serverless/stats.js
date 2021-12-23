const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    const stats = await HLTV.getMatchById(event.queryStringParameters['matchId'])
    return {
        statusCode: 200,
        body: JSON.stringify(stats)
    };
}