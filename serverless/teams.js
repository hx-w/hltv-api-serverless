const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    const info = await HLTV.getTeamRanking()
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
    }
}