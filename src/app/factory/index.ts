import { FirebaseApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

import { firebaseServiceTypeEnum } from "../enums";
import { FirebaseServiceOperationInterface, InputPostInterface, PostInterface } from "../interfaces";
import { FirebaseDatabase } from "./database";
import { FirebaseFirestore } from "./firestore";

export class FirebaseServiceFactory {
  static create(databaseType: firebaseServiceTypeEnum, db: FirebaseApp): FirebaseServiceOperationInterface<InputPostInterface, PostInterface> {
    switch(databaseType) {
      case firebaseServiceTypeEnum.database:
        return new FirebaseDatabase(getDatabase(db));
      case firebaseServiceTypeEnum.firestore:
        return new FirebaseFirestore(getFirestore(db));
      default:
        throw new Error("Invalid database type");
    }
  }
}