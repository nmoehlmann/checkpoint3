import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"

class UsersService {
  enterUserName(input) {
    appState.userName = input
    console.log('appstate user', appState.userName)
  }
}
export const usersService = new UsersService()