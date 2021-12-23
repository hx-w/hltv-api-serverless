const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    const results = await HLTV.getResults()
    return {
        statusCode: 200,
        body: JSON.stringify(results)
    };
}