import { getFormData } from "../Utils/FormHandler.js";
import { notesService } from "../Services/NotesService.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";

function _drawNotes() {
  console.log('drawing notes')
  let notes = appState.notes
  let template = ''

  let filterNotes = notes.filter(n => n.user == appState.userName)
  filterNotes.forEach(n => template += n.NotesListTemplate)
  setHTML('notesList', template)
}

function _drawActiveNote(id) {
  let activeNote = appState.activeNote
  let template = ''
  
  template = activeNote.ActiveNoteTemplate
  setHTML('activeNoteTemplate', template)
}

function _drawBlank() {
  let template = ''
  setHTML('activeNoteTemplate', template)
}

export class NotesController {
  constructor() {
    appState.on('userName', _drawNotes)
    appState.on('userName', _drawBlank)
  }

  saveNote() {
    window.event.preventDefault()
    // A bug that resets the color value when saving :P
    // let form = event?.target
    // let formData = getFormData(form)
    // notesService.noteColor(formData)

    let note = document.getElementById('noteBody')
    let noteBody = note.value
    notesService.saveNote(noteBody)
    console.log(appState.notes)
  }

  createNote() {
    window.event.preventDefault()
    let form = event?.target
    let formData = getFormData(form)
    formData.user = appState.userName
    notesService.createNote(formData)
    console.log(appState.notes)
    console.log('active user', appState.userName)
    appState.on('notes', _drawNotes())


    _drawActiveNote()
    form.reset()
  }

  setActiveNote(id) {
    notesService.setActiveNote(id)
    _drawActiveNote(id)
  }

  async deleteNote(id) {
    if (await Pop.confirm('Are you sure you want to delete this note?')){
      notesService.deleteNote(id)
    }
    appState.on('notes', _drawNotes())
    _drawBlank()
  }

  noteColor(color) {
    console.log('changing notes color')
    notesService.noteColor(color)
    _drawActiveNote()
    _drawNotes()
  }

}