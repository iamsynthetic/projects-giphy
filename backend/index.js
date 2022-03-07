require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
//var qs = require('qs')
const axios = require('axios')
const apiURL = 'https://api.unsplash.com/search/photos'
const apiKey = process.env.API_KEY
let keyWord = null;
let pageNum = null;

// //handle production
// if(process.env.NODE_ENV === 'production'){
//   //static folder
//   app.use(express.static(__dirname + '/backend/public/'))
// }

// app.get(/.*/, (reg, res) => {
//   res.sendFile(__dirname + 'backend/public/index.html');
//   keyWord = request.query.keyword;
//   pageNum = request.query.page;`
//   let query = request.query
//   query.client_id = apiKey
  
//   axios.get(`${apiURL}?query=${keyWord}&page=${pageNum}&per_page=10&client_id=${apiKey}`).then(res => {
//     console.log(res.data)
//     response.send(res.data)
//   })
// });
app.get('/', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    keyWord = request.query.keyword;
    pageNum = request.query.page;
    let query = request.query
    query.client_id = apiKey
    
    axios.get(`${apiURL}?query=${keyWord}&page=${pageNum}&per_page=10&client_id=${apiKey}`).then(res => {
      console.log(res.data)
      response.send(res.data)
        })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})