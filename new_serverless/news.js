const HLTV = require('hltv')

exports.handler = async function (event, context) {
    HLTV.getNews().then((resp) => {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resp)
        }
    })
}