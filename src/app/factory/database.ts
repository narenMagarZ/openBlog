import { Database } from "firebase/database";
import { FirebaseServiceOperationInterface, InputPostInterface, PostInterface } from "../interfaces";

export class FirebaseDatabase implements FirebaseServiceOperationInterface<InputPostInterface, PostInterface> {
  constructor(private db: Database) {}
  async write() {}
  async read() { return []; }
  async update() {}
  async delete() {}
  async getPostCounter() {return 0}
}