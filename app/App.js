import { ValuesController } from "./Controllers/ValuesController.js";
import { UsersController } from "./Controllers/UsersController.js";
import { NotesController } from "./Controllers/NotesController.js";


class App {
  // valuesController = new ValuesController();
  notesController = new NotesController
  usersController = new UsersController
}

window["app"] = new App();
