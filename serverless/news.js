const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    try {
        const news = await HLTV.getNews()
        return {
            statusCode: 200,
            body: JSON.stringify(news)
        }
    }
    catch(err) {
        return {
            statusCode: 403,
            body: JSON.stringify({'detail': `${err}`})
        }
    }
}