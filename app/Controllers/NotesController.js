import { getFormData } from "../Utils/FormHandler.js";
import { notesService } from "../Services/NotesService.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js";

// function _drawNotes() {
//   console.log('drawing notes')
//   let notes = appState.notes
//   let template = ''

//   let filterNotes = notes.filter(n => n.user == appState.userName)
//   filterNotes.forEach(n => template += n.NotesListTemplate)
//   setHTML('notesList', template)
// }

function _drawNotes() {
  console.log('drawing notes')
  let notes = appState.notes
  let template = ''

  let filterNotes = notes.filter(n => n.user == appState.userName)
  filterNotes.forEach(n => template += n.NotesListTemplate)
  setHTML('notesList', template)
}



export class NotesController {
  constructor() {
    appState.on('userName', _drawNotes)
  }

  saveNote() {
    window.event.preventDefault()
    let form = event?.target

    let note = document.getElementById('noteBody')
    let noteBody = note.value
    notesService.saveNote(noteBody)
    console.log(appState.notes)

    form.reset()
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
  }


}