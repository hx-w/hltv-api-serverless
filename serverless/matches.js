const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    const matches = await HLTV.getMatches()
    return {
        statusCode: 200,
        body: JSON.stringify(matches)
    };
}