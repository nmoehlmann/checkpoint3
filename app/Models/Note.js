import { generateId } from "../Utils/generateId.js"
import { appState } from "../AppState.js"

export class Note {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    this.noteBody = data.noteBody || 'fill out note'
    this.user = data.user
  }

  get NotesListTemplate() {
    return `
    <div>
      <h1>${this.title}</h1>
      <p>${this.user}</p>
    </div>
    `
  }
}