import { FirebaseServiceOperationInterface } from "../interfaces";

export class FirebaseDatabase implements FirebaseServiceOperationInterface {
  constructor(private db: any) {}
  write() {}
  read() {}
  update() {}
  deleted() {}

}