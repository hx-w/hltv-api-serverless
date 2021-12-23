const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const teams = await HLTV.getTopTeams()
        return {
            statusCode: 200,
            body: JSON.stringify(teams)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}