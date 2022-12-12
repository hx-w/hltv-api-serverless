# HLTV-API


[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hx-w/hltv-api-serverless?utm_campaign=template-team&utm_source=dtn-button&utm_medium=dtn-button)

> - depends on [dajk/hltv-api](https://github.com/dajk/hltv-api)
> - powered by [netlify.com](https://netlify.com)

## Endpoint

`https://{custom}.netlify.app/.netlify/functions`

## API

| API | preview | note |
|---|---|---|
| `/news` | [`{Endpoint}/news`](https://hltv-api.netlify.app/.netlify/functions/news) | 近期新闻 |
| `/results` | [`{Endpoint}/results`](https://hltv-api.netlify.app/.netlify/functions/results) | 近期结束的比赛数据 |
| `/matches` | [`{Endpoint}/matches`](https://hltv-api.netlify.app/.netlify/functions/matches) | 即将开始的比赛信息 |
| `/stats/?matchId={int}` | [`{Endpoint}/stats/?matchId=2353841`](https://hltv-api.netlify.app/.netlify/functions/stats/?matchId=2353841) | 一场比赛的详细数据 |
| `/players` | [`{Endpoint}/players`](https://hltv-api.netlify.app/.netlify/functions/players)| 热门选手数据 |
| `/player/?playerId={int}` | [`{Endpoint}/player/?playerId=11893`](https://hltv-api.netlify.app/.netlify/functions/player/?playerId=11893) | 一位选手的详细数据 |
| `/teams` | [`{Endpoint}/teams`](https://hltv-api.netlify.app/.netlify/functions/teams) | 热门队伍数据
| `/team/?teamId={int}` | [`{Endpoint}/team/?teamId=4608`](https://hltv-api.netlify.app/.netlify/functions/team/?teamId=4608) | 一支队伍的详细数据 | 


## Notice

HLTV的反爬虫策略比较完善，自建api是比较好的选择，不建议高频请求。

