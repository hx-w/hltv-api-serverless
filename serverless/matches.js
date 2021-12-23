const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const matches = await HLTV.getMatches()
        return {
            statusCode: 200,
            body: JSON.stringify(matches)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}