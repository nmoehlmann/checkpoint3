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

  // get NotesListTemplate() {
  //   return `
  //   <div class="elevation-3" onclick="app.notesController.setActiveNote('${this.id}')">
  //   <h2><i class="fa-solid fa-note-sticky ${this.color}"></i> ${this.title}</h2>
  //     <p>User: ${this.user}</p>
  //     <button onclick="app.notesController.deleteNote('${this.id}')">Delete</button>
  //   </div>
  //   `

  get NotesListTemplate() {
    return `
    <div class="col-4 d-flex justify-content-evenly">
    <div class="elevation-3 p-5" onclick="app.notesController.setActiveNote('${this.id}')">
      <h2><i class="fa-solid fa-note-sticky ${this.color} fs-3 mx-3"></i>${this.title}</h2>
      <div class="d-flex flex-column align-items-center">
        <p class="mb-3">User: ${this.user}</p>
        <button class="btn btn-dark" onclick="app.notesController.deleteNote('${this.id}')">Delete</button>
      </div>
    </div>
  </div>
    `
  }

  get ActiveNoteTemplate() {
    return `
    <section id="activeNoteTemplate" class="row">
      <div class="col-6">
        <form action="" onsubmit="app.notesController.saveNote()">
          <div class="d-flex flex-column justify-content-center">
            <textarea name="noteForm" id="noteBody" class="noteBody my-4" cols="80" rows="20">${this.noteBody}</textarea>
            <div class="d-flex justify-content-center">
              <button class="btn btn-dark mb-4" type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-6 d-flex flex-column justify-content-evenly">
        <section class="row">
          <div class="col d-flex justify-content-center">
            <h2 class="display-4 fw-bold"><i class="fa-solid fa-note-sticky ${this.color}"></i> ${this.title}</h2>
          </div>
        </section>
        <section class="row">
          <div class="col d-flex justify-content-center fs-3">
            <p>Date Created: ${this.ComputeDate}</p>
          </div>
        </section>
        <section class="row text-center">
          <p class="fs-2">Pick Color</p>
          <div class="col d-flex justify-content-evenly py-4">
            <i onclick="app.notesController.noteColor('red')" class="fa-solid fa-fill-drip red"></i>
            <i onclick="app.notesController.noteColor('blue')" class="fa-solid fa-fill-drip blue"></i>
            <i onclick="app.notesController.noteColor('green')" class="fa-solid fa-fill-drip green"></i>
            <i onclick="app.notesController.noteColor('yellow')" class="fa-solid fa-fill-drip yellow"></i>
            <i onclick="app.notesController.noteColor('black')" class="fa-solid fa-fill-drip black"></i>
          </div>
        </section>
      </div>
    </section>
    `
  }

  get ComputeDate() {
    let date = this.date
    // NOTE each date.getXYZ is its own string so it needs to be wrapped in its own parens and then string concatenated with the other info 
    return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())

  }
}