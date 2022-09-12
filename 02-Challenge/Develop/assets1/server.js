const fs = require("fs/promises")

//makes api 
const express = require("express")

//makes unique ID
const { v4: uuid } = require("uuid")
// const { response } = require("express")

//rename express
const app = express()
//middle ware
app.use(express.json())


//gets a comment by id
app.get("/comments/:id", async (req, res) => {
    const id = req.params.id
    let content;

    try {

        //TODO rewrite this to read from data base json
        content = await fs.readFile(`data/comments/${id}.txt`, "utf-8")
    } catch (err) {
        return res.sendStatus(404)
    }
    res.json({
        content: content
    })

})

//posts a new comment
app.post("/comments", async (req, res) => {
    const id = uuid()
    const content = req.body.content
    
    if (!content){
        return res.sendStatus(400)
    }
    //TODO rewrite this to push or append to data base json
    await fs.mkdir("data/comments", {recursive: true})
    await fs.writeFile(`data/comments/${id}.txt`, content)
    res.status(201).json({
        id: id
    })

})


app.listen(3000, () => console.log("api server running"))

