import { usersService } from "../Services/UsersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { User } from "../Models/Note.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { Pop } from "../Utils/Pop.js"

export class UsersController {
  constructor() {
    console.log('user controller online')
  }

  async enterUserName() {
    let input = await Pop.prompt("Enter Username")

    if (!input) return
    usersService.enterUserName(input)
  }
}