const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const results = await HLTV.getResults()
        return {
            statusCode: 200,
            body: JSON.stringify(results)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}