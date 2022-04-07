const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    await HLTV.getResults().then(res => {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(res)
        }
    })
}