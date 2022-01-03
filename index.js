const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const baseballReferenceUrl = 'https://www.baseball-reference.com/'


function getHTML(clientResponse) {
    let responseBody = clientResponse.data
    if (responseBody) {
        return responseBody
    } else {
        return "error"
    }
}


// URLs starting with '/static' access files in the resources folder as static content. 
app.use('/static', express.static('resources'))


app.get('/', (req, res) => {
    axios.get(baseballReferenceUrl)
        .then(response => {
            res.send(getHTML(response))
        })




})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})