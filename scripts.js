const express = require("express")
require('dotenv').config()
const bodyParser = require("body-parser")
const { OpenAI } = require("openai")
var cors = require('cors');



const app = express()


app.use(bodyParser.json())
app.use(cors());

  


const openai = new OpenAI({
    apiKey: process.env.API_KEY,
  })


app.post("/items", async (req, res) => {
    const { prompt } = req.body
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt + "Answer using the format of: 'Approximately x words'" }],

        max_tokens: 150,
    })
    res.send(completion.choices[0].message.content)
    console.log(completion.choices[0].message.content)

})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server working")
})