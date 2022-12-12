const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    try {
        const startDate = event['queryStringParameters']['startDate']
        const endData = event['queryStringParameters']['endDate']
        const info = await HLTV.getResults({
            'startDate': startDate,
            'endDate': endData
        })
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }
    }
    catch (err) {
        return {
            statusCode: 403,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(err)
        }
    }
}