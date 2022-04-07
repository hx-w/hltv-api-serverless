const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    try {
        HLTV.getTeamRanking().then(res => {
            return {
                statusCode: 200,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(res)
            }
        })
    }
    catch (err) {
        return {
            statusCode: 403,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 'detail': `${err}` })
        }
    }
}