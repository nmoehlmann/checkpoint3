import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { saveState } from "../Utils/Store.js"

function _saveNotes() {
    saveState('notes', appState.notes)
}

class NotesService{

    saveNote(noteBody){
        let activeNote = appState.activeNote
        activeNote.noteBody = noteBody
        appState.emit('activeNote')
        _saveNotes()
    }

    createNote(formData){
        let newNote = new Note(formData)
        appState.notes.push(newNote)

        _saveNotes()

        appState.activeNote = newNote
        appState.emit('cases')
    }
}

export const notesService = new NotesService