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

        
        appState.activeNote = newNote
        _saveNotes()
        appState.emit('cases')
    }

    setActiveNote(id) {
        let notes = appState.notes
        
        let foundNote = notes.find(n => n.id == id)
        appState.activeNote = foundNote

        console.log(appState.activeNote)
    }

    deleteNote(id) {
        appState.notes = appState.notes.filter(n => n.id != id)
        _saveNotes()
    }

    noteColor(color) {
        console.log(color)
        appState.activeNote.color = color
        _saveNotes()
    }
}

export const notesService = new NotesService