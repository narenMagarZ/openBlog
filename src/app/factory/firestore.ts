import { FirebaseServiceOperationInterface } from "../interfaces";

export class FirebaseFirestore implements FirebaseServiceOperationInterface {
  constructor(private db: any) {}
  write() {}
  read() {}
  update() {}
  deleted() {}

}