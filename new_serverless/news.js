const HLTV = require('hltv')

exports.handler = async function(event, context) {
    try {
        const news = await HLTV.getNews()
        return {
            statusCode: 200,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(news)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}