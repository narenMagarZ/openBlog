import { firebaseServiceTypeEnum } from "../enums";
import { FirebaseServiceOperationInterface } from "../interfaces";
import { FirebaseDatabase } from "./database";
import { FirebaseFirestore } from "./firestore";

export class FirebaseServiceFactory {
  static create(databaseType: firebaseServiceTypeEnum, db: any): FirebaseServiceOperationInterface {
    switch(databaseType) {
      case firebaseServiceTypeEnum.database:
        return new FirebaseDatabase(db);
      case firebaseServiceTypeEnum.firestore:
        return new FirebaseFirestore(db);
      default:
        throw new Error("Invalid database type");
    }
  }
}