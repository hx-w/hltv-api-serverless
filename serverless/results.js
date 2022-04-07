const HLTV = require('hltv').default

exports.handler = async function (event, context) {
    const info = await HLTV.getResults()
    console.log(info)
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
    }
}