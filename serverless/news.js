const HLTV = require('hltv-api').default

exports.handler = async function(event, context) {
    const news = await HLTV.getNews()
    return {
        statusCode: 200,
        body: JSON.stringify(news)
    };
}