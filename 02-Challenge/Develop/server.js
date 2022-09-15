const fs = require("fs/promises")
let db = require("./db/db.json")
//makes api 
const express = require("express")

//makes unique ID
const { v4: uuid } = require("uuid")
// const { response } = require("express")

//rename express
const app = express()
//middle ware
app.use(express.static('public'));
app.use(express.json())

//fix this
//gets a comment by id
app.get("/api/notes", async(req, res) => {
    
    const info = await fs.readFile('./db/db.json', 'utf8')
    res.json(JSON.parse(info))
   
})
app.delete("/api/notes/:id", function (req, res) {

    fs.readFile(`./db/db.json`, "utf8").then((data) => {
        const oldData = JSON.parse(data)
        const { id } = req.params
        let index = oldData.findIndex((note) => note.id === id)
        if (index >= 0)  { //if id doesnt exist then send status for 404
            let deletedNote = oldData.splice(index, 1) //removes the object
            console.log('deleted note',deletedNote)
            console.log("----------------------")
            console.log('data base',oldData)
            fs.writeFile(`./db/db.json`, JSON.stringify(oldData, null, "  "))
            res.send(deletedNote)}//sends the response of what was deleted
            else res.status(404).send("not found")
    })
    
}
)
//posts a new note
app.post("/api/notes", async (req, res) => {
    //using the destructing method
    const { title, text } = req.body;
    //if both the title and text are present then write the object 
    if (title && text){
        const newNote = {
            title,
            text,
            id: uuid()
        };
        
        fs.readFile(`./db/db.json`, "utf8").then((data) => {

            console.log(data)
            const oldData = JSON.parse(data)
            oldData.push(newNote)
            fs.writeFile(`./db/db.json`, JSON.stringify(oldData, null, "  ") )
            const response = {
                status: 'success',
                body: newNote,
              };
              console.log(response);
              res.status(201).json(response)
    
          }) 
        
    } else {
        res.status(500).json('Error in posting review');
}
    
})


app.listen(3000, () => console.log("api server running"))

