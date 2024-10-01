//import express from 'express'
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "lakshaykapur",
  "id": 45056537,
  "node_id": "MDQ6VXNlcjQ1MDU2NTM3",
  "avatar_url": "https://avatars.githubusercontent.com/u/45056537?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lakshaykapur",
  "html_url": "https://github.com/lakshaykapur",
  "followers_url": "https://api.github.com/users/lakshaykapur/followers",
  "following_url": "https://api.github.com/users/lakshaykapur/following{/other_user}",
  "gists_url": "https://api.github.com/users/lakshaykapur/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lakshaykapur/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lakshaykapur/subscriptions",
  "organizations_url": "https://api.github.com/users/lakshaykapur/orgs",
  "repos_url": "https://api.github.com/users/lakshaykapur/repos",
  "events_url": "https://api.github.com/users/lakshaykapur/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lakshaykapur/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2018-11-15T03:31:04Z",
  "updated_at": "2019-04-25T18:57:00Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.get('/twitter',(req,res)=>{
    res.send('lakshaykapur')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Hello youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})