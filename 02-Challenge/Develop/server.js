const fs = require("fs/promises")

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
app.get("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    let content;

    try {
        //TODO rewrite this to read from data base json
        content = await fs.readFile('db.json')
    } catch (err) {
        return res.sendStatus(404)
    }
    res.json({
        content: content
    })

})

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
        // const noteString = JSON.stringify(newNote);

        fs.readFile(`./db/db.json`, "utf8"
           
            // err
            //   ? console.error(err)
            //   : console.log(`${newNote.title} has been written to JSON file`)
          ).then((data) => {

            console.log(data)
            const oldData = JSON.parse(data)
            oldData.push(newNote)
            fs.writeFile(`./db/db.json`, JSON.stringify(oldData) )
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

