// GIVEN a note-taking application
// WHEN I open the Note Taker
// get * might be needed 
// THEN I am presented with a landing page with a link to a notes page

// WHEN I click on the link to the notes page
//i need to validate that link

// THEN I am presented with a page with existing notes listed in the left-hand column,
// plus empty fields to enter a new note title and the note’s text in the right-hand column
// i will need to build an api and be able to post and get json to the page 

// WHEN I enter a new note title and the note’s text
// probly going to need to use a hide method and an if else statement to check if there needs to be content in text area
// THEN a Save icon appears in the navigation at the top of the page

// WHEN I click on the Save icon
// this save icon will need to be linked to a post request
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

// WHEN I click on an existing note in the list in the left-hand column
// this would be a get request for that specific json

// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page

// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
// this is some type of editing function to rewite a json i will need to use a PUT method

//this is where we will be validating the html and server code

// The following HTML routes should be created:

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved 
//(look into npm packages that could do this for you).

// Bonus
// You haven’t learned how to handle DELETE requests, 
//but this application has that functionality in the front end.
// As a bonus, see if you can add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the db.json file, 
//remove the note with the given id property, and then rewrite the notes to the db.json file.