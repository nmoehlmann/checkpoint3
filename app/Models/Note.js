import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Note {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    this.noteBody = data.noteBody || 'fill out note'
    this.user = data.user
    this.color = data.color
    this.date = data.date ? new Date(data.date) : new Date()
  }

  get NotesListTemplate() {
    return `
    <div class="elevation-3" onclick="app.notesController.setActiveNote('${this.id}')">
    <h2><i class="fa-solid fa-note-sticky ${this.color}"></i> ${this.title}</h2>
      <p>User: ${this.user}</p>
      <button onclick="app.notesController.deleteNote('${this.id}')">Delete</button>
    </div>
    `
  }

  get ActiveNoteTemplate() {
    return `
    <h2><i class="fa-solid fa-note-sticky ${this.color}"></i> ${this.title}</h2>
    <form action="" onsubmit="app.notesController.saveNote()">
      <textarea name="" id="noteBody" cols="30" rows="10">${this.noteBody}</textarea>
      <p>${this.ComputeDate}</p>
      
      <button type="submit">Save Note</button>
    </form>
    <div class="elevated">
    <div class="d-flex flex-column fs-1">
      <i onclick="app.notesController.noteColor('red')" class="fa-solid fa-fill-drip red"></i>
      <i onclick="app.notesController.noteColor('blue')" class="fa-solid fa-fill-drip blue"></i>
      <i onclick="app.notesController.noteColor('green')" class="fa-solid fa-fill-drip green"></i>
      <i onclick="app.notesController.noteColor('yellow')" class="fa-solid fa-fill-drip yellow"></i>
      <i onclick="app.notesController.noteColor('black')" class="fa-solid fa-fill-drip black"></i>
    </div>
  </div>
    `
  }

  get ComputeDate() {
    let date = this.date
    // NOTE each date.getXYZ is its own string so it needs to be wrapped in its own parens and then string concatenated with the other info 
    return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())

  }
}