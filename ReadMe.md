## Note-Taking Application
This is a simple front-end note-taking application that allows users to create, view, and delete notes. Each note is given a unique identifier using the UUID library.

## Features
Create new notes with a unique UUID.
View previously saved notes.
Delete specific notes.
List all saved notes in a sidebar.
Installation
Prerequisite: Ensure you have Node.js and npm installed.

## Install the required dependencies:



npm install uuid
If you're using module bundlers like Webpack or Rollup, ensure they're set up correctly. If not, make sure your environment supports ES6 modules.

## Usage
Open the main HTML file where this application is hosted on a browser.

If on the /notes path:

Use the textarea and input fields to enter note content and titles.
Save notes using the "Save" button.
View existing notes by clicking on their titles in the sidebar.
Delete notes using the trash icon next to each note in the sidebar.
The notes are fetched from and saved to a backend API. Ensure the API endpoints (/api/notes and /api/notes/:id) are correctly implemented on your server.

API Endpoints
GET /api/notes: Fetches all saved notes.
POST /api/notes: Saves a new note.
DELETE /api/notes/:id: Deletes a note by its UUID.
Limitations
The application currently operates entirely on the client side. Integration with a backend is essential for persistent storage of notes.
Future Enhancements
Implementing a search functionality for the notes.
Introducing categories or tags for notes.
Enhancing the UI/UX for a better user experience.
