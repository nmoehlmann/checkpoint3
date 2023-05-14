import { usersService } from "../Services/UsersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Note } from "../Models/Note.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { Pop } from "../Utils/Pop.js"

function _drawUsername() {
  setHTML('username', appState.userName)
}

export class UsersController {
  constructor() {
    console.log('user controller online')
    // TODO uncomment this after styling!
    this.enterUserName()
  }

  async enterUserName() {
    let input = await Pop.prompt("Enter Username")

    if (!input) return
    usersService.enterUserName(input)
    _drawUsername()
  }
}