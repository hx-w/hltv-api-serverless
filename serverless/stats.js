const HLTV = require('hltv-api').default

exports.handler = async function (event, context) {
    try {
        const _id = event['queryStringParameters']['id']
        const info = await HLTV.getMatchById({
          'id': _id
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
