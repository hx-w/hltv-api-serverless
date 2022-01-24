const HLTV = require('hltv-api').default

exports.handler = async function (event, context) {
    try {
        const team = await HLTV.getTeamById(event.queryStringParameters['teamId'])
        return {
            statusCode: 200,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(team)
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